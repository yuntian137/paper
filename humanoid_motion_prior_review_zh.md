# 从运动先验到通用人形基础控制器：潜变量、离散 Token 与生成式规划的研究谱系

> 复习目标：不是逐篇重述，而是回答三个问题：这些工作把什么压进了 latent？latent 由谁产生、如何被调用？为什么最近又从 latent policy 走向 token、diffusion / flow 与 foundation controller？

## 0. 先纠正主题名称

最合适的总称不是单独的“隐变量控制”，也不建议把这批工作统称为 **GR00T-0**。更准确的中文名称是：

**基于运动先验与生成式表示的通用人形全身控制**

英文可写为：

**Generalist Humanoid Whole-Body Control with Motion Priors and Generative Representations**

“潜变量”只是其中一种接口。这个谱系实际包含四类对象：

1. **学习式运动奖励**：判断动作是否像人，例如 AMP、WASABI、SMP、ADD。
2. **低层技能接口**：把高维关节动作压成可复用 latent/code，例如 ASE、NCP、PULSE。
3. **统一条件控制器**：把 reward、goal、稀疏关键点或多模态命令映射到同一行为策略，例如 MaskedMimic、BFM、META MOTIVO、BFM-Zero、M3imic。
4. **生成式运动规划器**：在线生成或修正短期参考、状态—动作轨迹或 token，例如 BeyondMimic、GPC、SONIC、Heracles、MotionBricks、PARC。

NVIDIA **Isaac GR00T N1** 是 VLM + diffusion-transformer action head 的通用机器人 VLA，重点是视觉—语言—操作动作块；它与这里的 physics-based humanoid motion-prior 谱系相邻，但不是这些论文的上位名称。若“GR00T-0”是你自己的资料夹名，建议改成 `generalist-humanoid-motion-control`，避免与 NVIDIA 的正式项目混淆。

另一个拼写纠正：是 **META MOTIVO**，不是 “Meta MoViTo”。`PMCP` 是 PHC 的核心训练机制，不是一篇独立论文；`ProtoMotions` 主要是 NVIDIA 的开源训练框架，也不应和一种新 prior 方法等量齐观。

## 1. 一张图记住整条研究流

```text
MoCap / video / synthetic motion
          │
          ├── 直接逐帧跟踪：DeepMimic → PHC/PMCP → large-scale universal tracker
          │                                      └→ SONIC
          │
          ├── 学“像不像”的奖励：AMP → WASABI / ASE → ADD
          │                              └────────→ SMP（冻结 diffusion score 作奖励）
          │
          ├── 压缩成可调用技能：NPMP → ASE → NCP → PULSE
          │                                      ├→ MaskedMimic / BFM / M3imic
          │                                      └→ GPC / SONIC 的离散 token
          │
          ├── 统一任务语义：META MOTIVO / FB-CPR → BFM-Zero
          │                    reward、goal、motion → shared task/behavior latent
          │
          └── 在线生成与闭环修正：BeyondMimic / SONIC / GPC
                                 ├→ Heracles（重写短期 reference）
                                 ├→ MotionBricks（模块化运动生成）
                                 └→ PARC（generator↔tracker 自举扩数）
```

最核心的历史变化可以压成一句话：

> 研究对象从“学一个会跟踪参考动作的 policy”，变成“学一个可复用的运动分布”，再变成“学一个能被多种 prompt 调用、还能在线生成和修正运动的闭环基础控制器”。

## 2. 第一阶段：先解决“自然动作奖励怎么写”

### 2.1 Direct tracking 是基线，不是过时方案

DeepMimic 一类方法给定同步参考帧，手工组合姿态、关节、速度、末端等 tracking rewards。优点是精确、稳定、目标明确；缺点是依赖 phase / reference、奖励权重与单条动作对齐，难以直接支持开放任务。

PHC 的重点并不是 latent，而是 **coverage 与持续运行**。PMCP 逐步增加 primitive：旧 primitive 冻结，新 primitive 专攻失败动作，再单独学习 recovery primitive 并乘性组合。它解决大动作库中的灾难性遗忘与跌倒恢复，为后来的 PULSE 提供了强 teacher。

### 2.2 AMP：把手工 style reward 换成分布判别

