# Paper Reading Notes

这是一个适合部署到 GitHub Pages 的中英文机器人论文阅读笔记站点。项目是纯静态页面，不需要构建步骤；论文渲染与筛选维护在 `app.js`，知识体系与跨论文关系维护在 `knowledge_map.json`。

## 最小执行流程

以下约束适用于维护本项目的 agent。单篇论文卡片、个人笔记和文档更新属于小范围内容维护，执行成本应与改动规模一致。

1. 先读取本节、相关字段约定和目标条目，检查工作区已有改动；使用当前仓库与已有上下文，不重新探索整个工程。
2. 卡片优先修改 `papers_extra.json`；个人理解按需修改 `paper_notes.json`；卡片或笔记更新时同步 `site_meta.json`，日期已经正确则不制造额外差异。仅更新文档时只改相关文档。
3. 沿用现有分类、字段和中英文格式，阅读状态与实际阅读范围一致。复用本次讨论中已核实的内容；仅为缺失信息查源，不为了填卡片重复通读或启动完整研究流程。
4. 检查修改后的 JSON 能否解析，并核对目标条目的 id、字段、链接及本次差异；文档修改只需检查差异和格式。不要为普通内容更新新增测试、安装依赖、构建、启动预览服务器或做浏览器截图验收。只有改动页面逻辑、布局，或出现具体显示问题时，才做相应检查。
5. 用户要求推送时，使用普通 Git 提交并推送本次改动；发布后确认线上更新一次即可。已有明确授权时不要重复询问。只更新文档的请求不自动扩展为提交、推送或网站发布。
6. 提交前确认只包含当前请求涉及的改动。保留他人或其他任务的工作，不顺手修复、重构、格式化全库或提交无关内容；同一文件包含其他改动时，仅提交本次对应的差异。

不要为上述小改动引入 Sites 注册或部署、GitHub Blob/Tree 等底层提交接口、临时克隆、额外分支、多 agent 编排或多轮重复验收。只有出现明确阻塞且替代步骤确有必要时才扩大流程，并简短说明原因；不要因某个工具可用就调用它。完成请求和必要检查后立即停止。

仓库地址：

```txt
https://github.com/yuntian137/paper
```

部署后的默认访问地址：

```txt
https://yuntian137.github.io/paper/
```

## 文件结构

```txt
index.html                页面结构
styles.css                页面样式
app.js                    UI 文案、内置论文、筛选、搜索和详情渲染
knowledge_map.json        知识体系简介、论文归类、跨体系连接和论文关系
example.json              给论文阅读 agent 使用的论文卡片填写模板
papers_extra.json         可选的新增论文 JSON 数据，网站启动时自动读取
paper_notes.json          个人复习笔记，按 id、标题片段或链接匹配论文
site_meta.json            站点元信息，例如最近更新时间
```

网站发布使用 `index.html`、`styles.css`、`app.js`、`assets/backgrounds/`、`knowledge_map.json`、`papers_extra.json`、`paper_notes.json`、`site_meta.json`、`reading_prompts_v4.json` 和外部论文链接。

首页预加载论文数据与知识图谱，两者就绪后显示列表。个人笔记同时下载，等论文合并后匹配并补充到当前视图；更新时间独立加载。Prompt 在打开弹窗时请求，公式库在内容包含公式时加载，均不阻塞论文列表。JSON 遵循服务器的 HTTP 缓存规则，不再每次强制联网核验；GitHub Pages 当前缓存有效期为 10 分钟，刚发布的内容若尚未出现，可强制刷新以更新缓存。

## 知识图谱与论文分类

页面默认使用卡片视图，展示论文简称、官方标题、核心理解与少量关键词。点击卡片可打开完整阅读笔记，关闭后继续浏览原来的位置。顶部支持全文搜索、阅读状态与首发年份筛选，以及按收录顺序、论文年份或标题排序；侧栏的“个人笔记”只显示有个人补充的条目。搜索快捷键为 `Ctrl+K`（macOS 为 `⌘K`）。