[AMP](https://arxiv.org/abs/2104.02180) 用 discriminator 区分参考运动转移与策略运动转移，再把判别分数作为 style reward。它最重要的变化是从“跟踪某一帧”转向“匹配动作分布”：策略可在完成 task reward 的同时保持人类风格。

但 AMP 的 prior 并没有变成一个显式、可搜索的技能空间；discriminator 往往还需随下游策略共同训练，存在 GAN 不稳定、mode collapse、奖励尺度敏感等问题。

### 2.3 WASABI 与 ADD：两个不同方向的修补

[WASABI](https://proceedings.mlr.press/v205/li23b.html) 用 Wasserstein adversarial objective 从粗糙、部分观测示范中学 imitation reward，并完成 Solo 8 真机敏捷技能。它回答的是：**示范不完整、跨形态时，能否仍学到可用 reward？** 它仍属于 adversarial imitation reward，而不是通用 latent foundation model。

[ADD](https://arxiv.org/abs/2505.04961) 则保留 reference-conditioned 精确跟踪，只把人工加权的多项误差换成 adversarial differential discriminator。它回答的是：**逐帧误差很多时，能否学习非线性 reward aggregation？** 因此 ADD 更应该和 DeepMimic 比，而不是被理解为动作生成器。

### 2.4 SMP：生成模型不生成动作，而是充当冻结 reward

[SMP](https://arxiv.org/abs/2512.03028) 先训练 motion diffusion，再冻结 score model，用 SDS / score matching error 给 PPO 提供 naturalness reward。它解决 AMP 的模块复用问题：下游训练不再持续访问原数据或重训 discriminator，还可通过 classifier-free guidance 组合风格。

所以这里要记住一个容易混淆的点：

> AMP、WASABI、ADD、SMP 的共同核心是“奖励/正则从哪里来”，不是“policy 的 latent action 是什么”。

## 3. 第二阶段：把高维动作压成可复用技能接口

### 3.1 ASE：连续 latent skill space

[ASE](https://arxiv.org/abs/2205.01906) 在 AMP 式分布匹配上加入互信息目标，让低层策略 \(\pi(a\mid s,z)\) 的不同球面 latent \(z\) 对应不同自然技能；下游高层策略只需输出 \(z\)，不再直接探索关节动作。

ASE 的真正贡献是形成经典两层结构：

```text
task goal → high-level policy → latent z → frozen low-level skill policy → joint action
```

它的限制也决定了后续方向：latent 容易塌缩或语义纠缠；每个下游任务仍需单独训练 high-level PPO；技能覆盖受 motion dataset 限制。

### 3.2 NCP：从连续 latent 转向离散 code

[NCP](https://arxiv.org/abs/2308.07200) 用 VQ-VAE 式离散瓶颈把动作压到 vector-quantized codes，并学习 categorical prior；再用 curiosity-driven prior shifting 缓解数据分布不平衡、提高下游可探索的技能多样性。

它是后续 FSQ/token 路线的重要过渡：离散 code 更适合计数、采样与序列建模，但会引入 codebook collapse、死码和量化误差。

### 3.3 PULSE：先做强 tracker，再蒸馏 universal latent

[PULSE](https://arxiv.org/abs/2310.04582) 不直接从动作库做无监督技能发现，而是先训练覆盖 AMASS 的 PHC+ teacher，再通过 variational information bottleneck 在线蒸馏出 32 维、受 proprioceptive prior 约束的连续 latent。

相对 ASE，PULSE 的重点是用强 tracking teacher 保证技能覆盖和物理可执行性。相对后来的 foundation controller，它仍只是一个 **共享低层 action space**：每个 velocity、terrain、strike、VR 等下游任务仍要单独训练高层 PPO。

## 4. 第三阶段：不再为每个任务训练一个高层策略

### 4.1 MaskedMimic：把 task interface 统一成部分目标补全

[MaskedMimic](https://arxiv.org/abs/2409.14393) 把全身跟踪、稀疏 VR 点、关键帧、路径、文字和物体目标都表示成 masked future motion。训练时 privileged posterior 看完整未来动作，goal-conditioned prior 只看部分目标，通过 C-VAE 与 DAgger 式在线蒸馏对齐。

它对 PULSE 的关键推进是：**不再额外训练 task-specific high-level PPO**；条件 prior 本身就把不完整 prompt 映射成可执行 latent motion。不过复杂长时任务仍常需人工 FSM，支持哪些 sparse joints 也由训练 mask 决定。

### 4.2 BFM 与 M3imic：统一不同控制模态

[Behavior Foundation Model](https://arxiv.org/abs/2509.13780) 把 velocity、root、关键点、关节角等不同控制模式视作对同一 behavior distribution 的不同约束，通过 binary mask + CVAE 学习统一行为 prior。它强调 behavior composition、latent interpolation / extrapolation，以及冻结底座后用 residual decoder 学新行为。

[M3imic](https://arxiv.org/abs/2606.04829) 则为 robot joints、SMPL-X pose、稀疏 end-effectors 分别建立 encoder，再对齐到共享 64 维命令 latent，由同一个 action decoder 执行。它更像“多模态 reference adapter + shared WBC”，不是语言/视觉意义上的完整 multimodal foundation model。

### 4.3 META MOTIVO / BFM-Zero：latent 表示的不是动作，而是任务

[META MOTIVO](https://arxiv.org/abs/2504.11054) 的 FB-CPR 把 reward function、goal state、reference motion 与 policy 统一到 successor-measure 的 256 维 task/behavior latent。它与 ASE/PULSE 最大的概念差异是：

- ASE/PULSE 的 \(z\) 更像“下一段该执行什么技能”；
- META MOTIVO 的 \(z\) 更像“我正在优化哪个任务/occupancy measure”。

因此 META MOTIVO 能 zero-shot 接受数值 reward、目标姿态或轨迹，而无需每个任务重新训练网络。代价是能力受预训练状态分布、MoCap 覆盖和固定 dynamics 限制。

[BFM-Zero](https://arxiv.org/abs/2511.04131) 不是全新的 FB 理论，而是把 FB-CPR 做成可在 Unitree G1 部署的系统：history-based actor、privileged critic、off-policy 大规模训练、domain randomization、style critic 与 safety critic。它证明这条 task-latent 路线能过 sim-to-real，但“foundation”能力与安全性仍缺少充分外部基线和真机统计。

## 5. 第四阶段：Token 与生成模型进入闭环控制栈

这里最重要的不是“用了 diffusion / Transformer”，而是生成模型被放在控制栈的哪一层。

### 5.1 GPC：生成离散技能 token

[GPC](https://arxiv.org/abs/2606.29148) 先通过物理 tracking RL 学 FSQ 离散技能接口，再训练 state-conditioned autoregressive Transformer 生成 token，最后用 CoLA、SFT 和 RLFT 适配下游任务。

GPC 的逻辑是：

```text
physics-aware tokenizer → token language model → task-conditioned adapter → frozen decoder
```

与 NCP 的 VQ codebook 相比，FSQ 省去可学习码本和 dead-code 维护；与 PULSE 相比，离散 token 更适合 Transformer 序列建模；与 MaskedMimic 相比，下游适配仍可能需要 SFT/RLFT，而不是完全零样本。

### 5.2 SONIC：tracker、universal token 与 kinematic planner 三合一

[SONIC](https://arxiv.org/abs/2511.07820) 把大规模 motion tracking 明确当作 foundation task：用 100M+ frames / 约 700 小时动作数据训练 G1 通用 tracker，并通过 human/robot/hybrid encoders、FSQ 与共享 decoder 构造 universal token space；上层生成式 kinematic planner 再把速度、方向、风格、稀疏遥操作、文本或音乐转成短期参考。

SONIC 的“foundation”不是因为 latent 新，而是因为它把 **数据规模、模型规模、物理 tracker、统一 token、生成 planner 和多接口接入** 做成完整系统。其 VLA 演示更适合看作上层任务模型调用低层 whole-body controller，而不是 SONIC 自身等同于 VLA。

### 5.3 BeyondMimic：生成未来 state-action trajectory

[BeyondMimic](https://arxiv.org/abs/2508.08241) 先训练 motion tracker，再学习 latent state-action diffusion。推理时 task cost 对预测的未来状态施加 classifier guidance，从而组合 waypoint、避障、inpainting 等未见目标。

它与 GPC 的差别是：GPC 主要生成技能 token；BeyondMimic 联合建模未来状态与 latent action，使 test-time cost 能直接“看见”候选未来，但 diffusion 采样带来计算与闭环模型误差问题。

### 5.4 Heracles：生成模型只负责救场和改 reference

[Heracles](https://arxiv.org/abs/2603.27756) 不要求 tracker 在偏离参考后僵硬追赶，而是在原始命令与低层 tracker 之间加入 state-conditioned flow-matching middleware，生成 0.2 秒恢复 reference residual。靠近 reference manifold 时近似 identity，偏离时重写成可恢复轨迹。

这是很值得记住的模块化分工：**生成器负责低频、短时、分布外修正；PPO tracker 负责高频物理执行。** 它往往比让一个大生成模型直接输出每个关节动作更易保证实时性和鲁棒性。

### 5.5 MotionBricks 与 PARC：生成模型开始反过来扩充训练分布

[MotionBricks](https://arxiv.org/abs/2604.24833) 主要是可实时扩展的模块化运动生成器：large latent generative backbone + smart primitives，在动画侧统一导航与交互 authoring，并展示 G1 控制。它需要和 physics tracker 配合看，不能仅凭运动学质量等同于闭环控制质量。

[PARC](https://arxiv.org/abs/2505.04002) 的重点不是一个更好的 latent，而是迭代闭环：小数据训练 generator → 在新地形生成动作 → physics tracker 修正接触与不连续 → 把修正运动回灌数据集。生成器和控制器共同扩展能力边界。

这预示了下一阶段：不再把 motion dataset 当固定真值，而是让生成模型与物理执行器共同进行 **data flywheel / self-improvement**。

## 6. 横向对照：latent 到底表示什么

| 方法 | 中间表示 | 谁产生它 | 下游是否重训 | 生成/先验所在层 | 最该记住的限制 |
|---|---|---|---|---|---|
| AMP / WASABI | 无显式技能 latent | discriminator 给 reward | 每任务训练 policy | reward 层 | 对抗训练不稳，prior 不可直接调用 |
| ASE | 连续球面 skill latent | task high-level PPO | 是 | 低层 action interface | mode collapse、语义纠缠 |
| NCP | VQ 离散 code | categorical prior / high-level policy | 是 | 低层 skill code | codebook 与分布不均衡 |
| PULSE | 连续 CVAE latent | proprioceptive prior + task PPO residual | 是 | 蒸馏后的低层 action space | 不是统一多任务 policy |
| MaskedMimic | 条件 VAE motion latent | masked goal-conditioned prior | 通常否 | partial-goal inpainting | 支持范围由训练 mask / FSM 限定 |
| META MOTIVO | task / occupancy latent | reward、goal、motion encoder | zero-shot | successor representation | 受预训练分布与 dynamics 限制 |
| BFM-Zero | 可提示 behavior latent | numerical prompt / search | zero/few-shot | task representation + actor | 真机证据和安全验证仍有限 |
| GPC | FSQ skill token | autoregressive Transformer | adapter/SFT/RLFT | token planner + physics decoder | 离散组合与适配成本 |
| SONIC | universal motion token | encoder / generative planner | 多接口可直接接入 | tracker 上方的 motion planner | 长时语义规划仍依赖上层 |
| BeyondMimic | latent state-action trajectory | guided diffusion | test-time guidance | trajectory planning | 采样代价与预测误差 |
| Heracles | short-horizon residual reference | flow matching | generator 预训练 | reference correction middleware | 目前场景/平台覆盖有限 |
| SMP | diffusion score，无 action latent | frozen score model | policy 仍训练 | reusable reward | 不是直接可调用控制器 |
| MotionBricks | modular generative motion latent | generative backbone + primitives | 需接 tracker | kinematic motion generation | 运动学质量不等于物理可执行性 |
| PARC | 生成动作数据 | generator↔tracker loop | 迭代训练 | data generation flywheel | 迭代成本、漂移与质量控制 |

## 7. 如何理解“目前主流范式”

截至这批工作，主流不是某一种 latent，而是下面这个分层闭环：

```text
language / vision / joystick / sparse pose / reward / goal
                         │
               task or motion planner
          (Transformer / diffusion / flow / search)
                         │
            short-horizon motion / discrete token
                         │
       large-scale physics-trained universal tracker
                         │
               PD targets / torques at high rate
                         │
                    real humanoid
                         └──── state feedback ────┘
```

可以把它概括成五条共识：

1. **Tracking 重新成为底座。** 早期认为 tracking 太专用，后来发现大规模、强鲁棒 tracker 是最可靠的 physics grounding。
2. **生成与执行分层。** 上层生成可编辑、可组合的短期 motion/token；下层闭环 policy 保证接触、平衡和实时性。
3. **离散 token 正在增多，但连续 latent 没有消失。** token 适合大模型序列建模；连续 latent 适合插值、优化与高频平滑控制。
4. **Prompt 接口比“技能数量”更关键。** 真正的 generalist controller 应能把 reward、goal、稀疏身体目标和多模态输入映射到统一可执行接口。
5. **下一瓶颈从动作自然性转到闭环能力边界。** 包括 OOD 恢复、长时任务、环境接触、物体交互、跨 embodiment、sim-to-real 与可验证安全。

## 8. 建议的复习顺序

如果只用两轮复习，不要按年份逐篇读。

### 第一轮：建立概念骨架

1. **AMP → ASE**：先理解“分布奖励”如何变成“可调用技能空间”。
2. **PHC/PMCP → PULSE → MaskedMimic**：理解 strong tracker、latent distillation、partial-goal conditional prior 三步。
3. **META MOTIVO → BFM-Zero**：理解 skill latent 与 task/occupancy latent 的根本区别。
4. **GPC ↔ SONIC ↔ Heracles**：比较 token generation、foundation tracker、reference correction 三种生成模型位置。

### 第二轮：带问题横向看

- 这篇的 latent/token 表示 **动作、技能、任务，还是未来轨迹**？
- decoder/controller 是否经过 physics RL，还是纯运动学生成器？
- 下游新任务需要 PPO、SFT、RLFT、test-time search，还是完全 zero-shot？
- 生成模型输出 joint action、latent action、motion token，还是 reference trajectory？
- “通用”指数据覆盖、prompt 类型、任务组合、跨平台，还是仅同一机器人上的多动作跟踪？
- 真机结果是闭环定量验证，还是少量定性 demo？

只要每篇都回答这六问，论文名再多也不会混。

## 9. 每篇只记一句

- **AMP**：用判别器学“像人”的 style reward，不再逐帧死跟参考。
- **WASABI**：用 Wasserstein adversarial reward 从粗糙、部分示范学可真机执行的敏捷技能。
- **ASE**：把 AMP 动作分布组织成高层可调用的连续技能 latent。
- **NCP**：用离散 VQ code 和 categorical prior 组织技能，并主动修正采样不均衡。
- **PHC/PMCP**：逐步加 primitive 专攻失败动作，扩覆盖、抗遗忘并加入恢复。
- **PULSE**：把强 PHC+ tracker 蒸馏为通用连续 latent action space，但下游仍要 PPO。
- **MaskedMimic**：把完整跟踪和各种稀疏 prompt 统一成 physics-based masked motion inpainting。
- **BFM**：用 mask + CVAE 将多种 WBC 控制接口统一成 behavior prior。
- **M3imic / MultiModalWBC**：把 robot、SMPL-X、end-effector 三类参考对齐到同一命令 latent。
- **META MOTIVO**：把 reward、goal、motion 编到 task/occupancy latent，实现零样本任务调用。
- **BFM-Zero**：把 FB-CPR 的 task-latent 路线系统性推到真实 G1。
- **ADD**：学习逐帧 tracking errors 的非线性聚合器，不是 motion generator。
- **SMP**：冻结 diffusion score，当作可跨任务复用的自然性 reward。
- **BeyondMimic**：用 guided diffusion 生成未来 state-latent-action，测试时用 cost 组合新任务。
- **GPC**：physics-aware FSQ tokenizer + token Transformer + task adapter。
- **SONIC**：大规模 universal tracker + universal token + real-time kinematic planner。
- **Heracles**：严重偏离时先生成短期恢复 reference，再交给 tracker 执行。
- **MotionBricks**：用模块化 latent generator 与 smart primitives 做大规模实时运动 authoring。
- **PARC**：让 motion generator 和 physics tracker 迭代互相扩充、修正训练数据。
- **ProtoMotions**：把上述多种模仿/先验方法工程化的训练框架，不是一种单独的新 prior。

## 10. 你这批资料中值得补齐的独立条目

仓库已有 AMP、PHC/PMCP、ASE、PULSE、MaskedMimic、BFM、META MOTIVO、BFM-Zero、ADD、SMP、BeyondMimic、GPC、SONIC、Heracles、M3imic 的详细笔记。当前未见独立卡片、但本综述已核对原始来源的有：

- WASABI
- Neural Categorical Priors（NCP）
- MotionBricks
- PARC
- NVIDIA Isaac GR00T N1（应作为相邻 VLA 支线，而非本谱系总名）

后续若补卡片，优先顺序建议是 **NCP → WASABI → PARC → MotionBricks → GR00T N1**；它们分别补上离散技能、部分示范奖励、数据自举、模块化生成和 VLA 邻接线。