背景使用用户选定的 [MotionBGS — Explorer of the Black Hole](https://motionbgs.com/spaceman-black-hole) 循环视频，保存在 `assets/backgrounds/explorer-black-hole.mp4`（3840×2160、26.3 秒）。4K 原素材为 HEVC，已转为浏览器通用的 H.264 格式，并将视频索引前置以便开始播放；配套同名 JPG 为静态封面。视频静音循环，保留原片的宇航员、地貌、云层与黑洞动态，并加深蓝遮罩保护文字对比度。顶部“背景 · 动态 / 静态”按钮可暂停并记住选择；阅读详情、Prompt 弹窗打开或页面进入后台时暂停，系统启用“减少动态效果”时保持静态。卡片与阅读详情保留不透明底色，直接位于背景上的标题改用浅字；视频无法播放时显示静态封面。背景不响应鼠标，打印时隐藏。

阅读状态筛选按已有卡片说明归为“已精读”“部分已读”和“已整理”，详细阅读范围保留在详情中。年份含修订说明的记录按首个年份参与筛选和排序；“最近收录”按数据中的条目顺序展示，不代表论文或笔记的更新时间。

知识图谱包含分类层级、体系之间的连接，以及附有依据说明的论文关系。网站默认打开全库总览，以研究问题组织 **6 个主体系、22 个子体系**。同一论文可以跨体系归类；父体系汇总子体系并按论文 ID 去重。归类不改变阅读状态，也不代表用户已掌握该专题。

| 主体系 | 子体系 |
|---|---|
| `k1` 行为目标与运动能力 | `k1-tracking` 跟踪与蒸馏、`k1-style` 风格奖励、`k1-skills` 技能空间、`k1-goals` 目标接口、`k1-reward` 奖励条件化、`k1-action` 动作参数化 |
| `k2` 几何、接触与物理可行性 | `k2-retarget` 重定向、`k2-contact` 交互与接触、`k2-constraints` 约束与柔顺 |
| `k3` 观测、历史与状态推断 | `k3-estimation` 状态与历史、`k3-perception` 感知反馈、`k3-distillation` 特权信息与蒸馏 |
| `k4` 动力学差异与真实部署 | `k4-identification` 辨识与校准、`k4-robustness` 鲁棒性与形态、`k4-adaptation` 适应与残差 |
| `k5` 世界模型与决策计算 | `k5-fidelity` 准确性标准、`k5-decision` 决策计算、`k5-horizon` 长时域结构、`k5-time` 时间与模式 |
| `k6` 经验、语义与任务泛化 | `k6-data` 数据覆盖、`k6-learning` 示范与微调、`k6-semantics` 语义与动作模型 |

`support-numerics`（数值求解）和 `support-inference`（推理效率）保留为旁支。NPC 根据已有的点云配准与多视图三角化实验，同时归入感知分支；NPO 接入机器人轨迹优化、LessIsMore 接入动作模型仍属待验证迁移，具体应用边界保存在笔记中。未映射的新条目进入“待归类”，不会从全库消失。Intensity-Free TPP 在时间与事件子体系中作为概率建模的连接阅读，机器人控制用途仍属迁移设想。

每个分类提供问题简介、阅读抓手与代表论文入口；主体系页展开子体系，总览和体系页可展开带说明的跨体系连接。卡片显示所属子体系和一个相关论文入口。详情提供可返回的跨论文跳转，并区分：

- `relations`：人工整理的组件使用、方法扩展、替代路线、机制对照、互补问题、结构类比或前置概念。每条有稳定论文 ID、双语理由和依据说明；`source → target` 只在组件/扩展等关系中表达依赖方向，类比与对照不代表历史继承。
- “同专题继续读”：根据共同子体系推荐，并明确标注不代表方法继承或可直接组合。

运动控制、操作、Sim2Real、真机 RL、遥操作、VLA / WM、数据集等保留为横向筛选，与体系、阅读状态、年份和搜索共同生效。代表论文入口始终展示完整专题入口，不受论文列表筛选影响。侧栏分类计数是整个库的数量，不随筛选改变。

### 分类与关系字段

`knowledge_map.json` 集中维护：

- `categories`：`id`、双语 `label` / `description` / `focus`、代表论文 `entries`。主体系用 `code: "K1"` 至 `"K6"`，子体系用 `parent`。
- `assignments`：已有论文 ID 到子体系 ID 数组的明确映射，是已有条目分类的来源。保留原卡片内容，不批量重写历史分类。
- `connections`：主体系之间的 `source`、`target` 与双语 `reason`。
- `relations`：论文之间的 `source`、`target`、`type`、双语 `reason` / `basis`。依据现有材料做综合时须如此标明；只有原文支持才写方法继承或直接组件使用。详细原文定位继续保存在论文实现方法与笔记中。
- `contexts`：横向标签及双语名称。

**新增论文**直接在卡片的 `categories` 填一个或多个新子体系 ID，`contexts` 填横向标签；没有 `assignments` 的新卡片会直接采用这些分类。**调整已有论文归类**修改 `assignments[paper.id]`；其优先级高于卡片 `categories`。历史卡片中的任务标签仍兼容为横向筛选，旧 `bfm-*` 标签不再驱动主导航。不要把新旧分类两边同步维护成两份来源。

```json
{
  "id": "paper-id",
  "categories": ["k3-estimation", "k4-adaptation"],
  "contexts": ["locomotion", "sim2real"]
}
```

新增子体系时同步 `knowledge_map.json` 与 `example.json` 的 `available_categories`；横向标签同步 `available_contexts`。检查分类/论文 ID 无重复、所有 parent/entry/关系端点均有效，已有论文全覆盖、归类不重复。分类变更时更新 `site_meta.json`。加载失败会保留论文浏览并显示提示。

`tags` 继续用于方法、硬件、任务等关键词，并参与搜索；`aliases` 保存 UMR、ScaleBFM 等简称，同一论文只保留一个正式标题条目。

## 使用精读 Prompt

页面右上角的“精读 Prompt v4”提供四个独立的静态复制卡片（2026-11-08 更新问题、机制与证据的阅读主线）：

1. “完整精读报告 Prompt”用于首次阅读。把它与论文 PDF 一起交给 ChatGPT、Codex 或其他具备文件阅读能力的模型后，模型会生成包含 Markdown 报告和 `assets/` 图片目录的完整报告目录，并额外打包为 ZIP。
2. “导师式精读 Prompt”用于报告完成后的逐点问答、核查与纠错，推荐粘贴回生成报告的同一论文会话。

3. “随读答疑 Prompt”用于自行阅读 PDF 时开启独立答疑会话，无需先生成报告。

4. “容容姐随读答疑 Prompt”提供独立的涂山容容角色版本，称读者为“小先生”，以精准、从容且适度轻讽的语气答疑。

网站只保存、展示和复制 Prompt，不上传或解析论文，也不调用模型。四段正文保存在 `reading_prompts_v4.json`；中英文站点会切换卡片标题、说明和按钮文案，但复制的 Prompt 正文与 JSON 源文一致。完整报告中的图片统一使用 `assets/...` 相对路径，因此解压后可以直接显示。

首次理解论文后，苏苏与容容用三五句话说明研究问题、方法路线、核心做法，以及与熟悉工作的联系和差别，再进入答疑。结合可访问的论文库、笔记和上下文，分类由论文内容灵活决定，可交叉或新增；不预设方向清单、指定比较论文或固定输出栏目。初判随阅读修正，后续不重复定位，有具体问题时先回答。

四套 Prompt 共用表达要求：去掉无意义的假口语化、比喻和总结，避免“不是……而是……”句式，按中文习惯用清楚的主谓宾结构直接表达，删除重复内容和防御性表述。

报告围绕“问题 → 机制假说 → 方法 → 理论与实验证据 → 结论及边界”组织，完整分析问题的重要性、强基线缺口、实际改动、收益归因、理论假设及结论强度、实验对替代解释的排除程度，以及复现和使用成本。区分性能证据与机制证据，判断理论与实验是动机联系、趋势对应还是直接检验。正文参考 3000–5000 中文字并随论文调整，保留关键公式与推导；不适用的内容不硬凑，也不把所有论文按同一套模块评价。

导师、苏苏与容容首次回应时，给出能帮助回想具体阅读动作的七项提纲：问题与已有缺口、方法与新意、机制与归因、理论、实验、理论与实验的连接、边界成本与研究用途；随后继续原有定位或答疑。有具体问题时先回答，再补提醒，后续不重复整套提纲。三者共享简短的答疑原则，按当前问题调用相关环节，不逐轮输出完整框架。角色设定、首次简短分类和表达要求保留；必要条件与证据缺口在影响判断处说明一次。只有要求总结时才整理读后笔记，避免框架变成重复输出的清单。

默认只截取方法 pipeline、核心模块、训练/部署关系和关键实验等高信息密度图片，不截大段正文或装饰性图片，也不会生成或重绘论文中不存在的内容。若用户另行指定报告路径或图片要求，以用户指令为准。

## 添加一篇论文

推荐优先维护 `papers_extra.json`，网站启动时会自动读取其中的 `papers` 数组。网页本身只负责展示，不在浏览器里编辑或保存新增论文。

如果使用另一个 AI agent 阅读和总结论文，推荐把 `example.json` 与论文 PDF、arXiv 页面或项目主页一起交给它。agent 的最终回复应当只包含 `{"papers":[{...}]}` 形式的合法 JSON，不包含 Markdown 代码围栏、解释文字或以下划线开头的模板说明字段；生成结果可以直接追加到 `papers_extra.json`。

每次向 `papers_extra.json` 追加或更新论文后，需要同时更新 `site_meta.json` 中的 `lastUpdated.iso`、`lastUpdated.zh` 和 `lastUpdated.en`，否则网页上的“最近更新”日期不会变化。

长期维护有两种方式：

1. 少量稳定内置论文：在 `app.js` 的 `papers` 数组里新增一个对象。
2. 后续批量新增论文：在 `papers_extra.json` 的 `papers` 数组里追加对象。

字段约定：

1. `id` 必须稳定，建议用英文 slug；同 id 会覆盖已有论文。
2. JSON 对象字段和 `app.js` 里的 `papers` 对象保持一致。
3. `arxiv`、`project` 和 `pdf` 可以留空；非空时只能填写以 `https://` 开头的纯 URL，禁止使用 `[文字](URL)` 形式的 Markdown 链接。
4. `pdf` 可以留空或写外部 PDF 链接；不要写本地 PDF 路径。
5. `categories` 使用上面的新子体系 id；`contexts` 使用横向标签 id。已有条目的归类以 `knowledge_map.json` 的 `assignments` 为准。
6. 建议同时补充 `zh` 和 `en` 两套内容，保证中英文切换稳定。
7. `zh.title` 和 `en.title` 必须完全一致，均使用论文官方英文标题；中文正文可以保留 PPO、RL、VLA、Sim-to-Real 等必要英文缩写和专业术语。
8. `takeaway` 用一句话直接解释核心机制，方便复习。`mainContent` 按“问题 → 方法 → 结果”写 2–4 句；只保留影响理解的必要条件，避免反复写“论文没有证明”“不能保证”等保护措辞。
9. `institutions` 填论文首页、PDF 首页或官方页面明确列出的作者机构；查不到或不确定时留空，不要猜测。
10. `example.json` 里所有以下划线开头的字段都只是给 agent 的说明，最终生成的论文对象不得包含这些字段。
11. LaTeX 必须按使用场景显式定界：论文卡片 JSON 字符串使用 `\\(...\\)` 表示行内公式、`\\[...\\]` 表示独立公式；“精读 Prompt”实际写入 Markdown 报告文件的公式使用 `$...$` 和 `$$...$$`；所有聊天回复中的公式统一使用 `\(...\)` 和 `\[...\]`，反斜杠不可省略，禁止用普通 `(...)`、`[...]` 或美元符号充当聊天公式定界符，也不要把公式放入代码块。普通文字不要放进数学模式。

```json
{
  "papers": [
    {
      "id": "paper-id",
      "categories": ["k3-estimation", "k4-adaptation"],
      "contexts": ["manipulation", "sim2real"],
      "pdf": "https://arxiv.org/pdf/xxxx.xxxxx",
      "project": "https://example.com",
      "arxiv": "https://arxiv.org/abs/xxxx.xxxxx",
      "year": "2026",
      "venue": "arXiv",
      "zh": {
        "title": "Official English paper title",
        "authors": "作者",
        "institutions": "机构 1；机构 2",
        "status": "摘要已整理",
        "takeaway": "一句话写清楚：这篇论文对我来说最该记住什么。",
        "tags": ["Dexterous Hand", "PPO", "Sim-to-Real"],
        "mainContent": "根据摘要概括：研究问题、核心方法和主要结论。",
        "innovations": ["摘要中明确提到的创新点；不确定时写待阅读全文补充"],
        "implementation": ["摘要中明确提到的实现信息；不确定时写待阅读全文补充"]
      },
      "en": {
        "title": "Paper title",
        "authors": "Authors",
        "institutions": "Institution 1; Institution 2",
        "status": "Abstract summarized",
        "takeaway": "One sentence on how I should remember this paper.",
        "tags": ["Dexterous Hand", "PPO", "Sim-to-Real"],
        "mainContent": "Summarize the problem, core method, and main claim from the abstract.",
        "innovations": ["Innovation explicitly stated in the abstract; otherwise mark as pending full reading"],
        "implementation": ["Implementation detail explicitly stated in the abstract; otherwise mark as pending full reading"]
      }
    }
  ]
}
```

## 网站笔记的写法

一句话理解说明方法怎样工作，简介建立流程，创新点说明新增机制，实现方法保留数据、网络、训练与部署中的关键信息。直接陈述已核实的内容；明确区分参考轨迹、任务向量和控制动作。必要时用一句话说明实验环境、定理前提或具体的论文—代码分歧，避免堆叠未报告清单。

BFM 等已精读论文可以依据正文与附录整理。只读摘要的条目继续标明阅读范围。

`mainContent` 默认只需要基于论文摘要整理，避免为了补页面内容而完整通读全文。推荐写 2-4 句，覆盖：

```txt
论文解决什么问题
使用什么核心方法
实验或结果声称解决了什么
```

摘要级条目的 `innovations` 和 `implementation` 只记录摘要里能确认的信息。资料缺失时留空相应字段，后续精读再补充。

## 个人复习笔记

如果只是临时想到一句“这篇论文该怎么理解”，优先改 `paper_notes.json`，不需要复制完整论文对象。

key 可以写：

```txt
论文 id
论文标题片段
论文链接
```

value 可以直接写字符串，网站会当作 `takeaway` 显示在卡片和详情页：

```json
{
  "NeuralSim": "一个 NN 放入仿真器的工作，混合数学分析模型和对难以建模部分的 NN。"
}
```

如果想写长一点，可以用对象，`takeaway` 会显示在卡片和详情页，`note` 只显示在详情页：

```json
{
  "Dynamics Randomization Revisited": {
    "takeaway": "核心问题是 dynamics randomization 到底有没有用。",
    "note": "复习时重点看它的 case study 条件，不要把结论泛化到所有 sim2real。"
  }
}
```

## 本地预览

这个站点没有构建流程。知识体系、扩展论文和笔记通过 fetch 加载，本地预览请在仓库根目录启动静态服务器：

```sh
python3 -m http.server 8000
```

然后访问：

```txt
http://localhost:8000/
```

## GitHub Pages 设置

进入仓库：

```txt
Settings -> Pages
```

选择：

```txt
Build and deployment: Deploy from a branch
Branch: main
Folder: /root
```

保存后等待一两分钟，页面会发布到：

```txt
https://yuntian137.github.io/paper/
```
