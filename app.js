const uiText = {
  zh: {
    siteLabel: "Paper Reading Notes",
    siteTitle: "论文阅读笔记",
    lastUpdated: "最近更新",
    detailNavSummary: "简介",
    detailNavInnovations: "创新点",
    detailNavImplementation: "实现方法",
    detailNavLinks: "链接",
    searchLabel: "搜索论文",
    searchPlaceholder: "标题、作者、关键词",
    papers: "篇论文",
    topics: "个方向",
    libraryLabel: "Library",
    allPapers: "全部论文",
    showing: "显示",
    of: "共",
    items: "篇",
    noResults: "没有找到匹配的论文。",
    venue: "来源",
    year: "年份",
    status: "状态",
    takeaway: "一句话理解",
    personalNote: "个人笔记",
    mainContent: "简介",
    keywords: "关键词",
    innovations: "创新点",
    implementation: "实现方法",
    paperLink: "论文链接",
    project: "项目主页",
    arxiv: "arXiv",
    promptButton: "精读 Prompt",
    promptModalTitle: "论文精读 Prompt",
    promptModalDescription: "选择要复制的版本，直接粘贴给读论文的 agent。",
    copyZhPrompt: "复制中文 Prompt",
    copyEnPrompt: "Copy English Prompt",
    promptCopied: "已复制",
    hideSidebar: "隐藏分类栏",
    showSidebar: "显示分类栏",
    hideDetail: "隐藏概览",
    showDetail: "显示概览",
    resizeSidebar: "调整分类栏宽度",
    resizeDetail: "调整概览宽度",
  },
  en: {
    siteLabel: "Paper Reading Notes",
    siteTitle: "Paper Reading Notes",
    lastUpdated: "Updated",
    detailNavSummary: "Summary",
    detailNavInnovations: "Innovations",
    detailNavImplementation: "Implementation",
    detailNavLinks: "Links",
    searchLabel: "Search papers",
    searchPlaceholder: "Title, author, keyword",
    papers: "papers",
    topics: "topics",
    libraryLabel: "Library",
    allPapers: "All Papers",
    showing: "Showing",
    of: "of",
    items: "items",
    noResults: "No matching papers found.",
    venue: "Venue",
    year: "Year",
    status: "Status",
    takeaway: "Takeaway",
    personalNote: "Personal Note",
    mainContent: "Summary",
    keywords: "Keywords",
    innovations: "Innovations",
    implementation: "Implementation",
    paperLink: "Paper Link",
    project: "Project",
    arxiv: "arXiv",
    promptButton: "Reading Prompt",
    promptModalTitle: "Paper Reading Prompt",
    promptModalDescription: "Choose a version to copy, then paste it into the paper-reading agent.",
    copyZhPrompt: "复制中文 Prompt",
    copyEnPrompt: "Copy English Prompt",
    promptCopied: "Copied",
    hideSidebar: "Hide categories",
    showSidebar: "Show categories",
    hideDetail: "Hide overview",
    showDetail: "Show overview",
    resizeSidebar: "Resize categories",
    resizeDetail: "Resize overview",
  },
};

const siteMetaPath = "site_meta.json";
const siteMeta = {
  lastUpdated: {
    iso: "2026-08-01",
    zh: "2026-08-01",
    en: "Aug 1, 2026",
  },
};

const readingPrompts = {
  zh: `你是 Codex，同时是一位资深的智能控制、机器人学习与运动规划专家，并具有顶级期刊审稿经验。请阅读我在当前任务中提供的论文（包括工作区文件、附件或链接），使用可用工具完成核查，并在当前工作区生成一份面向控制、机器人和强化学习方向研究生的中文精读报告。

这份报告的目标不是逐章复述论文，也不是机械填写问题清单，而是帮助读者建立一个完整、可复述的 mental model：

* 论文到底要解决什么问题；
* 整套方法从输入到输出如何运行；
* 每个模块为什么存在、解决了上一步留下的什么问题；
* 哪些部分需要训练，哪些属于逐实例优化或数据预处理；
* 真正部署时保留哪些模块；
* 核心创新、辅助技巧和已有组件分别是什么；
* 实验究竟证明了什么，又没有证明什么。

## 一、资料与证据要求

1. 分析必须优先基于论文正文、附录和补充材料。
2. 如果使用作者主页、官方项目页或官方代码仓库补充信息，必须明确标注为“外部官方资料”，不得与论文正文混写。
3. 不要编造论文没有给出的实现细节、超参数、训练方式或结论。
4. 对论文未说明的内容，先明确写“论文未说明”，再根据公式、伪代码或常见实现给出合理推测，并标注“推测”。
5. 论文明确内容可以正常叙述；只有以下情况需要特别标记：

   * **[推导]**：由论文公式或算法进一步推导出的结论；
   * **[推测]**：论文没有确认的合理实现猜测；
   * **[外部资料]**：来自官方代码、项目页或其他论文外来源。
6. 如果论文内部存在符号、单位、公式、图表或文字不一致，保持原文含义并单独指出，不要擅自替作者修正。

## 二、最重要的叙事原则：从 Takeaway 开始

报告开头必须先写一段约 300–500 字的“核心 Takeaway”。它不是摘要翻译，而是整篇报告的理解骨架，必须连贯回答：

1. 论文的输入、输出和最终目标是什么；
2. 完整 pipeline 如何从原始输入走到最终结果；
3. 各个核心模块分别承担什么角色；
4. 真正的创新发生在哪一个环节；
5. 离线数据处理、逐实例求解、模型训练、在线推理和真机部署之间是什么关系；
6. 这篇方法“不是什么”，避免把它误解成更通用或更强的问题；
7. 最重要的实验结论和一个关键局限是什么。

Takeaway 中首次出现任何缩写时，必须写出完整名称，例如：

> 中文名称（English Full Name，ABBR）

如果没有公认中文译名，则使用：

> English Full Name（ABBR）

不得在读者还不理解方法时，先堆砌一整页术语表。

后续正文必须严格沿着 Takeaway 中出现概念的顺序逐层展开。不要重新组织出另一套主线，也不要在多个章节反复完整复述同一条 pipeline。

## 三、正文组织方式

请根据论文实际方法动态设置小节，不要为了套模板而生成不适用的空章节。建议按照以下认知顺序展开。

### 1. 论文究竟在解决什么问题

先用具体场景说明：

* 原始输入是什么；
* 期望输出是什么；
* 中间最困难的瓶颈是什么；
* 如果直接使用现有方法，会在哪一步失败；
* 这种失败是表示能力、优化、动力学、数据、控制、泛化还是部署问题。

介绍前人方法时，只解释理解本文所必需的部分。先说明前人方法原本怎样工作，再指出本文具体修改了哪一步。不要写成泛泛的 related work 罗列。

### 2. 沿完整闭环逐步拆解方法

沿数据流或控制流，从输入端一直讲到最终输出。每个模块都应自然回答：

* 上一步留下了什么问题；
* 本模块接收什么输入；
* 内部执行什么操作；
* 输出什么；
* 输出交给下一个模块做什么；
* 为什么这种设计可能有效；
* 是否存在值得注意的小巧思或隐含假设。

不要机械地把每个模块写成十几个字段的“模块卡片”。优先使用连续讲解；只有输入输出映射、训练/部署对比等确实适合比较的内容才使用表格。

完整 pipeline 最多集中展示两次：

1. 开头的 Takeaway；
2. 正文中的一张紧凑流程图、箭头链或输入输出表。

其他章节直接引用相关阶段，不要重复抄写全流程。

### 3. 把核心算法讲成“实际如何运行”

对于最关键的算法，不要只解释概念或罗列公式。应按照一次真实执行过程说明：

1. 初始输入和初始化来自哪里；
2. 一轮迭代、采样、rollout 或前向计算如何进行；
3. 如何计算目标、损失、奖励或代价；
4. 哪些变量会被更新；
5. 更新规则是什么；
6. 何时停止或进入下一阶段；
7. 最终产物是什么；
8. 这个产物之后如何被使用。

必须区分：

* 数据或参考目标；
* 被直接优化的决策变量；
* 通过梯度学习的模型参数；
* 优化器的临时状态；
* 环境或仿真器产生的状态；
* 部署阶段真正运行的模型和控制器。

尤其不要把“存在一个目标函数”误写成“目标函数直接映射得到模型参数”。应明确梯度更新、采样更新、动态规划、轨迹优化或其他求解过程。

### 4. 公式应服务于理解，而不是独立堆放

每个关键公式按照以下顺序讲解：

1. 先用直觉说明公式要解决什么问题；
2. 再给出公式；
3. 紧接着定义全部变量；
4. 明确哪些量固定、哪些量被优化或学习；
5. 说明它在算法的哪一步被计算；
6. 说明它如何影响后续结果。

如果公式来自已有方法，应注明；如果是本文新增或修改的，应说明修改在哪里。

只保留理解核心机制所必需的公式。次要公式、完整超参数和符号表放入技术附录。

公式排版要求：

* 写入 Markdown 报告文件的行内公式统一使用 $...$；
* 写入 Markdown 报告文件的独立公式统一使用 $$...$$，开始和结束的双美元符号各自独占一行；
* 报告文件中不要使用 \\(...\\) 或 \\[...\\] 作为公式定界符；
* 不要把公式放入代码块；
* 向量和矩阵使用粗体，如 $\\mathbf{x}$、$\\mathbf{R}$；
* 保持公式分隔符、正负号、上下标、量纲和单位正确；
* 如果改写了论文符号以保持统一，必须明确说明。

### 5. 严格区分训练、求解和部署

如果论文包含多个阶段，分别说明：

* 数据准备或预处理；
* 离线逐样本/逐轨迹优化；
* 模型预训练；
* 强化学习或监督学习训练；
* 蒸馏、微调或后训练；
* 仿真评估；
* 真机在线推理与控制。

对每个阶段给出：

* 输入；
* 输出；
* 哪些参数被更新；
* 哪些模块冻结；
* 数据从哪里来；
* 是否需要仿真器、专家、参考轨迹、未来信息或真实标签。

最后使用一张简洁表格对比“训练时存在”和“部署时存在”的模块，特别说明哪些信息仅训练可用、哪些是部署必需。

如果某个算法需要针对每个新样本重新运行，必须明确指出它是“逐实例求解器”，不能将其描述成训练后可直接泛化的模型。

### 6. 区分核心创新、辅助技巧和已有组件

不要把所有设计都并列称为贡献。请分成以下层次：

* **核心创新**：没有它，论文的主要方法就不成立；
* **关键辅助设计**：增强稳定性、效率、可扩展性或效果；
* **实现小巧思**：初始化、缓存、调度、归一化、坐标表达、采样策略等容易被忽视但很实用的设计；
* **继承组件**：直接来自已有工作的模型、优化器、控制器或训练范式；
* **工程组合**：本身未必是新算法，但组合方式对完整系统有价值。

对于每一点都解释“它为什么重要”，不要只复述作者的贡献列表。

## 四、按论文类型补充必要信息

只在适用时补充，不要输出无关的空栏目。

### 如果是强化学习或控制策略论文

说明：

* observation、command、action 分别是什么；
* actor 和 critic 各自接收什么；
* reward 的主要组成和作用；
* rollout、优势估计和参数更新流程；
* 控制频率、参考窗口及低层执行方式；
* 训练时特权信息与部署观测的差异；
* policy 输出是力矩、位置目标、残差还是潜变量。

### 如果是生成模型论文

说明：

* 数据表示是什么；
* 条件信息如何注入；
* 加噪、插值或前向过程是什么；
* 网络预测的目标是什么；
* 训练损失是什么；
* 推理时如何采样或积分；
* 生成结果如何进入后续控制器；
* 生成模型是在线运行、离线生成，还是仅用于训练。

### 如果是轨迹优化或采样优化论文

说明：

* 决策变量是什么；
* 初始解如何获得；
* 目标函数和约束是什么；
* 每轮如何采样、rollout、筛选和更新；
* 优化器状态是否可跨任务复用；
* 停止条件是什么；
* 新任务是否需要重新求解；
* 输出的是控制序列、状态轨迹、接触序列还是参考动作。

### 如果是分层规划或生成—跟踪结构

必须明确：

* 高层和低层分别做什么；
* 两者输入输出如何连接；
* 各自运行频率；
* 高层输出是命令、关键帧、参考轨迹还是潜变量；
* 低层是跟踪策略、优化器还是传统控制器；
* 发生扰动后由哪一层闭环修正。

## 五、实验与证据分析

实验部分不要按照论文表格顺序逐项复述，而要围绕论文的核心主张组织。

对每个主要主张回答：

* 哪个实验用于支持它；
* 对比基线是否合适；
* 数据量、训练预算、模型规模、奖励和控制条件是否公平；
* 指标实际衡量什么；
* 改进幅度是否稳定且有实际意义；
* 消融实验能否隔离关键组件；
* 结果是仿真、真机、定量还是定性；
* 是否验证了泛化、鲁棒性、效率和部署能力；
* 还有哪些结论只是作者声称，但实验没有充分证明。

重点指出：

* 最有说服力的一项证据；
* 最关键的一项消融；
* 最薄弱或缺失的一项验证；
* 论文结论是否超出了实验支持范围。

## 六、局限性与复现判断

从以下角度分析，但只写与论文相关的内容：

* 方法假设；
* 数据依赖；
* 计算成本；
* 优化稳定性；
* 泛化范围；
* sim-to-real 风险；
* 对未来信息、人工参考或特权状态的依赖；
* 失败案例；
* 代码、模型和数据是否公开；
* 论文是否给出了足够的网络结构、超参数、频率和训练细节。

将“作者明确承认的局限”和“根据方法及实验判断出的局限”分开写。

## 七、技术附录

为了保证正文流畅，下列内容统一放在最后：

* 缩写与术语表；
* 主要符号表；
* 次要公式；
* 完整超参数；
* 伪代码歧义；
* 论文内部不一致；
* 复现所缺失的信息；
* 外部官方资料补充。

不要让这些核查内容打断正文的理解主线。

## 八、写作与排版要求

1. 使用中文讲解，关键术语保留英文。
2. 首次出现的缩写必须展开全称，之后再使用缩写。
3. 面向已经具备机器人、控制和强化学习基础，但尚不了解该论文的研究生。
4. 不要过度解释 PPO、PD、FK 等基础概念；但论文特有概念和容易混淆的边界必须讲透。
5. 每一节先说明“为什么需要这一部分”，再讲“具体怎么做”。
6. 优先使用自然段；步骤、阶段和严格对比再使用列表或表格。
7. 不要按论文原章节顺序机械复述。
8. 不要重复完整 pipeline、贡献和结论。
9. 不要在开头放大段术语表、公式表或审稿清单。
10. 正文优先保证连贯理解；完整性检查放入附录。
11. 将最终报告写入实际的 Markdown 文件，而不是只在对话中粘贴全文。
12. 篇幅由论文复杂度决定，不为追求长度填充重复内容。

### 图片截取与文档交付（Codex）

* 如果用户指定了输出位置或文件名，优先遵循；否则创建 <paper-slug>-reading-report/ 目录，在其中保存 <paper-slug>-reading-report.md，并创建 assets/ 子目录存放图片。
* 阅读 PDF 正文和附录时，主动寻找真正帮助理解的原论文图片。优先级依次是：完整方法或系统 pipeline、核心模块或算法结构、训练与部署关系、最关键的实验结果或消融、能说明任务和硬件设置的图片。
* 通常选取 2–5 张信息密度最高的图片，但以解释价值为准，不为凑数量插图；没有合适图片时可以不插入。
* 使用可用的 PDF 页面截图、渲染或裁剪工具把图片保存为本地 PNG。紧密裁掉页边距和无关正文，但必须保留理解图片所需的坐标轴、图例、子图编号、标注和单位；不得修改实验数值、曲线或原图含义。
* 报告中的图片路径统一相对于 Markdown 文件写成 assets/<filename>.png，例如：![方法总览](assets/fig-03-pipeline.png)。不要使用绝对路径、file:// URI 或依赖网络的外部图片链接；文件名使用稳定、简短、可读的英文且不含空格。
* 图片放在正文第一次深入解释它的位置附近。每张图片后写一条简短图注，说明“读者应看什么”，并标注准确来源，例如“截自论文 Figure 3，第 6 页”；若来自项目主页或其他外部官方资料，明确标记为“外部官方资料”。
* 不要用图片代替分析，不要截取大段纯文字或只起装饰作用的照片，也不要伪造、重绘或使用与论文无关的生成图片。无法访问、清晰截取或确认来源时，说明限制并跳过，不要留下占位图。
* 报告和图片写完后，保留原始报告目录，并额外创建同级的 <paper-slug>-reading-report.zip。ZIP 必须包含完整的 <paper-slug>-reading-report/ 目录、Markdown 文件和 assets/ 子目录，使用户解压后无需修改路径即可看到图片；即使没有选取图片，也仍然生成 ZIP 以保持交付方式一致。
* 最终回复先提供 ZIP 的可点击链接，再提供 Markdown 报告的可点击链接，并简要说明共保存了多少张论文截图；不要再次粘贴整篇报告。

### 聊天回复中的公式格式

* 本节适用于所有聊天回复，包括生成报告之前、生成过程中、报告交付时和后续问答；不要沿用报告文件的美元符号格式。
* 聊天回复中的行内公式必须使用 \\(...\\)，独立公式必须使用 \\[...\\]，且独立公式的开始和结束定界符各自独占一行。
* 聊天回复中禁止使用单美元符号或双美元符号作为公式定界符。只有实际写入 Markdown 报告文件的公式使用 $...$ 和 $$...$$。

最终报告应当像一位真正理解论文的研究者在带领读者沿系统闭环逐层放大，而不是把论文重新整理成一份更长、更碎的论文。`,
  en: `You are Codex and a senior expert in intelligent control, robot learning, and motion planning with experience reviewing for top-tier journals. Read the paper supplied in the current task, whether as a workspace file, attachment, or link; use the available tools to verify it; and generate an English close-reading report in the current workspace for graduate students in control, robotics, and reinforcement learning.

The goal is not to paraphrase the paper section by section or mechanically fill out a checklist. Help the reader build a complete mental model that they can explain in their own words:

* What problem the paper is actually trying to solve;
* How the complete method runs from input to output;
* Why each module exists and which problem left by the preceding stage it addresses;
* Which parts require training and which are per-instance optimization or data preprocessing;
* Which modules remain during real deployment;
* Which elements are core innovations, supporting techniques, or inherited components;
* What the experiments do and do not demonstrate.

## I. Sources and Evidence

1. Base the analysis primarily on the main paper, appendices, and supplementary material.
2. If the authors' website, official project page, or official code repository supplies additional information, label it explicitly as **[External official source]** and do not blend it into claims from the paper.
3. Do not invent implementation details, hyperparameters, training procedures, or conclusions that the paper does not provide.
4. For anything unspecified, first write "Not specified in the paper," then provide a reasonable inference from equations, pseudocode, or common implementations only when useful, labeled **[Speculation]**.
5. Explicitly reported material may be stated normally. Use special labels only for:

   * **[Derivation]**: a conclusion derived beyond what the paper explicitly states from its equations or algorithm;
   * **[Speculation]**: a plausible implementation guess not confirmed by the paper;
   * **[External source]**: information from official code, a project page, or another source outside the paper.
6. If the paper contains inconsistent symbols, units, equations, figures, tables, or prose, preserve the intended original meaning and discuss the inconsistency separately rather than silently correcting it.

## II. Most Important Narrative Principle: Start with the Takeaway

Open the report with a 300–500 word **Core Takeaway**. This is not a translated abstract; it is the conceptual backbone of the report and must coherently answer:

1. What are the input, output, and final objective?
2. How does the full pipeline transform raw input into the final result?
3. What role does each core module play?
4. At which stage does the genuine innovation occur?
5. How do offline data processing, per-instance solving, model training, online inference, and real-robot deployment relate?
6. What is this method *not*, so that it is not mistaken for a more general or more capable solution?
7. What is the most important experimental conclusion, and what is one critical limitation?

At the first occurrence of every abbreviation in the Takeaway, write out its full name before using the abbreviation.

Do not place a full-page terminology table before the reader understands the method.

The body must unfold concepts in the same order in which they appear in the Takeaway. Do not introduce a second narrative spine or repeatedly restate the complete pipeline in multiple sections.

## III. Organizing the Main Discussion

Choose subsections dynamically according to the actual method. Do not create empty sections merely to satisfy a template. Prefer the following cognitive order.

### 1. What Problem Is the Paper Actually Solving?

Begin with a concrete scenario and explain:

* The raw input;
* The desired output;
* The most difficult intermediate bottleneck;
* The stage at which a direct application of existing methods would fail;
* Whether the failure concerns representation, optimization, dynamics, data, control, generalization, or deployment.

When discussing prior work, explain only what is needed to understand this paper. First show how the prior method works, then identify the precise step changed here. Do not turn this section into a generic related-work list.

### 2. Walk Through the Complete Closed Loop

Follow the data flow or control flow from input to final output. For every module, explain naturally:

* What problem remains from the preceding stage;
* What input this module receives;
* What operation it performs internally;
* What it outputs;
* How the next module uses that output;
* Why the design may work;
* Any subtle implementation idea or hidden assumption worth noticing.

Do not force every module into a large field-by-field "module card." Prefer continuous explanation; use tables only where exact input-output mappings or training/deployment comparisons genuinely benefit from them.

Show the complete pipeline in concentrated form at most twice:

1. In the opening Takeaway;
2. In one compact diagram, arrow chain, or input-output table in the body.

Elsewhere, refer to the relevant stages instead of reproducing the entire pipeline.

### 3. Explain the Core Algorithm as an Actual Execution

For the central algorithm, do not stop at concepts or a list of equations. Describe one real execution:

1. Where the initial input and initialization come from;
2. How one iteration, sample, rollout, or forward pass proceeds;
3. How the objective, loss, reward, or cost is computed;
4. Which variables are updated;
5. What update rule is used;
6. When the procedure stops or transitions to the next stage;
7. What artifact it ultimately produces;
8. How that artifact is subsequently used.

Strictly distinguish:

* Data or reference targets;
* Decision variables optimized directly;
* Model parameters learned through gradients;
* Temporary optimizer state;
* State produced by the environment or simulator;
* Models and controllers that actually run at deployment.

In particular, do not write that an objective function "maps directly" to model parameters. State whether the solution uses gradient updates, sampling updates, dynamic programming, trajectory optimization, or another solver.

### 4. Equations Must Serve Understanding

Explain each key equation in this order:

1. State intuitively what problem it addresses;
2. Present the equation;
3. Immediately define every variable;
4. Identify which quantities are fixed and which are optimized or learned;
5. State where in the algorithm the equation is evaluated;
6. Explain how it affects downstream results.

Identify equations inherited from prior work. For equations introduced or modified by this paper, state exactly what changed.

Keep only equations necessary to understand the core mechanism. Move secondary equations, full hyperparameters, and symbol tables to the technical appendix.

Equation formatting:

* In the Markdown report file, use $...$ for all inline mathematics;
* In the Markdown report file, use $$...$$ for display mathematics, with the opening and closing double dollar signs on their own lines;
* Do not use \\(...\\) or \\[...\\] as math delimiters inside the report file;
* Do not place equations in code blocks;
* Typeset vectors and matrices in bold, for example $\\mathbf{x}$ and $\\mathbf{R}$;
* Keep delimiters, signs, superscripts, subscripts, dimensions, and units correct;
* If you rename paper notation for consistency, state that explicitly.

### 5. Strictly Separate Training, Solving, and Deployment

When the paper contains multiple stages, explain them separately:

* Data preparation or preprocessing;
* Offline per-sample or per-trajectory optimization;
* Model pretraining;
* Reinforcement or supervised learning;
* Distillation, fine-tuning, or post-training;
* Simulation evaluation;
* Real-robot online inference and control.

For every applicable stage, state:

* Its input;
* Its output;
* Which parameters are updated;
* Which modules are frozen;
* Where the data come from;
* Whether it requires a simulator, expert, reference trajectory, future information, or ground-truth label.

Conclude with one concise table comparing the modules present during training with those present during deployment. Highlight information available only during training and inputs required at deployment.

If an algorithm must run again for every new sample, identify it explicitly as a **per-instance solver** rather than describing it as a trained model that generalizes directly.

### 6. Separate Core Innovations, Supporting Techniques, and Existing Components

Do not call every design choice a contribution. Organize them into:

* **Core innovation**: without it, the main method would not exist;
* **Key supporting design**: improves stability, efficiency, scalability, or effectiveness;
* **Implementation insight**: initialization, caching, scheduling, normalization, coordinate representation, sampling, or another small but practical choice;
* **Inherited component**: a model, optimizer, controller, or training paradigm taken directly from prior work;
* **Engineering integration**: not necessarily a new algorithm, but a combination valuable to the complete system.

Explain why every item matters instead of repeating the authors' contribution list.

## IV. Add Information According to the Paper Type

Include only applicable material; do not emit irrelevant empty sections.

### For Reinforcement-Learning or Control-Policy Papers

Explain:

* Observation, command, and action;
* What the actor and critic each receive;
* The major reward components and their roles;
* Rollout, advantage estimation, and parameter-update procedure;
* Control frequency, reference window, and low-level execution;
* Differences between privileged training information and deployment observations;
* Whether the policy outputs torque, position targets, residuals, or latent variables.

### For Generative-Model Papers

Explain:

* The data representation;
* How conditioning is injected;
* The noising, interpolation, or forward process;
* The network prediction target;
* The training loss;
* Sampling or integration during inference;
* How the generated result enters the downstream controller;
* Whether the generative model runs online, generates offline, or is used only during training.

### For Trajectory-Optimization or Sampling-Based Optimization Papers

Explain:

* The decision variables;
* How the initial solution is obtained;
* The objective and constraints;
* Sampling, rollout, selection, and update in each iteration;
* Whether optimizer state can be reused across tasks;
* The stopping condition;
* Whether a new task requires solving again;
* Whether the output is a control sequence, state trajectory, contact sequence, or reference action.

### For Hierarchical Planning or Generation-and-Tracking Systems

State explicitly:

* What the high and low levels each do;
* How their inputs and outputs connect;
* Their respective execution frequencies;
* Whether the high-level output is a command, keyframe, reference trajectory, or latent;
* Whether the low level is a tracking policy, optimizer, or conventional controller;
* Which level closes the loop after a disturbance.

## V. Experiments and Evidence

Organize the experimental discussion around the paper's central claims rather than following the order of its tables.

For every main claim, answer:

* Which experiment supports it?
* Are the baselines appropriate?
* Are data quantity, training budget, model scale, rewards, and control conditions fair?
* What does the metric actually measure?
* Is the improvement stable and practically meaningful?
* Do ablations isolate the relevant component?
* Is the evidence simulated, real-world, quantitative, or qualitative?
* Does it validate generalization, robustness, efficiency, and deployability?
* Which conclusions remain author claims without sufficient experimental support?

Identify:

* The single most convincing piece of evidence;
* The most important ablation;
* The weakest or most important missing validation;
* Any conclusion that extends beyond what the experiments support.

## VI. Limitations and Reproducibility

Analyze only relevant dimensions:

* Method assumptions;
* Data dependence;
* Computational cost;
* Optimization stability;
* Generalization scope;
* Simulation-to-real risks;
* Dependence on future information, manually provided references, or privileged state;
* Failure cases;
* Availability of code, models, and data;
* Whether network architecture, hyperparameters, frequencies, and training details are sufficient for reproduction.

Separate limitations explicitly acknowledged by the authors from limitations inferred from the method and experiments.

## VII. Technical Appendix

To keep the main narrative readable, move the following to the end:

* Abbreviation and terminology table;
* Main symbol table;
* Secondary equations;
* Complete hyperparameters;
* Pseudocode ambiguities;
* Internal inconsistencies in the paper;
* Missing information required for reproduction;
* Additions from external official sources.

Do not let these verification details interrupt the explanatory thread.

## VIII. Writing and Formatting

1. Write in English while retaining exact technical terminology.
2. Expand each abbreviation at first use, then use the abbreviation consistently.
3. Write for graduate students with foundations in robotics, control, and reinforcement learning who have not read this paper.
4. Do not over-explain basics such as PPO, PD, or FK, but fully explain paper-specific concepts and easily confused boundaries.
5. Begin each section by explaining why it is needed, then explain how it works.
6. Prefer prose; use lists and tables for procedures, stages, and exact comparisons.
7. Do not mechanically follow the paper's original section order.
8. Do not repeat the complete pipeline, contributions, or conclusions.
9. Do not put a large terminology table, equation catalog, or reviewer checklist at the beginning.
10. Prioritize a coherent main narrative; move completeness checks to the appendix.
11. Write the final report to an actual Markdown file instead of pasting the entire report only into the conversation.
12. Let the paper's complexity determine the length; never pad with repetition.

### Figure Capture and Document Delivery (Codex)

* Prefer any user-specified output location or filename. Otherwise, create a <paper-slug>-reading-report/ directory containing <paper-slug>-reading-report.md and an assets/ subdirectory for images.
* While reading the main PDF and appendices, actively identify original figures that materially improve understanding. Prioritize the full method or system pipeline, core module or algorithm architecture, training-versus-deployment relationships, the most important result or ablation, and informative task or hardware setups, in that order.
* Normally select the 2–5 highest-value figures, but use explanatory value rather than a quota. Include no figures when none would improve the report.
* Use available PDF page capture, rendering, or cropping tools to save figures locally as PNG files. Crop page margins and unrelated prose tightly, but retain every axis, legend, panel label, annotation, and unit needed to interpret the figure. Never alter reported values, curves, or the scientific meaning of the original image.
* Write every image path relative to the Markdown file as assets/<filename>.png, for example: ![Method overview](assets/fig-03-pipeline.png). Do not use absolute paths, file:// URIs, or network-dependent external image links. Use stable, short, descriptive English filenames without spaces.
* Place each image close to its first substantive explanation. Follow it with a short caption stating what the reader should notice and the exact source, for example, "Captured from Figure 3, page 6 of the paper." Clearly mark images from a project page or another official source as "External official source."
* Do not substitute images for analysis, capture long passages of prose, include merely decorative photos, fabricate or redraw figures, or use unrelated generated images. If a source cannot be accessed, captured clearly, or verified, state the limitation and omit the image instead of leaving a placeholder.
* After writing the report and images, keep the unpacked report directory and also create a sibling <paper-slug>-reading-report.zip. The ZIP must contain the complete <paper-slug>-reading-report/ directory, its Markdown file, and its assets/ subdirectory so images work immediately after extraction. Create the ZIP even when no figures were selected, keeping delivery consistent.
* In the final response, provide a clickable ZIP link first, followed by a clickable Markdown-report link, and briefly state how many paper figures were saved. Do not paste the full report again.

### Equation Formatting in Chat Responses

* This section applies to every chat response: before report generation, while working, when delivering the report, and during all follow-up questions. Do not carry the report file's dollar-sign format into chat.
* Inline mathematics in chat responses must use \\(...\\). Display mathematics must use \\[...\\], with the opening and closing delimiters on their own lines.
* Never use single or double dollar signs as math delimiters in chat responses. Dollar-sign delimiters are reserved exclusively for equations actually written into the Markdown report file.

The final report should feel like a researcher who genuinely understands the paper is guiding the reader through the system's closed loop at progressively finer resolution—not like the paper has merely been rearranged into a longer, more fragmented document.`,

};

const categories = [
  { id: "locomotion", label: { zh: "运动控制 / Locomotion", en: "Motion Control / Locomotion" } },
  { id: "manipulation", label: { zh: "Manipulation", en: "Manipulation" } },
  { id: "loco-manipulation", label: { zh: "Loco-Manipulation", en: "Loco-Manipulation" } },
  { id: "sim2real", label: { zh: "Sim2Real / 动力学辨识", en: "Sim2Real / System ID" } },
  { id: "real-robot-rl", label: { zh: "真机 RL", en: "Real-Robot RL" } },
  { id: "imitation-teleop", label: { zh: "模仿学习 / 遥操作", en: "Imitation / Teleop" } },
  { id: "vla-world-model", label: { zh: "VLA / 世界模型", en: "VLA / World Model" } },
  { id: "benchmark-dataset", label: { zh: "Benchmark / Dataset", en: "Benchmark / Dataset" } },
];

const papers = [
  {
    "id": "dextrah-rgb",
    "categories": [
      "manipulation",
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2412.01791",
    "project": "https://dextrah-rgb.github.io/",
    "arxiv": "https://arxiv.org/abs/2412.01791",
    "year": "2025",
    "venue": "arXiv:2412.01791",
    "zh": {
      "title": "DextrAH-RGB: Visuomotor Policies to Grasp Anything with Dexterous Hands",
      "authors": "Ritvik Singh, Arthur Allshire, Ankur Handa, Nathan Ratliff, Karl Van Wyk",
      "status": "已整理",
      "tags": [
        "Sim-to-Real",
        "Dexterous Grasping",
        "RGB Policy"
      ],
      "mainContent": "DextrAH-RGB 研究如何只用 RGB 图像输入训练端到端灵巧臂手抓取策略，并从仿真零样本迁移到真实世界。它先训练带特权状态的 fabric-guided teacher policy，再用高保真 tiled rendering 和在线 DAgger 蒸馏成 RGB-based student policy，实现对新物体、新纹理和不同光照条件的真实灵巧抓取。",
      "innovations": [
        "展示了复杂、动态、接触丰富的 dexterous grasping 任务中端到端 RGB policy 的 robust sim-to-real transfer。",
        "相比依赖深度图、点云或物体 pose 的方法，RGB 策略避免了透明/反光物体和深度传感器伪影带来的限制。",
        "复用 geometric fabric controller，把 RL 动作限制在安全、反应式、适合抓取的 palm pose 与手部 PCA action space 中。",
        "使用 photorealistic tiled rendering、材质/纹理/光照随机化和 stereo RGB 输入，让纯仿真蒸馏出的视觉策略能泛化到真实场景。"
      ],
      "implementation": [
        "第一阶段在 Isaac Lab 中用 PPO 训练 state-based teacher FGP，actor 使用带噪状态，critic 使用完整特权状态和接触/力矩信息。",
        "teacher action 不是直接关节命令，而是 geometric fabric 的参数化目标，包括 palm 6D pose 和 5D 手指 PCA 子空间。",
        "第二阶段用 online DAgger 蒸馏 student FGP，student 输入左右 RGB 相机图像和本体状态，监督匹配 teacher action distribution，并辅助预测物体 3D 位置。",
        "训练中使用 HDRI、材质、纹理、相机和物理参数随机化，并通过 ADR 逐步提高任务和动力学难度。",
        "真实部署时 student 直接从 RGB 与本体感知输出 fabric action，由 fabric controller 和底层 PD 控制器保证安全、平滑执行。"
      ]
    },
    "en": {
      "title": "DextrAH-RGB: Visuomotor Policies to Grasp Anything with Dexterous Hands",
      "authors": "Ritvik Singh, Arthur Allshire, Ankur Handa, Nathan Ratliff, Karl Van Wyk",
      "status": "Summarized",
      "tags": [
        "Sim-to-Real",
        "Dexterous Grasping",
        "RGB Policy"
      ],
      "mainContent": "DextrAH-RGB studies end-to-end dexterous arm-hand grasping from RGB image input with zero-shot transfer from simulation to the real world. It first trains a privileged state-based fabric-guided teacher policy, then distills it into an RGB-based student policy using photorealistic tiled rendering and online DAgger, enabling grasping of novel objects under unseen geometry, texture, and lighting.",
      "innovations": [
        "It demonstrates robust sim-to-real transfer of an end-to-end RGB policy for complex, dynamic, contact-rich dexterous grasping.",
        "Compared with depth, point-cloud, or object-pose-based methods, RGB avoids limitations from transparent/reflective objects and depth-sensor artifacts.",
        "A geometric fabric controller constrains RL actions to a safe, reactive grasping-friendly palm pose and hand PCA action space.",
        "Photorealistic tiled rendering, material/texture/lighting randomization, and stereo RGB inputs allow a simulation-only distilled visual policy to generalize to real scenes."
      ],
      "implementation": [
        "Stage one trains a state-based teacher FGP in Isaac Lab with PPO; the actor receives noisy state observations, while the critic receives privileged state plus contact and torque information.",
        "The teacher does not output raw joint commands. It emits parameterized fabric targets, including palm 6D pose and a 5D finger PCA subspace.",
        "Stage two distills a student FGP with online DAgger. The student receives left/right RGB images and proprioception, matches the teacher action distribution, and also predicts the 3D object position.",
        "Training randomizes HDRI lighting, materials, textures, cameras, and physics parameters, with ADR gradually increasing task and dynamics difficulty.",
        "At real deployment, the student maps RGB and proprioception directly to fabric actions, while the fabric controller and low-level PD controller ensure safe and smooth execution."
      ]
    }
  },
  {
    "id": "resfit-real-robot-rl",
    "categories": [
      "manipulation",
      "real-robot-rl",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2509.19301",
    "project": "https://residual-offpolicy-rl.github.io",
    "arxiv": "https://arxiv.org/abs/2509.19301",
    "year": "2025",
    "venue": "arXiv:2509.19301",
    "zh": {
      "title": "Residual Off-Policy RL for Finetuning Behavior Cloning Policies",
      "authors": "Lars Ankile, Zhenyu Jiang, Rocky Duan, Guanya Shi, Pieter Abbeel, Anusha Nagabandi",
      "status": "已整理",
      "tags": [
        "Real-World RL",
        "Behavior Cloning",
        "Residual Policy"
      ],
      "mainContent": "ResFiT 研究如何在真实机器人上用在线 RL 提升已有 BC 策略，而不是重新训练一个完整策略。方法冻结 action-chunked BC base policy，只学习每一步的 lightweight residual correction，并在 29 DoF 轮式 humanoid 双臂五指手上完成真实世界 RL 微调。",
      "innovations": [
        "把大型 BC 策略当作黑盒，只在动作上叠加 per-step residual，避免直接用 RL 优化大模型或 diffusion/action chunk 结构。",
        "使用 off-policy RL、demonstration replay 和 critic warmup 提升样本效率，使 sparse binary reward 也能用于真实长时程任务。",
        "可以直接限制 residual 幅度，让真实机器人探索更稳定、更安全，适合高自由度双手机器人。",
        "展示了在带灵巧手 humanoid 上直接做真实世界 RL 训练，并提升视觉操作任务成功率。"
      ],
      "implementation": [
        "先用遥操作数据训练 BC base policy，base 输出未来 action chunk，随后冻结 base policy。",
        "residual policy 输入当前观测和 base action，输出修正项，真实执行动作为 base action 与 residual action 的和。",
        "critic 对完整动作估值，训练时混合 offline demonstrations 和 online interaction buffer，并使用 Q ensemble 与 high UTD 更新。",
        "在线阶段只需要任务成败的稀疏奖励，演示数据同时用于 base policy、critic 初始化和持续 replay。"
      ]
    },
    "en": {
      "title": "Residual Off-Policy RL for Finetuning Behavior Cloning Policies",
      "authors": "Lars Ankile, Zhenyu Jiang, Rocky Duan, Guanya Shi, Pieter Abbeel, Anusha Nagabandi",
      "status": "Summarized",
      "tags": [
        "Real-World RL",
        "Behavior Cloning",
        "Residual Policy"
      ],
      "mainContent": "ResFiT studies how online RL can improve an existing BC policy on real robots without retraining the whole policy. It freezes an action-chunked BC base policy and learns lightweight per-step residual corrections, demonstrating real-world RL finetuning on a 29-DoF wheeled humanoid with bimanual dexterous hands.",
      "innovations": [
        "The method treats large BC policies as black boxes and adds per-step action residuals, avoiding direct RL optimization of large diffusion or action-chunked models.",
        "Off-policy RL, demonstration replay, and critic warmup make sparse-binary-reward real-world learning sample efficient.",
        "Residual magnitudes can be explicitly bounded, making exploration more stable and safer for high-DoF bimanual robots.",
        "The paper demonstrates real-world RL training on a humanoid with dexterous hands and improves visuomotor manipulation performance."
      ],
      "implementation": [
        "A BC base policy is first trained from teleoperation demonstrations to output future action chunks, then frozen.",
        "The residual policy receives the current observation and base action and outputs a correction; the executed action is their sum.",
        "The critic evaluates full actions, with training batches mixed from offline demonstrations and online interaction buffers using Q ensembles and high UTD updates.",
        "The online phase only needs sparse task success rewards, while demonstrations are reused for base training, critic initialization, and replay."
      ]
    }
  },
  {
    "id": "dexndm",
    "categories": [
      "manipulation",
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2510.08556",
    "project": "https://meowuu7.github.io/DexNDM",
    "arxiv": "https://arxiv.org/abs/2510.08556",
    "year": "2025",
    "venue": "arXiv:2510.08556",
    "zh": {
      "title": "DexNDM: Closing the Reality Gap for Dexterous In-Hand Rotation via Joint-wise Neural Dynamics Model",
      "authors": "Xueyi Liu, He Wang, Li Yi",
      "status": "已整理",
      "tags": [
        "Reinforcement Learning",
        "In-Hand Rotation",
        "Neural Dynamics"
      ],
      "mainContent": "DexNDM 研究如何把仿真训练的灵巧手手内旋转策略迁移到真实世界，并覆盖复杂形状、高长宽比、小物体、多手腕姿态和不同旋转轴。核心是学习 joint-wise neural dynamics model，用少量真实交互数据估计真实动力学影响，再训练 residual policy 修正仿真策略动作。",
      "innovations": [
        "把整手-物体复杂动力学分解成关节级模型，每个关节用自己的本体历史预测演化，减少对物体位姿估计的依赖。",
        "用低维变量压缩系统级影响，如关节耦合、负载和接触效应，使模型在少量真实数据下也能泛化。",
        "提出自主数据采集策略，通过随机负载收集任务无关真实交互数据，减少掉物体和人工 reset。",
        "结合 specialist-to-generalist 仿真策略训练和 residual sim-to-real adaptation，实现广泛真实物体手内旋转。"
      ],
      "implementation": [
        "先在仿真中训练类别专家策略，覆盖不同物体比例、几何复杂度和手腕姿态，再蒸馏成统一 base policy。",
        "真实数据采集阶段不要求完成目标任务，而是对手施加随机负载，记录关节本体状态和响应。",
        "joint-wise dynamics model 从每个关节的 proprioceptive history 学习真实系统动态，并避免依赖遮挡严重的物体状态。",
        "根据 learned dynamics 训练 residual policy，输出对 base policy action 的修正，用于弥合真实动力学差异。"
      ]
    },
    "en": {
      "title": "DexNDM: Closing the Reality Gap for Dexterous In-Hand Rotation via Joint-wise Neural Dynamics Model",
      "authors": "Xueyi Liu, He Wang, Li Yi",
      "status": "Summarized",
      "tags": [
        "Reinforcement Learning",
        "In-Hand Rotation",
        "Neural Dynamics"
      ],
      "mainContent": "DexNDM studies how to transfer simulation-trained dexterous in-hand rotation policies to the real world across complex shapes, high aspect ratios, small objects, diverse wrist poses, and rotation axes. Its core is a joint-wise neural dynamics model that uses limited real interaction data to model reality-gap effects and train residual action corrections.",
      "innovations": [
        "It factorizes whole-hand object dynamics into joint-wise models, predicting each joint's evolution from its own proprioceptive history and reducing dependence on object pose estimation.",
        "Low-dimensional variables compress system-level influences such as coupling, load, and contact effects for data-efficient generalization.",
        "An autonomous task-agnostic data collection strategy applies randomized loads to gather real interaction data with fewer drops and human resets.",
        "Specialist-to-generalist simulation policy learning plus residual adaptation enables broad real-world in-hand rotation."
      ],
      "implementation": [
        "Category-specific expert policies are trained in simulation over object aspect ratios, geometry, and wrist poses, then distilled into a unified base policy.",
        "Real data collection does not require task success; randomized loads are applied to the hand while proprioceptive responses are recorded.",
        "The joint-wise dynamics model learns real dynamics from each joint's history, avoiding heavily occluded object-state estimation.",
        "A residual policy is trained from the learned dynamics to correct base policy actions for real hardware deployment."
      ]
    }
  },
  {
    "id": "diffudepgrasp",
    "categories": [
      "manipulation",
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2511.12912",
    "project": "https://diffudepgrasp.github.io/",
    "arxiv": "https://arxiv.org/abs/2511.12912",
    "year": "2025",
    "venue": "arXiv:2511.12912",
    "zh": {
      "title": "DiffuDepGrasp: Diffusion-based Depth Noise Modeling Empowers Sim2Real Robotic Grasping",
      "authors": "Yingting Zhou, Wenbo Cui, Weiheng Liu, Guixing Chen, Haoran Li, Dongbin Zhao",
      "status": "已整理",
      "tags": [
        "Sim-to-Real",
        "Depth Policy",
        "Diffusion"
      ],
      "mainContent": "DiffuDepGrasp 解决深度图策略从仿真到真实迁移时的观测 gap：真实深度图有空洞和噪声，而仿真深度过于干净。论文用 Diffusion Depth Generator 在训练期把仿真深度转成带真实传感器噪声的深度图，让最终策略部署时只吃 raw depth，无额外在线修复模块。",
      "innovations": [
        "用 conditional diffusion 学习真实深度传感器噪声分布，而不是手写 procedural noise。",
        "Diffusion Depth Module 借助视频深度 foundation model 提供时间稳定的几何先验，降低少量非配对 RGB-D 数据训练难度。",
        "Noise Grafting Module 把学习到的噪声 graft 到仿真真值深度上，同时保留 metric accuracy。",
        "部署阶段不需要额外深度恢复或 foundation model 推理，避免实时控制延迟。"
      ],
      "implementation": [
        "先在 Isaac Gym 中用 privileged state 和 PPO 训练 state-based teacher policy，得到高成功率抓取专家。",
        "用少量真实 RGB-D 数据训练 Diffusion Depth Module，学习真实相机噪声、空洞和伪影。",
        "对 teacher 轨迹中的仿真深度运行 DDG，生成接近真实传感器风格的 noisy depth。",
        "用这些深度图和 teacher action 做 imitation learning，蒸馏出 depth-based student policy 并零样本部署到真机。"
      ]
    },
    "en": {
      "title": "DiffuDepGrasp: Diffusion-based Depth Noise Modeling Empowers Sim2Real Robotic Grasping",
      "authors": "Yingting Zhou, Wenbo Cui, Weiheng Liu, Guixing Chen, Haoran Li, Dongbin Zhao",
      "status": "Summarized",
      "tags": [
        "Sim-to-Real",
        "Depth Policy",
        "Diffusion"
      ],
      "mainContent": "DiffuDepGrasp addresses the observation gap for depth-based sim-to-real grasping: real depth maps contain holes and noise, while simulation depth is too clean. A Diffusion Depth Generator converts simulated depth into sensor-realistic noisy depth during training, so the final deployed policy uses only raw depth without online restoration overhead.",
      "innovations": [
        "A conditional diffusion model learns real depth sensor noise distributions instead of relying on hand-crafted procedural noise.",
        "The Diffusion Depth Module uses a video depth foundation model as a temporally stable geometric prior for sample-efficient training with small unpaired RGB-D data.",
        "The Noise Grafting Module injects learned artifacts onto simulator ground-truth depth while preserving metric accuracy.",
        "Deployment requires no extra depth restoration or foundation-model inference, avoiding latency during real-time control."
      ],
      "implementation": [
        "A privileged state-based teacher policy is first trained in Isaac Gym with PPO to collect expert grasping trajectories.",
        "A small set of real RGB-D data trains the Diffusion Depth Module to model real camera noise, holes, and artifacts.",
        "The DDG converts simulated depth from teacher trajectories into realistic noisy depth observations.",
        "A depth-based student policy is distilled from teacher actions using the generated depth and deployed zero-shot on real hardware."
      ]
    }
  },
  {
    "id": "pi06-recap",
    "categories": [
      "vla-world-model",
      "real-robot-rl"
    ],
    "pdf": "https://arxiv.org/pdf/2511.14759",
    "project": "https://pi.website/blog/pistar06",
    "arxiv": "https://arxiv.org/abs/2511.14759",
    "year": "2025",
    "venue": "arXiv:2511.14759",
    "zh": {
      "title": "π0.6*: a VLA That Learns From Experience",
      "authors": "Physical Intelligence",
      "status": "已整理",
      "tags": [
        "VLA",
        "Real-World RL",
        "Advantage Conditioning"
      ],
      "mainContent": "π0.6* / RECAP 研究 VLA 如何通过真实部署经验继续提升。方法把 demonstrations、on-policy autonomous rollouts 和 human interventions 一起纳入 RL 流程，训练 value function 估计动作 advantage，再用 advantage-conditioned policy extraction 微调 VLA。",
      "innovations": [
        "把 VLA 的自我提升写成通用 RECAP recipe：先离线 RL 预训练，再在真实机器人任务上收集经验和纠错数据迭代提升。",
        "用 advantage conditioning 代替直接对大型 flow-matching VLA 做复杂 policy gradient，能利用 off-policy/offline 数据。",
        "同时利用成功/失败 reward、专家介入和自主执行数据，解决真实任务奖励稀疏和数据异构问题。",
        "在折衣、组装纸箱、做咖啡等长时程真实任务上显著提升 throughput 并降低失败率。"
      ],
      "implementation": [
        "预训练阶段让 π0.6* 具备按二值 advantage indicator 条件化生成动作的能力。",
        "部署到下游任务后，收集 autonomous rollouts，并允许人在机器人执行时进行 teleoperated corrections。",
        "用累计数据训练语言条件 distributional value function，估计动作对任务完成进度的影响。",
        "把 advantage 转成最优性/改进指示，作为条件输入继续训练 VLA，使模型偏向高 advantage 行为。"
      ]
    },
    "en": {
      "title": "π0.6*: a VLA That Learns From Experience",
      "authors": "Physical Intelligence",
      "status": "Summarized",
      "tags": [
        "VLA",
        "Real-World RL",
        "Advantage Conditioning"
      ],
      "mainContent": "π0.6* and RECAP study how VLA models can improve from real-world deployment experience. The method combines demonstrations, autonomous on-policy rollouts, and human interventions, trains a value function to estimate action advantages, and finetunes the VLA through advantage-conditioned policy extraction.",
      "innovations": [
        "RECAP provides a general self-improvement recipe for VLAs: offline-RL pretraining followed by iterative real-world experience and corrections.",
        "Advantage conditioning avoids complicated policy-gradient training of large flow-matching VLAs while still using off-policy and offline data.",
        "The method combines success/failure reward labels, expert interventions, and autonomous experience to handle sparse rewards and heterogeneous data.",
        "It improves throughput and reduces failure rates on long-horizon real tasks such as laundry folding, box assembly, and espresso making."
      ],
      "implementation": [
        "Pretraining gives π0.6* the ability to condition action generation on a binarized advantage indicator.",
        "During deployment, autonomous rollouts are collected and humans can provide teleoperated corrections when the robot makes mistakes.",
        "A language-conditioned distributional value function is trained on all collected data to estimate action impact on task progress.",
        "Advantages are converted into optimality or improvement indicators and used as conditions for continued VLA training."
      ]
    }
  },
  {
    "id": "viral-humanoid",
    "categories": [
      "loco-manipulation",
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2511.15200",
    "project": "https://viral-humanoid.github.io",
    "arxiv": "https://arxiv.org/abs/2511.15200",
    "year": "2025",
    "venue": "arXiv:2511.15200",
    "zh": {
      "title": "VIRAL: Visual Sim-to-Real at Scale for Humanoid Loco-Manipulation",
      "authors": "Tairan He, Zi Wang, Haoru Xue, Qingwei Ben, Zhengyi Luo, Wenli Xiao, Ye Yuan, Xingye Da, Fernando Castaneda, Shankar Sastry, Changliu Liu, Guanya Shi, Linxi \"Jim\" Fan, Yuke Zhu",
      "status": "已整理",
      "tags": [
        "Sim-to-Real",
        "Humanoid",
        "Loco-Manipulation"
      ],
      "mainContent": "VIRAL 研究如何完全在仿真中训练 RGB-based humanoid loco-manipulation 策略，并零样本部署到 Unitree G1。系统用 privileged RL teacher 学会走路、抓取、放置和搬运，再用大规模渲染和 DAgger/BC 蒸馏成只看 RGB 与本体感知的 student policy。",
      "innovations": [
        "把视觉 sim-to-real 扩展到长时程 humanoid loco-manipulation，覆盖移动、操作和物体运输的连续闭环任务。",
        "强调 compute scale 的作用：teacher 和 student 训练扩展到多 GPU/64 GPU 量级后才稳定可靠。",
        "结合大规模视觉 domain randomization 与真实到仿真对齐，包括手部 SysID、相机外参和传感延迟。",
        "student policy 在真实 G1 上连续执行最多 54 个循环，无需真实 fine-tuning。"
      ],
      "implementation": [
        "第一阶段训练 privileged teacher，输入完整状态和任务信息，输出 WBC command 的 delta action，由底层 WBC 保证稳定运动。",
        "teacher 使用阶段化奖励，覆盖 walking、placing、grasping 和 turning，并用 reference state initialization 降低长时程探索难度。",
        "第二阶段用 tiled rendering 大规模生成 RGB 观测，通过 online DAgger 与 behavior cloning 蒸馏 student。",
        "student 训练中随机化场景资产、材质、光照、相机参数、图像质量和 sensor delay，部署时只用真实机载 RGB 和本体感知。"
      ]
    },
    "en": {
      "title": "VIRAL: Visual Sim-to-Real at Scale for Humanoid Loco-Manipulation",
      "authors": "Tairan He, Zi Wang, Haoru Xue, Qingwei Ben, Zhengyi Luo, Wenli Xiao, Ye Yuan, Xingye Da, Fernando Castaneda, Shankar Sastry, Changliu Liu, Guanya Shi, Linxi \"Jim\" Fan, Yuke Zhu",
      "status": "Summarized",
      "tags": [
        "Sim-to-Real",
        "Humanoid",
        "Loco-Manipulation"
      ],
      "mainContent": "VIRAL studies how to train RGB-based humanoid loco-manipulation entirely in simulation and deploy it zero-shot on a Unitree G1. A privileged RL teacher learns walking, grasping, placing, and object transport, then large-scale rendering plus DAgger/BC distill it into a student policy that uses only RGB and proprioception.",
      "innovations": [
        "It extends visual sim-to-real to long-horizon humanoid loco-manipulation involving navigation, manipulation, and object transport.",
        "The paper highlights compute scale: reliable teacher and student learning requires multi-GPU training up to 64 GPUs.",
        "Large-scale visual domain randomization is combined with real-to-sim alignment, including hand SysID, camera calibration, and sensor delays.",
        "The student policy runs up to 54 continuous cycles on a real G1 humanoid without real-world fine-tuning."
      ],
      "implementation": [
        "Stage one trains a privileged teacher with full state and task information to output delta commands to a WBC controller.",
        "Teacher training uses stage-based rewards for walking, placing, grasping, and turning plus reference state initialization for long-horizon exploration.",
        "Stage two uses tiled rendering at scale to produce RGB observations and distills the student with online DAgger and behavior cloning.",
        "Student training randomizes scene assets, materials, lighting, camera parameters, image quality, and sensor delay; deployment uses onboard RGB and proprioception."
      ]
    }
  },
  {
    "id": "demobot",
    "categories": [
      "manipulation",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2601.01651",
    "project": "https://demobot-seed.github.io/",
    "arxiv": "https://arxiv.org/abs/2601.01651",
    "year": "2026",
    "venue": "arXiv:2601.01651",
    "zh": {
      "title": "DemoBot: Efficient Learning of Bimanual Manipulation with Dexterous Hands From Third-Person Human Videos",
      "authors": "ByteDance Seed",
      "status": "已整理",
      "tags": [
        "Reinforcement Learning",
        "Human Video",
        "Bimanual Dexterity"
      ],
      "mainContent": "DemoBot 研究如何从一段第三人称、未标注 RGB-D 人类视频中学习长时程双手机巧操作。视频处理模块提取人手和物体轨迹并 retarget 成机器人 motion prior，RL 模块不硬模仿轨迹，而是学习 residual correction 来补足视觉示范缺失的接触动力学。",
      "innovations": [
        "把单个 unannotated human video 转成机器人可用的 motion prior 和 object sub-goals，降低遥操作数据需求。",
        "用 corrective residual RL 而不是纯 BC，从 imperfect visual demonstration 中学习可执行的物理交互策略。",
        "提出 temporal-segment based RL，按关键帧把长任务切成阶段，减少时间错位和跨阶段误导。",
        "Success-gated reset 与 event-driven reward curriculum 帮助后期阶段探索和高精度装配学习。"
      ],
      "implementation": [
        "先手动选关键帧，并用 hand/object pose estimator 从 RGB-D 视频中恢复 3D 手-物体轨迹。",
        "通过任务相关优化细化物体位姿，再将人手动作 retarget 到双臂灵巧手机器人，生成 full-body trajectory。",
        "RL action 表示为示范 motion prior 加 residual，策略只学习当前阶段所需的修正动作。",
        "环境失败时按 success-gated reset 回到最近成功阶段末端，保证训练样本覆盖后续关键阶段。"
      ]
    },
    "en": {
      "title": "DemoBot: Efficient Learning of Bimanual Manipulation with Dexterous Hands From Third-Person Human Videos",
      "authors": "ByteDance Seed",
      "status": "Summarized",
      "tags": [
        "Reinforcement Learning",
        "Human Video",
        "Bimanual Dexterity"
      ],
      "mainContent": "DemoBot learns long-horizon bimanual dexterous manipulation from a single third-person unannotated RGB-D human video. The video pipeline extracts hand and object trajectories and retargets them into robot motion priors, while RL learns residual corrections instead of rigidly imitating the noisy visual trajectory.",
      "innovations": [
        "It converts one unannotated human video into robot motion priors and object sub-goals, reducing the need for teleoperation data.",
        "Corrective residual RL learns executable physical interaction policies from imperfect visual demonstrations instead of pure BC.",
        "Temporal-segment based RL splits the long task by keyframes to reduce temporal misalignment and cross-stage distraction.",
        "Success-gated resets and an event-driven reward curriculum improve exploration of later stages and high-precision assembly."
      ],
      "implementation": [
        "Keyframes are selected and hand/object pose estimators recover 3D hand-object trajectories from RGB-D video.",
        "Task-aware optimization refines object poses, and human motion is retargeted to a bimanual dexterous robot as a full-body trajectory.",
        "The RL action is represented as the demonstration motion prior plus a residual, so the policy only learns stage-specific corrections.",
        "When environments fail, success-gated resets return them to the latest successful stage endpoint, maintaining coverage of later stages."
      ]
    }
  },
  {
    "id": "xhugwbc",
    "categories": [
      "locomotion"
    ],
    "pdf": "https://arxiv.org/pdf/2602.05791",
    "project": "https://arxiv.org/abs/2602.05791",
    "arxiv": "https://arxiv.org/abs/2602.05791",
    "year": "2026",
    "venue": "arXiv:2602.05791",
    "zh": {
      "title": "Scalable and General Whole-Body Control for Cross-Humanoid Locomotion",
      "authors": "Yufei Xue, Yunfeng Lin, Wentao Dong, Yang Tang, Jingbo Wang, Jiangmiao Pang, Ming Zhou, Minghuan Liu, Weinan Zhang",
      "status": "已整理",
      "tags": [
        "Reinforcement Learning",
        "Whole-Body Control",
        "Cross-Embodiment"
      ],
      "mainContent": "XHugWBC 研究是否能训练一个跨 humanoid embodiment 的通用 whole-body controller。论文通过物理一致的形态随机化、语义对齐的 observation/action space 和显式建模形态/动力学的策略结构，让单个 policy 零样本泛化到多种仿真与真实 humanoid。",
      "innovations": [
        "提出 physics-consistent morphological randomization，保证随机化后的质量、惯量和关节参数仍对应物理可实现刚体。",
        "构建跨机器人统一 joint/action 表示，把不同自由度、关节顺序和形态映射到 semantically aligned global joint space。",
        "用 GCN/Transformer 等结构编码机器人拓扑和形态属性，让 policy 学到 embodiment-agnostic motion priors。",
        "单个 generalist policy 在多个真实 humanoid 上零样本 whole-body control，并可作为 teleoperation/loco-manipulation 底层控制器。"
      ],
      "implementation": [
        "从 template URDF 出发，对 link inertial parameters 与 joint parameters 做物理一致随机化，生成多样但合理的 humanoid morphology。",
        "把机器人状态投影到全局 joint space，构建 embodiment graph，并用 mask 处理不同机器人缺失的关节/动作维度。",
        "策略学习采用形态编码器、state estimator 和统一 command space，在随机 embodiment 分布上一次性训练。",
        "部署时将真实机器人状态映射到同一表示，直接运行 generalist controller，无需每台机器人重新训练。"
      ]
    },
    "en": {
      "title": "Scalable and General Whole-Body Control for Cross-Humanoid Locomotion",
      "authors": "Yufei Xue, Yunfeng Lin, Wentao Dong, Yang Tang, Jingbo Wang, Jiangmiao Pang, Ming Zhou, Minghuan Liu, Weinan Zhang",
      "status": "Summarized",
      "tags": [
        "Reinforcement Learning",
        "Whole-Body Control",
        "Cross-Embodiment"
      ],
      "mainContent": "XHugWBC asks whether one whole-body controller can generalize across humanoid embodiments. It combines physics-consistent morphological randomization, semantically aligned observation/action spaces, and policy architectures that model morphology and dynamics, enabling one policy to transfer zero-shot to diverse simulated and real humanoids.",
      "innovations": [
        "Physics-consistent morphological randomization keeps randomized mass, inertia, and joint parameters physically realizable.",
        "A unified joint/action representation maps different DoFs, joint orders, and morphologies into a semantically aligned global joint space.",
        "GCN/Transformer-style encoders represent robot topology and morphology so the policy learns embodiment-agnostic motion priors.",
        "A single generalist policy achieves zero-shot whole-body control on multiple real humanoids and can serve as a teleoperation/loco-manipulation controller."
      ],
      "implementation": [
        "Starting from a template URDF, link inertial parameters and joint parameters are randomized under physical consistency constraints.",
        "Robot states are projected into a global joint space, an embodiment graph is built, and masks handle missing joints or action dimensions.",
        "Policy learning uses morphology encoders, a state estimator, and a unified command space trained over randomized embodiments.",
        "Deployment maps each real robot into the same representation and runs the generalist controller without robot-specific retraining."
      ]
    }
  },
  {
    "id": "simtoolreal",
    "categories": [
      "manipulation",
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2602.16863",
    "project": "https://simtoolreal.github.io",
    "arxiv": "https://arxiv.org/abs/2602.16863",
    "year": "2026",
    "venue": "arXiv:2602.16863",
    "zh": {
      "title": "SimToolReal: An Object-Centric Policy for Zero-Shot Dexterous Tool Manipulation",
      "authors": "Kushal Kedia, Tyler Ga Wei Lum, Jeannette Bohg, C. Karen Liu",
      "status": "已整理",
      "tags": [
        "Sim-to-Real",
        "Dexterous Tool Use",
        "Object-Centric Policy"
      ],
      "mainContent": "SimToolReal 研究如何用一个仿真训练的通用 object-centric RL policy，零样本完成真实工具操作。它把工具使用抽象成让工具依次达到一串 6D goal poses，在仿真中用程序生成的 tool-like primitives 和随机目标位姿训练，再在真实工具上跟踪从人类视频提取的工具轨迹。",
      "innovations": [
        "把 tool use 统一成 object pose reaching，而不是为每个工具/任务单独建模和设计奖励。",
        "用程序生成 primitive objects 训练单个策略，诱导出抓取、手内重定向和稳定接触等通用灵巧能力。",
        "object-centric 表示绕开视觉 sim-to-real gap：策略条件化于工具 6D pose 和 graspable region 的粗 3D box。",
        "通过 SAM 3D 与 FoundationPose 等 foundation perception 获取真实工具状态，实现新工具/新任务零样本部署。"
      ],
      "implementation": [
        "仿真训练中随机生成工具状物体和目标位姿，RL policy 控制 29 DoF dexterous arm-hand 去跟踪对象目标姿态。",
        "策略输入包括机器人本体状态、当前对象 6D pose、粗略对象描述/可抓区域和目标 pose。",
        "真实部署时从人类视频提取工具目标轨迹，并把该轨迹分解成连续 goal poses。",
        "感知管线用 SAM 3D 做分割和 mesh extraction，用 FoundationPose 跟踪 6D pose，再驱动同一个仿真训练策略执行。"
      ]
    },
    "en": {
      "title": "SimToolReal: An Object-Centric Policy for Zero-Shot Dexterous Tool Manipulation",
      "authors": "Kushal Kedia, Tyler Ga Wei Lum, Jeannette Bohg, C. Karen Liu",
      "status": "Summarized",
      "tags": [
        "Sim-to-Real",
        "Dexterous Tool Use",
        "Object-Centric Policy"
      ],
      "mainContent": "SimToolReal trains one general object-centric RL policy in simulation for zero-shot real-world tool use. It abstracts tool manipulation as moving a tool through a sequence of 6D goal poses, trains on procedurally generated tool-like primitives and random goals, then tracks tool trajectories extracted from human videos on real tools.",
      "innovations": [
        "Tool use is unified as object-pose reaching instead of per-tool modeling and task-specific reward engineering.",
        "Training on procedural primitive objects induces general dexterous skills such as grasping, in-hand reorientation, and stable contact.",
        "An object-centric representation bypasses much of the visual sim-to-real gap by conditioning on tool 6D pose and a coarse 3D graspable-region box.",
        "Foundation perception modules such as SAM 3D and FoundationPose recover real tool state for zero-shot deployment."
      ],
      "implementation": [
        "Simulation training generates random tool-like objects and goal poses, and an RL policy controls a 29-DoF dexterous arm-hand to reach object goals.",
        "The policy input includes robot proprioception, current object 6D pose, coarse object/grasp-region descriptors, and the target pose.",
        "At deployment, a human video provides the tool goal trajectory, decomposed into sequential goal poses.",
        "The perception pipeline segments and reconstructs the tool with SAM 3D, tracks 6D pose with FoundationPose, and feeds the same simulation-trained policy."
      ]
    }
  },
  {
    "id": "mode-vla-imcopilot",
    "categories": [
      "manipulation",
      "imitation-teleop",
      "vla-world-model"
    ],
    "pdf": "https://arxiv.org/pdf/2603.08122",
    "project": "https://arxiv.org/abs/2603.08122",
    "arxiv": "https://arxiv.org/abs/2603.08122",
    "year": "2026",
    "venue": "arXiv:2603.08122",
    "zh": {
      "title": "Towards Human-Like Manipulation through RL-Augmented Teleoperation and Mixture-of-Dexterous-Experts VLA",
      "authors": "Tutian Tang, Xingyu Ji, Wanli Xing, Ce Hao, Wenqiang Xu, Lin Shao, Cewu Lu, Qiaojun Yu, Jiangmiao Pang, Kaifeng Zhang",
      "status": "已整理",
      "tags": [
        "VLA",
        "Dexterous Manipulation",
        "Force/Tactile"
      ],
      "mainContent": "这篇论文提出 IMCopilot + MoDE-VLA，用 RL 训练的手内操作原子技能辅助高自由度双手遥操作采集数据，并作为 VLA 执行时可调用的低层技能。MoDE-VLA 则把力/触觉通过专用路径、MoE routing 和 residual injection 融入预训练 VLA，用于接触丰富的人类式双手机巧任务。",
      "innovations": [
        "IMCopilot 同时用于数据采集阶段的 shared autonomy 和自主执行阶段的 callable low-level in-hand skill。",
        "通过脚踏触发 RL-trained atomic skills，降低 63 DoF 双手遥操作中人类操作者的认知与控制负担。",
        "MoDE-VLA 为 force/tactile tokens 建立独立融合通路，经 self-attention、sparse MoE 和 residual injection 做接触感知修正。",
        "在齿轮装配、充电器插入、试管整理和削苹果等任务中验证高自由度 VLA 的接触丰富操作能力。"
      ],
      "implementation": [
        "机器人平台由双 7 DoF 机械臂、双 22 DoF 灵巧手、头部/腕部相机、关节力矩和十指 6 DoF 触觉力传感组成。",
        "遥操作系统使用上肢外骨骼、手套、VR 视觉反馈和触觉/力反馈 overlay；脚踏板用于调用 IMCopilot 技能。",
        "IMCopilot 技能通过 RL 训练，包括稳定抓持和指定轴手内旋转等低层 primitive。",
        "MoDE-VLA 保留预训练 VLA backbone，额外注入力/触觉专家残差，避免破坏原有视觉语言知识。"
      ]
    },
    "en": {
      "title": "Towards Human-Like Manipulation through RL-Augmented Teleoperation and Mixture-of-Dexterous-Experts VLA",
      "authors": "Tutian Tang, Xingyu Ji, Wanli Xing, Ce Hao, Wenqiang Xu, Lin Shao, Cewu Lu, Qiaojun Yu, Jiangmiao Pang, Kaifeng Zhang",
      "status": "Summarized",
      "tags": [
        "VLA",
        "Dexterous Manipulation",
        "Force/Tactile"
      ],
      "mainContent": "This paper proposes IMCopilot and MoDE-VLA. RL-trained in-hand atomic skills assist high-DoF bimanual teleoperation during data collection and become callable low-level skills during VLA execution. MoDE-VLA fuses force and tactile signals into a pretrained VLA through dedicated pathways, MoE routing, and residual injection for contact-rich human-like dexterous tasks.",
      "innovations": [
        "IMCopilot serves both shared-autonomy data collection and callable low-level in-hand control during autonomous execution.",
        "Foot-pedal-triggered RL atomic skills reduce the cognitive and control burden of teleoperating a 63-DoF dual-dexterous-hand system.",
        "MoDE-VLA gives force/tactile tokens a dedicated fusion pathway with self-attention, sparse MoE routing, and residual contact-aware correction.",
        "The system is validated on gear assembly, charger plugging, tube rearranging, and apple peeling."
      ],
      "implementation": [
        "The robot uses dual 7-DoF arms, dual 22-DoF hands, head/wrist cameras, joint torques, and ten fingertip 6-DoF force/tactile sensors.",
        "The teleoperation setup combines arm exoskeletons, gloves, VR visual feedback, force/tactile overlays, and pedals for triggering IMCopilot.",
        "IMCopilot primitives are trained with RL, including stable grasp maintenance and specified-axis in-hand rotation.",
        "MoDE-VLA preserves the pretrained VLA backbone while injecting force/tactile expert residuals to refine contact-aware actions."
      ]
    }
  },
  {
    "id": "omnireset",
    "categories": [
      "manipulation",
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2603.15789",
    "project": "https://omnireset.github.io",
    "arxiv": "https://arxiv.org/abs/2603.15789",
    "year": "2026",
    "venue": "ICLR 2026 / arXiv:2603.15789",
    "zh": {
      "title": "Emergent Dexterity via Diverse Resets and Large-Scale Reinforcement Learning",
      "authors": "Patrick Yin, Tyler Westenbroek, Eeshani Shilamkar, Joshua Tran, Ignacio Dagnino, Xinlei Liu, Zhengyu Zhang, Numfor Mbiziwo-Tiapo, Simran Bagaria, Galen Mullins, Andrey Kolobov, Abhishek Gupta",
      "status": "已整理",
      "tags": [
        "Sim-to-Real",
        "Large-Scale RL",
        "Dexterous Manipulation"
      ],
      "mainContent": "OmniReset 研究如何让大规模 on-policy RL 在长时程接触丰富 manipulation 中真正随 compute scaling。核心不是设计复杂探索算法，而是自动生成覆盖关键中间交互状态的 diverse simulator resets，让 PPO 经常看到接近成功和不同接触模式的状态，从而学会拼接推、翻、插入等行为。",
      "innovations": [
        "把长时程探索难题转化为 reset distribution 设计，用通用多样 reset 暴露机器人-物体交互模式。",
        "无需人类示范、任务专用 curriculum 或复杂 reward shaping，也能在大规模并行环境中学习动态灵巧行为。",
        "随着并行环境和 compute 增大，性能继续提升，而不是像窄初始分布 RL 那样很快饱和。",
        "通过 teacher-student distillation 把全状态策略蒸馏到 RGB visuomotor policy，并零样本迁移到真实世界。"
      ],
      "implementation": [
        "程序化生成覆盖接近、接触、抓持、翻转、插入等中间状态的 simulator resets，不直接编码任务解法。",
        "用 PPO 和固定超参数在这些 reset 分布上训练动态 policy，主要依靠稀疏/简单任务奖励。",
        "训练出的 policy 可从宽初始状态分布完成 drawer insertion、screw-in-table-leg、peg insertion 等任务。",
        "最后用 teacher policy 产生数据，蒸馏成 RGB camera policy，在真实机器人上展示 retry 和 recovery 行为。"
      ]
    },
    "en": {
      "title": "Emergent Dexterity via Diverse Resets and Large-Scale Reinforcement Learning",
      "authors": "Patrick Yin, Tyler Westenbroek, Eeshani Shilamkar, Joshua Tran, Ignacio Dagnino, Xinlei Liu, Zhengyu Zhang, Numfor Mbiziwo-Tiapo, Simran Bagaria, Galen Mullins, Andrey Kolobov, Abhishek Gupta",
      "status": "Summarized",
      "tags": [
        "Sim-to-Real",
        "Large-Scale RL",
        "Dexterous Manipulation"
      ],
      "mainContent": "OmniReset studies how to make large-scale on-policy RL scale for long-horizon contact-rich manipulation. Rather than adding complex exploration algorithms, it automatically generates diverse simulator resets that cover key intermediate interaction states, letting PPO frequently experience useful contact modes and learn to stitch pushing, flipping, insertion, and recovery behaviors.",
      "innovations": [
        "It reframes long-horizon exploration as reset-distribution design, exposing the agent to generic robot-object interaction modes.",
        "The method needs no human demonstrations, task-specific curriculum, or heavy reward shaping to learn dynamic dexterity at scale.",
        "Performance continues improving with more parallel environments and compute, unlike RL from narrow initial distributions.",
        "Teacher-student distillation transfers full-state policies into RGB visuomotor policies for zero-shot real-world deployment."
      ],
      "implementation": [
        "Simulator resets are generated to cover intermediate states such as approach, contact, grasping, flipping, and insertion without directly encoding task solutions.",
        "PPO with fixed hyperparameters trains dynamic policies over these reset distributions using sparse or simple task rewards.",
        "The learned policies solve drawer insertion, screw-in-table-leg, peg insertion, and related tasks from broad initial states.",
        "Teacher rollouts are distilled into RGB camera policies that show retry and recovery behavior on real robots."
      ]
    }
  },
  {
    "id": "rainbow-demorl",
    "categories": [
      "manipulation",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2603.27400",
    "project": "https://arxiv.org/abs/2603.27400",
    "arxiv": "https://arxiv.org/abs/2603.27400",
    "year": "2026",
    "venue": "arXiv:2603.27400",
    "zh": {
      "title": "Rainbow-DemoRL: Combining Improvements in Demonstration-Augmented Reinforcement Learning",
      "authors": "Dwait Bhatt, Shih-Chieh Chou, Nikolay Atanasov",
      "status": "已整理",
      "tags": [
        "BC+RL",
        "Demo-Augmented RL",
        "Sample Efficiency"
      ],
      "mainContent": "Rainbow-DemoRL 系统比较如何用 offline demonstrations 提升 online RL 样本效率。论文把方法分成三类：直接复用离线数据、用 BC/offline RL 初始化策略和价值函数、用离线策略给 online policy 提供 reference actions，并研究这些策略能否组合出更好的机器人操作 RL。",
      "innovations": [
        "像 Rainbow-DQN 一样对 demo-augmented RL 组件做系统分类和消融，比较单独与组合收益。",
        "结论指出直接 replay offline data 和 BC 初始化通常比更复杂 offline RL pretraining 更稳定、更有效。",
        "分析 prefill、auxiliary BC loss、offline RL finetuning、IBRL/CHEQ/residual action mixing 等多种组合。",
        "用 sample efficiency improvement 指标跨多个 ManiSkill 操作任务聚合比较学习速度和最终表现。"
      ],
      "implementation": [
        "基础 online RL 使用 SAC/TD3 actor-critic，并支持 high UTD、critic ensemble 和 replay buffer。",
        "Strategy A 从 offline demo buffer 与 online buffer 共同采样，或加入辅助 BC loss。",
        "Strategy B 用 BC、CQL、CalQL、MCQ 等方法预训练 policy/value，再进入 online finetuning。",
        "Strategy C 将 offline policy 动作与 online action 混合，包括高 Q 选择、线性插值和 residual RL。"
      ]
    },
    "en": {
      "title": "Rainbow-DemoRL: Combining Improvements in Demonstration-Augmented Reinforcement Learning",
      "authors": "Dwait Bhatt, Shih-Chieh Chou, Nikolay Atanasov",
      "status": "Summarized",
      "tags": [
        "BC+RL",
        "Demo-Augmented RL",
        "Sample Efficiency"
      ],
      "mainContent": "Rainbow-DemoRL systematically studies how offline demonstrations can improve the sample efficiency of online RL. It groups methods into direct reuse of offline data, BC/offline-RL initialization of policy and value functions, and reference actions from offline policies, then evaluates which combinations help robot manipulation RL.",
      "innovations": [
        "It provides a Rainbow-DQN-style taxonomy and ablation of demo-augmented RL components.",
        "The main finding is that offline-data replay and BC initialization often outperform more complex offline-RL pretraining for online sample efficiency.",
        "It compares prefill, auxiliary BC loss, offline-RL finetuning, and IBRL/CHEQ/residual action mixing combinations.",
        "A sample-efficiency-improvement metric aggregates learning speed and performance across ManiSkill manipulation tasks."
      ],
      "implementation": [
        "The base online RL algorithms are SAC/TD3 actor-critic variants with high UTD, critic ensembles, and replay buffers.",
        "Strategy A samples from both offline demonstration and online buffers, or adds an auxiliary BC loss.",
        "Strategy B pretrains policy/value functions with BC, CQL, CalQL, or MCQ before online finetuning.",
        "Strategy C mixes offline-policy actions with online actions through higher-Q selection, linear interpolation, or residual RL."
      ]
    }
  },
  {
    "id": "posterior-bc",
    "categories": [
      "imitation-teleop",
      "real-robot-rl"
    ],
    "pdf": "https://arxiv.org/pdf/2512.16911",
    "project": "https://openreview.net/forum?id=cC0N8uzLEP",
    "arxiv": "https://arxiv.org/abs/2512.16911",
    "year": "2026",
    "venue": "ICLR 2026 submission",
    "zh": {
      "title": "Posterior Behavioral Cloning: Pretraining BC Policies for Efficient RL Finetuning",
      "authors": "Anonymous authors",
      "status": "已整理",
      "tags": [
        "BC+RL",
        "Behavior Cloning",
        "RL Finetuning"
      ],
      "mainContent": "这篇论文研究 BC 预训练本身如何影响后续 RL finetuning。标准 BC 只拟合 demonstration 的经验动作分布，在低数据密度状态会过窄，导致 finetuning rollout 缺少有用探索。Posterior BC 改为拟合 demonstrator action 的 posterior distribution，让模型在不确定状态保持更高熵，从而为 RL 微调提供更好的动作覆盖。",
      "innovations": [
        "提出 posterior behavioral cloning，把预训练目标从克隆样本动作改为克隆示范者行为的后验分布。",
        "理论上证明 Posterior BC 能覆盖 demonstrator 的动作支持，同时不降低预训练策略性能。",
        "指出标准 BC 若想获得类似覆盖，需要付出明显采样成本或性能 tradeoff。",
        "把思想落到 diffusion policy 等 generative robot policy 上，提升多种 RL finetuning 算法的效率。"
      ],
      "implementation": [
        "在 tabular 分析中定义 demonstrator action coverage / gamma-sampler，作为 finetuning 能否匹配示范者的前提。",
        "用后验采样思想根据数据密度调节动作分布熵：高置信状态接近标准 BC，低置信状态保留更宽动作分布。",
        "在连续动作机器人任务中用生成式策略近似 demonstrator posterior，尤其适配 diffusion policy。",
        "随后对 Posterior BC 与标准 BC 初始化的策略分别做 RL 微调，比较样本效率和最终性能。"
      ]
    },
    "en": {
      "title": "Posterior Behavioral Cloning: Pretraining BC Policies for Efficient RL Finetuning",
      "authors": "Anonymous authors",
      "status": "Summarized",
      "tags": [
        "BC+RL",
        "Behavior Cloning",
        "RL Finetuning"
      ],
      "mainContent": "This paper studies how BC pretraining affects downstream RL finetuning. Standard BC fits the empirical action distribution in demonstrations and can become too narrow in low-data-density states, producing rollout data with poor exploration. Posterior BC instead fits the posterior distribution of demonstrator actions, keeping higher entropy where the demonstrator is uncertain and improving action coverage for RL.",
      "innovations": [
        "It proposes posterior behavioral cloning, changing the pretraining target from demonstration actions to the posterior over demonstrator behavior.",
        "The theory shows Posterior BC covers the demonstrator's action support without reducing pretrained policy performance.",
        "It explains why standard BC needs a sampling-cost or performance tradeoff to obtain similar coverage.",
        "The approach is instantiated with generative robot policies such as diffusion policies and improves multiple RL finetuning algorithms."
      ],
      "implementation": [
        "The tabular analysis defines demonstrator action coverage/gamma-samplers as a prerequisite for finetuning to match demonstrator behavior.",
        "Posterior sampling adjusts action entropy by data density: high-confidence states behave like standard BC, while uncertain states keep broader action distributions.",
        "For continuous-control robotics, a generative policy approximates the demonstrator posterior, especially with diffusion policies.",
        "Policies initialized by Posterior BC and standard BC are then finetuned with RL and compared on sample efficiency and final performance."
      ]
    }
  },
  {
    "id": "house-of-dextra",
    "categories": [
      "manipulation"
    ],
    "pdf": "https://houseofdextra.github.io",
    "project": "https://houseofdextra.github.io",
    "arxiv": "",
    "year": "2026",
    "venue": "ICLR 2026",
    "zh": {
      "title": "House of Dextra: Cross-Embodied Co-Design for Dexterous Hands",
      "authors": "Kehlani Fay, Darin Djapri, Anya Zorin, Ali El Lahib, Hao Su, Michael T. Tolley, James Clinton, Sha Yi, Xiaolong Wang",
      "status": "已整理",
      "tags": [
        "Reinforcement Learning",
        "Co-Design",
        "Dexterous Hands"
      ],
      "mainContent": "House of Dextra 研究灵巧手硬件形态和控制策略如何联合优化。框架在仿真中搜索手掌、手指数量、关节、指尖和长度等设计，同时用 morphology-conditioned cross-embodied control 快速评估设计，并把生成的手在 24 小时内制造和零样本迁移到真实世界。",
      "innovations": [
        "把 dexterous hand 的形态设计和 RL 控制作为 co-design 问题联合优化，而不是固定硬件后再训练策略。",
        "提供可制造的模块化手部 grammar，搜索空间覆盖 palm、finger count、servo count、link length 和 fingertip type。",
        "用 cross-embodiment policy 在多种手形态之间共享控制能力，避免为每个候选设计单独训练。",
        "从仿真设计、训练、制造到真实部署形成完整闭环，并在真实 in-hand rotation 上验证。"
      ],
      "implementation": [
        "每个手形态表示为带属性图，包含 palm node 与 finger-slot nodes；GNN 编码 morphology 供 design value network 使用。",
        "控制策略输入机器人关节状态、物体位姿和 one-hot morphology vector，并用 action mask 屏蔽不存在的执行器。",
        "外层用 graph heuristic search 和 design value network 搜索手形态，内层用 RL 训练/微调对应控制策略。",
        "生成设计遵守真实模块化硬件约束、碰撞几何和关节限制，便于 3D 打印/组装后真实部署。"
      ]
    },
    "en": {
      "title": "House of Dextra: Cross-Embodied Co-Design for Dexterous Hands",
      "authors": "Kehlani Fay, Darin Djapri, Anya Zorin, Ali El Lahib, Hao Su, Michael T. Tolley, James Clinton, Sha Yi, Xiaolong Wang",
      "status": "Summarized",
      "tags": [
        "Reinforcement Learning",
        "Co-Design",
        "Dexterous Hands"
      ],
      "mainContent": "House of Dextra jointly optimizes dexterous-hand hardware morphology and control policies. The framework searches over palms, finger counts, joints, fingertips, and lengths in simulation, evaluates designs with morphology-conditioned cross-embodied control, and fabricates/deploys generated hands zero-shot in the real world within 24 hours.",
      "innovations": [
        "It formulates dexterous hand morphology and RL control as a co-design problem instead of training policies only after hardware is fixed.",
        "A manufacturable modular hand grammar spans palm geometry, finger count, servo count, link length, and fingertip type.",
        "A cross-embodiment policy shares control ability across hand morphologies, avoiding separate full training for each candidate design.",
        "The pipeline closes the loop from simulation design and training to fabrication and real-world in-hand rotation deployment."
      ],
      "implementation": [
        "Each hand morphology is represented as an attributed graph with a palm node and finger-slot nodes; a GNN encodes morphology for a design value network.",
        "The control policy observes robot joints, object pose, and a one-hot morphology vector, with action masks disabling nonexistent actuators.",
        "The outer loop uses graph heuristic search and the design value network to search morphologies, while the inner loop trains or fine-tunes control with RL.",
        "Generated designs obey real modular hardware constraints, collision geometry, and joint limits for fabrication and deployment."
      ]
    }
  },
  {
    "id": "visual-dexterity",
    "categories": [
      "manipulation",
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2211.11744",
    "project": "https://arxiv.org/abs/2211.11744",
    "arxiv": "https://arxiv.org/abs/2211.11744",
    "year": "2023",
    "venue": "arXiv:2211.11744",
    "zh": {
      "title": "Visual Dexterity: In-Hand Reorientation of Novel and Complex Object Shapes",
      "authors": "Tao Chen, Megha Tippur, Siyang Wu, Vikash Kumar, Edward Adelson, Pulkit Agrawal",
      "status": "已整理",
      "tags": [
        "Sim-to-Real",
        "Visual Dexterity",
        "In-Hand Reorientation"
      ],
      "mainContent": "Visual Dexterity 研究如何用单个普通深度相机实现真实世界中复杂未知物体的手内重定向。策略在仿真中用 RL 训练，并在真实开源低成本 D'Claw 类硬件上部署，能够实时把手中物体旋转到任意目标姿态，尤其关注向下手掌持物时需要对抗重力的困难场景。",
      "innovations": [
        "不依赖多相机、专用触觉套件或每个物体单独训练的 pose estimator，只用单个 commodity depth camera。",
        "处理复杂、训练未见物体形状，并支持任意方向重定向，而不是只绕固定轴或只操作简单几何体。",
        "在向下手掌、物体悬空的设置中验证，比向上手掌更接近工具使用场景，也更考验 sim-to-real。",
        "用仿真 RL 学习动态接触策略，再迁移到低成本真实硬件，展示视觉闭环灵巧操作可行性。"
      ],
      "implementation": [
        "在仿真中训练全状态 RL controller 学习多指协调重定向，利用大规模交互解决接触丰富控制问题。",
        "视觉策略使用单个深度相机观测，学习从深度输入和本体状态到动作的闭环控制。",
        "训练中覆盖多种物体形状和目标姿态，使 policy 学习对新物体几何的泛化。",
        "真实评估使用开源硬件和真实未知物体，统计重定向时间、角度误差和掉落率等指标。"
      ]
    },
    "en": {
      "title": "Visual Dexterity: In-Hand Reorientation of Novel and Complex Object Shapes",
      "authors": "Tao Chen, Megha Tippur, Siyang Wu, Vikash Kumar, Edward Adelson, Pulkit Agrawal",
      "status": "Summarized",
      "tags": [
        "Sim-to-Real",
        "Visual Dexterity",
        "In-Hand Reorientation"
      ],
      "mainContent": "Visual Dexterity studies real-world in-hand reorientation of complex unseen objects using a single commodity depth camera. The policy is trained with RL in simulation and deployed on low-cost open-source D'Claw-like hardware, rotating held objects to arbitrary target orientations in real time, including the difficult downward-facing hand setting where the hand must counteract gravity.",
      "innovations": [
        "It avoids multi-camera setups, specialized tactile suites, and object-specific pose estimators, relying on one commodity depth camera.",
        "The system handles complex unseen object shapes and arbitrary target rotations rather than fixed-axis rotations or simple geometries.",
        "Evaluation includes a downward-facing, in-air hand configuration that is harder and more relevant to tool-use scenarios than upward-facing setups.",
        "Simulation RL learns dynamic contact-rich manipulation strategies that transfer to low-cost real hardware with visual feedback."
      ],
      "implementation": [
        "A full-state RL controller is trained in simulation to coordinate multi-finger reorientation under rich contacts.",
        "The visual policy uses a single depth camera and proprioception for closed-loop action prediction.",
        "Training covers diverse object shapes and target orientations to encourage generalization to novel geometry.",
        "Real-world evaluation uses open-source hardware and unseen objects, measuring reorientation time, angular error, and drop rate."
      ]
    }
  },
  {
    "id": "sim2real-humanoid-dexterous-rl",
    "categories": [
      "manipulation",
      "sim2real",
      "real-robot-rl"
    ],
    "pdf": "https://arxiv.org/pdf/2502.20396",
    "project": "https://toruowo.github.io/recipe",
    "arxiv": "https://arxiv.org/abs/2502.20396",
    "year": "2025",
    "venue": "CoRL 2025 / arXiv:2502.20396",
    "zh": {
      "title": "Sim-to-Real Reinforcement Learning for Vision-Based Dexterous Manipulation on Humanoids",
      "authors": "Toru Lin, Kartik Sachdev, Linxi \"Jim\" Fan, Jitendra Malik, Yuke Zhu",
      "status": "已整理",
      "tags": [
        "Sim-to-Real",
        "Dexterous Manipulation",
        "Humanoid"
      ],
      "mainContent": "这篇论文研究如何把视觉输入的 sim-to-real 强化学习扩展到低成本类人机器人上的接触丰富双手机巧操作。作者在 Fourier GR-1 humanoid 上训练 grasp-and-reach、box lift 和 bimanual handover 三类任务，输入来自第三视角/自视角 RGB-D 与本体感知，目标是在未见物体和不同灵巧手硬件上零样本迁移。",
      "innovations": [
        "提出一套面向 humanoid dexterous manipulation 的实用 sim-to-real RL recipe，把视觉感知、接触奖励、探索和硬件误差处理串成完整流程。",
        "用少量真实数据做自动 real-to-sim tuning，补偿低成本手臂/手部执行器中的控制噪声和动力学偏差。",
        "设计基于 contact 与 object goal 的通用 keypoint reward，使 grasp、lift、handover 等双手协调任务可以共享奖励结构。",
        "采用 divide-and-conquer policy distillation 与混合对象表示，让单任务专家知识蒸馏到泛化策略中，并显著提升未见物体 sim-to-real 成功率。"
      ],
      "implementation": [
        "先在仿真中建立 humanoid 双臂多指手环境，并用真实轨迹自动调节仿真控制参数，使 simulated rollout 更贴近真实硬件。",
        "针对每个任务/对象训练 RL expert policy，结合任务感知初始化、接触项、物体目标项和动作正则，降低长时程双手操作的探索难度。",
        "再用 expert rollouts 做 policy distillation，得到可处理多对象/多任务的 generalist policy。",
        "视觉对象表示同时使用低维目标特征和高维视觉特征，并分别做 modality-specific augmentation 来覆盖外观、深度和几何差异。",
        "真实部署时直接使用仿真训练策略，在不同真实物体、扰动和手部硬件变体上评估零样本迁移表现。"
      ]
    },
    "en": {
      "title": "Sim-to-Real Reinforcement Learning for Vision-Based Dexterous Manipulation on Humanoids",
      "authors": "Toru Lin, Kartik Sachdev, Linxi \"Jim\" Fan, Jitendra Malik, Yuke Zhu",
      "status": "Summarized",
      "tags": [
        "Sim-to-Real",
        "Dexterous Manipulation",
        "Humanoid"
      ],
      "mainContent": "This paper studies how to scale vision-based sim-to-real reinforcement learning to contact-rich bimanual dexterous manipulation on a low-cost humanoid robot. The authors train a Fourier GR-1 humanoid for grasp-and-reach, box lifting, and bimanual handover using third-view RGB-D, egocentric RGB-D, and proprioception, aiming for zero-shot transfer to unseen objects and hand hardware variations.",
      "innovations": [
        "It proposes a practical sim-to-real RL recipe for humanoid dexterous manipulation, connecting vision, contact-rich rewards, exploration, and hardware mismatch handling.",
        "An automated real-to-sim tuning module uses a small amount of real data to compensate for noisy low-cost actuators and dynamics mismatch.",
        "A generalized contact-and-object-goal keypoint reward supports grasping, lifting, and handover with one reusable reward structure.",
        "Divide-and-conquer policy distillation plus hybrid object representations transfer single-task expert knowledge into a generalist policy and improve unseen-object sim-to-real success."
      ],
      "implementation": [
        "The authors build a simulated humanoid bimanual multi-finger environment and tune simulation control parameters from real trajectories to better match hardware rollouts.",
        "RL expert policies are trained for task/object settings with task-aware initialization, contact rewards, object-goal rewards, and action regularization to ease exploration.",
        "Expert rollouts are distilled into a generalist policy that can handle multiple objects and tasks.",
        "Object perception combines compact low-dimensional object features with high-dimensional visual features, using modality-specific augmentation for appearance, depth, and geometry shifts.",
        "The final policy is deployed directly on real hardware and evaluated under novel objects, force disturbances, and hand hardware variations."
      ]
    }
  },
  {
    "id": "dual-arm-flat-object-grasp",
    "categories": [
      "manipulation"
    ],
    "pdf": "https://arxiv.org/pdf/2504.03500",
    "project": "https://sites.google.com/view/grasplargeflat",
    "arxiv": "https://arxiv.org/abs/2504.03500",
    "year": "2025",
    "venue": "arXiv:2504.03500",
    "zh": {
      "title": "Learning Dual-Arm Coordination for Grasping Large Flat Objects",
      "authors": "Yongliang Wang, Hamidreza Kasaei",
      "status": "已整理",
      "tags": [
        "Reinforcement Learning",
        "Dual-arm Manipulation",
        "Visual Policy"
      ],
      "mainContent": "这篇论文研究双臂机器人如何直接协同抓取平放在桌面上的大而薄物体，例如书本、键盘等。相比单臂需要把物体推到墙边或桌边，作者用 model-free DRL 学习两只机械臂同时抬起和夹取物体的策略，并在 Isaac Gym 与真实双臂机器人上验证零微调迁移。",
      "innovations": [
        "把大平面物体抓取从依赖环境约束的 push-to-wall / push-to-edge，改成双臂直接协同 lift-and-grasp。",
        "使用大型 grasp pose detection backbone 提取视觉特征，再让 PPO 策略学习双臂动作，减少从原始图像直接学习的样本压力。",
        "采用共享 Actor-Critic 层的 CNN-based PPO，使两个机械臂在同一策略结构中学习协调，而不是各自独立决策。",
        "策略能处理未见物体，并从 Isaac Gym 直接迁移到真实机器人，不需要额外真实数据或 fine-tuning。"
      ],
      "implementation": [
        "系统用上方 RGB-D 相机生成 color/depth heightmap 和目标 mask，把视觉观测建模为 MDP state。",
        "Angle-View Network / grasp pose detection backbone 从 RGB 图像抽取高维 grasp-related feature，作为 RL 模型的视觉状态表征。",
        "CNN-based PPO policy 输出双臂 primitive motion，训练时共享 actor-critic 特征层以学习协同行为。",
        "深度信息用于动作有效性检查和执行几何约束，视觉特征用于策略决策。",
        "训练与测试主要在 Isaac Gym 中完成，随后把策略部署到真实双臂系统，对常见与未见大平面物体测试成功率。"
      ]
    },
    "en": {
      "title": "Learning Dual-Arm Coordination for Grasping Large Flat Objects",
      "authors": "Yongliang Wang, Hamidreza Kasaei",
      "status": "Summarized",
      "tags": [
        "Reinforcement Learning",
        "Dual-arm Manipulation",
        "Visual Policy"
      ],
      "mainContent": "This paper studies how a dual-arm robot can directly coordinate to grasp large flat objects lying on a table, such as books or keyboards. Instead of pushing objects to a wall or table edge, the method uses model-free DRL to learn coordinated lifting and grasping with both arms, and validates zero-finetuning transfer from Isaac Gym to real robots.",
      "innovations": [
        "It replaces environment-dependent push-to-wall or push-to-edge strategies with direct dual-arm lift-and-grasp coordination.",
        "A large-scale grasp pose detection backbone extracts visual features before PPO policy learning, reducing the burden of learning directly from raw images.",
        "A CNN-based PPO policy with shared actor-critic layers lets both arms learn coordination inside one policy structure instead of acting independently.",
        "The policy generalizes to unseen objects and transfers from Isaac Gym to real robots without extra real-world data or fine-tuning."
      ],
      "implementation": [
        "An overhead RGB-D camera produces color and depth heightmaps plus a target mask, forming the visual state of the MDP.",
        "An Angle-View Network or grasp pose detection backbone extracts high-dimensional grasp-related features from RGB input for the RL model.",
        "A CNN-based PPO policy outputs dual-arm primitive motions and uses shared actor-critic feature layers to learn coordination.",
        "Depth information is used for action validation and geometric constraints, while learned visual features guide policy decisions.",
        "Training and testing are performed in Isaac Gym, followed by deployment on a real dual-arm robot for seen and unseen large flat objects."
      ]
    }
  },
  {
    "id": "human2sim2robot",
    "categories": [
      "manipulation",
      "sim2real",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2504.12609",
    "project": "https://human2sim2robot.github.io",
    "arxiv": "https://arxiv.org/abs/2504.12609",
    "year": "2025",
    "venue": "arXiv:2504.12609",
    "zh": {
      "title": "Crossing the Human-Robot Embodiment Gap with Sim-to-Real RL using One Human Demonstration",
      "authors": "Tyler Ga Wei Lum, Olivia Y. Lee, C. Karen Liu, Jeannette Bohg",
      "status": "已整理",
      "tags": [
        "Reinforcement Learning",
        "Human Demonstration",
        "Dexterous Manipulation"
      ],
      "mainContent": "这篇论文提出 HUMAN2SIM2ROBOT，用一段 RGB-D 人类演示视频训练真实灵巧手策略。方法不把人手动作直接 retarget 成机器人动作，而是从视频中提取物体 6D pose 轨迹和操作前人手姿态，在仿真里用 RL 学习适合机器人 embodiment 的策略，再零样本迁移到 Kuka + Allegro Hand 真机。",
      "innovations": [
        "用单个 human RGB-D demo 完成 real-to-sim-to-real 学习，避免可穿戴设备、遥操作和大规模机器人示范采集。",
        "把演示转化为 object-centric reward 和探索初始化，而不是强制机器人模仿人手逐帧轨迹，从而缓解人机 embodiment gap。",
        "pre-manipulation hand pose 只用于初始化和引导探索，允许 RL 找到更适合机器人手形态的接触方式。",
        "在 grasping、non-prehensile manipulation 和 multi-step task 中，相比 object-aware replay 与 imitation learning 在单演示设置下显著更强。"
      ],
      "implementation": [
        "从一段 RGB-D 人类演示中估计物体 6D pose trajectory，用它构造与机器人形态无关的 object-centric reward。",
        "从视频中提取操作前人手姿态，映射到仿真机器人初始接触/手部配置，用于提升 RL 探索效率。",
        "为目标任务快速建立 digital twin，并在仿真中做 domain randomization 和 RL policy training。",
        "策略学习过程不需要任务专用奖励调参，奖励主要来自物体轨迹匹配与任务完成度。",
        "训练出的 closed-loop policy 在真实 Kuka arm + Allegro Hand 上零样本部署，覆盖倒水、推转盒子、盘子入架等任务。"
      ]
    },
    "en": {
      "title": "Crossing the Human-Robot Embodiment Gap with Sim-to-Real RL using One Human Demonstration",
      "authors": "Tyler Ga Wei Lum, Olivia Y. Lee, C. Karen Liu, Jeannette Bohg",
      "status": "Summarized",
      "tags": [
        "Reinforcement Learning",
        "Human Demonstration",
        "Dexterous Manipulation"
      ],
      "mainContent": "This paper introduces HUMAN2SIM2ROBOT, which trains real dexterous-hand policies from a single RGB-D video of a human demonstration. Rather than retargeting human hand motion into robot actions, it extracts the object 6D pose trajectory and a pre-manipulation hand pose, uses them to guide RL in simulation, and transfers the resulting policy zero-shot to a Kuka arm with an Allegro Hand.",
      "innovations": [
        "It learns from one human RGB-D demo in a real-to-sim-to-real pipeline, avoiding wearables, teleoperation, and large-scale robot demonstrations.",
        "The demonstration becomes an object-centric reward and exploration guide, instead of a per-frame robot action target, reducing the human-robot embodiment gap.",
        "The pre-manipulation hand pose is used only for initialization and exploration guidance, letting RL discover contact strategies better suited to the robot hand.",
        "Across grasping, non-prehensile manipulation, and multi-step tasks, it substantially outperforms object-aware replay and imitation learning in the single-demo setting."
      ],
      "implementation": [
        "The method estimates an object 6D pose trajectory from one RGB-D human video and uses it to build an embodiment-agnostic object-centric reward.",
        "It extracts the pre-manipulation human hand pose and maps it into an initial robot contact/hand configuration in simulation to improve exploration.",
        "A digital twin is constructed for the task, followed by domain randomization and RL policy training in simulation.",
        "The learning process avoids task-specific reward tuning; reward mainly comes from object trajectory matching and task completion.",
        "The final closed-loop policy is deployed zero-shot on a real Kuka arm with an Allegro Hand for tasks such as pouring, box pivoting, and dish insertion."
      ]
    }
  },
  {
    "id": "pi05-open-world-vla",
    "categories": [
      "manipulation",
      "vla-world-model"
    ],
    "pdf": "https://arxiv.org/pdf/2504.16054",
    "project": "https://pi.website/blog/pi05",
    "arxiv": "https://arxiv.org/abs/2504.16054",
    "year": "2025",
    "venue": "arXiv:2504.16054",
    "zh": {
      "title": "π0.5: a Vision-Language-Action Model with Open-World Generalization",
      "authors": "Kevin Black, Noah Brown, James Darpinian, Karan Dhabalia, Danny Driess, Adnan Esmail, Michael Equi, Chelsea Finn, Niccolo Fusai, Manuel Y. Galliker, Dibya Ghosh, Lachy Groom, Karol Hausman, Brian Ichter, Szymon Jakubczak, Tim Jones, Liyiming Ke, Devin LeBlanc, Sergey Levine, Adrian Li-Bell, Mohith Mothukuri, Suraj Nair, Karl Pertsch, Allen Z. Ren, Lucy Xiaoyang Shi, Laura Smith, Jost Tobias Springenberg, Kyle Stachowicz, James Tanner, Quan Vuong, Homer Walke, Anna Walling, Haohuan Wang, Lili Yu, Ury Zhilinsky",
      "status": "已整理",
      "tags": [
        "VLA",
        "Open-world Generalization",
        "Co-training"
      ],
      "mainContent": "π0.5 在 π0 的基础上研究 VLA 如何泛化到真实家庭中的开放世界机器人任务。模型通过多机器人动作数据、高层语义子任务预测、网页视觉语言数据、目标检测和口头指令等异构数据共同训练，使移动操作机器人能在训练中未见过的家庭里完成清理厨房、整理卧室等 10 到 15 分钟长时程任务。",
      "innovations": [
        "把 VLA 训练扩展为 heterogeneous co-training，不只学习低层动作，也学习高层语义、对象知识和 web-scale 视觉语言能力。",
        "引入高层 semantic subtask prediction，让模型先判断下一步应做什么，再生成低层 action chunk，增强长时程任务组织能力。",
        "大量训练样本并非目标移动机器人数据，而来自其他机器人、网页数据和语义标注任务，证明跨数据源知识迁移对 open-world generalization 很关键。",
        "展示端到端学习系统可以在全新真实家庭中完成清洁厨房/卧室等复杂、多阶段、灵巧操作任务。"
      ],
      "implementation": [
        "模型继承 π0 的 VLA/action expert 结构，并加入能同时处理图像、语言、检测框、高层子任务标签和机器人动作的训练格式。",
        "第一阶段在混合数据上预训练，数据包括移动操作机器人、静态机器人、实验室任务、web 图文问答、目标定位和语义预测样本。",
        "第二阶段针对移动操作做 fine-tuning，同时包含低层动作示例和高层 semantic action 示例。",
        "推理时先根据当前观测和任务预测 semantic subtask，再以该子任务为条件输出低层动作 chunk。",
        "实验在全新家庭环境中评估厨房/卧室清理、挂毛巾、铺床等长时程任务，分析不同数据源和训练阶段的贡献。"
      ]
    },
    "en": {
      "title": "π0.5: a Vision-Language-Action Model with Open-World Generalization",
      "authors": "Kevin Black, Noah Brown, James Darpinian, Karan Dhabalia, Danny Driess, Adnan Esmail, Michael Equi, Chelsea Finn, Niccolo Fusai, Manuel Y. Galliker, Dibya Ghosh, Lachy Groom, Karol Hausman, Brian Ichter, Szymon Jakubczak, Tim Jones, Liyiming Ke, Devin LeBlanc, Sergey Levine, Adrian Li-Bell, Mohith Mothukuri, Suraj Nair, Karl Pertsch, Allen Z. Ren, Lucy Xiaoyang Shi, Laura Smith, Jost Tobias Springenberg, Kyle Stachowicz, James Tanner, Quan Vuong, Homer Walke, Anna Walling, Haohuan Wang, Lili Yu, Ury Zhilinsky",
      "status": "Summarized",
      "tags": [
        "VLA",
        "Open-world Generalization",
        "Co-training"
      ],
      "mainContent": "π0.5 extends π0 to study how VLA models can generalize to open-world robot tasks in real homes. The model is co-trained on heterogeneous data from multiple robots, high-level semantic subtask prediction, web vision-language data, object detection, verbal instructions, and low-level action data, enabling a mobile manipulator to clean kitchens and bedrooms in homes unseen during training.",
      "innovations": [
        "It expands VLA training into heterogeneous co-training, learning not only low-level actions but also high-level semantics, object knowledge, and web-scale vision-language capabilities.",
        "High-level semantic subtask prediction lets the model infer what to do next before generating low-level action chunks, improving long-horizon task organization.",
        "Most training examples are not target mobile-manipulator action data, showing that transfer from other robots, web data, and semantic tasks is essential for open-world generalization.",
        "The paper demonstrates an end-to-end learned system performing complex multi-stage household cleaning and manipulation in entirely new real homes."
      ],
      "implementation": [
        "The model builds on the π0 VLA/action-expert architecture and uses a training format that can represent images, language, detections, high-level subtask labels, and robot actions.",
        "The first phase pretrains on mixed data from mobile manipulators, static robots, lab tasks, web visual QA, object localization, and semantic prediction examples.",
        "The second phase fine-tunes for mobile manipulation with both low-level action examples and high-level semantic action labels.",
        "At inference, the model first predicts a semantic subtask from the current observation and task, then conditions low-level action chunk generation on that subtask.",
        "Experiments evaluate long-horizon tasks such as kitchen/bedroom cleaning, towel hanging, and bed making in unseen homes, with ablations over data sources and training stages."
      ]
    }
  },
  {
    "id": "symdex",
    "categories": [
      "manipulation"
    ],
    "pdf": "https://arxiv.org/pdf/2505.05287",
    "project": "https://supersglzc.github.io/projects/symdex/",
    "arxiv": "https://arxiv.org/abs/2505.05287",
    "year": "2025",
    "venue": "CoRL 2025 / arXiv:2505.05287",
    "zh": {
      "title": "Morphologically Symmetric Reinforcement Learning for Ambidextrous Bimanual Manipulation",
      "authors": "Zechu Li, Yufeng Jin, Daniel Ordonez Apraez, Claudio Semini, Puze Liu, Georgia Chalvatzaki",
      "status": "已整理",
      "tags": [
        "Reinforcement Learning",
        "Bimanual Manipulation",
        "Equivariant Policy"
      ],
      "mainContent": "这篇论文提出 SYMDEX，用机器人自身的左右形态对称性作为归纳偏置，学习能左右手互换执行任务的双臂/多臂灵巧操作策略。方法把复杂双手任务拆成每只手的子任务，用等变网络训练子策略，再蒸馏成全局 ambidextrous policy，并在六个仿真任务和两个真实任务上验证。",
      "innovations": [
        "把 morphological symmetry 系统引入双手/多臂 manipulation RL，使一侧手臂学到的经验天然迁移到对称的另一侧。",
        "把 MTMA-POMDP 中的 task-agent assignment 与 group action 结合，形式化说明全局策略应满足的等变约束。",
        "先学习每个子任务的 G-equivariant policy，再通过 teacher-student distillation 获得不固定左右手任务分配的全局策略。",
        "方法可扩展到四臂设置，并通过 curriculum learning 支持零样本 sim-to-real 部署。"
      ],
      "implementation": [
        "先把双手任务拆成 agent-subtask 对，每个子任务观察只包含对应手臂状态和任务相关物体状态，从而降低动作/观察维度和 credit assignment 难度。",
        "每个子任务策略使用 ESCNN 实现的 equivariant MLP，value function 使用 invariant MLP，并用 PPO 并行训练。",
        "收集子任务 expert policies 的状态-动作数据，训练全局 G-equivariant student policy，使其从观测中自动推断任务-手臂分配。",
        "sim-to-real curriculum 逐步加入场景级对称随机化、物体/物理参数随机化、碰撞惩罚和能量惩罚。",
        "评估任务包括 box-lift、table-clean、drawer-insert、threading、bowl-stir、handover，并在真实机器人上部署 box-lift 和 table-clean。"
      ]
    },
    "en": {
      "title": "Morphologically Symmetric Reinforcement Learning for Ambidextrous Bimanual Manipulation",
      "authors": "Zechu Li, Yufeng Jin, Daniel Ordonez Apraez, Claudio Semini, Puze Liu, Georgia Chalvatzaki",
      "status": "Summarized",
      "tags": [
        "Reinforcement Learning",
        "Bimanual Manipulation",
        "Equivariant Policy"
      ],
      "mainContent": "This paper introduces SYMDEX, which uses a robot's left-right morphological symmetry as an inductive bias for ambidextrous bimanual and multi-arm manipulation. It decomposes complex bimanual tasks into per-hand subtasks, trains equivariant subtask policies, distills them into a global ambidextrous policy, and validates the method on six simulated tasks plus two real-world deployments.",
      "innovations": [
        "It brings morphological symmetry into bimanual and multi-arm manipulation RL, letting experience from one limb transfer naturally to its symmetric counterpart.",
        "The paper formalizes task-agent assignment and group actions in an MTMA-POMDP to define the equivariance constraints required by the global policy.",
        "It first learns G-equivariant subtask policies and then distills them into a global policy that does not require fixed left/right task assignment.",
        "The framework extends to four-arm settings and uses curriculum learning for zero-shot sim-to-real deployment."
      ],
      "implementation": [
        "Bimanual tasks are decomposed into agent-subtask pairs; each subtask observation includes only the assigned arm state and task-relevant object state, reducing dimensionality and credit assignment difficulty.",
        "Each subtask policy uses an equivariant MLP implemented with ESCNN, while the value function uses an invariant MLP, trained in parallel with PPO.",
        "State-action data from subtask expert policies is collected to train a global G-equivariant student policy that infers task-arm assignment from observations.",
        "The sim-to-real curriculum gradually introduces scene-level symmetry randomization, object and physics randomization, collision penalties, and energy penalties.",
        "Evaluation covers box-lift, table-clean, drawer-insert, threading, bowl-stir, and handover, with real deployments on box-lift and table-clean."
      ]
    }
  },
  {
    "id": "spi-active",
    "categories": [
      "locomotion",
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2505.14266",
    "project": "https://lecar-lab.github.io/spi-active_/",
    "arxiv": "https://arxiv.org/abs/2505.14266",
    "year": "2025",
    "venue": "arXiv:2505.14266",
    "zh": {
      "title": "Sampling-Based System Identification with Active Exploration for Legged Robot Sim2Real Learning",
      "authors": "Nikhil Sobanbabu, Guanqi He, Tairan He, Yuxiang Yang, Guanya Shi",
      "status": "已整理",
      "tags": [
        "System Identification",
        "Sim-to-Real",
        "Legged Robots"
      ],
      "mainContent": "这篇论文提出 SPI-Active，用采样式系统辨识和主动探索缩小腿式机器人 RL 的 sim-to-real gap。方法不要求可微仿真器或真实力矩测量，而是在大规模并行仿真中采样物理参数，使仿真轨迹匹配真实轨迹；随后优化探索策略的命令序列，以最大化 Fisher Information，采集更有辨识价值的真实数据。",
      "innovations": [
        "把白盒动力学参数辨识做成 massively parallel sampling optimization，适合接触丰富、不可微、难测力矩的腿式系统。",
        "引入主动探索阶段，通过最大化 Fisher Information 让真实轨迹更能激发关键动力学参数，而不是依赖手写 motion script。",
        "探索不直接训练危险的底层动作，而是在预训练多行为 RL policy 的 command space 中优化，兼顾信息量和硬件安全。",
        "辨识后的参数提升下游 locomotion policy 的精准 sim-to-real transfer，在四足和人形机器人多个任务上优于 domain randomization 等基线。"
      ],
      "implementation": [
        "第一阶段用已有 RL policy 或运动先验在真实机器人上采集轨迹，并在 4096 个并行仿真环境中采样参数候选。",
        "参数识别目标是最小化真实轨迹与仿真 rollout 之间的状态预测误差，识别质量、惯量、摩擦、执行器相关参数等结构化物理量。",
        "第二阶段根据当前参数估计构造 Fisher Information 目标，优化多行为探索 policy 的输入 command sequence。",
        "机器人执行优化后的 command，采集更高信息量的新轨迹，再重复参数估计以获得更准确的模型。",
        "最终用辨识参数训练下游 locomotion controllers，并在 Go2 四足和 G1 人形上测试精确跳跃、绕杆、高精度速度跟踪等任务。"
      ]
    },
    "en": {
      "title": "Sampling-Based System Identification with Active Exploration for Legged Robot Sim2Real Learning",
      "authors": "Nikhil Sobanbabu, Guanqi He, Tairan He, Yuxiang Yang, Guanya Shi",
      "status": "Summarized",
      "tags": [
        "System Identification",
        "Sim-to-Real",
        "Legged Robots"
      ],
      "mainContent": "This paper proposes SPI-Active, a framework that narrows the sim-to-real gap for legged-robot RL through sampling-based system identification and active exploration. It does not require differentiable simulation or real torque measurements. Instead, it samples physical parameters in massively parallel simulation to match real trajectories, then optimizes exploration commands to maximize Fisher Information and collect more informative real data.",
      "innovations": [
        "It formulates white-box parameter identification as massively parallel sampling optimization, suitable for contact-rich legged systems without differentiable dynamics or torque sensing.",
        "An active exploration stage maximizes Fisher Information so real trajectories excite important dynamics parameters instead of relying on hand-written motion scripts.",
        "Exploration is optimized in the command space of a pretrained multi-behavior RL policy, improving informativeness while keeping deployment reliable.",
        "Identified parameters improve downstream locomotion sim-to-real transfer on quadruped and humanoid tasks, outperforming domain randomization and other baselines."
      ],
      "implementation": [
        "Stage one collects real trajectories using existing RL policies or motion priors, then samples candidate parameters across 4096 parallel simulation environments.",
        "The identification objective minimizes state prediction error between real trajectories and simulated rollouts, estimating structured physical parameters such as mass, inertia, friction, and actuator terms.",
        "Stage two builds a Fisher Information objective from the current parameter estimate and optimizes the command sequence of a multi-behavior exploration policy.",
        "The robot executes the optimized commands to collect more informative trajectories, and parameter estimation is repeated for a refined model.",
        "The final parameters are used to train downstream locomotion controllers, evaluated on Go2 and G1 robots for precise jumping, weave-pole navigation, and velocity tracking."
      ]
    }
  },
  {
    "id": "multimodal-visual-transformer-rl",
    "categories": [
      "manipulation",
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2507.09180",
    "project": "https://arxiv.org/abs/2507.09180",
    "arxiv": "https://arxiv.org/abs/2507.09180",
    "year": "2025",
    "venue": "arXiv:2507.09180",
    "zh": {
      "title": "Multimodal Visual Transformer for Sim2real Transfer in Visual Reinforcement Learning",
      "authors": "Zichun Xu, Yuntao Li, Zhaomin Wang, Lei Zhuang, Guocai Yang, Jingdong Zhao",
      "status": "已整理",
      "tags": [
        "Visual Reinforcement Learning",
        "RGB-D",
        "Sim-to-Real"
      ],
      "mainContent": "这篇论文研究视觉强化学习中 RGB-D 表征如何提升样本效率、泛化和 sim-to-real 迁移。作者提出一个轻量 ViT-based multimodal visual backbone，用不同 CNN stem 处理 RGB 与深度，再在 Transformer 中融合，并配合 masked/unmasked token 的对比学习和课程式 domain randomization，实现真实机器人零样本操作迁移。",
      "innovations": [
        "不是简单把深度拼成 RGB-D 通道，而是用独立 CNN stems 与 ViT self-attention 深度融合 RGB 和 depth modality。",
        "提出基于 masked 与 unmasked convolutional features 的 contrastive unsupervised learning，提升视觉 RL 的样本效率和任务相关注意力。",
        "结合 SVEA/DrQ-v2 风格的增强训练与课程式 domain randomization，让视觉 backbone 更关注物体和机器人等任务关键区域。",
        "验证训练好的视觉编码器和策略可以零样本迁移到真实操作任务中。"
      ],
      "implementation": [
        "RGB 图像和 depth 图像分别经过对应 convolution stem，加入二维位置编码和模态 embedding 后拼接送入 scalable ViT。",
        "ViT 输出 token 经 pooling 得到 visual representation，再接入 DrQ-v2 / off-policy actor-critic 框架训练策略。",
        "对比学习阶段先做 random shift，再在卷积特征层随机 mask，使用未遮挡和遮挡后的 latent 构造 query/key 对比损失。",
        "训练中用随机背景 overlay 等强增强替代单纯弱增强，并使用 SVEA 稳定 critic 更新。",
        "课程式 domain randomization 根据评估表现逐步开启，使策略先学会任务，再逐渐适应仿真到真实的外观差异。"
      ]
    },
    "en": {
      "title": "Multimodal Visual Transformer for Sim2real Transfer in Visual Reinforcement Learning",
      "authors": "Zichun Xu, Yuntao Li, Zhaomin Wang, Lei Zhuang, Guocai Yang, Jingdong Zhao",
      "status": "Summarized",
      "tags": [
        "Visual Reinforcement Learning",
        "RGB-D",
        "Sim-to-Real"
      ],
      "mainContent": "This paper studies how RGB-D representation learning can improve sample efficiency, generalization, and sim-to-real transfer in visual reinforcement learning. It proposes a lightweight ViT-based multimodal visual backbone with separate CNN stems for RGB and depth, Transformer-based fusion, masked/unmasked-token contrastive learning, and curriculum domain randomization for zero-shot real-robot transfer.",
      "innovations": [
        "Instead of early RGB-D channel concatenation, it uses separate CNN stems and ViT self-attention to deeply fuse RGB and depth modalities.",
        "A contrastive unsupervised objective built from masked and unmasked convolutional features improves visual RL sample efficiency and task-relevant attention.",
        "SVEA/DrQ-v2-style augmentation plus curriculum domain randomization encourages the visual backbone to focus on objects and robot-relevant regions.",
        "The trained visual encoder and policy transfer zero-shot to real-world manipulation tasks."
      ],
      "implementation": [
        "RGB and depth images are processed by separate convolution stems, augmented with 2D positional encodings and modality embeddings, then concatenated for a scalable ViT.",
        "ViT tokens are pooled into a visual representation and plugged into a DrQ-v2/off-policy actor-critic RL framework.",
        "For contrastive learning, random shift is applied first; convolutional features are then randomly masked, and masked/unmasked latents form query-key pairs.",
        "Training uses strong augmentation such as random background overlay and SVEA-style critic stabilization.",
        "Curriculum domain randomization is enabled according to evaluation performance, letting the policy learn the task first and then adapt to visual sim-to-real variation."
      ]
    }
  },
  {
    "id": "pace-legged-sim2real",
    "categories": [
      "locomotion",
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2509.06342",
    "project": "https://arxiv.org/abs/2509.06342",
    "arxiv": "https://arxiv.org/abs/2509.06342",
    "year": "2025",
    "venue": "IJRR submission / arXiv:2509.06342",
    "zh": {
      "title": "Towards bridging the gap: Systematic sim-to-real transfer for diverse legged robots",
      "authors": "Filip Bjelonic, Fabian Tischhauser, Marco Hutter",
      "status": "已整理",
      "tags": [
        "Dynamics Identification",
        "Legged Locomotion",
        "Energy Model"
      ],
      "mainContent": "这篇论文提出 PACE，一套面向多种腿式机器人的系统化 sim-to-real RL 管线。核心是先从固定基座、腿部悬空的真实轨迹中辨识少量关键动力学参数，再把 PMSM 电机的物理能耗模型纳入奖励，让训练出的盲 locomotion policy 同时具备可迁移性和能效。",
      "innovations": [
        "用 bottom-up 动力学辨识流程，从单执行器、整机悬空轨迹到地面 locomotion 逐级验证 simulator alignment。",
        "只辨识紧凑参数集，包括 joint armature/inertia、viscous damping、Coulomb friction、joint bias 和全局 delay，避免高维随机化。",
        "把 PMSM 的电气损耗、机械功和重力势能功写成物理 grounded energetic reward，用更少 reward terms 训练高效步态。",
        "在多个主平台和十多个额外机器人上验证，不随机化动力学参数也能可靠迁移，并降低 ANYmal 的 Cost of Transport。"
      ],
      "implementation": [
        "真实数据采集采用固定基座、腿部悬空的 chirp joint target，避免接触外力和 base motion 混入辨识问题。",
        "仿真中重放真实 joint targets，用 CMA-ES 在大量并行环境中优化参数，使模拟关节轨迹最小化与真实轨迹的均方误差。",
        "策略训练阶段不做 dynamics randomization，只随机化任务推力、地面摩擦和地形，policy 使用本体观测，critic 使用 privileged state。",
        "控制输出为相对默认姿态的关节位置偏移，并通过硬限位安全 PD saturation 保护硬件。",
        "奖励只包含速度跟踪、能耗、碰撞和足端触地速度四类项，其中能耗项由电阻损耗、机械功率和势能功共同构成。"
      ]
    },
    "en": {
      "title": "Towards bridging the gap: Systematic sim-to-real transfer for diverse legged robots",
      "authors": "Filip Bjelonic, Fabian Tischhauser, Marco Hutter",
      "status": "Summarized",
      "tags": [
        "Dynamics Identification",
        "Legged Locomotion",
        "Energy Model"
      ],
      "mainContent": "This paper proposes PACE, a systematic sim-to-real RL pipeline for diverse legged robots. It first identifies a compact set of key dynamics parameters from fixed-base, legs-in-air real trajectories, then incorporates a physics-grounded PMSM motor energy model into the reward so blind locomotion policies become both transferable and energy efficient.",
      "innovations": [
        "A bottom-up dynamics-identification workflow validates simulator alignment from single actuators to full in-air robot trajectories and on-ground locomotion.",
        "Only a compact parameter set is identified: joint armature/inertia, viscous damping, Coulomb friction, joint bias, and a global delay, avoiding high-dimensional dynamics randomization.",
        "A PMSM-based energetic reward models electrical dissipation, mechanical power, and potential power with physical grounding and fewer reward terms.",
        "The method transfers reliably across several primary platforms and more than ten additional robots without dynamics randomization, while reducing ANYmal's Cost of Transport."
      ],
      "implementation": [
        "Real data is collected with a fixed base and free-swinging legs using chirp joint targets, avoiding contact forces and base motion in the identification problem.",
        "Simulation replays the real joint targets, and CMA-ES optimizes parameters across many parallel environments to minimize mean squared error between simulated and real joint trajectories.",
        "Policy training uses no dynamics randomization; only task pushes, ground friction, and terrain are randomized. The policy observes proprioception while the critic gets privileged state.",
        "Actions are joint-position offsets relative to a default posture, executed through hard-limit-safe PD saturation to protect hardware.",
        "The reward contains only velocity tracking, energy, collisions, and touchdown velocity, with energy combining Joule losses, mechanical power, and gravitational potential power."
      ]
    }
  },
  {
    "id": "anyteleop",
    "categories": [
      "manipulation",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2307.04577",
    "project": "https://yzqin.github.io/anyteleop/",
    "arxiv": "https://arxiv.org/abs/2307.04577",
    "year": "2024",
    "venue": "arXiv:2307.04577",
    "zh": {
      "title": "AnyTeleop: A General Vision-Based Dexterous Robot Arm-Hand Teleoperation System",
      "authors": "Yuzhe Qin, Wei Yang, Binghao Huang, Karl Van Wyk, Hao Su, Xiaolong Wang, Yu-Wei Chao, Dieter Fox",
      "status": "已整理",
      "tags": [
        "Teleoperation",
        "Behavior Cloning Data",
        "Dexterous Arm-Hand"
      ],
      "mainContent": "AnyTeleop 提出一个通用视觉遥操作系统，用于不同机械臂、灵巧手、仿真器和真实硬件中的数据采集与控制。它面向大规模 robot teaching / imitation learning 数据收集，支持 IsaacGym、SAPIEN 和真实世界，能够用低成本 RGB/RGB-D 相机完成 dexterous arm-hand teleoperation，并支持远程和多人协作遥操作。",
      "innovations": [
        "提出统一遥操作框架，支持任意 arm-hand 组合、任意现实环境（仿真或真实）、任意相机配置和多 operator-robot 协作设置。",
        "运动重定向和碰撞避免模块不依赖针对特定机器人训练的模型，只需机器人 URDF/运动学模型即可适配新硬件。",
        "提供基于浏览器的 web visualizer，使远程遥操作和仿真/真机可视化解耦于特定 simulator 或硬件驱动。",
        "相比专门为某个机器人或仿真器设计的系统，AnyTeleop 在真实任务成功率和用遥操作数据训练 imitation learning policy 的效果上都有提升。"
      ],
      "implementation": [
        "系统由 camera driver、human hand detection、hand pose retargeting、motion generation 和 web visualization 等模块组成，各模块通过统一接口解耦。",
        "视觉输入支持 RGB/RGB-D、单相机或多相机；多相机设置通过检测融合提高姿态估计稳定性，并降低部署标定要求。",
        "retargeting 模块把人手腕部和手指姿态映射到不同机器人手形态；motion generation 使用 CUDA/GPU 加速的几何查询和 CuRobo 生成平滑、无碰撞关节轨迹。",
        "系统可连接不同 simulator 或真实机器人后端，同一套软件栈用于仿真数据采集、真实遥操作和协作操作场景。",
        "采集到的遥操作 demonstration 可用于 imitation learning / BC，论文在仿真任务中比较了不同遥操作系统采集数据训练出的 policy 成功率。"
      ]
    },
    "en": {
      "title": "AnyTeleop: A General Vision-Based Dexterous Robot Arm-Hand Teleoperation System",
      "authors": "Yuzhe Qin, Wei Yang, Binghao Huang, Karl Van Wyk, Hao Su, Xiaolong Wang, Yu-Wei Chao, Dieter Fox",
      "status": "Summarized",
      "tags": [
        "Teleoperation",
        "Behavior Cloning Data",
        "Dexterous Arm-Hand"
      ],
      "mainContent": "AnyTeleop proposes a general vision-based teleoperation system for data collection and control across different robot arms, dexterous hands, simulators, and real hardware. It targets scalable robot teaching and imitation-learning data collection, supporting IsaacGym, SAPIEN, and real-world deployment with low-cost RGB/RGB-D cameras, remote operation, and collaborative teleoperation.",
      "innovations": [
        "It provides a unified teleoperation framework for arbitrary arm-hand systems, different realities, flexible camera configurations, and multi operator-robot partnerships.",
        "Retargeting and collision avoidance are learning-free and adapt to new robots from kinematic models or URDF files, rather than requiring robot-specific trained models.",
        "A browser-based web visualizer decouples remote visual feedback from specific simulators or hardware drivers.",
        "Compared with systems specialized for one robot or simulator, AnyTeleop improves real-world task success and the downstream imitation-learning performance of collected demonstrations."
      ],
      "implementation": [
        "The system is composed of camera drivers, human hand detection, hand pose retargeting, motion generation, and web visualization, connected through standardized interfaces.",
        "Vision input supports RGB or RGB-D, single-camera or multi-camera setups; multi-camera detection fusion improves pose stability and reduces calibration burden.",
        "The retargeting module maps human wrist and finger poses to different robot hands, while the motion generation module uses GPU-accelerated geometry queries and CuRobo for smooth collision-free joint trajectories.",
        "The same software stack connects to different simulators or real robot backends for simulation data collection, real teleoperation, and collaborative manipulation.",
        "Collected teleoperation demonstrations can be used for imitation learning or behavior cloning, and the paper compares downstream policy success from different teleoperation systems."
      ]
    }
  },
  {
    "id": "rma-rapid-motor-adaptation-for-legged-robots",
    "categories": [
      "locomotion",
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2107.04034",
    "project": "https://ashish-kmr.github.io/rma-legged-robots/",
    "arxiv": "https://arxiv.org/abs/2107.04034",
    "year": "2021",
    "venue": "Robotics: Science and Systems (RSS) 2021",
    "zh": {
      "title": "RMA: Rapid Motor Adaptation for Legged Robots",
      "authors": "Ashish Kumar, Zipeng Fu, Deepak Pathak, Jitendra Malik",
      "institutions": "University of California, Berkeley; Carnegie Mellon University; Facebook AI Research",
      "status": "全文已精读（含补充材料）",
      "takeaway": "最该记住的是：RMA 先用 PPO 联合训练读取仿真特权参数的环境编码器 \\(\\mu\\) 与直接输出关节目标的 base policy \\(\\pi\\)，再冻结两者，用机器人最近 0.5 s 的状态—动作历史训练 \\(\\phi\\) 回归同一个 8 维 extrinsics；部署时只在线重估 latent，不更新任何网络权重。",
      "tags": [
        "Quadruped Locomotion",
        "Rapid Adaptation",
        "Privileged Learning",
        "PPO",
        "On-Policy Supervision",
        "Latent System Identification",
        "Domain Randomization",
        "Sim-to-Real"
      ],
      "mainContent": "RMA 研究纯本体感知的 Unitree A1 如何在未知且会变化的载荷、电机强度、摩擦和地形条件下快速调整运动，而不依赖真机微调、参考动作或预定义足端轨迹。第一阶段用 PPO 联合训练特权环境编码器 \\(\\mu:e_t\\mapsto z_t\\) 与 base policy \\(\\pi(x_t,a_{t-1},z_t)\\)；第二阶段冻结二者，让 adaptation module \\(\\phi\\) 在自己预测的 latent 所诱导的状态分布上，仅用最近 0.5 s 状态—动作历史回归 \\(z_t\\)。部署时 \\(\\phi\\) 以 10 Hz 更新 8 维 latent，\\(\\pi\\) 以 100 Hz 直接输出 12 维关节位置目标，再由固定 PD 转为力矩，全程没有在线梯度更新。论文的仿真多随机种子实验及小样本真机试验支持适应模块优于普通 domain randomization、显式 SysID、AWR 和无适应版本，但系统只会无视觉地向前行走、只能在扰动发生后反应，且自然地形试验规模和对比基线有限。",
      "innovations": [
        "核心方法：把控制拆成固定的快速 base policy 与较慢的 adaptation module。特权环境参数先被压缩成只需服务于控制回报的低维 extrinsics，部署时再由历史模块估计该表征；所谓 rapid online adaptation 是在线 latent inference，而不是真机在线 RL、参数优化或网络微调。",
        "关键训练设计：第二阶段不使用由真实 \\(z_t\\) 产生的完美专家轨迹，而让随机初始化或尚不准确的 \\(\\phi\\) 实际驱动冻结的 \\(\\pi\\) rollout，再用仿真中的 \\(\\mu(e_t)\\) 标注这些访问状态。这是 DAgger-style 的 on-policy 监督，专门缓解部署时 latent 误差造成的分布偏移；补充算法每轮清空 \\(D_2\\)，没有证明使用了经典 DAgger 的永久数据聚合。",
        "表征设计：不强迫历史网络恢复可解释的质量、摩擦等 17 维物理参数，而回归 PPO 为控制自动学习的 8 维 \\(z_t\\)。因此 \\(z_t\\) 可把物理上不同但需要相似控制响应的条件映射到相近区域，不过其各维没有明确物理语义，也不能当作准确的参数辨识结果。",
        "工程贡献：利用环境条件变化慢、关节状态变化快的时间尺度差异，让 \\(\\phi\\) 与 \\(\\pi\\) 分别以 10 Hz 和 100 Hz 异步运行，base policy 始终读取最新 latent；该设计在 A1 的有限板载算力上保留了高频控制。",
        "辅助系统设计：用 fractal terrain、参数随机化、能耗与冲击相关奖励及固定惩罚课程，从零学出直接关节位置控制器，不使用 reference trajectory、PMTG、解析 IK 或专门拟合的 actuator model。这些奖励、PPO、CNN、PD 和 domain randomization 本身不是本文新算法。",
        "贡献边界：特权表示再由本体历史推断的范式与 Lee et al. 2020 高度相关；RMA 更鲜明的结构是保留冻结的 direct-joint base policy，只把特权 encoder 替换成历史 adaptation module，并进行双频异步部署，不能把整套 privileged-latent 思路都视为首次提出。"
      ],
      "implementation": [
        "任务没有速度或转向 command：奖励只鼓励沿机身前向移动，前向项在 \\(0.35\\,\\mathrm{m/s}\\) 饱和。当前状态 \\(x_t\\in\\mathbb R^{30}\\) 由 12 维关节位置、12 维关节速度、torso roll/pitch 和 4 维二值足端接触组成，不含基座线速度、角速度或视觉；base policy 另接收上一动作和环境 latent。",
        "仿真特权向量 \\(e_t\\in\\mathbb R^{17}\\) 包括载荷质量及其机身位置合计 3 维、12 个 motor-strength 系数、1 维摩擦和 1 维局部地形高度。局部高度取四足下方高度的最大值并量化到小数点后一位；训练还随机化 \\(K_p,K_d\\)，但论文没有把二者列入 \\(e_t\\)，因此 base policy 必须对这部分变化保持鲁棒。",
        "环境编码器 \\(\\mu\\) 是 hidden sizes 256、128 的 3-layer MLP，将 17 维 \\(e_t\\) 压成 8 维 \\(z_t\\)。base policy 是论文所称的 3-layer MLP，hidden width 为 128；它接收 \\(30+12+8=50\\) 维输入并输出 12 个 desired joint positions，而不是足端残差或直接力矩。随后 \\(\\tau=K_p(\\hat q-q)+K_d(0-\\dot q)\\)，实机固定使用 \\(K_p=55,K_d=0.8\\)。",
        "阶段 1 从头联合训练 \\(\\mu\\) 与 \\(\\pi\\)：每步先算 \\(z_t=\\mu(e_t)\\)，再算 \\(a_t=\\pi(x_t,a_{t-1},z_t)\\)，由 PD 和 RaiSim 推进环境，最后用 PPO 回传到两个网络。训练 15,000 iterations，每轮 80,000 transitions、4 个 minibatches 并重复 4 rounds，共约 12 亿仿真步、24 小时；硬件只写 ordinary desktop 和 1 GPU，未给具体型号。",
        "PPO 补充细节为：surrogate policy loss 加 \\(0.5\\) 倍 value loss，ratio clip 为 \\([0.8,1.2]\\)，\\(\\gamma=0.998\\)、GAE \\(\\lambda=0.95\\)，Adam learning rate \\(5\\times10^{-4}\\)、\\(\\beta=(0.9,0.999)\\)、\\(\\epsilon=10^{-8}\\)。策略使用参数化 Gaussian action，取消 entropy regularization，但把标准差下限设为 0.2；论文未给 critic 架构、观测归一化、动作缩放或关节限幅等细节。",
        "奖励由 forward、横向速度/yaw、机械功、ground-impact 变化、torque 变化、action magnitude、joint speed、roll/pitch、竖直运动和接触足滑移十项组成，对应 scale 为 20、21、0.002、0.02、0.001、0.07、0.002、1.5、2.0、0.8。正文把第 9 项命名为 Z Acceleration，但公式实际惩罚 \\(v_z^2\\)；惩罚项 3–10 另乘从 \\(k_0=0.03\\) 按 \\(k_{t+1}=k_t^{0.997}\\) 增至 1 的固定课程，同时线性扩大质量、摩擦和 motor strength 随机化，terrain difficulty 从一开始固定随机采样，没有地形课程。",
        "RaiSim 使用 A1 URDF 与 fractal terrain，参数为 octaves 2、lacunarity 2.0、gain 0.25、z-scale 0.27。训练范围包括 friction \\([0.05,4.5]\\)、\\(K_p\\) \\([50,60]\\)、\\(K_d\\) \\([0.4,0.8]\\)、payload \\([0,6]\\) kg 和 motor strength \\([0.90,1.10]\\)，并以每步 0.004 概率在 episode 内重采样；最大 1,000 步，base height 低于 0.28 m、roll 超过 0.4 rad 或 pitch 超过 0.2 rad 时提前终止。复现警告：正文同时写 policy 100 Hz 和 simulation time step 0.025 s，两者数值不一致；Table II 的 Center of Mass 单位与数值也可疑，需以代码核对。",
        "adaptation module 的输入是过去 50 步、约 0.5 s 的 \\(x\\) 与 \\(a\\) 历史。每个 42 维 state-action 对先经 2-layer MLP 嵌入到 32 维，再经三层 1-D CNN；各层 \\([C_{in},C_{out},kernel,stride]\\) 为 \\([32,32,8,4]\\)、\\([32,32,5,1]\\)、\\([32,32,5,1]\\)，flatten 后线性映射到 8 维 \\(\\hat z_t\\)。论文未说明 episode 开始不足 50 帧时如何 padding 或初始化 latent。",
        "阶段 2 冻结 \\(\\pi\\) 和 \\(\\mu\\)，随机初始化 \\(\\phi\\)。rollout 始终执行 \\(a_t=\\pi(x_t,a_{t-1},\\hat z_t)\\)，同时用 \\(z_t=\\mu(e_t)\\) 作为标签，只最小化 \\(\\|\\phi(H_t)-\\mu(e_t)\\|_2^2\\)；没有 PPO、action imitation loss 或继续更新 base policy。训练 1,000 iterations，每轮 80,000 samples、4 minibatches，Adam learning rate \\(5\\times10^{-4}\\)，约 8,000 万仿真步和 3 小时。",
        "真机部署删除 \\(e_t\\)、\\(\\mu\\)、critic、reward 和所有优化器，只保留 \\(\\phi+\\pi+\\) 固定关节 PD。电机编码器提供关节位置/速度，IMU 提供 roll/pitch，足端传感器提供接触；\\(\\phi\\) 以 10 Hz 从最近历史刷新共享的 \\(\\hat z\\)，\\(\\pi\\) 以 100 Hz 读取最新 \\(\\hat z\\) 输出关节目标。网络权重全程冻结，因此更准确的说法是 online latent/state estimation，而非 online learning。",
        "仿真主表在 3 个随机初始化、每个 1,000 episodes 上报告：RMA success 73.5%、TTF 0.85，接近使用真实 \\(z_t\\) 的 Expert 76.2%/0.86，并高于 Robust domain randomization 62.4%、SysID 56.5%、AWR 41.7% 和 RMA without adaptation 52.1%。这支持 learned latent 与 adaptation module 的价值，但不同 baseline 的失效不能证明所有显式 SysID、history policy 或 domain-randomized policy 一般都会更差。",
        "真机上，同一策略报告 15 cm step-down 80%、memory mattress 与 uneven foam 100%、oily patch 90%，并能携带最高 12 kg；outdoor 中 hiking stairs 为 70%，cement/pebble pile 为 80%，若干沙地、泥地和植被任务报告无失败。室内多数结果仅 5 trials，严重失败的 baseline 甚至只做 2 trials，部分户外任务未给总次数；真实对比也只含 A1 原厂控制器和无 adaptation 版本，因此论文证明的是有力的概念验证，而不是大样本可靠性或全面 SOTA。",
        "主要局限是 blind、reactive 且任务单一：机器人必须先发生滑移、下沉或姿态变化，历史模块才有证据改变 latent，无法提前看到台阶或规划落脚；论文也只训练固定向前 locomotion，没有速度跟踪、转向、多 gait、多机器人验证或形式化安全保证。项目页当前的 Code 链接指向一个后来用于 Cross-Modal Supervision 的衍生仓库，不能无条件视为原始 2021 实验的完整冻结代码。"
      ]
    },
    "en": {
      "title": "RMA: Rapid Motor Adaptation for Legged Robots",
      "authors": "Ashish Kumar, Zipeng Fu, Deepak Pathak, Jitendra Malik",
      "institutions": "University of California, Berkeley; Carnegie Mellon University; Facebook AI Research",
      "status": "Full paper and supplementary reviewed",
      "takeaway": "The key point is that RMA first jointly trains a privileged environment encoder \\(\\mu\\) and a direct-joint base policy \\(\\pi\\) with PPO, then freezes both and trains \\(\\phi\\) to regress the same 8-dimensional extrinsics from the latest 0.5 s of state-action history; deployment updates only the latent online, never the network weights.",
      "tags": [
        "Quadruped Locomotion",
        "Rapid Adaptation",
        "Privileged Learning",
        "PPO",
        "On-Policy Supervision",
        "Latent System Identification",
        "Domain Randomization",
        "Sim-to-Real"
      ],
      "mainContent": "RMA studies how a proprioceptive Unitree A1 can rapidly adjust to unknown and changing payload, motor strength, friction, and terrain without hardware fine-tuning, reference motions, or predefined foot trajectories. Phase 1 jointly trains a privileged environment encoder \\(\\mu:e_t\\mapsto z_t\\) and base policy \\(\\pi(x_t,a_{t-1},z_t)\\) with PPO; Phase 2 freezes both and trains an adaptation module \\(\\phi\\), on the state distribution induced by its own predicted latent, to recover \\(z_t\\) from the latest 0.5 s of state-action history. At deployment, \\(\\phi\\) updates the 8-dimensional latent at 10 Hz, while \\(\\pi\\) directly predicts 12 joint-position targets at 100 Hz for a fixed PD controller, with no online gradient update. Multi-seed simulation experiments and small real-robot trials support improvements over ordinary domain randomization, explicit SysID, AWR, and a no-adaptation ablation, but the system only walks forward blindly, reacts after disturbances occur, and has limited real-world sample sizes and baseline coverage.",
      "innovations": [
        "Core method: control is decomposed into a fixed fast base policy and a slower adaptation module. Privileged environment parameters are compressed into low-dimensional extrinsics optimized only for control return, and deployment estimates that representation from history; rapid online adaptation means online latent inference, not hardware-side RL, parameter optimization, or weight fine-tuning.",
        "Key training design: Phase 2 does not rely on perfect expert trajectories generated with the true \\(z_t\\). Instead, the randomly initialized or still-imperfect \\(\\phi\\) actually drives the frozen \\(\\pi\\), and simulation labels the visited states with \\(\\mu(e_t)\\). This is DAgger-style on-policy supervision aimed at covariate shift from latent error; the supplementary algorithm clears \\(D_2\\) each iteration and does not establish permanent dataset aggregation as in classical DAgger.",
        "Representation design: the history network is not forced to recover interpretable mass, friction, and other 17-dimensional physical parameters. It regresses the 8-dimensional \\(z_t\\) learned by PPO, allowing physically different conditions that require similar control responses to share a representation; individual latent coordinates have no declared physical meaning and are not accurate parameter estimates.",
        "Engineering contribution: because environmental conditions change slowly while joint state changes quickly, \\(\\phi\\) and \\(\\pi\\) run asynchronously at 10 Hz and 100 Hz, respectively, and the base policy always consumes the latest latent. This preserves high-rate control on the A1's limited onboard compute.",
        "Supporting system design: fractal terrain, parameter randomization, work- and impact-related rewards, and a fixed penalty curriculum learn a direct joint-position controller from scratch without reference trajectories, PMTG, analytical IK, or a separately fitted actuator model. The rewards, PPO, CNN, PD, and domain randomization are not individually new algorithms.",
        "Contribution boundary: the privileged-representation-then-history-inference pattern is closely related to Lee et al. 2020. RMA's more distinctive formulation keeps a frozen direct-joint base policy, replaces only the privileged encoder with a history adaptation module, and deploys the two modules asynchronously; the broader privileged-latent idea should not be treated as wholly unprecedented."
      ],
      "implementation": [
        "There is no target-speed or turning command: the reward only encourages forward motion, with the forward term saturating at \\(0.35\\,\\mathrm{m/s}\\). The current state \\(x_t\\in\\mathbb R^{30}\\) contains 12 joint positions, 12 joint velocities, torso roll/pitch, and four binary foot-contact indicators, with no base linear velocity, angular velocity, or vision; the base policy additionally receives the previous action and environment latent.",
        "The privileged simulation vector \\(e_t\\in\\mathbb R^{17}\\) contains payload mass and its body location in three dimensions total, 12 motor-strength coefficients, scalar friction, and scalar local terrain height. Local height is the maximum beneath the four feet after discretization to one decimal place. Training also randomizes \\(K_p,K_d\\), but the paper does not include them in \\(e_t\\), so the base policy must remain robust to those variations.",
        "The environment encoder \\(\\mu\\) is a three-layer MLP with hidden sizes 256 and 128 that maps 17-dimensional \\(e_t\\) to 8-dimensional \\(z_t\\). The base policy is described as a three-layer MLP with hidden width 128; it receives \\(30+12+8=50\\) inputs and outputs 12 desired joint positions, not foot residuals or direct torque. The controller then applies \\(\\tau=K_p(\\hat q-q)+K_d(0-\\dot q)\\), with fixed hardware gains \\(K_p=55,K_d=0.8\\).",
        "Phase 1 initializes and jointly trains \\(\\mu\\) and \\(\\pi\\): each step computes \\(z_t=\\mu(e_t)\\), then \\(a_t=\\pi(x_t,a_{t-1},z_t)\\), advances RaiSim through PD control, and backpropagates PPO through both networks. Training uses 15,000 iterations, 80,000 transitions per iteration, four minibatches and four optimization rounds, totaling about 1.2 billion simulated steps and 24 hours; the paper states only an ordinary desktop and one GPU, without exact hardware models.",
        "Supplementary PPO details are surrogate policy loss plus \\(0.5\\) times value loss, ratio clipping to \\([0.8,1.2]\\), \\(\\gamma=0.998\\), GAE \\(\\lambda=0.95\\), and Adam with learning rate \\(5\\times10^{-4}\\), \\(\\beta=(0.9,0.999)\\), and \\(\\epsilon=10^{-8}\\). The policy uses a parameterized Gaussian action distribution, omits entropy regularization, and constrains its standard deviation to at least 0.2; critic architecture, observation normalization, action scaling, and joint-limit handling are not specified.",
        "The ten reward terms cover forward motion, lateral velocity/yaw, mechanical work, changes in ground impact, changes in torque, action magnitude, joint speed, roll/pitch, vertical motion, and stance-foot slip, with scales 20, 21, 0.002, 0.02, 0.001, 0.07, 0.002, 1.5, 2.0, and 0.8. The item named Z Acceleration actually penalizes \\(v_z^2\\) in the formula. Penalty terms 3–10 are additionally multiplied by a fixed curriculum that grows from \\(k_0=0.03\\) toward one via \\(k_{t+1}=k_t^{0.997}\\); mass, friction, and motor-strength ranges are widened linearly, while terrain difficulty is sampled at a fixed level from the beginning and has no terrain curriculum.",
        "RaiSim uses the A1 URDF and fractal terrain with two octaves, lacunarity 2.0, gain 0.25, and z-scale 0.27. Training ranges include friction \\([0.05,4.5]\\), \\(K_p\\) \\([50,60]\\), \\(K_d\\) \\([0.4,0.8]\\), payload \\([0,6]\\) kg, and motor strength \\([0.90,1.10]\\), with within-episode resampling probability 0.004 per step. Episodes last at most 1,000 steps and terminate if base height drops below 0.28 m, roll exceeds 0.4 rad, or pitch exceeds 0.2 rad. Reproduction warning: the text states both a 100 Hz policy and a 0.025 s simulation step, which are numerically inconsistent; Table II's center-of-mass unit and values also require code-level confirmation.",
        "The adaptation module consumes the past 50 steps, approximately 0.5 s, of \\(x\\) and \\(a\\). Each 42-dimensional state-action pair is embedded to 32 dimensions by a two-layer MLP, followed by three 1-D CNN layers with \\([C_{in},C_{out},kernel,stride]\\) equal to \\([32,32,8,4]\\), \\([32,32,5,1]\\), and \\([32,32,5,1]\\); the flattened output is linearly projected to 8-dimensional \\(\\hat z_t\\). The paper does not explain padding or latent initialization before 50 history frames are available at episode start.",
        "Phase 2 freezes \\(\\pi\\) and \\(\\mu\\) and randomly initializes \\(\\phi\\). Rollouts always execute \\(a_t=\\pi(x_t,a_{t-1},\\hat z_t)\\), while \\(z_t=\\mu(e_t)\\) supplies the label, and only \\(\\|\\phi(H_t)-\\mu(e_t)\\|_2^2\\) is minimized; there is no PPO, action-imitation loss, or continued base-policy update. Training uses 1,000 iterations, 80,000 samples per iteration, four minibatches, Adam at \\(5\\times10^{-4}\\), about 80 million simulated steps, and roughly three hours.",
        "Hardware deployment removes \\(e_t\\), \\(\\mu\\), the critic, rewards, and all optimizers, retaining only \\(\\phi+\\pi+\\) fixed joint PD. Motor encoders provide joint position/velocity, the IMU provides roll/pitch, and foot sensors provide contact. \\(\\phi\\) refreshes shared \\(\\hat z\\) from recent history at 10 Hz, while \\(\\pi\\) reads the latest \\(\\hat z\\) and outputs joint targets at 100 Hz. All weights remain frozen, so online latent/state estimation is more precise than online learning.",
        "The main simulation table averages three random initializations with 1,000 episodes each: RMA reports 73.5% success and 0.85 TTF, close to the true-\\(z_t\\) Expert at 76.2%/0.86 and above Robust domain randomization at 62.4%, SysID at 56.5%, AWR at 41.7%, and RMA without adaptation at 52.1%. This supports the value of the learned latent and adaptation module, but failures of these particular baselines do not prove that every explicit SysID, history policy, or domain-randomized policy is generally inferior.",
        "On hardware, the same policy reports 80% on a 15 cm step-down, 100% on a memory mattress and uneven foam, 90% on an oily patch, and payload carriage up to 12 kg; outdoors it reports 70% on hiking stairs and 80% on cement/pebble piles, with no failures reported for several sand, mud, and vegetation tasks. Most indoor results use only five trials, severely failing baselines sometimes only two, and total counts are missing for some outdoor tasks. Real-world comparison is also limited to the stock A1 controller and a no-adaptation ablation, so the evidence is a strong proof of concept rather than large-sample reliability or a comprehensive state-of-the-art comparison.",
        "The main limitations are blindness, reactivity, and a narrow task: slip, sinking, or posture change must occur before history provides evidence to change the latent, so the robot cannot anticipate steps or plan footholds. The paper trains only fixed forward locomotion, with no velocity tracking, turning, multiple gaits, cross-robot validation, or formal safety guarantee. The project page's current Code link points to a later repository derived for Cross-Modal Supervision and should not automatically be treated as a frozen, complete release of the original 2021 experiments."
      ]
    }
  },
  {
    "id": "pen-spinning",
    "categories": [
      "manipulation",
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2407.18902",
    "project": "https://penspin.github.io/",
    "arxiv": "https://arxiv.org/abs/2407.18902",
    "year": "2024",
    "venue": "CoRL 2024 / arXiv:2407.18902",
    "zh": {
      "title": "Lessons from Learning to Spin \"Pens\"",
      "authors": "Jun Wang, Ying Yuan, Haichuan Che, Haozhi Qi, Yi Ma, Jitendra Malik, Xiaolong Wang",
      "status": "已整理",
      "tags": [
        "Reinforcement Learning",
        "Dexterous Manipulation",
        "Sim-to-Real"
      ],
      "mainContent": "这篇论文研究如何让灵巧手学习连续旋转笔状物体。作者先在仿真中用强化学习训练带特权信息的 oracle policy，生成高质量轨迹数据；这些轨迹一方面用于预训练 sensorimotor policy，另一方面作为真实机器人上的 open-loop controller 来筛选成功真实轨迹；最后用少于 50 条真实轨迹微调策略，使其适应真实动力学并能旋转多种不同物理属性的笔状物。",
      "innovations": [
        "针对动态、难以遥操示范的 pen spinning 任务，用仿真 RL oracle 生成高质量轨迹，绕开直接人工遥操作难以收集数据的问题。",
        "将仿真轨迹作为真实世界 open-loop controller，筛选能在真机成功旋转超过一圈的轨迹，再作为高质量真实示范数据。",
        "结合仿真预训练和少量真实轨迹微调，让 proprioceptive sensorimotor policy 在真实动态中快速适应。",
        "系统分析了初始状态分布、特权信息、触觉/视觉/本体感知输入和 sim-to-real gap 对动态手内操作的影响。"
      ],
      "implementation": [
        "第一步在仿真中训练 oracle policy，输入包含关节位置、上一动作、触觉信号、指尖位置、笔姿态/角速度和点云等特权信息，使用 PPO 优化连续旋转奖励。",
        "第二步 rollout oracle policy 生成仿真轨迹和动作数据，用这些数据预训练只依赖本体感知历史的 student policy。",
        "第三步把 oracle 轨迹作为 open-loop action sequence 在真实机器人上回放，由人工筛选能成功旋转的真实轨迹。",
        "第四步用筛选出的少量真实轨迹微调 student policy，使其从仿真 motion prior 适配到真实世界动力学。",
        "部署时策略主要使用关节位置和过去动作历史，避免视觉/触觉在仿真到真实中更大的分布偏移。"
      ]
    },
    "en": {
      "title": "Lessons from Learning to Spin \"Pens\"",
      "authors": "Jun Wang, Ying Yuan, Haichuan Che, Haozhi Qi, Yi Ma, Jitendra Malik, Xiaolong Wang",
      "status": "Summarized",
      "tags": [
        "Reinforcement Learning",
        "Dexterous Manipulation",
        "Sim-to-Real"
      ],
      "mainContent": "This paper studies how to learn continuous spinning of pen-like objects with a dexterous hand. The authors first train an oracle policy with privileged information in simulation using reinforcement learning, producing high-quality trajectories. Those trajectories are used both to pretrain a sensorimotor policy and as an open-loop controller on the real robot to collect successful real-world trajectories. Finally, the policy is fine-tuned with fewer than 50 real trajectories to adapt to real dynamics and spin diverse pen-like objects.",
      "innovations": [
        "For a dynamic task that is hard to teleoperate, the method uses a simulated RL oracle to generate high-quality trajectories instead of relying on human demonstrations.",
        "Simulation trajectories are replayed open-loop on the real robot, and successful trials are selected as high-quality real demonstrations.",
        "Simulation pretraining plus a small number of real trajectories lets a proprioceptive sensorimotor policy adapt efficiently to real dynamics.",
        "The paper analyzes how initial-state design, privileged information, tactile/visual/proprioceptive inputs, and the sim-to-real gap affect dynamic in-hand manipulation."
      ],
      "implementation": [
        "First, an oracle policy is trained in simulation with PPO. Its observation includes joint positions, previous actions, tactile signals, fingertip positions, pen pose and angular velocity, and point clouds.",
        "Second, oracle rollouts generate simulation trajectory/action data used to pretrain a student policy that depends mainly on proprioceptive history.",
        "Third, oracle trajectories are replayed as open-loop action sequences on the real robot, and a human-in-the-loop process keeps successful spinning trajectories.",
        "Fourth, the student policy is fine-tuned on the selected real trajectories, transferring the simulation motion prior to real-world dynamics.",
        "At deployment, the policy mainly uses joint-position and previous-action history, avoiding larger sim-to-real mismatch from vision or tactile observations."
      ]
    }
  },
  {
    "id": "dual-arm-push-grasp",
    "categories": [
      "manipulation"
    ],
    "pdf": "https://arxiv.org/pdf/2412.04052",
    "project": "https://sites.google.com/view/pg4da/home",
    "arxiv": "https://arxiv.org/abs/2412.04052",
    "year": "2025",
    "venue": "IEEE RA-L / arXiv:2412.04052",
    "zh": {
      "title": "Learning Dual-Arm Push and Grasp Synergy in Dense Clutter",
      "authors": "Yongliang Wang, Hamidreza Kasaei",
      "status": "已整理",
      "tags": [
        "Reinforcement Learning",
        "Dual-arm Manipulation",
        "Push-Grasp"
      ],
      "mainContent": "这篇论文研究密集杂乱场景中的目标导向双臂 push-grasp。作者提出一个层次化深度强化学习框架，从 RGB-D 视觉输入中学习何时推、如何双臂协同推、何时执行 6-DoF 抓取，从而在目标物体周围创造可抓取空间。系统在 Isaac Gym 中训练，并在仿真和真实双臂机器人上测试。",
      "innovations": [
        "把双臂系统作为一个统一学习 agent，学习目标导向的双臂 push-grasp 协同，而不是把 pushing 和 grasping 拆成独立模块。",
        "相比传统固定长度直线 push，提出自适应 push action generation，可从 learned feature map 采样连通像素点并生成单臂或双臂协调推路径。",
        "输出 6-DoF grasp candidates，而不是只做 top-down grasp，因此更适合密集杂乱场景中的复杂抓取姿态。",
        "设计 fuzzy-based reward，根据目标孤立程度、动作有效性和 push/grasp 合适性提供连续反馈，加速 PPO 策略学习。"
      ],
      "implementation": [
        "输入由双臂 UR5e 上方 RGB-D 相机转换成 color/depth heightmaps，目标物体在训练环境中被条件化标记。",
        "Angle-View Network backbone 处理 RGB 图像并预测像素级 gripper orientation heatmap，为 6-DoF grasp 方向提供视觉特征。",
        "CNN-based RL model 接收 backbone 特征并用 PPO 训练，生成 feature map，再由 grasp decoder 和 push decoder 解码成抓取或推的动作。",
        "push decoder 根据扩展目标 mask 生成推路径，并在 3D 空间中用 Savitzky-Golay filter 平滑轨迹。",
        "系统先在 Isaac Gym 的简化训练版本中学习，再在完整双臂系统和真实机器人上测试，不需要额外真实数据或微调。"
      ]
    },
    "en": {
      "title": "Learning Dual-Arm Push and Grasp Synergy in Dense Clutter",
      "authors": "Yongliang Wang, Hamidreza Kasaei",
      "status": "Summarized",
      "tags": [
        "Reinforcement Learning",
        "Dual-arm Manipulation",
        "Push-Grasp"
      ],
      "mainContent": "This paper studies target-oriented dual-arm push-grasping in dense clutter. It proposes a hierarchical deep reinforcement learning framework that learns when to push, how to coordinate dual-arm pushes, and when to execute a 6-DoF grasp from RGB-D observations. The goal is to create graspable space around a target object in dense clutter. The system is trained in Isaac Gym and evaluated in simulation and on a real dual-arm robot.",
      "innovations": [
        "It treats the dual-arm system as one learning agent for target-oriented push-grasp synergy, rather than separating pushing and grasping into independent modules.",
        "The adaptive push generation samples connected pixels from learned feature maps and produces single-arm or coordinated dual-arm push paths, beyond fixed-length straight pushes.",
        "The framework outputs 6-DoF grasp candidates instead of top-down grasps, making it more suitable for dense clutter.",
        "A fuzzy reward function evaluates target isolation, action validity, and push/grasp suitability, providing smoother feedback for PPO learning."
      ],
      "implementation": [
        "An overhead RGB-D camera on a dual-arm UR5e setup is converted into color and depth heightmaps, with target conditioning in the training environment.",
        "An Angle-View Network backbone processes RGB images and predicts pixel-wise gripper orientation heatmaps for 6-DoF grasp reasoning.",
        "A CNN-based RL model receives backbone features and is trained with PPO to produce a feature map, decoded by grasp and push motion decoders.",
        "The push decoder uses an expanded target mask to generate push paths, then smooths the 3D trajectory with a Savitzky-Golay filter.",
        "Training is done in a simplified Isaac Gym setup, then evaluated in the full dual-arm system and on a real robot without extra real-world data or fine-tuning."
      ]
    }
  },
  {
    "id": "hora-in-hand-rotation",
    "categories": [
      "manipulation",
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2210.04887",
    "project": "https://haozhi.io/hora/",
    "arxiv": "https://arxiv.org/abs/2210.04887",
    "year": "2022",
    "venue": "CoRL 2022 / arXiv:2210.04887",
    "zh": {
      "title": "In-Hand Object Rotation via Rapid Motor Adaptation",
      "authors": "Haozhi Qi, Ashish Kumar, Roberto Calandra, Yi Ma, Jitendra Malik",
      "status": "已整理",
      "tags": [
        "Reinforcement Learning",
        "In-Hand Manipulation",
        "Rapid Adaptation"
      ],
      "mainContent": "这篇论文把 RMA 的快速在线适应思想迁移到灵巧手手内物体旋转任务。方法只在仿真中用圆柱体训练控制器，然后无需真实世界微调，直接部署到 Allegro Hand 上，依靠本体感知历史适应不同物体的大小、质量、形状和软硬程度，实现多种真实物体绕 z 轴旋转。",
      "innovations": [
        "把快速运动适应从腿式机器人扩展到手内灵巧操作，证明仅用 proprioception 也能完成对不同物体属性的在线适应。",
        "训练只使用简单圆柱体，但真实测试覆盖 30+ 个不同形状、尺寸、质量和材质的物体，展示了强 sim-to-real 泛化。",
        "学习到的 extrinsics latent 与物体质量和尺度等因素有可解释相关性，不要求显式精确辨识真实物理参数。",
        "RL 训练过程中自然涌现稳定 finger gait，不依赖预定义手指步态、视觉或触觉传感器。"
      ],
      "implementation": [
        "第一阶段在仿真中联合训练 object property encoder 和 base policy：object properties 包括位置、尺度、质量、质心和摩擦系数，经 encoder 压缩成 8 维 extrinsics。",
        "base policy 输入当前关节位置、上一时刻动作和 extrinsics，使用 PPO 训练，输出 Allegro Hand 的目标关节位置。",
        "第二阶段冻结 base policy，用监督学习训练 adaptation module，从最近的关节位置和动作历史估计 extrinsics。",
        "真实部署时没有 object properties，adaptation module 在线更新 extrinsics，base policy 以约 20Hz 输出动作，完全依赖 proprioception。",
        "仿真中随机化圆柱体尺寸、质量、质心、摩擦等参数，并通过旋转奖励、姿态正则、力矩惩罚和物体稳定项塑造可迁移控制策略。"
      ]
    },
    "en": {
      "title": "In-Hand Object Rotation via Rapid Motor Adaptation",
      "authors": "Haozhi Qi, Ashish Kumar, Roberto Calandra, Yi Ma, Jitendra Malik",
      "status": "Summarized",
      "tags": [
        "Reinforcement Learning",
        "In-Hand Manipulation",
        "Rapid Adaptation"
      ],
      "mainContent": "This paper transfers the Rapid Motor Adaptation idea to dexterous in-hand object rotation. The controller is trained only in simulation on cylindrical objects, then directly deployed on an Allegro Hand without real-world fine-tuning. Using proprioceptive history, it adapts to object size, mass, shape, and softness and rotates diverse real objects around the z-axis.",
      "innovations": [
        "It extends rapid motor adaptation from legged locomotion to dexterous in-hand manipulation, showing that proprioception alone can support online adaptation to object properties.",
        "The policy is trained only on simple cylinders but tested on 30+ real objects with different shapes, sizes, masses, and materials, showing strong sim-to-real generalization.",
        "The learned extrinsics latent correlates with interpretable object factors such as mass and scale without requiring exact physical system identification.",
        "Stable finger gaits emerge from RL training without predefined finger-gait controllers, vision, or tactile sensing."
      ],
      "implementation": [
        "Phase one jointly trains an object property encoder and base policy in simulation. Object position, scale, mass, center of mass, and friction are compressed into an 8D extrinsics latent.",
        "The base policy takes current joint positions, previous action, and extrinsics as input, is trained with PPO, and outputs target Allegro Hand joint positions.",
        "Phase two freezes the base policy and trains an adaptation module with supervised learning to estimate extrinsics from recent joint-position and action history.",
        "During real deployment, object properties are unavailable. The adaptation module updates extrinsics online, while the base policy outputs actions at about 20Hz using only proprioception.",
        "Simulation randomizes cylinder size, mass, center of mass, and friction, with rewards for rotation plus pose regularization, torque penalties, and object stability."
      ]
    }
  },
  {
    "id": "tacgnn",
    "categories": [
      "manipulation",
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2304.00736",
    "project": "https://sites.google.com/view/tacgnn",
    "arxiv": "https://arxiv.org/abs/2304.00736",
    "year": "2023",
    "venue": "IEEE RA-L / arXiv:2304.00736",
    "zh": {
      "title": "TacGNN: Learning Tactile-based In-hand Manipulation with a Blind Robot using Hierarchical Graph Neural Network",
      "authors": "Linhan Yang, Bidan Huang, Qingbiao Li, Ya-Yen Tsai, Wang Wei Lee, Chaoyang Song, Jia Pan",
      "status": "已整理",
      "tags": [
        "Reinforcement Learning",
        "Tactile Sensing",
        "Dexterous Manipulation"
      ],
      "mainContent": "TacGNN 研究没有视觉输入的灵巧手如何仅依靠触觉和本体感知完成手内操作。论文先用层次化图神经网络从分布式触觉传感器中预测物体相关状态，再把预测状态和机器人状态输入 PPO 策略，完成类似保定球的双球手内旋转任务。方法在仿真中训练，并迁移到真实 Allegro Hand 上。",
      "innovations": [
        "把触觉信号建模为动态点集/图结构，只使用被激活的触觉 taxels，避免把稀疏、不规则触觉数据强行 reshape 成图像。",
        "提出层次化 TacGNN，通过 kNN 建图、局部邻域聚合和 farthest point sampling 提取多层触觉特征，能处理节点数量和连接随接触变化的动态图。",
        "将触觉感知模型与 RL 控制解耦：先预测物体状态，再用 PPO 学习操作策略，使盲机器人能完成需要持续接触反馈的手内 manipulation。",
        "相较 MLP、CNN、静态 GCN，TacGNN 在物体状态预测和最终操作成功率上表现更好，并能迁移到真实机器人。"
      ],
      "implementation": [
        "硬件使用带分布式触觉传感器的 Allegro Hand，任务是同时操控两个球在手内相对旋转约 180 度。",
        "触觉输入被表示为激活 taxel 的 3D 坐标点集，通过 kNN 构建动态 tactile graph，图节点数量随接触状态变化。",
        "TacGNN 使用多层 message passing 和采样聚合预测物体位置/姿态等 object states，并用监督学习训练该 perception model。",
        "控制策略使用 PPO：状态由 TacGNN 预测的物体状态、机器人关节状态/速度等组成，奖励包含角度进展、成功奖励和失败惩罚。",
        "训练流程先收集触觉-物体状态数据训练感知模型，再冻结/使用该模型为 RL policy 提供状态估计，最后在不同难度任务和真实机器人上验证。"
      ]
    },
    "en": {
      "title": "TacGNN: Learning Tactile-based In-hand Manipulation with a Blind Robot using Hierarchical Graph Neural Network",
      "authors": "Linhan Yang, Bidan Huang, Qingbiao Li, Ya-Yen Tsai, Wang Wei Lee, Chaoyang Song, Jia Pan",
      "status": "Summarized",
      "tags": [
        "Reinforcement Learning",
        "Tactile Sensing",
        "Dexterous Manipulation"
      ],
      "mainContent": "TacGNN studies dexterous in-hand manipulation without vision, relying only on tactile sensing and proprioception. The paper first predicts object-related states from distributed tactile sensors using a hierarchical graph neural network, then feeds those predicted states and robot states into a PPO policy for a Baoding-ball-style in-hand rotation task. The method is trained in simulation and transferred to a real Allegro Hand.",
      "innovations": [
        "It models tactile readings as a dynamic point set or graph using only activated taxels, avoiding image-like reshaping of sparse and irregular tactile signals.",
        "The hierarchical TacGNN uses kNN graph construction, local message passing, and farthest point sampling to capture multi-level tactile features under changing contact topology.",
        "The method decouples tactile perception from RL control: object states are predicted first, then PPO learns manipulation policies from those estimates.",
        "Compared with MLP, CNN, and static GCN baselines, TacGNN improves object-state prediction and manipulation success, while transferring to a real robot."
      ],
      "implementation": [
        "The setup uses an Allegro Hand with distributed tactile sensors, manipulating two balls in hand to rotate them around each other by about 180 degrees.",
        "Tactile inputs are represented as 3D coordinates of activated taxels; a dynamic tactile graph is constructed with kNN, so graph size changes with contact.",
        "TacGNN applies multi-layer message passing and sampling aggregation to predict object states such as position and orientation, trained with supervised learning.",
        "The control policy uses PPO. Its state includes TacGNN-predicted object states plus robot joint state and velocity, with rewards for angle progress, success, and failure.",
        "The workflow first collects tactile/object-state data to train the perception model, then uses it to provide state estimates for RL policy learning and real-robot transfer."
      ]
    }
  },
  {
    "id": "bidexhands",
    "categories": [
      "manipulation",
      "benchmark-dataset"
    ],
    "pdf": "https://arxiv.org/pdf/2206.08686",
    "project": "https://github.com/PKU-MARL/DexterousHands",
    "arxiv": "https://arxiv.org/abs/2206.08686",
    "year": "2022",
    "venue": "NeurIPS 2022 Datasets and Benchmarks / arXiv:2206.08686",
    "zh": {
      "title": "Towards Human-Level Bimanual Dexterous Manipulation with Reinforcement Learning",
      "authors": "Yuanpei Chen, Tianhao Wu, Shengjie Wang, Xidong Feng, Jiechuang Jiang, Stephen Marcus McAleer, Yiran Geng, Hao Dong, Zongqing Lu, Song-Chun Zhu, Yaodong Yang",
      "status": "已整理",
      "tags": [
        "Reinforcement Learning",
        "Dexterous Manipulation",
        "Benchmark"
      ],
      "mainContent": "这篇论文提出 Bi-DexHands，一个面向双手灵巧操作的强化学习 benchmark。它在 Isaac Gym 中构建两个 Shadow Hands、数十个双手操作任务和大量目标物体，用来评估单智能体 RL、多智能体 RL、离线 RL、多任务 RL 和 Meta RL。论文目标不是只解决某个单一操作，而是提供一个逼近人类双手精细运动能力的系统化测试平台。",
      "innovations": [
        "提出首个大规模双手灵巧操作 RL benchmark，覆盖抓取、传递、开瓶、抛接、堆叠等不同人类精细运动阶段对应的任务。",
        "用 Isaac Gym 支持大规模并行仿真，在单张 RTX 3090 上可达到 30,000+ FPS，大幅降低灵巧手 RL 训练成本。",
        "把双手、手指、关节等建模成异构协作主体，为 MARL 提供比同质智能体环境更接近真实机器人操作的挑战。",
        "系统比较 PPO、SAC、TRPO、DDPG、TD3、MAPPO、HAPPO、HATRPO、离线 RL、多任务 RL 和 Meta RL，指出现有算法在多任务泛化和少样本适应上仍明显不足。"
      ],
      "implementation": [
        "仿真环境使用两个 24-DoF Shadow Hands，底层控制器 1kHz 运行，RL policy 以 30Hz 输出可驱动关节的相对位置。",
        "任务设计参考 Fine Motor Subtest，把不同操作难度和儿童运动技能发展阶段对应起来，并引入 YCB、SAPIEN 等物体资源。",
        "环境形式支持 Dec-POMDP：可把手、手指或关节划分为多个异构 agent，用于单智能体和多智能体 RL 设置。",
        "benchmark 实现了在线 RL、MARL、离线 RL、多任务 RL 和 Meta RL 的统一评估接口，包括 MT/ML 任务划分和不同目标/物体变化。",
        "实验主要在 Isaac Gym 中并行运行大量环境，评估成功率、训练效率、任务难度、多任务泛化和离线数据利用能力。"
      ]
    },
    "en": {
      "title": "Towards Human-Level Bimanual Dexterous Manipulation with Reinforcement Learning",
      "authors": "Yuanpei Chen, Tianhao Wu, Shengjie Wang, Xidong Feng, Jiechuang Jiang, Stephen Marcus McAleer, Yiran Geng, Hao Dong, Zongqing Lu, Song-Chun Zhu, Yaodong Yang",
      "status": "Summarized",
      "tags": [
        "Reinforcement Learning",
        "Dexterous Manipulation",
        "Benchmark"
      ],
      "mainContent": "This paper introduces Bi-DexHands, a reinforcement learning benchmark for bimanual dexterous manipulation. Built in Isaac Gym, it uses two Shadow Hands, tens of bimanual manipulation tasks, and many target objects to evaluate single-agent RL, multi-agent RL, offline RL, multi-task RL, and meta-RL. The goal is to provide a systematic testbed for moving toward human-level bimanual fine motor skills.",
      "innovations": [
        "It proposes a large-scale bimanual dexterous manipulation benchmark covering grasping, handover, bottle opening, catching, stacking, and other tasks inspired by human fine motor development.",
        "Isaac Gym parallel simulation enables more than 30,000 FPS on a single RTX 3090, making dexterous-hand RL training much more practical.",
        "Hands, fingers, and joints can be modeled as heterogeneous cooperative agents, creating a more realistic MARL challenge than homogeneous-agent benchmarks.",
        "The paper systematically benchmarks PPO, SAC, TRPO, DDPG, TD3, MAPPO, HAPPO, HATRPO, offline RL, multi-task RL, and meta-RL, showing that multi-task generalization and few-shot adaptation remain difficult."
      ],
      "implementation": [
        "The simulator uses two 24-DoF Shadow Hands. The low-level controller runs at 1kHz, while the RL policy outputs relative joint positions at 30Hz.",
        "Tasks are designed according to the Fine Motor Subtest and use object resources such as YCB and SAPIEN to create diverse manipulation scenarios.",
        "The environment supports Dec-POMDP formulations, allowing hands, fingers, or joints to be treated as heterogeneous agents for single-agent and multi-agent RL.",
        "The benchmark provides unified evaluation setups for online RL, MARL, offline RL, multi-task RL, and meta-RL, including MT/ML task splits and object or goal variations.",
        "Experiments run many parallel Isaac Gym environments and evaluate success rate, training speed, task difficulty, multi-task generalization, and offline data usage."
      ]
    }
  },
  {
    "id": "dextrah-g",
    "categories": [
      "manipulation",
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2407.02274",
    "project": "https://sites.google.com/view/dextrah-g",
    "arxiv": "https://arxiv.org/abs/2407.02274",
    "year": "2024",
    "venue": "CoRL 2024 / arXiv:2407.02274",
    "zh": {
      "title": "DextrAH-G: Pixels-to-Action Dexterous Arm-Hand Grasping with Geometric Fabrics",
      "authors": "Tyler Ga Wei Lum, Martin Matak, Viktor Makoviychuk, Ankur Handa, Arthur Allshire, Tucker Hermans, Nathan D. Ratliff, Karl Van Wyk",
      "status": "已整理",
      "tags": [
        "Sim-to-Real",
        "Dexterous Grasping",
        "Teacher-Student Distillation"
      ],
      "mainContent": "DextrAH-G 研究如何让 23 电机的灵巧臂手机器人从流式深度图像中直接输出动作，实现快速、安全、鲁棒的真实物体抓取。方法完全在仿真中训练，结合 reinforcement learning、geometric fabrics 和 teacher-student distillation，最后零样本迁移到真实硬件，在多种未知物体上完成连续抓取和搬运。",
      "innovations": [
        "把 geometric fabric controller 嵌入策略学习，为 RL 提供安全、自然且受约束的动作空间，同时处理自碰撞、环境碰撞和关节限制。",
        "先训练 privileged fabric-guided teacher policy，再蒸馏成使用深度图和本体感知的 pixels-to-action student policy，解决真实部署时无法访问特权状态的问题。",
        "通过深度图输入和多模态状态融合实现对不同物体几何的泛化，不依赖完整点云、真实物体模型或人工指定 grasp pose。",
        "展示了高自由度 dexterous arm-hand 系统上的零样本 sim2real 抓取能力，并强调硬件安全约束对真实部署的重要性。"
      ],
      "implementation": [
        "底层 geometric fabric 以 60Hz 运行，定义碰撞避免、关节约束、姿态塑形和 grasping 行为，并把策略 action 映射为 fabric driving force。",
        "teacher policy 在仿真中用 RL 训练，使用不完全但特权的对象/机器人状态作为 actor 输入，并用 asymmetric critic 访问更多仿真状态提升训练效率。",
        "训练任务覆盖 140 个对象，teacher 的动作不是直接关节命令，而是作用在 geometric fabric 上的低维 action space。",
        "student policy 通过在线 DAgger 式 teacher-student distillation 学习，输入机器人本体状态、目标和 160x120 深度图，输出 teacher action 并辅助预测物体位置。",
        "真实部署时使用 student depth policy 加状态机完成 bin packing，直接从仿真迁移到硬件，并依赖 fabric controller 保持安全和实时控制。"
      ]
    },
    "en": {
      "title": "DextrAH-G: Pixels-to-Action Dexterous Arm-Hand Grasping with Geometric Fabrics",
      "authors": "Tyler Ga Wei Lum, Martin Matak, Viktor Makoviychuk, Ankur Handa, Arthur Allshire, Tucker Hermans, Nathan D. Ratliff, Karl Van Wyk",
      "status": "Summarized",
      "tags": [
        "Sim-to-Real",
        "Dexterous Grasping",
        "Teacher-Student Distillation"
      ],
      "mainContent": "DextrAH-G studies how a 23-motor dexterous arm-hand robot can map streaming depth images directly to actions for fast, safe, and robust grasping. The method is trained entirely in simulation and combines reinforcement learning, geometric fabrics, and teacher-student distillation. It is deployed zero-shot on real hardware to grasp and transport diverse unseen objects.",
      "innovations": [
        "It embeds a geometric fabric controller into policy learning, giving RL a safe and constrained action space while handling self-collision, environment collision, and joint limits.",
        "The method trains a privileged fabric-guided teacher policy, then distills it into a pixels-to-action student policy using depth images and proprioception for real deployment.",
        "Depth-based multimodal policy learning generalizes across object geometry without requiring complete point clouds, object models, or manually specified grasp poses.",
        "The paper demonstrates zero-shot sim-to-real dexterous arm-hand grasping and highlights hardware safety constraints as a core part of deployment."
      ],
      "implementation": [
        "A geometric fabric runs at 60Hz, encoding collision avoidance, joint constraints, posture shaping, and grasping behavior while mapping policy actions into fabric driving forces.",
        "The teacher policy is trained with RL in simulation, using limited privileged actor observations and an asymmetric critic with richer simulation state for faster learning.",
        "Training covers 140 objects, and the teacher action is a low-dimensional input to the geometric fabric rather than a raw joint command.",
        "The student policy is learned with online DAgger-style teacher-student distillation. It takes robot proprioception, goal state, and a 160x120 depth image, then predicts teacher actions and object position.",
        "Real deployment uses the student depth policy plus a state machine for bin packing, transferring directly from simulation to hardware while relying on the fabric controller for safety and real-time control."
      ]
    }
  },
  {
    "id": "mimicgen",
    "categories": [
      "manipulation",
      "imitation-teleop",
      "benchmark-dataset"
    ],
    "pdf": "https://arxiv.org/pdf/2310.17596",
    "project": "https://mimicgen.github.io",
    "arxiv": "https://arxiv.org/abs/2310.17596",
    "year": "2023",
    "venue": "CoRL 2023 / arXiv:2310.17596",
    "zh": {
      "title": "MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations",
      "authors": "Ajay Mandlekar, Soroush Nasiriany, Bowen Wen, Iretiayo Akinola, Yashraj Narang, Linxi Fan, Yuke Zhu, Dieter Fox",
      "status": "已整理",
      "tags": [
        "模仿学习",
        "操作任务",
        "数据生成"
      ],
      "mainContent": "MimicGen 研究机器人学习中的数据扩展问题：如何用少量人类遥操作示范，自动生成大量覆盖不同物体位姿、场景配置、物体实例和机械臂的新演示数据。论文用约 200 条源示范生成 50K+ 条新演示，并在 18 个长时程、高精度操作任务上验证这些数据可以有效训练模仿学习策略。",
      "innovations": [
        "把人类示范复用为可执行的新轨迹，而不是单纯做离线数据增强或继续人工采集。",
        "以物体为中心切分和变换示范片段，使同一操作技能能迁移到新的物体位置、场景和硬件配置。",
        "系统性比较了生成数据和额外人工示范的价值，说明结构化生成数据在很多任务上可以接近人工采集效果。"
      ],
      "implementation": [
        "先把人类示范分解成多个 object-centric motion segments，记录每段相对目标物体的运动关系。",
        "在新场景中根据物体的新位姿对片段做空间变换，并把多个片段拼接成完整机器人轨迹。",
        "让机器人在模拟或真实设置中执行合成轨迹，过滤成功轨迹后形成数据集，再用行为克隆训练策略。"
      ]
    },
    "en": {
      "title": "MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations",
      "authors": "Ajay Mandlekar, Soroush Nasiriany, Bowen Wen, Iretiayo Akinola, Yashraj Narang, Linxi Fan, Yuke Zhu, Dieter Fox",
      "status": "Summarized",
      "tags": [
        "Imitation Learning",
        "Manipulation",
        "Data Generation"
      ],
      "mainContent": "MimicGen studies how to scale robot learning data from a small number of human teleoperation demonstrations. It synthesizes large demonstration datasets across object poses, scene layouts, object instances, and robot arms. The paper reports 50K+ generated demonstrations for 18 long-horizon and precision manipulation tasks from roughly 200 source demos.",
      "innovations": [
        "It reuses human demonstrations as executable new trajectories instead of only applying offline augmentation or collecting more human data.",
        "Object-centric segmentation and transformation allow the same manipulation skill to transfer across new poses, scenes, and hardware.",
        "The paper directly compares generated data with additional human demonstrations, showing that structured generation can often approach the value of manual collection."
      ],
      "implementation": [
        "Split each human demonstration into object-centric motion segments and preserve the motion relationship relative to target objects.",
        "Transform segments according to new object poses, then stitch them into a complete robot trajectory.",
        "Execute synthesized trajectories, keep successful rollouts, and train policies from the generated dataset using behavior cloning."
      ]
    }
  },
  {
    "id": "pi0",
    "categories": [
      "manipulation",
      "vla-world-model"
    ],
    "pdf": "https://arxiv.org/pdf/2410.24164",
    "project": "https://physicalintelligence.company/blog/pi0",
    "arxiv": "https://arxiv.org/abs/2410.24164",
    "year": "2024",
    "venue": "arXiv:2410.24164",
    "zh": {
      "title": "π0: A Vision-Language-Action Flow Model for General Robot Control",
      "authors": "Kevin Black, Noah Brown, Danny Driess, Adnan Esmail, Michael Equi, Chelsea Finn, Niccolo Fusai, Lachy Groom, Karol Hausman, Brian Ichter, Szymon Jakubczak, Tim Jones, Liyiming Ke, Sergey Levine, Adrian Li-Bell, Mohith Mothukuri, Suraj Nair, Karl Pertsch, Lucy Xiaoyang Shi, James Tanner, Quan Vuong, Anna Walling, Haohuan Wang, Ury Zhilinsky",
      "status": "已整理",
      "tags": [
        "VLA",
        "Flow Matching",
        "Robot Foundation Model"
      ],
      "mainContent": "π0 是 Physical Intelligence 提出的通用机器人 VLA 模型。它以预训练 VLM 为 backbone，引入 action expert，用 flow matching 生成连续 action chunks，从而支持高频、流畅、灵巧的机器人控制。模型在跨 embodiment 的大规模机器人数据上预训练，再通过 post-training / fine-tuning 适配复杂下游任务，例如洗衣折叠、桌面清理、装箱和组装盒子。",
      "innovations": [
        "把 VLM 的视觉语言语义能力和连续机器人控制结合起来，不再像早期 VLA 那样把动作简单离散成 token。",
        "提出 flow matching action expert，为 VLM 增加连续动作输出能力，可生成高频 action chunks，支持最高约 50Hz 的灵巧控制。",
        "采用 cross-embodiment training，把单臂、双臂、移动操作机器人等不同配置的数据统一到一个 generalist policy 中。",
        "强调 pre-training / post-training recipe：大规模多样数据提供泛化和恢复能力，高质量任务数据塑造效率、鲁棒性和灵巧性。"
      ],
      "implementation": [
        "模型 backbone 初始化自 PaliGemma VLM，继承互联网级视觉语言表征；额外加入约 300M 参数的 action expert 处理机器人状态和动作。",
        "动作表示为未来 H 步 action chunk，训练时对连续动作使用 conditional flow matching loss，而不是自回归离散 token 交叉熵。",
        "预训练数据包含自有 dexterous manipulation 数据、OXE 等开放数据，覆盖 7 种机器人配置、68 个任务和 10,000+ 小时机器人数据。",
        "post-training 阶段使用更窄但更高质量的任务数据做 fine-tuning，让模型获得复杂任务中的灵巧性、效率和稳定恢复行为。",
        "评估覆盖 zero-shot language control、下游 fine-tuning，以及由高层 VLM 输出中间语言指令、π0 执行低层控制的长时程任务。"
      ]
    },
    "en": {
      "title": "π0: A Vision-Language-Action Flow Model for General Robot Control",
      "authors": "Kevin Black, Noah Brown, Danny Driess, Adnan Esmail, Michael Equi, Chelsea Finn, Niccolo Fusai, Lachy Groom, Karol Hausman, Brian Ichter, Szymon Jakubczak, Tim Jones, Liyiming Ke, Sergey Levine, Adrian Li-Bell, Mohith Mothukuri, Suraj Nair, Karl Pertsch, Lucy Xiaoyang Shi, James Tanner, Quan Vuong, Anna Walling, Haohuan Wang, Ury Zhilinsky",
      "status": "Summarized",
      "tags": [
        "VLA",
        "Flow Matching",
        "Robot Foundation Model"
      ],
      "mainContent": "π0 is a generalist robot VLA model from Physical Intelligence. It builds on a pretrained VLM backbone and adds an action expert that uses flow matching to generate continuous action chunks, enabling high-frequency and fluent dexterous robot control. The model is pretrained on large cross-embodiment robot data and then post-trained or fine-tuned for complex downstream tasks such as laundry folding, table cleaning, box assembly, and grocery bagging.",
      "innovations": [
        "It connects VLM semantic knowledge with continuous robot control, rather than discretizing actions into autoregressive tokens as in earlier VLA designs.",
        "A flow-matching action expert augments the VLM with continuous action outputs and can generate high-frequency action chunks up to about 50Hz.",
        "Cross-embodiment training combines data from single-arm robots, dual-arm systems, and mobile manipulators into one generalist policy.",
        "The paper highlights a pre-training/post-training recipe: broad diverse data gives generalization and recovery behavior, while high-quality task data shapes dexterity, efficiency, and robustness."
      ],
      "implementation": [
        "The backbone is initialized from the PaliGemma VLM to inherit visual-language representations, with an additional roughly 300M-parameter action expert for robot states and actions.",
        "Actions are represented as future action chunks. Training uses a conditional flow matching loss over continuous actions instead of discrete autoregressive token cross-entropy.",
        "Pretraining uses a mixture of internal dexterous manipulation data and open datasets such as OXE, covering 7 robot configurations, 68 tasks, and more than 10,000 hours of robot data.",
        "Post-training fine-tunes the model on narrower but higher-quality task datasets to specialize for dexterity, efficiency, and robust recovery.",
        "Evaluation includes zero-shot language control, downstream fine-tuning, and long-horizon setups where a high-level VLM emits intermediate language commands and π0 performs low-level control."
      ]
    }
  },
  {
    "id": "dreamzero",
    "categories": [
      "vla-world-model"
    ],
    "pdf": "https://arxiv.org/pdf/2602.15922",
    "project": "https://dreamzero0.github.io",
    "arxiv": "https://arxiv.org/abs/2602.15922",
    "year": "2026",
    "venue": "arXiv:2602.15922",
    "zh": {
      "title": "World Action Models are Zero-shot Policies",
      "authors": "Seonghyeon Ye, Yunhao Ge, Kaiyuan Zheng, Shenyuan Gao, Sihyun Yu, George Kurian, Yuke Zhu, Yilun Du, Linxi Fan, Joel Jang 等",
      "status": "已整理",
      "tags": [
        "世界动作模型",
        "视频扩散",
        "零样本策略"
      ],
      "mainContent": "论文提出 DreamZero，一种 World Action Model。它把预训练视频扩散模型改造成机器人策略，让模型同时预测未来视频帧和连续动作，从而把视频模型学到的时空动态、物理先验迁移到真实机器人控制。作者强调，WAM 不只是理解语言指令，而是显式学习“动作会怎样改变世界”，因此在未见任务、未见环境和跨 embodiment 迁移上比传统 VLA 更有优势。",
      "innovations": [
        "把视频世界建模和动作预测放进同一个端到端模型，用联合 video-action prediction 替代单纯的 VLA 状态到动作映射。",
        "采用自回归 WAM 架构，并在闭环控制中用真实观测替换 KV cache 中的预测帧，减轻长时程视频生成的误差累积。",
        "提出 DreamZero-Flash 和系统级加速，使 14B 视频扩散策略能以约 7Hz 做真实机器人闭环控制。",
        "验证了跨 embodiment 学习：来自其他机器人或人类的视频数据，即使没有动作标注，也能提升未见任务表现；少量新机器人 play data 可以完成适配。"
      ],
      "implementation": [
        "输入包括视觉上下文、语言指令和本体状态；视觉由 VAE 编码，语言由文本编码器编码，本体状态由 state encoder 编码。",
        "主体使用预训练 image-to-video diffusion backbone，加入最小额外参数，包括 state/action encoders 和 decoders，通过 flow matching 联合去噪视频 latent 与动作。",
        "训练时采用 teacher forcing 和 chunk-wise 预测：当前 chunk 的 noisy video/action 可以 attend 到前面 clean chunks，从而学习未来视频和动作的联合分布。",
        "推理时异步执行动作 chunk，同时模型基于最新观测生成下一段 video/action；执行后把真实观测写回 KV cache，减少自回归生成漂移。",
        "实时化依赖 CFG 并行、DiT velocity caching、torch.compile/CUDA Graph、量化、调度器优化，以及 DreamZero-Flash 的解耦噪声日程。"
      ]
    },
    "en": {
      "title": "World Action Models are Zero-shot Policies",
      "authors": "Seonghyeon Ye, Yunhao Ge, Kaiyuan Zheng, Shenyuan Gao, Sihyun Yu, George Kurian, Yuke Zhu, Yilun Du, Linxi Fan, Joel Jang, et al.",
      "status": "Summarized",
      "tags": [
        "World Action Model",
        "Video Diffusion",
        "Zero-shot Policy"
      ],
      "mainContent": "The paper introduces DreamZero, a World Action Model that turns a pretrained video diffusion model into a robot policy. The model jointly predicts future video frames and continuous actions, transferring spatiotemporal and physical priors from video generation into real-robot control. The key idea is that a policy should learn how actions change the world, not only how to map language and observations to actions.",
      "innovations": [
        "It combines video world modeling and action prediction in one end-to-end model instead of using a pure VLA-style state-to-action mapping.",
        "The autoregressive WAM architecture uses real observations to refresh the KV cache after each executed action chunk, reducing compounding errors in long-horizon generation.",
        "DreamZero-Flash and system optimizations make a 14B video diffusion policy run closed-loop real-robot control at about 7Hz.",
        "The paper demonstrates cross-embodiment learning: video-only data from other robots or humans improves unseen-task performance, and limited play data adapts the model to a new robot."
      ],
      "implementation": [
        "Inputs include visual context, language instructions, and proprioceptive state, encoded by a VAE, text encoder, and state encoder.",
        "The model builds on a pretrained image-to-video diffusion backbone with minimal added state/action encoders and decoders, trained with flow matching to jointly denoise video latents and actions.",
        "Training uses teacher forcing and chunk-wise prediction: each noisy video/action chunk attends to clean previous chunks to learn the joint future video-action distribution.",
        "During inference, action chunks are executed asynchronously while the model predicts the next chunk from the latest observation; real observations are written back into the KV cache to prevent drift.",
        "Real-time execution relies on CFG parallelism, DiT velocity caching, torch.compile/CUDA Graphs, quantization, scheduler optimization, and DreamZero-Flash decoupled noise schedules."
      ]
    }
  },
  {
    "id": "lda-1b",
    "categories": [
      "vla-world-model",
      "benchmark-dataset"
    ],
    "pdf": "https://arxiv.org/pdf/2602.12215",
    "project": "https://pku-epic.github.io/LDA/",
    "arxiv": "https://arxiv.org/abs/2602.12215",
    "year": "2026",
    "venue": "arXiv:2602.12215",
    "zh": {
      "title": "LDA-1B: Scaling Latent Dynamics Action Model via Universal Embodied Data Ingestion",
      "authors": "Jiangran Lyu, Kai Liu, Xuheng Zhang, Haoran Liao, Yusen Feng, Wenxuan Zhu, Tingrui Shen, Jiayi Chen, Jiazhao Zhang, Yifei Dong, Wenbo Cui, Senmao Qi, Shuo Wang, Yixin Zheng, Mi Yan, Xuesong Shi, Haoran Li, Dongbin Zhao, Ming-Yu Liu, Zhizheng Zhang, Li Yi, Yizhou Wang, He Wang",
      "status": "已整理",
      "tags": [
        "Latent Dynamics",
        "Unified World Model",
        "Embodied Data"
      ],
      "mainContent": "LDA-1B 研究如何把异构具身数据规模化地用于机器人基础模型训练。论文提出 1.6B 参数的 Latent Dynamics Action Model，在统一世界模型框架下同时学习策略、正向动力学、逆动力学和视觉预测，并用超过 30K 小时的人类与机器人交互数据 EI-30K 进行训练。核心观点是：高质量示范、低质量轨迹和无动作视频都包含有价值的动力学信息，不应该只按行为克隆思路丢弃非专家数据。",
      "innovations": [
        "提出 universal embodied data ingestion：不同质量的数据承担不同训练角色，高质量轨迹训练策略和动力学，低质量轨迹用于动力学和视觉预测，无动作人类视频用于视觉预测。",
        "把未来视觉状态预测放到结构化 DINO latent 空间，而不是像素或 VAE latent，减少背景、纹理和光照等外观噪声对动力学学习的干扰。",
        "构建 EI-30K 数据集，统一 30K+ 小时真实机器人、仿真机器人、有动作人类示范和无动作人类视频，并对动作坐标系和质量标签做标准化。",
        "用 MM-DiT 统一处理异步视觉与动作流，在 1B 规模下稳定联合建模策略和世界动力学，并在仿真、真机、灵巧手、长时程任务上超过强基线。"
      ],
      "implementation": [
        "训练目标来自 Unified World Model：同时建模 policy、forward dynamics、inverse dynamics 和 visual planning 四类条件分布。",
        "模型使用四个可学习 task embeddings 和 action/visual register tokens，在同一个 diffusion model 中选择性激活动作损失或视觉损失，使不同监督类型的数据都能参与训练。",
        "视觉目标由 DINOv3 特征表示，动作统一为 hand-centric action space，包括末端执行器 delta pose、夹爪宽度或灵巧手关键点。",
        "主体是 Multi-Modal Diffusion Transformer：动作 chunk 和未来 DINO visual tokens 分别加噪，经模态专用投影进入共享 self-attention，同时通过 cross-attention 接入 VLM 语言/视觉条件。",
        "预训练冻结 VLM 与 DINO encoder，只更新 MM-DiT 和动作编码/解码器；后训练阶段直接利用混合质量目标机器人遥操作数据做轻量适配。"
      ]
    },
    "en": {
      "title": "LDA-1B: Scaling Latent Dynamics Action Model via Universal Embodied Data Ingestion",
      "authors": "Jiangran Lyu, Kai Liu, Xuheng Zhang, Haoran Liao, Yusen Feng, Wenxuan Zhu, Tingrui Shen, Jiayi Chen, Jiazhao Zhang, Yifei Dong, Wenbo Cui, Senmao Qi, Shuo Wang, Yixin Zheng, Mi Yan, Xuesong Shi, Haoran Li, Dongbin Zhao, Ming-Yu Liu, Zhizheng Zhang, Li Yi, Yizhou Wang, He Wang",
      "status": "Summarized",
      "tags": [
        "Latent Dynamics",
        "Unified World Model",
        "Embodied Data"
      ],
      "mainContent": "LDA-1B studies how to scale robot foundation models with heterogeneous embodied data. It introduces a 1.6B-parameter Latent Dynamics Action Model that jointly learns policy, forward dynamics, inverse dynamics, and visual forecasting under a unified world-model formulation. The model is trained with EI-30K, over 30K hours of human and robot interaction data. The main claim is that expert demonstrations, noisy trajectories, and actionless videos all contain useful dynamics knowledge and should not be discarded by behavior-cloning-centric pipelines.",
      "innovations": [
        "It proposes universal embodied data ingestion: high-quality trajectories train both policy and dynamics, low-quality trajectories train dynamics and visual forecasting, and actionless human videos supervise visual forecasting.",
        "Future visual prediction is performed in structured DINO latent space instead of pixel or VAE latent space, reducing distraction from texture, lighting, and background appearance.",
        "The paper builds EI-30K, a 30K+ hour embodied interaction dataset unifying real-robot data, simulated robot data, human demonstrations with actions, and actionless human videos with standardized actions and quality labels.",
        "MM-DiT jointly handles asynchronous visual and action streams, enabling stable policy and dynamics learning at the 1B scale and outperforming strong baselines in simulation, real-world, dexterous, and long-horizon tasks."
      ],
      "implementation": [
        "The training objective follows a Unified World Model formulation with four conditional objectives: policy, forward dynamics, inverse dynamics, and visual planning.",
        "Four learnable task embeddings and action/visual register tokens allow one diffusion model to selectively activate action or visual losses depending on the supervision available in each data source.",
        "Visual targets are represented with DINOv3 features, while actions are unified into a hand-centric action space covering end-effector delta poses, gripper width, and dexterous-hand keypoints.",
        "The core model is a Multi-Modal Diffusion Transformer: noisy action chunks and future DINO visual tokens are projected into shared self-attention, while VLM language and visual conditioning enter through cross-attention.",
        "Pretraining freezes the VLM and DINO encoder and updates MM-DiT plus action encoders/decoders; post-training adapts the model with mixed-quality teleoperation data from the target robot."
      ]
    }
  },
  {
    "id": "gigaworld-policy",
    "categories": [
      "manipulation",
      "vla-world-model"
    ],
    "pdf": "https://arxiv.org/pdf/2603.17240",
    "project": "https://gigaai-research.github.io/GigaWorld-Policy/",
    "arxiv": "https://arxiv.org/abs/2603.17240",
    "year": "2026",
    "venue": "arXiv:2603.17240",
    "zh": {
      "title": "GigaWorld-Policy: An Efficient Action-Centered World-Action Model",
      "authors": "Angen Ye, Boyuan Wang, Chaojun Ni, Guan Huang, Guosheng Zhao, Hao Li, Hengtao Li, Jie Li, Jindi Lv, Jingyu Liu, Min Cao, Peng Li, Qiuping Deng, Wenjun Mei, Xiaofeng Wang, Xinze Chen, Xinyu Zhou, Yang Wang, Yifan Chang, Yifan Li, Yukun Zhou, Yun Ye, Zhichao Liu, Zheng Zhu",
      "status": "已整理",
      "tags": [
        "世界动作模型",
        "机器人策略",
        "动作中心建模"
      ],
      "mainContent": "GigaWorld-Policy 研究如何把视频世界模型变成高效机器人策略。论文提出 action-centered World-Action Model，让模型在训练时同时学习未来视频和动作，但在推理时主要输出动作，从而避免逐帧生成视频带来的高延迟。作者基于大规模视频模型和约 10K 小时多源视频数据预训练 GigaWorld-0.5，再用目标机器人轨迹做后训练，在真实机械臂任务上报告 0.83 成功率、约 0.36 秒单步推理，并显著快于需要在线生成视频的 WAM 方法。",
      "innovations": [
        "把 WAM 设计成动作中心结构：动作预测是主路径，未来视频生成是训练期辅助信号，而不是每次控制都必须生成的视频规划结果。",
        "提出 block-causal attention mask，动作 token 只能看当前观测、本体状态和语言，未来视频 token 可以看动作，从结构上防止未来视觉信息泄漏到动作预测。",
        "采用 train complex, infer simple 的思路：训练时用视频预测强化物理和时空理解，推理时只走动作解码，兼顾世界建模能力和实时控制效率。",
        "通过大规模视频预训练把网络视频、机器人视频和人类第一视角视频中的动态先验迁移到机器人策略，再用少量目标机器人数据适配具体 embodiment。"
      ],
      "implementation": [
        "输入包含多视角 RGB 观测、本体状态和语言指令；视觉由 VAE 编码，本体状态和动作通过线性投影进入共享的 diffusion Transformer。",
        "模型从 Wan2.2 5B 视频生成骨干初始化，预训练阶段主要做未来视频建模，后训练阶段联合优化视频 latent 和动作 token 的 flow matching 目标。",
        "注意力结构把序列分成当前观测、动作和未来视觉三类 token：动作不能 attend 到未来视觉，未来视觉可以 attend 到动作，以学习动作如何改变世界。",
        "部署时关闭未来视频解码分支，只根据最新观测和语言生成 action chunk；需要诊断或可视化时，仍可打开视频分支预测未来帧。",
        "实验覆盖自建 GigaWorld 数据、LIBERO 仿真和真实机械臂任务，重点比较成功率、推理时延以及相对 OpenVLA-OFT、Diffusion Policy、PI0 和 Motus 等方法的效率。"
      ]
    },
    "en": {
      "title": "GigaWorld-Policy: An Efficient Action-Centered World-Action Model",
      "authors": "Angen Ye, Boyuan Wang, Chaojun Ni, Guan Huang, Guosheng Zhao, Hao Li, Hengtao Li, Jie Li, Jindi Lv, Jingyu Liu, Min Cao, Peng Li, Qiuping Deng, Wenjun Mei, Xiaofeng Wang, Xinze Chen, Xinyu Zhou, Yang Wang, Yifan Chang, Yifan Li, Yukun Zhou, Yun Ye, Zhichao Liu, Zheng Zhu",
      "status": "Summarized",
      "tags": [
        "World Action Model",
        "Robot Policy",
        "Action-centered Modeling"
      ],
      "mainContent": "GigaWorld-Policy studies how to turn a video world model into an efficient robot policy. The paper proposes an action-centered World-Action Model that learns future video and actions during training, but primarily outputs actions during inference, avoiding the latency of online video generation. The authors pretrain GigaWorld-0.5 from a large video model and about 10K hours of mixed video data, then post-train on target robot trajectories. In real-robot tasks, they report a 0.83 success rate and about 0.36 seconds per inference, substantially faster than WAM methods that generate video online.",
      "innovations": [
        "It makes action prediction the primary path: future video generation is a training-time auxiliary signal, not a required online planning output.",
        "A block-causal attention mask lets action tokens see only current observations, proprioception, and language, while future visual tokens can condition on actions, preventing future-visual leakage into action prediction.",
        "The method follows a train-complex, infer-simple recipe: use video prediction to strengthen physical and temporal understanding during training, then decode only actions for real-time control.",
        "Large-scale video pretraining transfers dynamics priors from web videos, robot videos, and egocentric human videos into the policy, then limited target-robot data adapts the model to a specific embodiment."
      ],
      "implementation": [
        "Inputs include multi-view RGB observations, proprioceptive state, and language instructions; visual tokens are encoded with a VAE, while state and action tokens are projected into a shared diffusion Transformer.",
        "The backbone is initialized from the Wan2.2 5B video-generation model. Pretraining focuses on future-video modeling, and post-training jointly optimizes video latents and action tokens with flow matching.",
        "The sequence is divided into current observation, action, and future-visual tokens: actions cannot attend to future visuals, while future visuals can attend to actions to learn how actions change the world.",
        "At deployment, the future-video decoding branch is disabled and the policy predicts action chunks from the latest observation and language; the video branch can still be enabled for diagnosis or visualization.",
        "Experiments cover the GigaWorld data, LIBERO simulation, and real-robot manipulation tasks, emphasizing success rate, inference latency, and efficiency compared with OpenVLA-OFT, Diffusion Policy, PI0, and Motus."
      ]
    }
  },
  {
    "id": "hermes-human-to-robot-embodied-learning-from-multi-sourc",
    "categories": [
      "manipulation",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2508.20085",
    "project": "https://arxiv.org/abs/2508.20085",
    "arxiv": "https://arxiv.org/abs/2508.20085",
    "year": "2025",
    "venue": "arXiv:2508.20085",
    "zh": {
      "title": "HERMES: Human-to-Robot Embodied Learning from Multi-SouRce Motion Data for MobilE DexterouS Manipulation",
      "authors": "Zhecheng Yuan, Tianming Wei, Langzhe Gu, Pu Hua, Tianhai Liang, Yuanpei Chen, Huazhe Xu",
      "status": "已整理",
      "tags": [
        "Human-to-Robot Learning",
        "Multi-source Motion Data",
        "Mobile Dexterous Manipulation",
        "Retargeting",
        "Embodiment Gap"
      ],
      "mainContent": "HERMES 关注如何将多源人类手部/操作动作数据转化为可在移动双臂灵巧机器人上执行的操作策略。论文提出一个 human-to-robot learning 框架，用统一强化学习方法把异构人类动作转为物理可行的机器人行为，并结合深度图像输入的端到端 sim-to-real 方法提升真实场景泛化。系统还通过闭环 PnP 定位把视觉目标与自主导航、灵巧操作连接起来。",
      "innovations": [
        "面向 mobile bimanual dexterous manipulation，整合多源人类动作数据进行机器人策略学习。",
        "使用统一 RL 方式将异构人类手部动作转化为物理可行的机器人行为。",
        "引入 depth image-based sim-to-real transfer，提升真实非结构化场景泛化。",
        "用闭环 PnP localization 对齐视觉目标，实现导航基础模型与灵巧操作的衔接。"
      ],
      "implementation": [
        "输入多源人类动作数据，经过 human-to-robot 转换形成可供 RL 使用的训练信号。",
        "在仿真中训练移动双臂灵巧操作策略，使人类动作先验转化为机器人可执行动作。",
        "部署阶段使用深度图像作为感知输入，降低从仿真到现实的视觉差异。",
        "结合导航 foundation model 与闭环 PnP 定位，实现目标定位、移动和双臂灵巧操作闭环。"
      ]
    },
    "en": {
      "title": "HERMES: Human-to-Robot Embodied Learning from Multi-SouRce Motion Data for MobilE DexterouS Manipulation",
      "authors": "Zhecheng Yuan, Tianming Wei, Langzhe Gu, Pu Hua, Tianhai Liang, Yuanpei Chen, Huazhe Xu",
      "status": "Summarized",
      "tags": [
        "Human-to-Robot Learning",
        "Multi-source Motion Data",
        "Mobile Dexterous Manipulation",
        "Retargeting",
        "Embodiment Gap"
      ],
      "mainContent": "HERMES studies how to transform multi-source human motion data into deployable mobile bimanual dexterous manipulation skills. It uses a unified reinforcement-learning formulation to convert heterogeneous human hand motions into physically plausible robot behaviors, and combines this with depth-image-based sim-to-real transfer. A closed-loop PnP localization mechanism connects visual goals, autonomous navigation, and dexterous manipulation.",
      "innovations": [
        "A human-to-robot learning framework for mobile bimanual dexterous manipulation.",
        "Unified RL-based transformation of heterogeneous human motion sources into feasible robot behaviors.",
        "End-to-end depth-image-based sim-to-real transfer for real-world generalization.",
        "Closed-loop PnP localization to bridge visual goal alignment, navigation, and dexterous manipulation."
      ],
      "implementation": [
        "Collect or aggregate multi-source human hand/manipulation motion data.",
        "Convert human motion into robot-compatible training signals and train policies in simulation.",
        "Use depth images for perception during sim-to-real deployment.",
        "Combine navigation foundation model output with PnP localization and dexterous manipulation policy execution."
      ]
    }
  },
  {
    "id": "motiontrans-human-vr-data-enable-motion-level-learning-f",
    "categories": [
      "manipulation",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2509.17759",
    "project": "https://arxiv.org/abs/2509.17759",
    "arxiv": "https://arxiv.org/abs/2509.17759",
    "year": "2025",
    "venue": "arXiv:2509.17759",
    "zh": {
      "title": "MotionTrans: Human VR Data Enable Motion-Level Learning for Robotic Manipulation Policies",
      "authors": "Chengbo Yuan, Rui Zhou, Mengzhen Liu, Yingdong Hu, Shengjie Wang, Li Yi, Chuan Wen, Shanghang Zhang, Yang Gao",
      "status": "已整理",
      "tags": [
        "VR Data",
        "Motion-Level Learning",
        "Zero-Shot Motion Transfer",
        "Relative Pose",
        "Co-training"
      ],
      "mainContent": "MotionTrans 研究人类 VR 数据能否让机器人直接学习新的操作运动，而不是只提升鲁棒性或预训练效果。论文提出数据采集、人类数据转换和加权协同训练框架，在 30 个 human-robot 任务上联合训练，并将 13 个任务的人类动作迁移到端到端机器人策略中，其中 9 个任务实现非平凡零样本成功率。",
      "innovations": [
        "系统验证人类 VR 数据可以支持 motion-level zero-shot transfer。",
        "提出包含数据采集、人类数据转换和 weighted co-training 的 MotionTrans 框架。",
        "强调人类数据与机器人数据协同训练的重要性。",
        "通过消融指出成功迁移依赖机器人数据协同训练和足够广的 task-related motion coverage。"
      ],
      "implementation": [
        "使用 VR 系统采集人类操作数据，并转换成机器人可学习的数据格式。",
        "将人类数据和机器人数据在多任务设置下协同训练。",
        "使用加权 co-training 平衡不同来源、不同任务的数据。",
        "在零样本任务和 pretraining-finetuning 场景中评估策略迁移能力。"
      ]
    },
    "en": {
      "title": "MotionTrans: Human VR Data Enable Motion-Level Learning for Robotic Manipulation Policies",
      "authors": "Chengbo Yuan, Rui Zhou, Mengzhen Liu, Yingdong Hu, Shengjie Wang, Li Yi, Chuan Wen, Shanghang Zhang, Yang Gao",
      "status": "Summarized",
      "tags": [
        "VR Data",
        "Motion-Level Learning",
        "Zero-Shot Motion Transfer",
        "Relative Pose",
        "Co-training"
      ],
      "mainContent": "MotionTrans explores whether human VR data can teach robot policies new manipulation motions at the motion level. The framework combines data collection, human-data transformation, and weighted human-robot cotraining. By cotraining 30 tasks, it transfers motions from 13 human-only tasks to deployable robot policies, with 9 tasks achieving non-trivial zero-shot success.",
      "innovations": [
        "Systematic study of zero-shot motion transfer from human VR data.",
        "A complete framework for data collection, human-to-robot transformation, and weighted cotraining.",
        "Empirical evidence that robot data cotraining is necessary for motion transfer.",
        "Identification of broad task-related motion coverage as a key factor."
      ],
      "implementation": [
        "Collect human VR demonstrations and convert them into robot-compatible trajectories/actions.",
        "Jointly train end-to-end policies on human and robot tasks.",
        "Apply weighted multitask cotraining to balance heterogeneous data.",
        "Evaluate on zero-shot transfer tasks and pretrain-finetune settings."
      ]
    }
  },
  {
    "id": "dexman-learning-bimanual-dexterous-manipulation-from-hum",
    "categories": [
      "manipulation",
      "imitation-teleop"
    ],
    "pdf": "https://embodiedai-ntu.github.io/dexman/index.html",
    "project": "https://embodiedai-ntu.github.io/dexman/index.html",
    "arxiv": "https://embodiedai-ntu.github.io/dexman/index.html",
    "year": "2025",
    "venue": "Project",
    "zh": {
      "title": "DEXMAN: Learning Bimanual Dexterous Manipulation from Human and Generated Videos",
      "authors": "Jhen Hsieh, Kuan-Hsun Tu, Kuo-Han Hung, Tsung-Wei Ke",
      "status": "已整理",
      "tags": [
        "Bimanual Manipulation",
        "Human Videos",
        "Generated Videos",
        "Imitation Learning",
        "Dexterous Hands"
      ],
      "mainContent": "DexMan 将单目人类演示视频自动转换为人形机器人的双手灵巧操作技能，目标是减少对动捕、深度传感器、相机标定和人工标注的依赖。系统从第三人称视频中重建物体 mesh、估计深度和恢复 3D hand-object motion，再重定向到仿真中的完整 humanoid，并通过 residual RL 与接触奖励优化操作技能。",
      "innovations": [
        "从真实或合成单目视频自动生成双手灵巧操作技能。",
        "不依赖相机标定、深度传感器、扫描物体模型或真实 hand-object motion annotation。",
        "不只控制 floating hands，而是直接控制完整 humanoid。",
        "提出 contact-based reward，使 noisy hand-object pose 可用于 RL 策略学习。"
      ],
      "implementation": [
        "输入第三人称人类操作视频，估计深度、物体 mesh 和 3D hand-object motion。",
        "将估计到的人手/物体运动重定向到 Isaac Gym 中的 humanoid robot。",
        "使用 residual RL refine 重定向运动，使机器人复现目标物体轨迹。",
        "用 contact reward 鼓励稳定抓取和有效接触。"
      ]
    },
    "en": {
      "title": "DEXMAN: Learning Bimanual Dexterous Manipulation from Human and Generated Videos",
      "authors": "Jhen Hsieh, Kuan-Hsun Tu, Kuo-Han Hung, Tsung-Wei Ke",
      "status": "Summarized",
      "tags": [
        "Bimanual Manipulation",
        "Human Videos",
        "Generated Videos",
        "Imitation Learning",
        "Dexterous Hands"
      ],
      "mainContent": "DexMan converts monocular human demonstration videos into bimanual dexterous manipulation skills for humanoid robots in simulation. It reconstructs object meshes, estimates depth, recovers 3D hand-object motions, and retargets them to a full humanoid. A residual RL policy with contact-based rewards refines noisy retargeted motions into executable skills.",
      "innovations": [
        "Automated conversion from monocular real or generated videos to humanoid bimanual skills.",
        "No need for camera calibration, depth sensors, scanned object assets, or ground-truth hand/object annotations.",
        "Direct control of a humanoid robot rather than simplified floating hands.",
        "Contact-based reward for learning from noisy hand-object pose estimates."
      ],
      "implementation": [
        "Recover depth, mesh, and 3D hand-object motion from third-person videos.",
        "Retarget recovered motions to a full humanoid in Isaac Gym.",
        "Train residual RL policies to reproduce object trajectories.",
        "Use human motion and contact priors to stabilize learning."
      ]
    }
  },
  {
    "id": "dexterous-functional-grasping",
    "categories": [
      "manipulation"
    ],
    "pdf": "https://arxiv.org/pdf/2312.02975",
    "project": "https://arxiv.org/abs/2312.02975",
    "arxiv": "https://arxiv.org/abs/2312.02975",
    "year": "2023",
    "venue": "arXiv:2312.02975",
    "zh": {
      "title": "Dexterous Functional Grasping",
      "authors": "Ananye Agarwal, Shagun Uppal, Kenneth Shaw, Deepak Pathak",
      "status": "已整理",
      "tags": [
        "Functional Grasping",
        "Franka",
        "LEAP Hand",
        "Tool Use",
        "Dexterous Manipulation"
      ],
      "mainContent": "这篇论文关注功能性抓握：机器人不仅要抓住物体，还要以便于后续使用工具的方式抓取。方法将真实世界语义 affordance 与仿真训练的低层灵巧抓握策略结合起来，并用少量人类数据构建 eigengrasp action space，降低 RL 搜索空间。",
      "innovations": [
        "将 object correspondence/affordance 与低层灵巧控制结合，实现 in-the-wild functional grasping。",
        "使用 eigengrasp action space 降低 RL 动作空间复杂度。",
        "将少量人类数据用于形成更稳定、更物理真实的抓握动作先验。",
        "在真实系统中优于 hardcoded grasping，并达到或超过训练过的人类遥操作员。"
      ],
      "implementation": [
        "先通过不同物体之间的区域对应关系获得功能性 affordance。",
        "在仿真中训练低层策略完成目标区域抓取。",
        "使用 eigengrasps 参数化手部动作，压缩搜索空间。",
        "在真实 Franka + dexterous hand 等平台上进行功能性抓取验证。"
      ]
    },
    "en": {
      "title": "Dexterous Functional Grasping",
      "authors": "Ananye Agarwal, Shagun Uppal, Kenneth Shaw, Deepak Pathak",
      "status": "Summarized",
      "tags": [
        "Functional Grasping",
        "Franka",
        "LEAP Hand",
        "Tool Use",
        "Dexterous Manipulation"
      ],
      "mainContent": "The paper studies functional grasping, where a robot must grasp objects in ways that support subsequent tool use. It combines semantic affordances from object correspondences with low-level dexterous grasp policies trained in simulation. A small amount of human data is used to define an eigengrasp action space that makes RL more stable and realistic.",
      "innovations": [
        "Modular combination of affordance matching and low-level dexterous control.",
        "Use of eigengrasps to reduce the RL action space.",
        "Small human-data prior for stable and physically realistic grasping.",
        "Real-world performance exceeding hardcoded grasping and matching or outperforming trained teleoperators."
      ],
      "implementation": [
        "Identify functional affordance regions through object correspondence.",
        "Train a low-level grasping policy in simulation.",
        "Parameterize actions with eigengrasps.",
        "Deploy on real dexterous grasping setups and compare against baselines."
      ]
    }
  },
  {
    "id": "efficient-sim-to-real-transfer-of-contact-rich-manipulat",
    "categories": [
      "manipulation",
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2310.10509",
    "project": "https://arxiv.org/abs/2310.10509",
    "arxiv": "https://arxiv.org/abs/2310.10509",
    "year": "2023",
    "venue": "arXiv:2310.10509",
    "zh": {
      "title": "Efficient Sim-to-real Transfer of Contact-Rich Manipulation Skills with Online Admittance Residual Learning",
      "authors": "Xiang Zhang, Changhao Wang, Lingfeng Sun, Zheng Wu, Xinghao Zhu, Masayoshi Tomizuka",
      "status": "已整理",
      "tags": [
        "Contact-Rich Manipulation",
        "Admittance Control",
        "Residual Learning",
        "Sim-to-Real"
      ],
      "mainContent": "论文解决接触丰富操作技能中的 sim-to-real gap 和真实数据低效问题。方法采用 hybrid offline-online 框架：离线在仿真中用 model-free RL 学习运动轨迹和 compliance/admittance 参数，在线在真实机器人上基于力传感器实时学习 compliance 参数残差。",
      "innovations": [
        "提出离线仿真 RL + 在线真实残差学习的混合框架。",
        "将 residual learning 作用在 compliance/admittance 控制参数层，而不是直接替代底层控制器。",
        "使用实时力传感器反馈优化真实任务表现。",
        "在装配、pivoting、screwing 等接触任务上进行比较验证。"
      ],
      "implementation": [
        "仿真阶段使用 domain randomization 和 model-free RL 学习轨迹与初始柔顺控制参数。",
        "真实阶段固定基础策略，在线优化 admittance residual。",
        "通过力传感器度量接触状态和任务质量。",
        "在多类 contact-rich manipulation 任务上评估 sim-to-real 迁移效果。"
      ]
    },
    "en": {
      "title": "Efficient Sim-to-real Transfer of Contact-Rich Manipulation Skills with Online Admittance Residual Learning",
      "authors": "Xiang Zhang, Changhao Wang, Lingfeng Sun, Zheng Wu, Xinghao Zhu, Masayoshi Tomizuka",
      "status": "Summarized",
      "tags": [
        "Contact-Rich Manipulation",
        "Admittance Control",
        "Residual Learning",
        "Sim-to-Real"
      ],
      "mainContent": "This work addresses sim-to-real transfer for contact-rich manipulation. It uses an offline-online hybrid framework: model-free RL in simulation learns robot motion and compliance parameters, while real-world online learning adjusts residual compliance/admittance parameters using force-sensor feedback.",
      "innovations": [
        "Hybrid offline simulation RL and online residual adaptation.",
        "Residual learning applied to compliance/admittance parameters.",
        "Real-time force-feedback-based parameter adaptation.",
        "Evaluation on assembly, pivoting, and screwing tasks."
      ],
      "implementation": [
        "Train motion and initial compliance parameters in simulation with domain randomization.",
        "Deploy the policy to the real robot.",
        "Learn residual compliance parameters online from force measurements.",
        "Compare against existing contact-rich manipulation baselines."
      ]
    }
  },
  {
    "id": "visuo-tactile-feedback-policies-for-terminal-assembly-fa",
    "categories": [
      "manipulation",
      "sim2real"
    ],
    "pdf": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12586048/",
    "project": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12586048/",
    "arxiv": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12586048/",
    "year": "2025",
    "venue": "Project",
    "zh": {
      "title": "Visuo-tactile Feedback Policies for Terminal Assembly Facilitated by Reinforcement Learning",
      "authors": "Yuchao Li, Ziqi Jin, Jin Liu, Daolin Ma",
      "status": "已整理",
      "tags": [
        "Visuo-tactile Feedback",
        "Terminal Assembly",
        "Tactile Sim-to-Real",
        "Residual RL"
      ],
      "mainContent": "该论文面向工业 PLC terminal assembly，研究如何在真实世界中安全学习视觉-触觉反馈策略，解决抓取姿态不确定、碰撞、滑移和零件损坏问题。方法将任务分为 grasp、align、assembly 三阶段，结合视觉抓取、触觉姿态估计和 visuo-tactile RL 插入策略，并使用人类演示与干预提高训练安全性。",
      "innovations": [
        "提出用于真实 terminal assembly 的安全视觉-触觉 RL 框架。",
        "将任务分解为视觉抓取、触觉对齐和视觉-触觉装配三阶段。",
        "使用 inexpensive off-the-shelf sensors 处理抓取姿态不确定性。",
        "在 100 个初始位姿上达到 100/100 成功插入，显著优于 imitation learning 和 online RL baseline。"
      ],
      "implementation": [
        "训练 vision-guided model 从料箱中抓取 terminal head。",
        "使用 tactile-based grasp pose estimation 对齐 terminal head 与 terminal base。",
        "训练 visuo-tactile RL policy 完成精确插入。",
        "使用 human demonstrations、interventions 和 reward classifier 支持安全高效训练。"
      ]
    },
    "en": {
      "title": "Visuo-tactile Feedback Policies for Terminal Assembly Facilitated by Reinforcement Learning",
      "authors": "Yuchao Li, Ziqi Jin, Jin Liu, Daolin Ma",
      "status": "Summarized",
      "tags": [
        "Visuo-tactile Feedback",
        "Terminal Assembly",
        "Tactile Sim-to-Real",
        "Residual RL"
      ],
      "mainContent": "The paper develops a safe real-world visuo-tactile RL approach for PLC terminal assembly under grasp-pose uncertainty. It decomposes the task into grasp, align, and assembly phases, using vision for picking, tactile sensing for pose alignment, and a visuo-tactile RL policy for insertion. Human demonstrations and interventions make training safer.",
      "innovations": [
        "Safe visuo-tactile RL framework for real-world terminal assembly.",
        "Three-phase decomposition: visual grasping, tactile alignment, and visuo-tactile insertion.",
        "Robustness to grasp-pose variations with low-cost sensors.",
        "100/100 success rate on PLC terminal assembly, outperforming imitation and online-RL baselines."
      ],
      "implementation": [
        "Train a vision-guided grasping model.",
        "Use tactile grasp-pose estimation for alignment.",
        "Train a visuo-tactile insertion policy with RL.",
        "Use human demonstrations, interventions, and a reward classifier for safe data collection and training."
      ]
    }
  },
  {
    "id": "transic-sim-to-real-policy-transfer-by-learning-from-onl",
    "categories": [
      "manipulation",
      "sim2real",
      "imitation-teleop"
    ],
    "pdf": "https://transic-robot.github.io/",
    "project": "https://transic-robot.github.io/",
    "arxiv": "https://transic-robot.github.io/",
    "year": "2024",
    "venue": "Project",
    "zh": {
      "title": "TRANSIC: Sim-to-Real Policy Transfer by Learning from Online Correction",
      "authors": "Yunfan Jiang, Chen Wang, Ruohan Zhang, Jiajun Wu, Li Fei-Fei",
      "status": "已整理",
      "tags": [
        "Online Correction",
        "Human-in-the-loop",
        "Residual Imitation",
        "Furniture Assembly"
      ],
      "mainContent": "TRANSIC 面向长程、接触丰富的家具组装任务，提出通过人类在线纠错来学习 sim-to-real residual policy。系统先在仿真中训练 base policy，再部署到真实机器人上由人类监控并在失败趋势出现时遥操作纠正；纠正数据用于训练 gated residual policy，最终与 base policy 集成自主执行。",
      "innovations": [
        "将 human-in-the-loop online correction 转化为 sim-to-real residual learning。",
        "使用 gated residual policy 减少 catastrophic forgetting，同时保留仿真 base policy 能力。",
        "通过 point cloud observation 和 joint position actions 缓解 perception/controller gap。",
        "在 FurnitureBench 的稳定、抓取、插入、拧紧等任务上显著优于多类 baselines。"
      ],
      "implementation": [
        "在大规模并行仿真中用 RL 训练 teacher policies。",
        "通过 action space distillation 将 teacher 蒸馏为 visuomotor student policy。",
        "真实部署时由人类监控并通过 teleoperation 进行在线纠错。",
        "收集 correction data 训练 residual policy，并在测试时与 base policy 结合。"
      ]
    },
    "en": {
      "title": "TRANSIC: Sim-to-Real Policy Transfer by Learning from Online Correction",
      "authors": "Yunfan Jiang, Chen Wang, Ruohan Zhang, Jiajun Wu, Li Fei-Fei",
      "status": "Summarized",
      "tags": [
        "Online Correction",
        "Human-in-the-loop",
        "Residual Imitation",
        "Furniture Assembly"
      ],
      "mainContent": "TRANSIC uses human online correction to bridge sim-to-real gaps for long-horizon, contact-rich furniture assembly. A base policy is trained in simulation and deployed on the real robot under human supervision. Human teleoperation corrections are collected to train a gated residual policy that is integrated with the simulation policy for autonomous execution.",
      "innovations": [
        "Human-in-the-loop online correction for sim-to-real residual learning.",
        "Gated residual policies to avoid catastrophic forgetting of base simulation policies.",
        "Point-cloud observations and joint-position actions to reduce perception and controller gaps.",
        "Strong results on FurnitureBench contact-rich assembly tasks."
      ],
      "implementation": [
        "Train RL teacher policies in large-scale simulation.",
        "Distill teachers into visuomotor policies via action-space distillation.",
        "Collect human correction data during real-world execution.",
        "Train residual policies from corrections and integrate them with base policies at test time."
      ]
    }
  },
  {
    "id": "cordvip-correspondence-based-visuomotor-policy-for-dexte",
    "categories": [
      "manipulation",
      "sim2real"
    ],
    "pdf": "https://aureleopku.github.io/CordViP/",
    "project": "https://aureleopku.github.io/CordViP/",
    "arxiv": "https://aureleopku.github.io/CordViP/",
    "year": "2025",
    "venue": "Project",
    "zh": {
      "title": "CordViP: Correspondence-based Visuomotor Policy for Dexterous Manipulation in Real-World",
      "authors": "Yankai Fu, Qiuxuan Feng, Ning Chen, Zichen Zhou, Mengzhen Liu, Mingdong Wu, Tianxing Chen, Shanyu Rong, Jiaming Liu, Hao Dong, Shanghang Zhang",
      "status": "已整理",
      "tags": [
        "Correspondence",
        "Visuomotor Policy",
        "Dexterous Manipulation",
        "Real-world Data"
      ],
      "mainContent": "CordViP 是一个基于视觉对应关系的真实世界灵巧操作策略框架，目标是提升跨物体、跨场景的 dexterous manipulation 泛化。其核心思想是利用 correspondence 作为视觉运动策略的中间表示，使策略不只依赖像素外观，而能关注可迁移的操作相关结构。",
      "innovations": [
        "将 correspondence 引入 real-world dexterous visuomotor policy。",
        "面向真实机器人灵巧操作，而非纯仿真或简化抓取任务。",
        "通过视觉对应关系增强跨物体和跨环境泛化。",
        "提供项目页、视频与代码，便于复现和扩展。"
      ],
      "implementation": [
        "从视觉输入中提取操作相关对应关系。",
        "将 correspondence 表示作为 visuomotor policy 的关键输入。",
        "在真实机器人灵巧操作任务上训练和评估策略。",
        "通过多任务/多物体实验验证泛化能力。"
      ]
    },
    "en": {
      "title": "CordViP: Correspondence-based Visuomotor Policy for Dexterous Manipulation in Real-World",
      "authors": "Yankai Fu, Qiuxuan Feng, Ning Chen, Zichen Zhou, Mengzhen Liu, Mingdong Wu, Tianxing Chen, Shanyu Rong, Jiaming Liu, Hao Dong, Shanghang Zhang",
      "status": "Summarized",
      "tags": [
        "Correspondence",
        "Visuomotor Policy",
        "Dexterous Manipulation",
        "Real-world Data"
      ],
      "mainContent": "CordViP builds correspondence-based visuomotor policies for real-world dexterous manipulation. It uses visual correspondences as transferable intermediate representations, helping policies focus on manipulation-relevant structure rather than raw appearance alone.",
      "innovations": [
        "Correspondence-based representation for dexterous visuomotor control.",
        "Real-world dexterous manipulation focus.",
        "Improved cross-object and cross-environment generalization.",
        "Public project page, video, and code."
      ],
      "implementation": [
        "Extract correspondence features from visual observations.",
        "Feed correspondence representations into the visuomotor policy.",
        "Train and evaluate on real-world dexterous manipulation tasks.",
        "Test generalization across objects and settings."
      ]
    }
  },
  {
    "id": "amp-adversarial-motion-priors",
    "categories": [
      "locomotion",
      "imitation-teleop",
      "benchmark-dataset"
    ],
    "pdf": "https://arxiv.org/pdf/2104.02180",
    "project": "https://arxiv.org/abs/2104.02180",
    "arxiv": "https://arxiv.org/abs/2104.02180",
    "year": "2021",
    "venue": "arXiv:2104.02180",
    "zh": {
      "title": "AMP: Adversarial Motion Priors",
      "authors": "Xue Bin Peng, Ze Ma, Pieter Abbeel, Sergey Levine, Angjoo Kanazawa",
      "status": "已整理",
      "tags": [
        "Adversarial Imitation",
        "Motion Prior",
        "Style Reward",
        "GAN",
        "Quadruped Locomotion"
      ],
      "mainContent": "AMP 使用 adversarial imitation learning 从非结构化 motion clips 中学习运动风格奖励，避免手工设计复杂 imitation objective 和 motion selection 机制。高层任务由简单任务奖励指定，低层动作风格由 motion dataset 训练出的 adversarial motion prior 约束。",
      "innovations": [
        "用对抗运动先验替代手工 imitation reward。",
        "不需要显式 clip selection 或 motion sequencing。",
        "可从大规模非结构化 motion clips 中学习风格。",
        "支持不同技能的自动组合、插值和泛化。"
      ],
      "implementation": [
        "使用 motion clips 训练 discriminator/critic 区分 reference motion 与 policy rollout。",
        "将判别器输出转化为 style reward。",
        "RL policy 同时优化 task reward 与 adversarial style reward。",
        "在多个物理角色和运动控制任务上验证。"
      ]
    },
    "en": {
      "title": "AMP: Adversarial Motion Priors",
      "authors": "Xue Bin Peng, Ze Ma, Pieter Abbeel, Sergey Levine, Angjoo Kanazawa",
      "status": "Summarized",
      "tags": [
        "Adversarial Imitation",
        "Motion Prior",
        "Style Reward",
        "GAN",
        "Quadruped Locomotion"
      ],
      "mainContent": "AMP learns style rewards from unstructured motion clips using adversarial imitation learning. It avoids manually designed imitation objectives and explicit motion selection. Simple task rewards specify what to do, while the adversarial motion prior specifies how the character should move.",
      "innovations": [
        "Adversarial motion prior as learned style reward.",
        "No explicit motion clip selection or sequencing.",
        "Scales to unstructured motion datasets.",
        "Enables skill interpolation, composition, and generalization."
      ],
      "implementation": [
        "Train a discriminator on reference motion transitions and policy rollouts.",
        "Convert discriminator output into a style reward.",
        "Train the policy with task reward plus style reward.",
        "Evaluate on diverse simulated character control tasks."
      ]
    }
  },
  {
    "id": "humanmimic",
    "categories": [
      "locomotion",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2309.14225",
    "project": "https://arxiv.org/html/2309.14225v4",
    "arxiv": "https://arxiv.org/abs/2309.14225",
    "year": "2024",
    "venue": "arXiv:2309.14225",
    "zh": {
      "title": "HumanMimic",
      "authors": "Annan Tang, Takuma Hiraoka, Naoki Hiraoka, Fan Shi, Kento Kawaharazuka, Kunio Kojima, Kei Okada, Masayuki Inaba",
      "status": "已整理",
      "tags": [
        "Adversarial Imitation",
        "Wasserstein Critic",
        "Primitive Skeleton",
        "Humanoid Motion Retargeting"
      ],
      "mainContent": "HumanMimic 研究如何让全尺寸人形机器人通过模仿人类动作学习自然 locomotion 和运动切换。系统使用 primitive-skeleton retargeting 缓解人体与机器人形态差异，并将 Wasserstein adversarial imitation 与 RL 结合，用 soft boundary constrained Wasserstein critic 稳定训练。",
      "innovations": [
        "统一 primitive-skeleton motion retargeting，缓解 morphology gap。",
        "使用 Wasserstein-1 distance/IPM critic 替代普通 GAN 判别器。",
        "引入 soft boundary constraint 防止奖励爆炸和 mode collapse。",
        "在无 transition demonstration 时仍出现自然运动切换能力。"
      ],
      "implementation": [
        "先将人类动作通过 primitive skeleton 重定向到机器人。",
        "在 RL 中加入 adversarial critic，使策略状态分布贴近混合 reference motions。",
        "使用 Wasserstein critic 与软边界约束稳定训练。",
        "在 JAXON humanoid 仿真中验证站立、恢复、蹲走、直腿走和跑步。"
      ]
    },
    "en": {
      "title": "HumanMimic",
      "authors": "Annan Tang, Takuma Hiraoka, Naoki Hiraoka, Fan Shi, Kento Kawaharazuka, Kunio Kojima, Kei Okada, Masayuki Inaba",
      "status": "Summarized",
      "tags": [
        "Adversarial Imitation",
        "Wasserstein Critic",
        "Primitive Skeleton",
        "Humanoid Motion Retargeting"
      ],
      "mainContent": "HumanMimic learns natural locomotion and transitions for humanoid robots via Wasserstein adversarial imitation. It uses primitive-skeleton retargeting to reduce morphology differences and a soft-boundary Wasserstein critic to stabilize adversarial RL.",
      "innovations": [
        "Unified primitive-skeleton motion retargeting.",
        "Wasserstein-1/IPM adversarial critic for imitation.",
        "Soft boundary constraint for stable rewards and reduced mode collapse.",
        "Emergent natural transitions without explicit transition demonstrations."
      ],
      "implementation": [
        "Retarget human motions through a primitive-skeleton representation.",
        "Train a humanoid RL policy with a Wasserstein adversarial critic.",
        "Apply soft-boundary constraints to stabilize the style reward.",
        "Evaluate on JAXON humanoid locomotion patterns and transitions."
      ]
    }
  },
  {
    "id": "phc-perpetual-humanoid-control",
    "categories": [
      "locomotion",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2305.06456",
    "project": "https://zhengyiluo.github.io/PHC/",
    "arxiv": "https://arxiv.org/abs/2305.06456",
    "year": "2023",
    "venue": "arXiv:2305.06456",
    "zh": {
      "title": "Perpetual Humanoid Control for Real-time Simulated Avatars",
      "authors": "Zhengyi Luo, Jinkun Cao, Alexander Winkler, Kris Kitani, Weipeng Xu",
      "institutions": "Reality Labs Research, Meta; Carnegie Mellon University",
      "status": "全文已精读",
      "takeaway": "PHC 最值得记住的是：它不靠 RFC 外力或反复 reset，而是用“冻结旧 primitive、复制权重训练更难动作、单独学习恢复技能、最后由 composer 乘性组合”的 PMCP 流程，把大规模 motion imitation、抗遗忘和 fail-state recovery 统一成一个实时物理控制器。",
      "tags": [
        "PHC",
        "PMCP",
        "PPO",
        "AMP",
        "Motion Imitation",
        "Hard Negative Mining",
        "Fail-state Recovery",
        "Multiplicative Control"
      ],
      "mainContent": "论文研究如何让物理仿真人形体在噪声参考动作和意外摔倒下持续运行，同时在不使用 Residual Force Control（RFC）等外部稳定力的条件下覆盖大规模人体动作库。核心方法 PMCP 先用 PPO、AMP 和 motion tracking reward 训练多个逐步扩容的 primitive：第一个 primitive 学全数据集，后续 primitive 专门学习上一阶段自动筛出的失败序列，并冻结旧网络以避免灾难性遗忘；随后另训恢复 primitive，再用 multiplicative composer 统一组合。主实验总计使用 4 个 primitive，其中 3 个用于 motion imitation、1 个用于 fail-state recovery，在 AMASS-Train* 上达到 98.9% 成功率，并能直接接收关节旋转或仅 3D keypoints。局限是仍难覆盖后空翻、高跳、侧手翻等需要未来意图和长时规划的高动态动作，且训练成本约为单张 A100 一周、约 100 亿样本。",
      "innovations": [
        "核心新方法是 Progressive Multiplicative Control Policy（PMCP）：把上一 primitive 无法完成的 motion clips 视为更难的新任务，冻结旧 primitive 并增加新网络容量，从结构上减少继续训练同一 actor 时的灾难性遗忘。",
        "将 progressive primitives 与 Multiplicative Control Policy 结合：所有 primitive 训练完成并冻结后，composer 根据同一状态输入输出各 primitive 的激活权重，以 product-of-Gaussians 形式生成最终动作分布，而不是人工指定某个动作类别或只选择一个 expert。",
        "将 fail-state recovery 作为独立 primitive 纳入同一 primitive stack；角色摔倒或距离参考 root 超过 0.5 m 时，目标从全身模仿退化为只保留参考 root 位姿的 point-goal recovery，靠近后再切回完整 motion imitation。",
        "论文展示了只依赖 3D keypoints 的 keypoint-based controller，可把视觉估计得到的关键点直接转成物理可执行动作；这更像由物理策略完成受动力学约束的在线 IK，而不要求输入完整关节旋转。",
        "AMP、PPO、PNN、MCP、RSI 和 hard negative mining 均来自已有工作；本文的主要贡献是把它们重新组织成可扩展的大规模 imitation 与恢复框架。Relaxed Early Termination（RET）和 energy penalty 属于重要辅助设计，而非单独的核心理论创新。"
      ],
      "implementation": [
        "动作序列的数学单位是一段连续参考轨迹 \\(\\hat q_{1:T}\\)，每帧包含所有 link 的旋转 \\(\\hat\\theta_t\\) 和位置 \\(\\hat p_t\\)，速度由有限差分得到。论文没有规定“一段 clip 必须对应一个 .npz 或 .pkl 文件”；文件只是存储容器，训练逻辑识别的是连续 sequence。",
        "单步策略输入为 \\(s_t=(s_t^p,s_t^g)\\)。本体状态 \\(s_t^p\\) 包含当前仿真 pose、velocity 和可选 body shape；rotation-based goal 包含下一帧参考旋转、位置、线速度、角速度及其与当前仿真状态的差，keypoint-based goal 只包含 3D 位置、速度及误差。",
        "策略输出不是 torque，而是 23 个可驱动 SMPL 关节的 3 维 PD target，即 \\(a_t\\in\\mathbb R^{23\\times3}\\) 且 \\(q_t^d=a_t\\)。PD 控制器再计算关节力矩；PHC 不使用 \\(q_t^d=\\hat q_t+a_t\\) 的 residual action，也不在 root 上施加 RFC 外力。",
        "基础训练循环：从当前 motion set 随机采样序列和起始帧，构造状态，策略输出动作，Isaac Gym 推进一步，计算 reward 并存入 rollout memory；actor 和 value function 用 PPO 更新，AMP discriminator 用同一批经验持续更新。",
        "imitation primitive 的奖励为 \\(r_t=0.5r_t^{g}+0.5r_t^{amp}+r_t^{energy}\\)。任务项跟踪所有 link 的位置、旋转、线速度和角速度；AMP 提供人类运动先验；energy penalty 抑制无外力策略为了平衡而产生的脚部高频抖动。",
        "阶段 1：在完整 AMASS 训练集上训练 \\(P^{(1)}\\)，直到当前数据集上的成功率不再提高。训练使用 Reference State Initialization；RET 在平均全局关节误差超过 0.5 m 时终止 episode，但从终止条件中排除 ankle 和 toe，允许脚部为保持平衡略微偏离 MoCap。",
        "阶段 2：自动在当前数据集上逐条 rollout 并筛选失败 clips，形成下一轮 hard subset。论文的成功指标定义为：模仿过程中任意时刻，body joints 与参考动作的平均全局距离超过 0.5 m，则该序列失败；因此 hard mining 主要是自动评估，不是人工逐条看视频。论文没有明确说明正式评估 Succ 时是否也像训练 RET 一样排除 ankle 和 toe。",
        "阶段 3：冻结旧 primitive，新建 \\(P^{(k+1)}\\) 专门训练上一阶段的 hard subset。主实验采用 weight sharing / warm start：复制前一个 primitive 的权重后继续训练新网络，而不是直接修改旧网络，也不是完全从零独立训练；旧 primitive 保持冻结。论文还在附录比较了“随机初始化新 primitive + lateral connections”的原始 PNN 形式，但没有测试“随机初始化且完全不访问旧 primitive”的纯从头训练。",
        "主实验总计使用 4 个 primitive，其中最后一个是恢复 primitive，因此可理解为 3 个 imitation primitives 覆盖绝大多数 motion clips，再加 \\(P^{(F)}\\) 处理失败恢复。覆盖并非 100%；AMASS-Train* 成功率为 98.9%，剩余失败主要是 backflip、cartwheel、high jump 等高动态动作。",
        "阶段 4：训练 fail-state recovery primitive \\(P^{(F)}\\)。训练初始状态通过随机把 humanoid 扔到地面，或初始化在参考 root 之外 2–5 m；恢复时移除非 root 参考关节目标，只保留参考 root 的相对位置和方向，奖励使用距离进展 \\(d_{t-1}-d_t\\)、AMP 和 energy penalty。其训练数据 \\(\\mathcal Q_{loco}\\) 是人工挑选的 AMASS walking/running 子集。",
        "阶段 5：冻结全部 imitation 和 recovery primitives，训练 composer \\(C\\)。Composer 与 primitive 接收相同状态，输出每个 primitive 的非负权重，并将多个独立高斯动作分布乘性组合为最终 \\(\\pi_{PHC}(a_t\\mid s_t)\\)；composer 训练中交替包含 imitation 和 fail-recovery 任务。",
        "网络均为两层 MLP，隐藏维度为 [1024, 512]；策略使用固定对角高斯协方差。训练并行 1536 个 humanoid，Isaac Gym 仿真 60 Hz、策略 30 Hz，单张 NVIDIA A100 约训练 7 天并收集约 100 亿样本。四 primitive 模型约 28.8 MB，带仿真和渲染约 32 FPS，不带渲染约 50 FPS。",
        "部署阶段只保留冻结的 primitives、composer、PD 控制与物理仿真闭环；PPO value function 和 AMP discriminator 主要用于训练奖励与优化。输入可以来自 MoCap、HybrIK 关节旋转、MeTRAbs 3D keypoints 或 MDM 生成动作，最终输出仍是逐步 PD targets。"
      ]
    },
    "en": {
      "title": "Perpetual Humanoid Control for Real-time Simulated Avatars",
      "authors": "Zhengyi Luo, Jinkun Cao, Alexander Winkler, Kris Kitani, Weipeng Xu",
      "institutions": "Reality Labs Research, Meta; Carnegie Mellon University",
      "status": "Full paper reviewed",
      "takeaway": "The key idea of PHC is to replace RFC-based stabilization and repeated resets with a PMCP pipeline that freezes old primitives, warm-starts new primitives on harder clips, learns recovery as a separate primitive, and finally combines all skills with a multiplicative composer.",
      "tags": [
        "PHC",
        "PMCP",
        "PPO",
        "AMP",
        "Motion Imitation",
        "Hard Negative Mining",
        "Fail-state Recovery",
        "Multiplicative Control"
      ],
      "mainContent": "The paper studies perpetual control of physically simulated humanoids under noisy reference motion and unexpected falls, without Residual Force Control (RFC) or other external stabilizing forces. PMCP trains a progressive stack of PPO/AMP motion primitives: the first primitive learns the full dataset, later primitives learn automatically mined failure sequences while previous networks are frozen, a separate recovery primitive is then added, and a multiplicative composer combines them. The main model uses four primitives in total—three for motion imitation and one for fail-state recovery—reaching 98.9% success on AMASS-Train* and supporting either joint rotations or 3D keypoints as reference input. Remaining limitations include highly dynamic clips that require future intent and long-horizon planning, as well as a training cost of roughly one week and ten billion samples on a single A100.",
      "innovations": [
        "The main new method is the Progressive Multiplicative Control Policy (PMCP): motion clips failed by the current primitive are treated as a harder task, the old primitive is frozen, and new network capacity is allocated to reduce catastrophic forgetting.",
        "Progressive primitives are combined with a Multiplicative Control Policy. After all primitives are pretrained and frozen, a composer receives the same state input and outputs activation weights, producing the final action distribution through a product of Gaussian experts instead of manual task selection or top-1 routing.",
        "Fail-state recovery is introduced as a separate primitive in the same stack. When the humanoid is fallen or more than 0.5 m from the reference root, the goal is reduced from full-body imitation to root-only point-goal recovery, and full imitation resumes after the character returns.",
        "The paper demonstrates a keypoint-only controller that maps estimated 3D keypoints to physically executable motion, effectively performing dynamics-regularized online inverse kinematics without requiring reference joint rotations.",
        "AMP, PPO, PNN, MCP, RSI, and hard negative mining are existing components. The main contribution is their organization into a scalable large-dataset imitation and recovery framework; RET and the energy penalty are important auxiliary design choices rather than standalone theoretical novelties."
      ],
      "implementation": [
        "A motion sequence is mathematically a continuous reference trajectory \\(\\hat q_{1:T}\\), where each frame contains link rotations \\(\\hat\\theta_t\\) and positions \\(\\hat p_t\\), with velocities computed by finite differences. The paper does not define a clip by a .npz or .pkl file; file formats are storage containers, while training operates on continuous sequences.",
        "The per-step policy input is \\(s_t=(s_t^p,s_t^g)\\). Proprioception includes the simulated pose, velocity, and optional body shape. The rotation-based goal contains next-frame reference rotations, positions, linear and angular velocities and their errors, whereas the keypoint-based goal uses only 3D positions, velocities, and position errors.",
        "The policy output is not torque but a 3D PD target for each of the 23 actuated SMPL joints, \\(a_t\\in\\mathbb R^{23\\times3}\\), with \\(q_t^d=a_t\\). A PD controller converts these targets to joint torques. PHC uses neither residual actions of the form \\(q_t^d=\\hat q_t+a_t\\) nor RFC forces applied at the root.",
        "The basic training loop samples a motion and starting frame from the current set, constructs the state, rolls the policy in Isaac Gym, computes rewards, stores transitions, updates the actor and value function with PPO, and continuously updates the AMP discriminator from the collected experience.",
        "The imitation reward is \\(r_t=0.5r_t^{g}+0.5r_t^{amp}+r_t^{energy}\\). The task term tracks link positions, rotations, linear velocities, and angular velocities; AMP provides a human-motion prior; and the energy term suppresses high-frequency foot jitter in the no-external-force setting.",
        "Stage 1 trains \\(P^{(1)}\\) on the full AMASS training set until success on the current set stops improving. Reference State Initialization is used. Relaxed Early Termination stops an episode when the average global joint error exceeds 0.5 m, but excludes ankle and toe joints so the feet may deviate slightly from MoCap for balance.",
        "Stage 2 evaluates the current primitive by rolling out every clip and automatically collects failed clips into the next hard subset. The reported success criterion marks a sequence as failed if, at any time, the mean global body-joint distance from the reference exceeds 0.5 m. Thus, hard mining is primarily automatic rather than manual. The paper does not clearly state whether the evaluation Succ metric also excludes ankles and toes as RET does during training.",
        "Stage 3 freezes the old primitive and creates \\(P^{(k+1)}\\) for the previous hard subset. The main experiments use weight sharing / warm start: the new network copies the previous primitive's weights and is then trained separately, while the old primitive remains frozen. The appendix also compares the original PNN variant with a randomly initialized new primitive plus lateral connections, but does not test a purely independent random initialization with no access to prior primitives.",
        "The main model uses four primitives in total, with the last one reserved for recovery. It is therefore reasonable to view the model as three imitation primitives covering almost all motion clips plus one fail-recovery primitive. Coverage is not complete: AMASS-Train* success is 98.9%, and remaining failures are mainly backflips, cartwheels, high jumps, and other highly dynamic motions.",
        "Stage 4 trains the fail-state recovery primitive \\(P^{(F)}\\). Episodes start by randomly dropping the humanoid or placing it 2–5 m from the reference root. During recovery, non-root reference joint goals are removed and only the relative root position and orientation remain. The reward combines distance progress \\(d_{t-1}-d_t\\), AMP, and an energy penalty. Its training set \\(\\mathcal Q_{loco}\\) is a hand-picked subset of AMASS walking and running clips.",
        "Stage 5 freezes all imitation and recovery primitives and trains composer \\(C\\). The composer receives the same state, outputs nonnegative weights for all primitives, and multiplicatively combines their Gaussian action distributions into \\(\\pi_{PHC}(a_t\\mid s_t)\\). Composer training interleaves imitation and recovery tasks.",
        "All networks are two-layer MLPs with hidden sizes [1024, 512], and the policy uses a fixed diagonal Gaussian covariance. Training uses 1,536 parallel humanoids in Isaac Gym, 60 Hz simulation and 30 Hz control, taking about seven days and roughly ten billion samples on one NVIDIA A100. The four-primitive model is 28.8 MB and runs at about 32 FPS with simulation and rendering or 50 FPS without rendering.",
        "At deployment, the frozen primitives, composer, PD controller, and physics simulation remain in the loop; the PPO value function and AMP discriminator are primarily training components. Reference input may come from MoCap, HybrIK rotations, MeTRAbs 3D keypoints, or MDM-generated motion, while the final controller output remains per-step PD targets."
      ]
    }
  },
  {
    "id": "beyondmimic",
    "categories": [
      "locomotion",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2508.08241",
    "project": "https://beyondmimic.github.io/",
    "arxiv": "https://arxiv.org/abs/2508.08241",
    "year": "2025",
    "venue": "arXiv:2508.08241",
    "zh": {
      "title": "BeyondMimic",
      "authors": "Qiayuan Liao, Takara E. Truong, Xiaoyu Huang, Yuman Gao, Guy Tevet, Koushil Sreenath, C. Karen Liu",
      "status": "已整理",
      "tags": [
        "Motion Tracking",
        "Diffusion Planning",
        "VAE",
        "LDM",
        "Guided Diffusion",
        "Zero-shot Generalization"
      ],
      "mainContent": "BeyondMimic 从单纯 motion tracking 扩展到通用人形控制。它先用紧凑 motion-tracking formulation 学习大范围高动态人类运动，再用统一 latent diffusion model 支持目标指定、任务切换和动作组合，并通过 classifier guidance 在测试时面向新任务目标优化。",
      "innovations": [
        "单一设置和共享超参数下学习多种高动态 humanoid skills。",
        "使用 guided latent diffusion 实现动作组合、任务切换和目标条件生成。",
        "利用 classifier guidance 在测试时优化未见目标。",
        "支持 motion inpainting、joystick teleoperation、obstacle avoidance，并 zero-shot 迁移到硬件。"
      ],
      "implementation": [
        "第一阶段训练 motion tracking controller 掌握 agile motions。",
        "第二阶段训练 latent diffusion model 建模运动分布。",
        "测试时通过 guidance 将生成轨迹推向任务目标。",
        "将生成/引导后的动作交给 humanoid controller 执行，并在真实硬件验证。"
      ]
    },
    "en": {
      "title": "BeyondMimic",
      "authors": "Qiayuan Liao, Takara E. Truong, Xiaoyu Huang, Yuman Gao, Guy Tevet, Koushil Sreenath, C. Karen Liu",
      "status": "Summarized",
      "tags": [
        "Motion Tracking",
        "Diffusion Planning",
        "VAE",
        "LDM",
        "Guided Diffusion",
        "Zero-shot Generalization"
      ],
      "mainContent": "BeyondMimic scales humanoid motion tracking to versatile control through guided diffusion. A compact motion-tracking formulation learns diverse agile behaviors, while a latent diffusion model enables goal specification, task switching, and skill composition. Classifier guidance supports test-time optimization for unseen objectives.",
      "innovations": [
        "Shared setup for a wide range of agile humanoid skills.",
        "Unified latent diffusion model for motion composition and goal conditioning.",
        "Test-time classifier guidance for novel tasks.",
        "Zero-shot transfer to real hardware for tasks like obstacle avoidance and teleoperation."
      ],
      "implementation": [
        "Train a motion-tracking controller on diverse human motions.",
        "Train a latent diffusion model over motion representations.",
        "Apply guidance during sampling to satisfy task objectives.",
        "Execute generated motions with the humanoid controller on hardware."
      ]
    }
  },
  {
    "id": "learning-whole-body-humanoid-locomotion-via-motion-gener",
    "categories": [
      "locomotion",
      "loco-manipulation",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2604.17335",
    "project": "https://arxiv.org/abs/2604.17335",
    "arxiv": "https://arxiv.org/abs/2604.17335",
    "year": "2026",
    "venue": "arXiv:2604.17335",
    "zh": {
      "title": "Learning Whole-Body Humanoid Locomotion via Motion Generation and Motion Tracking",
      "authors": "Zewei Zhang, Kehan Wen, Michael Xu, Junzhe He, Chenhao Li, Takahiro Miki, Clemens Schwarke, Chong Zhang, Xue Bin Peng, Marco Hutter",
      "status": "已整理",
      "tags": [
        "Diffusion Motion Generator",
        "Motion Tracker",
        "Terrain-aware Locomotion",
        "Closed-loop Fine-tuning"
      ],
      "mainContent": "该论文将 reference-motion learning 与 terrain-aware adaptation 结合，解决人形机器人全身运动在复杂地形中的在线适应问题。方法同时训练一个扩散运动生成器预测地形感知 reference motion，以及一个 RL whole-body reference tracker；随后冻结生成器，在闭环中 fine-tune tracker 来适应不完美生成参考。",
      "innovations": [
        "将 terrain-aware motion generation 与 whole-body motion tracking 结合。",
        "使用扩散模型实时预测地形感知参考动作。",
        "对 tracker 进行闭环 fine-tuning，使其适应 generator 的误差。",
        "在 Unitree G1 上实现 boxes、hurdles、stairs 和 mixed terrains 穿越。"
      ],
      "implementation": [
        "从重定向人类动作训练 diffusion motion generator。",
        "使用同一 motion data 训练 whole-body RL reference tracker。",
        "冻结 generator，闭环 rollout 中进一步 fine-tune tracker。",
        "使用 onboard perception 和 onboard computation 在 Unitree G1 部署。"
      ]
    },
    "en": {
      "title": "Learning Whole-Body Humanoid Locomotion via Motion Generation and Motion Tracking",
      "authors": "Zewei Zhang, Kehan Wen, Michael Xu, Junzhe He, Chenhao Li, Takahiro Miki, Clemens Schwarke, Chong Zhang, Xue Bin Peng, Marco Hutter",
      "status": "Summarized",
      "tags": [
        "Diffusion Motion Generator",
        "Motion Tracker",
        "Terrain-aware Locomotion",
        "Closed-loop Fine-tuning"
      ],
      "mainContent": "The paper combines reference-motion learning with terrain-aware adaptation for whole-body humanoid locomotion. A diffusion model predicts terrain-aware reference motions in real time, while an RL tracker executes them. The tracker is further fine-tuned in closed loop with the frozen generator to handle imperfect references.",
      "innovations": [
        "Combination of terrain-aware motion generation and whole-body motion tracking.",
        "Real-time diffusion-based reference motion prediction.",
        "Closed-loop tracker fine-tuning with a frozen motion generator.",
        "Hardware deployment on Unitree G1 over boxes, hurdles, stairs, and mixed terrains."
      ],
      "implementation": [
        "Train a diffusion motion generator on retargeted human motions.",
        "Train an RL whole-body reference tracker using motion data.",
        "Fine-tune the tracker in closed loop under generated references.",
        "Deploy with onboard perception and computation."
      ]
    }
  },
  {
    "id": "srbtrack-terrain-adaptive-tracking-of-a-single-rigid-bod",
    "categories": [
      "locomotion",
      "imitation-teleop"
    ],
    "pdf": "https://hanyang9.github.io/SRBTrack/",
    "project": "https://hanyang9.github.io/SRBTrack/",
    "arxiv": "https://hanyang9.github.io/SRBTrack/",
    "year": "2025",
    "venue": "ACM",
    "zh": {
      "title": "SRBTrack: Terrain-Adaptive Tracking of a Single-Rigid-Body Character Using Momentum-Mapped Space-Time Optimization",
      "authors": "Hanyang Cao, Heyuan Yao, Libin Liu, Taesoo Kwon",
      "status": "已整理",
      "tags": [
        "SRB",
        "Momentum",
        "COM",
        "Contact",
        "CVAE",
        "MMSTO",
        "Terrain-adaptive Tracking"
      ],
      "mainContent": "SRBTrack 将复杂全身角色运动转化为单刚体 (SRB) 控制和后续全身动作重建。它在平地上训练 SRB tracking policy，却能在推理时泛化到不平地形；QP 求解器根据预测动作计算接触力，full-body motion predictor 生成未来状态，再用 momentum-mapped space-time optimization 优化渲染运动。",
      "innovations": [
        "用低维 SRB 表示替代直接学习高维全身控制。",
        "单一策略在平地训练，却能 zero-shot 适应复杂地形。",
        "结合 RL、supervised learning、QP contact force solver 与 full-body prediction。",
        "使用 MMSTO 约束动量一致性和动作物理合理性。"
      ],
      "implementation": [
        "从长时、非结构化 motion datasets 中训练 SRB character controller。",
        "SRB policy 预测动作，QP solver 计算满足接触约束的地面反力。",
        "full-body motion predictor 从 SRB 轨迹生成未来全身状态。",
        "使用 momentum-mapped space-time optimization refine 最终动作。"
      ]
    },
    "en": {
      "title": "SRBTrack: Terrain-Adaptive Tracking of a Single-Rigid-Body Character Using Momentum-Mapped Space-Time Optimization",
      "authors": "Hanyang Cao, Heyuan Yao, Libin Liu, Taesoo Kwon",
      "status": "Summarized",
      "tags": [
        "SRB",
        "Momentum",
        "COM",
        "Contact",
        "CVAE",
        "MMSTO",
        "Terrain-adaptive Tracking"
      ],
      "mainContent": "SRBTrack learns a single-rigid-body character controller from long, unstructured datasets and reconstructs full-body motion afterward. The SRB policy is trained on flat terrain but generalizes to uneven terrain at inference. A QP solver computes contact forces, a full-body predictor outputs future states, and MMSTO refines the result.",
      "innovations": [
        "Low-dimensional SRB representation for robust motion tracking.",
        "Zero-shot terrain adaptation from flat-terrain training.",
        "Integration of RL, supervised learning, QP contact force computation, and full-body prediction.",
        "Momentum-mapped space-time optimization for physically plausible reconstruction."
      ],
      "implementation": [
        "Train an SRB tracking policy from motion datasets.",
        "Predict SRB actions and compute contact forces with QP.",
        "Generate full-body future states from SRB histories.",
        "Refine motions using momentum-mapped space-time optimization."
      ]
    }
  },
  {
    "id": "run-residual-policy-for-natural-humanoid-locomotion",
    "categories": [
      "locomotion",
      "sim2real",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2509.20696",
    "project": "https://arxiv.org/html/2509.20696v1",
    "arxiv": "https://arxiv.org/abs/2509.20696",
    "year": "2025",
    "venue": "arXiv:2509.20696",
    "zh": {
      "title": "RuN: Residual Policy for Natural Humanoid Locomotion",
      "authors": "Qingpeng Li, Chengrui Zhu, Yanming Wu, Xin Yuan, Zhen Zhang, Jian Yang, Yong Liu",
      "status": "已整理",
      "tags": [
        "Residual Policy",
        "Conditional Motion Generator",
        "Natural Locomotion",
        "AMP Limitation"
      ],
      "mainContent": "RuN 通过解耦 natural motion generation 和 dynamics correction，解决单一 RL 策略同时学习模仿、速度跟踪和稳定控制的困难。方法使用预训练 Conditional Motion Generator 产生自然运动先验，再由轻量 residual RL policy 学习动力学修正，实现 Unitree G1 上 0–2.5 m/s 的自然步行-跑步过渡。",
      "innovations": [
        "提出 CMG + residual policy 的解耦架构。",
        "将运动自然性与动力学稳定性分开学习。",
        "提升训练效率和最终性能。",
        "在真实 Unitree G1 上实现平滑 walk-run transition。"
      ],
      "implementation": [
        "预训练 Conditional Motion Generator 生成运动学自然参考。",
        "RL residual policy 观察机器人状态并输出轻量修正。",
        "最终动作由 CMG 输出和 residual correction 组合。",
        "在仿真和真实 G1 上验证不同速度范围的自然 locomotion。"
      ]
    },
    "en": {
      "title": "RuN: Residual Policy for Natural Humanoid Locomotion",
      "authors": "Qingpeng Li, Chengrui Zhu, Yanming Wu, Xin Yuan, Zhen Zhang, Jian Yang, Yong Liu",
      "status": "Summarized",
      "tags": [
        "Residual Policy",
        "Conditional Motion Generator",
        "Natural Locomotion",
        "AMP Limitation"
      ],
      "mainContent": "RuN decouples natural motion generation from dynamic correction. A pretrained Conditional Motion Generator provides a kinematic motion prior, while a lightweight residual RL policy handles dynamic interactions. The method achieves natural walk-run transitions on Unitree G1 from 0 to 2.5 m/s.",
      "innovations": [
        "Decoupled CMG plus residual-policy framework.",
        "Separation of motion naturalness and stability correction.",
        "Improved training efficiency and final performance.",
        "Real-world smooth walk-run transitions on Unitree G1."
      ],
      "implementation": [
        "Pretrain a Conditional Motion Generator.",
        "Train an RL residual policy for dynamic corrections.",
        "Combine generated motion and residual action.",
        "Evaluate in simulation and on hardware."
      ]
    }
  },
  {
    "id": "pmtg-policies-modulating-trajectory-generators",
    "categories": [
      "locomotion",
      "sim2real",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/1910.02812",
    "project": "https://arxiv.org/pdf/1910.02812",
    "arxiv": "https://arxiv.org/abs/1910.02812",
    "year": "2018 / arXiv 2019",
    "venue": "arXiv:1910.02812",
    "zh": {
      "title": "PMTG: Policies Modulating Trajectory Generators",
      "authors": "Atil Iscen, Ken Caluwaerts, Jie Tan, Tingnan Zhang, Erwin Coumans, Vikas Sindhwani, Vincent Vanhoucke",
      "status": "已整理",
      "tags": [
        "Trajectory Generator",
        "Policy Modulation",
        "Rhythm",
        "Residual Control"
      ],
      "mainContent": "PMTG 提出让简单策略调制轨迹生成器的控制架构，为周期运动提供记忆和先验知识。该方法适合已有轨迹结构先验的周期运动任务，例如四足步态控制，并可用 DRL 或 Evolutionary Strategies 学习可控速度行走。",
      "innovations": [
        "将 trajectory generator 的结构先验与学习策略结合。",
        "策略只需调制 TG 参数和残差，降低搜索难度。",
        "线性策略配合参数化 TG 即可从低维 IMU 输入学习可控步态。",
        "成功迁移到真实机器人，展示可控前进速度 locomotion。"
      ],
      "implementation": [
        "设计参数化轨迹生成器表示周期步态。",
        "策略根据状态输出 TG 参数调制量和反馈项。",
        "使用 DRL 或 Evolutionary Strategies 学习速度控制。",
        "在仿真和真实四足机器人上验证。"
      ]
    },
    "en": {
      "title": "PMTG: Policies Modulating Trajectory Generators",
      "authors": "Atil Iscen, Ken Caluwaerts, Jie Tan, Tingnan Zhang, Erwin Coumans, Vikas Sindhwani, Vincent Vanhoucke",
      "status": "Summarized",
      "tags": [
        "Trajectory Generator",
        "Policy Modulation",
        "Rhythm",
        "Residual Control"
      ],
      "mainContent": "PMTG combines simple learned policies with trajectory generators, providing memory and prior knowledge for periodic control tasks. A policy modulates TG parameters and residual feedback, enabling controllable quadruped locomotion from low-dimensional IMU observations.",
      "innovations": [
        "Policy modulation of structured trajectory generators.",
        "Reduced search complexity through trajectory priors.",
        "Simple policies can learn speed-controlled locomotion.",
        "Real-robot transfer of controllable forward velocity."
      ],
      "implementation": [
        "Define a parametric trajectory generator for gaits.",
        "Let the policy output TG modulation and feedback correction.",
        "Train using DRL or evolutionary strategies.",
        "Validate in simulation and on hardware."
      ]
    }
  },
  {
    "id": "navigait",
    "categories": [
      "locomotion",
      "sim2real",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2510.11542",
    "project": "https://arxiv.org/html/2510.11542v1",
    "arxiv": "https://arxiv.org/abs/2510.11542",
    "year": "2026",
    "venue": "arXiv:2510.11542",
    "zh": {
      "title": "NaviGait",
      "authors": "Neil Janwani, Varun Madabushi, Maegan Tucker",
      "status": "已整理",
      "tags": [
        "Gait Library",
        "Residual Phase Modulation",
        "Bipedal Locomotion",
        "Phase Control"
      ],
      "mainContent": "NaviGait 是一个结合轨迹优化结构和 RL 适应性的分层双足 locomotion 框架。系统从离线生成的 gait library 中选择、轻微变形并稳定步态，使策略既能保持接近参考动作，又具备类似 RL locomotion controller 的鲁棒性。",
      "innovations": [
        "将 trajectory optimization 的可解释 gait library 与 RL 稳定控制结合。",
        "RL 不直接从零生成步态，而是选择、morph 和 stabilize 现有 gait。",
        "大幅简化 reward composition。",
        "相比常规 RL 和 imitation RL 训练更快，动作更接近参考。"
      ],
      "implementation": [
        "离线生成 dynamically feasible gait library。",
        "高层策略选择和轻微调整 gait。",
        "低层 RL 稳定跟踪并修正扰动。",
        "在双足 locomotion 任务中比较训练效率、鲁棒性和参考接近程度。"
      ]
    },
    "en": {
      "title": "NaviGait",
      "authors": "Neil Janwani, Varun Madabushi, Maegan Tucker",
      "status": "Summarized",
      "tags": [
        "Gait Library",
        "Residual Phase Modulation",
        "Bipedal Locomotion",
        "Phase Control"
      ],
      "mainContent": "NaviGait is a hierarchical framework that combines trajectory-optimization structure with RL adaptability. It selects, minimally morphs, and stabilizes gaits from an offline-generated library, producing robust policies that stay close to reference motions.",
      "innovations": [
        "Combines gait libraries with RL stabilization.",
        "RL selects and morphs existing gaits instead of generating motions from scratch.",
        "Simplified reward design.",
        "Faster training and closer reference tracking than conventional and imitation RL."
      ],
      "implementation": [
        "Generate a dynamically feasible gait library offline.",
        "Train RL to select, morph, and stabilize gaits.",
        "Use hierarchical control to separate motion generation and correction.",
        "Evaluate robustness and reference similarity."
      ]
    }
  },
  {
    "id": "residual-mpc",
    "categories": [
      "locomotion",
      "sim2real",
      "imitation-teleop"
    ],
    "pdf": "https://www.researchgate.net/publication/396499538_Residual_MPC_Blending_Reinforcement_Learning_with_GPU-Parallelized_Model_Predictive_Control",
    "project": "https://www.researchgate.net/publication/396499538_Residual_MPC_Blending_Reinforcement_Learning_with_GPU-Parallelized_Model_Predictive_Control",
    "arxiv": "https://www.researchgate.net/publication/396499538_Residual_MPC_Blending_Reinforcement_Learning_with_GPU-Parallelized_Model_Predictive_Control",
    "year": "2025",
    "venue": "Project",
    "zh": {
      "title": "Residual MPC",
      "authors": "Se Hwan Jeon, Ho Jae Lee, Seungwoo Hong, Sangbae Kim",
      "status": "已整理",
      "tags": [
        "MPC",
        "Residual RL",
        "Centroidal Dynamics",
        "GPU-parallelized MPC",
        "Terrain Locomotion"
      ],
      "mainContent": "Residual MPC 研究如何结合 MPC 的可解释物理模型与 RL 的鲁棒适应能力。MPC 提供基于物理模型的可调控制结构，但受模型误差和实时算力限制；RL 可以通过随机训练提升鲁棒性，但可解释性和 OOD 安全性较弱。该工作将 RL 残差与 GPU 并行 MPC 结合，提升复杂 locomotion 中的鲁棒性与实时性。",
      "innovations": [
        "将 RL residual correction 与 GPU-parallelized MPC 融合。",
        "保留 MPC 的模型约束和可解释性，同时用 RL 补偿模型误差。",
        "面向高频 replanning 和复杂 locomotion 场景。",
        "相比纯 MPC 或纯 RL，强调鲁棒性、可解释性和实时性平衡。"
      ],
      "implementation": [
        "使用 MPC 作为基础控制器，基于简化动力学模型进行预测优化。",
        "使用 RL 学习 residual action、target correction 或 cost correction。",
        "通过 GPU 并行化提升 MPC rollout / optimization 效率。",
        "在 locomotion 任务中比较纯 MPC、纯 RL 和 residual MPC。"
      ]
    },
    "en": {
      "title": "Residual MPC",
      "authors": "Se Hwan Jeon, Ho Jae Lee, Seungwoo Hong, Sangbae Kim",
      "status": "Summarized",
      "tags": [
        "MPC",
        "Residual RL",
        "Centroidal Dynamics",
        "GPU-parallelized MPC",
        "Terrain Locomotion"
      ],
      "mainContent": "Residual MPC blends the interpretability and physical grounding of MPC with the robustness of RL. MPC handles model-based planning and constraints, while RL residuals compensate for model mismatch and improve robustness. GPU parallelization supports real-time replanning.",
      "innovations": [
        "Integration of RL residuals with GPU-parallelized MPC.",
        "Combines MPC interpretability with RL robustness.",
        "Targets robust locomotion under model mismatch and real-time constraints.",
        "Balances physical constraints, robustness, and computational efficiency."
      ],
      "implementation": [
        "Use MPC as the base controller.",
        "Train RL residual corrections for actions, targets, or model/cost mismatch.",
        "Run MPC in a GPU-parallelized manner.",
        "Evaluate against MPC-only and RL-only baselines."
      ]
    }
  },
  {
    "id": "skillblender-towards-versatile-humanoid-whole-body-loco-",
    "categories": [
      "locomotion",
      "loco-manipulation",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2506.09366",
    "project": "https://arxiv.org/pdf/2506.09366",
    "arxiv": "https://arxiv.org/abs/2506.09366",
    "year": "2025",
    "venue": "arXiv:2506.09366",
    "zh": {
      "title": "SkillBlender: Towards Versatile Humanoid Whole-Body Loco-Manipulation via Skill Blending",
      "authors": "Yuxuan Kuang, Haoran Geng, Amine Elhafsi, Tan-Dzung Do, Pieter Abbeel, Jitendra Malik, Marco Pavone, Yue Wang",
      "status": "已整理",
      "tags": [
        "Skill Blending",
        "Whole-body Loco-manipulation",
        "Hierarchical RL",
        "MoE",
        "Subgoals"
      ],
      "mainContent": "SkillBlender 是一个用于 humanoid loco-manipulation 的分层 RL 框架，目标是减少每个任务的奖励工程和调参成本。它先预训练 goal-conditioned、task-agnostic primitive skills，再动态混合这些技能完成复杂任务，并提出 SkillBench 基准评估跨 embodiment 的 loco-manipulation 能力。",
      "innovations": [
        "先预训练通用 primitive skills，再通过 skill blending 完成复杂任务。",
        "显著减少 task-specific reward engineering。",
        "提出 SkillBench，包含 3 种 embodiment、4 个 primitive skills 和 8 个挑战任务。",
        "实验显示比 baselines 更准确、更可行，并能减少 reward hacking。"
      ],
      "implementation": [
        "预训练目标条件化的 task-agnostic primitive skills。",
        "冻结或复用底层技能，由高层策略动态融合技能。",
        "以少量任务奖励训练高层完成 loco-manipulation。",
        "在 SkillBench 中进行跨 embodiment、跨任务评估。"
      ]
    },
    "en": {
      "title": "SkillBlender: Towards Versatile Humanoid Whole-Body Loco-Manipulation via Skill Blending",
      "authors": "Yuxuan Kuang, Haoran Geng, Amine Elhafsi, Tan-Dzung Do, Pieter Abbeel, Jitendra Malik, Marco Pavone, Yue Wang",
      "status": "Summarized",
      "tags": [
        "Skill Blending",
        "Whole-body Loco-manipulation",
        "Hierarchical RL",
        "MoE",
        "Subgoals"
      ],
      "mainContent": "SkillBlender is a hierarchical RL framework for versatile humanoid loco-manipulation. It pretrains goal-conditioned, task-agnostic primitive skills and dynamically blends them to solve complex tasks with minimal task-specific reward engineering. It also introduces the SkillBench benchmark.",
      "innovations": [
        "Pretrain general primitive skills and blend them for complex tasks.",
        "Reduce task-specific reward engineering.",
        "Introduce SkillBench with multiple embodiments, primitive skills, and tasks.",
        "Improve accuracy and feasibility while reducing reward hacking."
      ],
      "implementation": [
        "Pretrain goal-conditioned primitive skills.",
        "Train a high-level blending policy.",
        "Use minimal task-specific rewards.",
        "Evaluate on the SkillBench benchmark."
      ]
    }
  },
  {
    "id": "hugwbc",
    "categories": [
      "locomotion",
      "loco-manipulation",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2502.03206",
    "project": "https://hugwbc.github.io/",
    "arxiv": "https://arxiv.org/abs/2502.03206",
    "year": "2025",
    "venue": "arXiv:2502.03206",
    "zh": {
      "title": "HUGWBC",
      "authors": "Yufei Xue, Wentao Dong, Minghuan Liu, Weinan Zhang, Jiangmiao Pang",
      "status": "已整理",
      "tags": [
        "Whole-body RL",
        "Multi-gait",
        "Upper-body Intervention",
        "Loco-manipulation Foundation Controller"
      ],
      "mainContent": "HugWBC 提出一个统一的人形机器人 whole-body locomotion controller，支持 walking、jumping、standing、hopping 等多种步态，并允许调整步频、摆脚高度、身高、腰部旋转和躯干俯仰等参数。更重要的是，它支持来自外部上肢控制器的实时干预，使 locomotion policy 可用于 loco-manipulation。",
      "innovations": [
        "统一命令空间覆盖任务目标和行为风格。",
        "支持多种步态与连续参数调节。",
        "使用 symmetry loss 和 intervention training 提升全身控制稳定性。",
        "支持上肢 teleoperation 或外部控制干预下的稳健 locomotion。"
      ],
      "implementation": [
        "在仿真中训练 whole-body humanoid control policy。",
        "构造包含速度、步态参数和身体姿态参数的通用 command space。",
        "使用对称损失约束左右形态一致性。",
        "训练中随机施加 upper-body intervention，使下肢在上肢动作扰动下保持稳定。"
      ]
    },
    "en": {
      "title": "HUGWBC",
      "authors": "Yufei Xue, Wentao Dong, Minghuan Liu, Weinan Zhang, Jiangmiao Pang",
      "status": "Summarized",
      "tags": [
        "Whole-body RL",
        "Multi-gait",
        "Upper-body Intervention",
        "Loco-manipulation Foundation Controller"
      ],
      "mainContent": "HugWBC is a unified humanoid whole-body controller for versatile locomotion. It supports walking, jumping, standing, hopping, and parameterized gait control, while allowing real-time upper-body interventions from external controllers, making it suitable for loco-manipulation.",
      "innovations": [
        "General command space for tasks and behavior styles.",
        "Multiple gait modes with continuous parameter adjustment.",
        "Symmetry loss and intervention training for robust whole-body control.",
        "Real-time upper-body intervention support for loco-manipulation."
      ],
      "implementation": [
        "Train a whole-body humanoid policy in simulation.",
        "Use commands for velocity, gait, height, waist, and torso parameters.",
        "Apply symmetry loss during training.",
        "Randomize upper-body intervention to improve lower-body robustness."
      ]
    }
  },
  {
    "id": "homie",
    "categories": [
      "locomotion",
      "loco-manipulation",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2502.13013",
    "project": "https://homietele.github.io/",
    "arxiv": "https://arxiv.org/abs/2502.13013",
    "year": "2025",
    "venue": "arXiv:2502.13013",
    "zh": {
      "title": "HOMIE",
      "authors": "Qingwei Ben, Feiyu Jia, Jia Zeng, Junting Dong, Dahua Lin, Jiangmiao Pang",
      "status": "已整理",
      "tags": [
        "Teleoperation",
        "Isomorphic Exoskeleton",
        "Whole-body Control",
        "Data Flywheel",
        "Imitation Learning"
      ],
      "mainContent": "HOMIE 是一个半自主 humanoid loco-manipulation teleoperation system，将 RL body control 映射到脚踏板、用同构外骨骼控制手臂、用 motion-sensing gloves 控制灵巧手，构成低成本 unified cockpit。系统支持行走、下蹲到指定高度和任意上肢姿态适应，并用于建立 humanoid 数据飞轮。",
      "innovations": [
        "将 pedal body control、isomorphic exoskeleton arm control 和 gloves hand control 集成到统一 cockpit。",
        "上肢外骨骼避免复杂 inverse dynamics / IK，提高操作效率和精度。",
        "引入 upper-body pose curriculum、height-tracking reward 和 symmetry utilization。",
        "低成本开源系统，约 $500，并显著扩展可操作工作空间。"
      ],
      "implementation": [
        "使用 RL policy 控制下肢/身体，并映射到脚踏板输入。",
        "用同构外骨骼直接控制机器人手臂。",
        "用 Hall sensor gloves 控制多自由度灵巧手。",
        "通过 upper-body pose curriculum 让身体策略适应任意上肢姿态。"
      ]
    },
    "en": {
      "title": "HOMIE",
      "authors": "Qingwei Ben, Feiyu Jia, Jia Zeng, Junting Dong, Dahua Lin, Jiangmiao Pang",
      "status": "Summarized",
      "tags": [
        "Teleoperation",
        "Isomorphic Exoskeleton",
        "Whole-body Control",
        "Data Flywheel",
        "Imitation Learning"
      ],
      "mainContent": "HOMIE is a semi-autonomous humanoid loco-manipulation teleoperation system. It combines RL-based body control mapped to pedals, isomorphic exoskeleton arm control, and motion-sensing gloves for dexterous hands. The system is low-cost, open-source, and designed to build a humanoid manipulation data flywheel.",
      "innovations": [
        "Unified cockpit combining pedal body control, exoskeleton arm control, and glove hand control.",
        "Isomorphic exoskeleton removes reliance on complex inverse dynamics/IK.",
        "Upper-body pose curriculum, height-tracking reward, and symmetry utilization.",
        "Low-cost open-source design with expanded workspace."
      ],
      "implementation": [
        "Map RL body controller to pedal inputs.",
        "Use isomorphic exoskeletons for arm control.",
        "Use Hall-sensor gloves for dexterous hand control.",
        "Train body policies to adapt to arbitrary upper-body poses."
      ]
    }
  },
  {
    "id": "langwbc",
    "categories": [
      "locomotion",
      "loco-manipulation",
      "sim2real",
      "imitation-teleop",
      "vla-world-model"
    ],
    "pdf": "https://arxiv.org/pdf/2504.21738",
    "project": "https://langwbc.github.io/",
    "arxiv": "https://arxiv.org/abs/2504.21738",
    "year": "2025",
    "venue": "arXiv:2504.21738",
    "zh": {
      "title": "LangWBC",
      "authors": "Yiyang Shao, Xiaoyu Huang, Bike Zhang, Qiayuan Liao, Yuman Gao, Yufeng Chi, Zhongyu Li, Sophia Shao, Koushil Sreenath",
      "status": "已整理",
      "tags": [
        "Language-conditioned Whole-body Control",
        "CLIP",
        "CVAE",
        "Teacher-Student Distillation",
        "DAgger"
      ],
      "mainContent": "LangWBC 研究如何将自然语言直接转化为人形机器人全身动作。方法结合 RL 与 policy distillation，让单个神经网络解释语言命令并直接输出物理动作；同时引入 CVAE 结构提升动作多样性和组合性，实现语言条件下的敏捷全身控制和真实机器人实验验证。",
      "innovations": [
        "提出端到端 language-directed humanoid whole-body control policy。",
        "将语言理解与物理控制通过 RL + policy distillation 结合。",
        "使用 CVAE 增强动作多样性、平滑切换和组合性。",
        "在仿真和真实实验中验证语言条件控制的泛化。"
      ],
      "implementation": [
        "先用 RL 训练具备物理可行性的 teacher/control policy。",
        "通过 policy distillation 训练语言条件 student policy。",
        "使用语言编码作为条件输入，并结合 CVAE latent 生成动作。",
        "在仿真和真实 humanoid 上测试多种自然语言命令。"
      ]
    },
    "en": {
      "title": "LangWBC",
      "authors": "Yiyang Shao, Xiaoyu Huang, Bike Zhang, Qiayuan Liao, Yuman Gao, Yufeng Chi, Zhongyu Li, Sophia Shao, Koushil Sreenath",
      "status": "Summarized",
      "tags": [
        "Language-conditioned Whole-body Control",
        "CLIP",
        "CVAE",
        "Teacher-Student Distillation",
        "DAgger"
      ],
      "mainContent": "LangWBC translates natural language into humanoid whole-body actions. It combines RL with policy distillation so a single neural policy can interpret language commands and execute physical behaviors. A CVAE structure improves motion diversity, compositionality, and smooth transitions.",
      "innovations": [
        "End-to-end language-directed humanoid whole-body control.",
        "RL plus policy distillation for connecting language and physical action.",
        "CVAE for diverse and compositional motion generation.",
        "Simulation and real-world validation of language-conditioned control."
      ],
      "implementation": [
        "Train a physically capable teacher/control policy with RL.",
        "Distill into a language-conditioned student policy.",
        "Use language embeddings and CVAE latent variables as policy inputs.",
        "Evaluate on simulated and real humanoid whole-body behaviors."
      ]
    }
  },
  {
    "id": "host-learning-humanoid-standing-up-control-across-divers",
    "categories": [
      "locomotion",
      "sim2real",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2502.08378",
    "project": "https://taohuang13.github.io/humanoid-standingup.github.io/",
    "arxiv": "https://arxiv.org/abs/2502.08378",
    "year": "2025",
    "venue": "arXiv:2502.08378",
    "zh": {
      "title": "HOST: Learning Humanoid Standing-up Control across Diverse Postures",
      "authors": "Tao Huang, Junli Ren, Huayi Wang, Zirui Wang, Qingwei Ben, Muning Wen, Xiao Chen, Jianan Li, Jiangmiao Pang",
      "status": "已整理",
      "tags": [
        "Standing-up",
        "Recovery",
        "Curriculum Learning",
        "Multi-critic RL",
        "Humanoid Robustness"
      ],
      "mainContent": "HoST 研究人形机器人从多种姿态中站起来的控制问题，目标是摆脱固定地面/姿态轨迹的限制并实现真实部署。方法从零开始用 RL 学习 standing-up control，通过 multi-critic architecture 和 curriculum training 学习姿态自适应起身，并加入平滑正则和隐式速度约束以减少真实硬件上的振荡和暴力动作。",
      "innovations": [
        "面向 diverse postures 的通用 humanoid standing-up RL 框架。",
        "multi-critic architecture 支持复杂起身阶段学习。",
        "curriculum-based training 覆盖多种姿态和地形。",
        "引入 smoothness regularization 和 implicit motion speed bound 以保证真机可部署性。"
      ],
      "implementation": [
        "在仿真中从随机/多样初始倒地姿态训练起身策略。",
        "使用多个 critic 分别学习不同奖励或阶段信号。",
        "通过 curriculum 逐步增加姿态和地形难度。",
        "将策略 zero-shot 部署到 Unitree G1 并在室内外测试。"
      ]
    },
    "en": {
      "title": "HOST: Learning Humanoid Standing-up Control across Diverse Postures",
      "authors": "Tao Huang, Junli Ren, Huayi Wang, Zirui Wang, Qingwei Ben, Muning Wen, Xiao Chen, Jianan Li, Jiangmiao Pang",
      "status": "Summarized",
      "tags": [
        "Standing-up",
        "Recovery",
        "Curriculum Learning",
        "Multi-critic RL",
        "Humanoid Robustness"
      ],
      "mainContent": "HoST learns humanoid standing-up control from diverse postures using RL. It avoids predefined ground-specific trajectories and uses a multi-critic architecture plus curriculum training to learn posture-adaptive motions. Smoothness and speed constraints improve real-world deployability.",
      "innovations": [
        "RL framework for humanoid standing up across diverse postures.",
        "Multi-critic architecture for complex recovery learning.",
        "Curriculum training over postures and terrains.",
        "Smoothness regularization and implicit speed bounds for hardware safety."
      ],
      "implementation": [
        "Train from diverse simulated fallen postures.",
        "Use multiple critics for different objectives or phases.",
        "Increase difficulty with curriculum learning.",
        "Deploy directly on Unitree G1 in indoor and outdoor environments."
      ]
    }
  },
  {
    "id": "learning-h-infinity-locomotion-control",
    "categories": [
      "locomotion",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2404.14405",
    "project": "https://openreview.net/forum?id=uMZ2jnZUDX",
    "arxiv": "https://arxiv.org/abs/2404.14405",
    "year": "2024",
    "venue": "arXiv:2404.14405",
    "zh": {
      "title": "Learning H-Infinity Locomotion Control",
      "authors": "Junfeng Long, Wenye Yu, Quanyi Li, Zirui Wang, Dahua Lin, Jiangmiao Pang",
      "status": "已整理",
      "tags": [
        "H-infinity Control",
        "Adversarial RL",
        "Worst-case Robustness",
        "Disturber"
      ],
      "mainContent": "该论文将鲁棒控制中的 $H_{\\infty}$ 思想引入 locomotion RL，对抗式学习一个 state-conditioned disturbance generator。不同于固定分布随机外力，该干扰器根据机器人当前状态生成最能挑战策略但仍可恢复的外力；$H_{\\infty}$ 约束限制 cost 与外力强度之间的比例，稳定联合优化。",
      "innovations": [
        "将 locomotion robustness 学习建模为 policy 与 learnable disturbance 的对抗博弈。",
        "干扰器根据当前状态生成针对性外力。",
        "引入 $H_{\\infty}$ constraint 稳定对抗训练，避免干扰过强或过弱。",
        "在四足和后腿站立 locomotion 任务中进行仿真与真实验证。"
      ],
      "implementation": [
        "同时训练 locomotion policy 和 state-conditioned disturbance policy。",
        "通过 $H_{\\infty}$ 约束控制任务代价与外力强度比值。",
        "在仿真中生成更困难的扰动样本。",
        "将鲁棒策略部署到真实四足机器人。"
      ]
    },
    "en": {
      "title": "Learning H-Infinity Locomotion Control",
      "authors": "Junfeng Long, Wenye Yu, Quanyi Li, Zirui Wang, Dahua Lin, Jiangmiao Pang",
      "status": "Summarized",
      "tags": [
        "H-infinity Control",
        "Adversarial RL",
        "Worst-case Robustness",
        "Disturber"
      ],
      "mainContent": "This work introduces $H_{\\infty}$-inspired adversarial training for robust locomotion. A learnable disturbance policy generates state-conditioned external forces that challenge the locomotion policy, while an $H_{\\infty}$ constraint bounds the ratio between cost and disturbance intensity.",
      "innovations": [
        "Robust locomotion as an adversarial interaction between policy and disturbance.",
        "State-conditioned disturbance generation.",
        "$H_{\\infty}$ constraint for stable adversarial optimization.",
        "Simulation and real-world validation on quadruped locomotion and hind-leg locomotion."
      ],
      "implementation": [
        "Train locomotion and disturbance policies jointly.",
        "Use the $H_{\\infty}$ constraint to regulate disturbance strength.",
        "Generate hard but recoverable disturbances in simulation.",
        "Deploy the robust policy on real quadruped robots."
      ]
    }
  },
  {
    "id": "lcp-lipschitz-constrained-policies",
    "categories": [
      "locomotion",
      "sim2real",
      "imitation-teleop"
    ],
    "pdf": "https://arxiv.org/pdf/2410.11825",
    "project": "https://lipschitz-constrained-policy.github.io/",
    "arxiv": "https://arxiv.org/abs/2410.11825",
    "year": "2024",
    "venue": "arXiv:2410.11825",
    "zh": {
      "title": "LCP: Lipschitz-Constrained Policies",
      "authors": "Zixuan Chen, Xialin He, Yen-Jen Wang, Qiayuan Liao, Yanjie Ze, Zhongyu Li, S. Shankar Sastry, Jiajun Wu, Koushil Sreenath, Saurabh Gupta, Xue Bin Peng",
      "status": "已整理",
      "tags": [
        "Lipschitz Regularization",
        "Policy Smoothness",
        "Sim-to-Real",
        "Gradient Penalty"
      ],
      "mainContent": "LCP 解决 humanoid sim-to-real 中策略动作不平滑、需要大量 smoothing reward 或 low-pass filter 调参的问题。方法直接对策略施加 Lipschitz constraint，并以 gradient penalty 形式实现，使其可以无缝接入自动微分训练框架。",
      "innovations": [
        "用 Lipschitz constraint 替代繁琐的 smoothing reward 和 low-pass filter。",
        "通过 gradient penalty 提供可微、易实现的平滑约束。",
        "可集成到多种 humanoid RL training framework。",
        "在仿真和真实 humanoid 上得到平滑且鲁棒的 locomotion policy。"
      ],
      "implementation": [
        "在 policy loss 中加入相对于输入观测的 gradient penalty。",
        "训练时限制小观测变化导致的动作变化幅度。",
        "不依赖额外滤波器进行后处理。",
        "在多个 humanoid 平台上进行 sim-to-real 评估。"
      ]
    },
    "en": {
      "title": "LCP: Lipschitz-Constrained Policies",
      "authors": "Zixuan Chen, Xialin He, Yen-Jen Wang, Qiayuan Liao, Yanjie Ze, Zhongyu Li, S. Shankar Sastry, Jiajun Wu, Koushil Sreenath, Saurabh Gupta, Xue Bin Peng",
      "status": "Summarized",
      "tags": [
        "Lipschitz Regularization",
        "Policy Smoothness",
        "Sim-to-Real",
        "Gradient Penalty"
      ],
      "mainContent": "LCP enforces smooth humanoid locomotion policies through a Lipschitz constraint implemented as a differentiable gradient penalty. It reduces the need for manually tuned smoothing rewards or low-pass filters and works across multiple humanoid training frameworks.",
      "innovations": [
        "Lipschitz-constrained policy smoothness.",
        "Gradient penalty implementation compatible with autodiff.",
        "Replacement for smoothing rewards and low-pass filters.",
        "Demonstrated smooth sim-to-real humanoid locomotion."
      ],
      "implementation": [
        "Add an observation-gradient penalty to the policy objective.",
        "Train policies to produce bounded action changes under small observation perturbations.",
        "Avoid post-hoc filtering.",
        "Evaluate in simulation and on real humanoid robots."
      ]
    }
  },
  {
    "id": "unsupervised-actuator-net-uan",
    "categories": [
      "sim2real",
      "loco-manipulation"
    ],
    "pdf": "https://arxiv.org/pdf/2502.10894",
    "project": "https://uan.csail.mit.edu/",
    "arxiv": "https://arxiv.org/abs/2502.10894",
    "year": "2025",
    "venue": "arXiv:2502.10894",
    "zh": {
      "title": "Unsupervised Actuator Net, UAN",
      "authors": "Nolan Fey, Gabriel B. Margolis, Martin Peticco, Pulkit Agrawal",
      "status": "已整理",
      "tags": [
        "Actuator Modeling",
        "Residual Torque",
        "Sim-to-Real",
        "State Transition Loss"
      ],
      "mainContent": "UAN 来自 “Bridging the Sim-to-Real Gap for Athletic Loco-Manipulation”，用于解决复杂执行器机制导致的 sim-to-real gap。它使用真实世界数据学习 actuator residual，不需要 torque sensing，并作为两阶段 athletic loco-manipulation 训练流水线的第一步；第二步使用参考轨迹进行 pre-training 和 fine-tuning，学习举、扔、拖等动态任务。",
      "innovations": [
        "无需力矩传感器即可利用真实数据学习 actuator model。",
        "用 UAN 缩小复杂执行机构的 sim-to-real gap。",
        "避免纯 task reward 训练中的 reward hacking 和探索不足。",
        "结合 reference trajectory hints 的 pretraining-finetuning 完成 athletic loco-manipulation。"
      ],
      "implementation": [
        "收集真实机器人执行数据，训练 UAN 逼近 actuator 行为。",
        "将 UAN 嵌入仿真，提升训练环境 fidelity。",
        "先用参考轨迹进行预训练，引导探索。",
        "再用 task reward fine-tune 学习 lift、throw、drag 等任务。"
      ]
    },
    "en": {
      "title": "Unsupervised Actuator Net, UAN",
      "authors": "Nolan Fey, Gabriel B. Margolis, Martin Peticco, Pulkit Agrawal",
      "status": "Summarized",
      "tags": [
        "Actuator Modeling",
        "Residual Torque",
        "Sim-to-Real",
        "State Transition Loss"
      ],
      "mainContent": "UAN is introduced in “Bridging the Sim-to-Real Gap for Athletic Loco-Manipulation” to model complex actuation mechanisms from real-world data without torque sensing. It reduces sim-to-real mismatch before policies are pretrained and fine-tuned for athletic loco-manipulation tasks such as lifting, throwing, and dragging.",
      "innovations": [
        "Unsupervised actuator modeling without torque labels.",
        "Improved sim-to-real fidelity for complex actuation.",
        "Mitigation of reward hacking in task-reward training.",
        "Two-stage pretraining and fine-tuning strategy for athletic tasks."
      ],
      "implementation": [
        "Collect real robot transition data.",
        "Train UAN to model actuator behavior/residuals.",
        "Embed UAN into simulation.",
        "Pretrain with reference trajectories and fine-tune with task rewards."
      ]
    }
  },
  {
    "id": "learning-torque-control-for-quadrupedal-locomotion",
    "categories": [
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2203.05194",
    "project": "https://arxiv.org/pdf/2203.05194",
    "arxiv": "https://arxiv.org/abs/2203.05194",
    "year": "2022 / revised 2023",
    "venue": "arXiv:2203.05194",
    "zh": {
      "title": "Learning Torque Control for Quadrupedal Locomotion",
      "authors": "Shuxiao Chen, Bike Zhang, Mark W. Mueller, Akshara Rai, Koushil Sreenath",
      "status": "已整理",
      "tags": [
        "Torque Control",
        "Quadruped Locomotion",
        "Sim-to-Real",
        "Low-level Control"
      ],
      "mainContent": "该论文挑战常见 position-based RL locomotion 范式，提出直接用 RL policy 高频输出关节力矩，从而绕过低层 PD controller。相比学习目标关节位置，torque control 在外部扰动下更鲁棒，并展示了端到端 torque-level quadruped locomotion 的 sim-to-real 可行性。",
      "innovations": [
        "将 quadrupedal RL locomotion 从 position-based paradigm 推向 torque-based paradigm。",
        "策略直接高频预测关节力矩，不再依赖 PD tracking。",
        "在多地形和外部扰动下验证鲁棒性。",
        "作者声称是首个 end-to-end learning torque control quadruped locomotion sim-to-real 尝试。"
      ],
      "implementation": [
        "训练 RL policy 直接输出 joint torques。",
        "使用高频控制替代低频位置目标 + 高频 PD。",
        "在仿真中进行多地形和扰动训练。",
        "将 torque-control policy 部署到真实四足机器人。"
      ]
    },
    "en": {
      "title": "Learning Torque Control for Quadrupedal Locomotion",
      "authors": "Shuxiao Chen, Bike Zhang, Mark W. Mueller, Akshara Rai, Koushil Sreenath",
      "status": "Summarized",
      "tags": [
        "Torque Control",
        "Quadruped Locomotion",
        "Sim-to-Real",
        "Low-level Control"
      ],
      "mainContent": "This paper proposes a torque-based RL framework for quadrupedal locomotion, where the policy directly predicts joint torques at high frequency instead of outputting joint position targets tracked by a PD controller. It demonstrates improved robustness and sim-to-real feasibility.",
      "innovations": [
        "Torque-based RL paradigm for quadrupedal locomotion.",
        "Direct high-frequency joint torque prediction.",
        "Robustness to terrain variation and external disturbances.",
        "First reported sim-to-real attempt for end-to-end learned torque control in quadrupeds."
      ],
      "implementation": [
        "Train RL policy to output joint torques directly.",
        "Remove low-level PD position tracking.",
        "Train with terrain and disturbance variations.",
        "Deploy the torque-control policy on real hardware."
      ]
    }
  },
  {
    "id": "dynamics-randomization-revisited-a-case-study-for-quadru",
    "categories": [
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2011.02404",
    "project": "https://arxiv.org/abs/2011.02404",
    "arxiv": "https://arxiv.org/abs/2011.02404",
    "year": "2020 / revised 2021",
    "venue": "arXiv:2011.02404",
    "zh": {
      "title": "Dynamics Randomization Revisited: A Case Study for Quadrupedal Locomotion",
      "authors": "Zhaoming Xie, Xingye Da, Michiel van de Panne, Buck Babich, Animesh Garg",
      "status": "已整理",
      "tags": [
        "Dynamics Randomization",
        "Sim-to-Real",
        "Quadruped Locomotion",
        "Low-gain PD",
        "Velocity Observation"
      ],
      "mainContent": "该论文重新审视 dynamics randomization 在四足 sim-to-real 中的作用。与部分先前结论不同，作者发现对 Laikago 机器人，在特定设计选择下无需 dynamics randomization 或 on-robot adaptation 也可以实现 direct sim-to-real transfer，并通过大量 sim-to-sim 消融分析影响迁移的关键因素。",
      "innovations": [
        "系统分析 dynamics randomization 对 quadruped sim-to-real 的真实作用。",
        "发现 direct sim-to-real transfer 在某些设置下无需随机化也可行。",
        "通过 sim-to-sim 消融揭示 velocity observation、PD 增益等系统设计因素的重要性。",
        "用真实机器人实验验证多种 gait、speed 和 stepping frequency。"
      ],
      "implementation": [
        "在 Laikago 仿真环境中训练 locomotion policy。",
        "对 dynamics randomization、观测、控制结构等因素做消融。",
        "进行 sim-to-sim robustness 分析。",
        "将策略部署到真实机器人，测试不同步态和速度。"
      ]
    },
    "en": {
      "title": "Dynamics Randomization Revisited: A Case Study for Quadrupedal Locomotion",
      "authors": "Zhaoming Xie, Xingye Da, Michiel van de Panne, Buck Babich, Animesh Garg",
      "status": "Summarized",
      "tags": [
        "Dynamics Randomization",
        "Sim-to-Real",
        "Quadruped Locomotion",
        "Low-gain PD",
        "Velocity Observation"
      ],
      "mainContent": "This paper revisits the role of dynamics randomization for quadruped sim-to-real transfer. It finds that direct transfer can be possible without dynamics randomization or on-robot adaptation under certain system-design choices, and uses extensive sim-to-sim ablations to identify key transfer factors.",
      "innovations": [
        "Careful empirical analysis of dynamics randomization in quadruped locomotion.",
        "Demonstration that direct sim-to-real transfer can work without randomization.",
        "Identification of important design factors such as velocity observations and PD gains.",
        "Real-world validation across gaits, speeds, and stepping frequencies."
      ],
      "implementation": [
        "Train locomotion policies for Laikago in simulation.",
        "Ablate randomization and controller/observation design.",
        "Evaluate robustness in sim-to-sim.",
        "Deploy policies on real hardware."
      ]
    }
  },
  {
    "id": "high-performance-reinforcement-learning-on-spot-optimizi",
    "categories": [
      "sim2real"
    ],
    "pdf": "https://arxiv.org/pdf/2504.17857",
    "project": "https://arxiv.org/abs/2504.17857",
    "arxiv": "https://arxiv.org/abs/2504.17857",
    "year": "2025",
    "venue": "arXiv:2504.17857",
    "zh": {
      "title": "High-Performance Reinforcement Learning on Spot: Optimizing Simulation Parameters with Distributional Measures",
      "authors": "AJ Miller, Fangzhou Yu, Michael Brauckmann, Farbod Farshidian",
      "status": "已整理",
      "tags": [
        "Simulation Parameter Optimization",
        "CMA-ES",
        "Spot",
        "Friction",
        "Torque Curve"
      ],
      "mainContent": "该工作公开展示了在 Boston Dynamics Spot 低层 motor access 上部署端到端 RL policy 的技术细节。核心是使用 Wasserstein Distance 和 Maximum Mean Discrepancy 度量真实硬件与仿真数据分布差异，并将这些指标作为 CMA-ES 的评分函数来优化难以测量的 Spot 仿真参数。",
      "innovations": [
        "在 Spot RL Researcher Development Kit 上部署低层端到端 RL policy。",
        "使用分布度量而非单点误差衡量 sim-to-real gap。",
        "用 Wasserstein Distance 和 MMD 作为 CMA-ES 参数优化目标。",
        "训练代码基于 Nvidia IsaacLab，部署代码通过 Boston Dynamics 发布。"
      ],
      "implementation": [
        "在仿真和真实 Spot 上采集对应行为数据。",
        "计算两者数据分布的 Wasserstein Distance 和 MMD。",
        "使用 CMA-ES 搜索未知或难测仿真参数。",
        "在优化后的仿真中训练/验证 RL policy 并部署到真实 Spot。"
      ]
    },
    "en": {
      "title": "High-Performance Reinforcement Learning on Spot: Optimizing Simulation Parameters with Distributional Measures",
      "authors": "AJ Miller, Fangzhou Yu, Michael Brauckmann, Farbod Farshidian",
      "status": "Summarized",
      "tags": [
        "Simulation Parameter Optimization",
        "CMA-ES",
        "Spot",
        "Friction",
        "Torque Curve"
      ],
      "mainContent": "This work details high-performance RL deployment on Boston Dynamics Spot with low-level motor access. It measures the sim-to-real gap using Wasserstein Distance and Maximum Mean Discrepancy, then uses these distributional measures as CMA-ES scoring functions to optimize difficult-to-measure simulation parameters.",
      "innovations": [
        "End-to-end RL policy deployment on Spot low-level motor access.",
        "Distributional sim-to-real gap measurement.",
        "Wasserstein and MMD objectives for CMA-ES simulation-parameter optimization.",
        "Public training and deployment infrastructure."
      ],
      "implementation": [
        "Collect hardware and simulation data.",
        "Compute Wasserstein Distance and MMD between distributions.",
        "Use CMA-ES to optimize simulation parameters.",
        "Train and deploy RL policies with optimized simulation fidelity."
      ]
    }
  },
  {
    "id": "neuralsim-augmenting-differentiable-simulators-with-neur",
    "categories": [
      "sim2real",
      "loco-manipulation",
      "imitation-teleop",
      "vla-world-model"
    ],
    "pdf": "https://ar5iv.org/abs/2011.04217",
    "project": "https://ar5iv.org/abs/2011.04217",
    "arxiv": "https://ar5iv.org/abs/2011.04217",
    "year": "2020",
    "venue": "arXiv:2011.04217",
    "zh": {
      "title": "NeuralSim: Augmenting Differentiable Simulators with Neural Networks",
      "authors": "Eric Heiden, David Millard, Erwin Coumans, Yizhou Sheng, Gaurav S. Sukhatme",
      "status": "已整理",
      "tags": [
        "Differentiable Simulator",
        "Neural Residual",
        "Hybrid Modeling",
        "Physics + Learning"
      ],
      "mainContent": "NeuralSim 提出在可微刚体物理引擎中嵌入神经网络，用于建模传统解析仿真器未覆盖的非线性动力学和接触效应。与完全数据驱动模型相比，混合仿真器需要更少数据且泛化更好；论文还展示了用神经网络替代 MPC 中 QP 求解器可在真实四足控制中降低延迟。",
      "innovations": [
        "将 neural augmentations 嵌入 differentiable rigid-body simulator 内部，而非只做外部 residual correction。",
        "可以通过端到端梯度从高层轨迹误差训练神经模块。",
        "支持自动发现哪些物理量适合接入 neural augmentation。",
        "在 planar pushing、viscous friction 和 quadruped MPC imitation 中验证。"
      ],
      "implementation": [
        "基于 Tiny Differentiable Simulator 实现可微刚体动力学和接触模型。",
        "将神经网络插入仿真变量、力项或接触/摩擦计算中。",
        "用真实或仿真轨迹误差反向传播训练神经增强模块。",
        "用神经网络模仿/替代 QP solver，加速 model-predictive gait control。"
      ]
    },
    "en": {
      "title": "NeuralSim: Augmenting Differentiable Simulators with Neural Networks",
      "authors": "Eric Heiden, David Millard, Erwin Coumans, Yizhou Sheng, Gaurav S. Sukhatme",
      "status": "Summarized",
      "tags": [
        "Differentiable Simulator",
        "Neural Residual",
        "Hybrid Modeling",
        "Physics + Learning"
      ],
      "mainContent": "NeuralSim augments differentiable rigid-body simulators with neural networks to model unmodeled nonlinear dynamics and contact effects. Compared with purely data-driven models, the hybrid simulator requires less data and generalizes better. It also shows that replacing a QP solver in MPC with a neural network can reduce control latency on real quadrupeds.",
      "innovations": [
        "Neural augmentations inside differentiable physics engines.",
        "End-to-end gradient training from trajectory-level losses.",
        "Automatic discovery of useful neural augmentation inputs.",
        "Validation on pushing, viscous friction, and quadruped MPC imitation."
      ],
      "implementation": [
        "Implement differentiable rigid-body dynamics in Tiny Differentiable Simulator.",
        "Insert neural modules into physical variables or force/contact computations.",
        "Train neural augmentations from rollout losses.",
        "Replace QP components in model-predictive gait control with learned networks."
      ]
    }
  }
];

const externalPapersPath = "papers_extra.json";
const externalNotesPath = "paper_notes.json";
const paperInstitutionOverrides = {
  "dextrah-rgb": "NVIDIA Corporation; University of California, Berkeley",
  "resfit-real-robot-rl": "Amazon FAR; Stanford University; Carnegie Mellon University; UC Berkeley",
  "dexndm": "Tsinghua University; Peking University; Shanghai Qi Zhi Institute; Galbot",
  "pi06-recap": "Physical Intelligence",
  "viral-humanoid": "NVIDIA; Carnegie Mellon University; UC Berkeley; The Chinese University of Hong Kong",
  "demobot": "ByteDance Seed",
  "simtoolreal": "Cornell University; Stanford University",
  "omnireset": "University of Washington; NVIDIA; Microsoft Research",
  "posterior-bc": "UC Berkeley; Stanford University",
  "visual-dexterity": "Massachusetts Institute of Technology; Tsinghua University; Meta AI",
  "sim2real-humanoid-dexterous-rl": "UC Berkeley; NVIDIA; UT Austin",
  "human2sim2robot": "Stanford University",
  "pi05-open-world-vla": "Physical Intelligence",
  "symdex": "TU Darmstadt; Honda Research Institute Europe; Istituto Italiano di Tecnologia; DFKI; Hessian.AI; Robotics Institute Germany",
  "spi-active": "Carnegie Mellon University; Google DeepMind",
  "multimodal-visual-transformer-rl": "Hebei Medical University; Harbin Institute of Technology",
  "anyteleop": "UC San Diego; NVIDIA",
  "rma-rapid-motor-adaptation-for-legged-robots": "University of California, Berkeley; Carnegie Mellon University; Facebook AI Research",
  "pen-spinning": "UC San Diego; Carnegie Mellon University; UC Berkeley",
  "hora-in-hand-rotation": "UC Berkeley; Meta AI",
  "bidexhands": "Peking University; University College London; Carnegie Mellon University; Beijing Institute for General Artificial Intelligence",
  "dextrah-g": "Stanford University; University of Utah; NVIDIA; University of California, Berkeley",
  "mimicgen": "NVIDIA; The University of Texas at Austin",
  "pi0": "Physical Intelligence",
  "lda-1b": "Peking University; Galbot; CASIA; BAAI; Tsinghua University; Sun Yat-sen University; NVIDIA",
  "gigaworld-policy": "GigaAI",
  "motiontrans-human-vr-data-enable-motion-level-learning-f": "Tsinghua University; Shanghai Qi Zhi Institute; Peking University; Shanghai Jiao Tong University; Wuhan University",
  "dexterous-functional-grasping": "Carnegie Mellon University",
  "efficient-sim-to-real-transfer-of-contact-rich-manipulat": "University of California, Berkeley",
  "amp-adversarial-motion-priors": "University of California, Berkeley; Shanghai Jiao Tong University",
  "phc-perpetual-humanoid-control": "Reality Labs Research, Meta; Carnegie Mellon University",
  "beyondmimic": "University of California, Berkeley; Stanford University",
  "pmtg-policies-modulating-trajectory-generators": "Google Brain",
  "skillblender-towards-versatile-humanoid-whole-body-loco-": "University of Southern California; Stanford University; Peking University; University of California, Berkeley",
  "hugwbc": "Shanghai Jiao Tong University; Shanghai AI Laboratory",
  "homie": "Shanghai AI Laboratory; The Chinese University of Hong Kong",
  "langwbc": "University of California, Berkeley",
  "host-learning-humanoid-standing-up-control-across-divers": "Shanghai AI Laboratory; Shanghai Jiao Tong University; The University of Hong Kong; Zhejiang University; The Chinese University of Hong Kong",
  "learning-h-infinity-locomotion-control": "Shanghai AI Laboratory; Shanghai Jiao Tong University; Zhejiang University; The Chinese University of Hong Kong",
  "lcp-lipschitz-constrained-policies": "Simon Fraser University; UIUC; UC Berkeley; Stanford University; NVIDIA",
  "unsupervised-actuator-net-uan": "Improbable AI Lab, Massachusetts Institute of Technology",
};
const paperNotes = new Map();

const state = {
  lang: localStorage.getItem("paper-notes-lang") || "zh",
  category: "all",
  query: "",
  selectedId: "dextrah-rgb",
  layout: {
    sidebarCollapsed: localStorage.getItem("paper-layout-sidebar-collapsed") === "1",
    detailCollapsed: localStorage.getItem("paper-layout-detail-collapsed") === "1",
    sidebarWidth: Number(localStorage.getItem("paper-layout-sidebar-width")) || 220,
    detailWidth: Number(localStorage.getItem("paper-layout-detail-width")) || 620,
  },
};

const nodes = {
  html: document.documentElement,
  body: document.body,
  langButtons: Array.from(document.querySelectorAll(".lang-button")),
  promptButton: document.querySelector("#prompt-button"),
  promptModal: document.querySelector("#prompt-modal"),
  promptPreview: document.querySelector("#prompt-preview"),
  promptStatus: document.querySelector("#prompt-status"),
  sidebarToggle: document.querySelector("#sidebar-toggle"),
  sidebarRestore: document.querySelector("#sidebar-restore"),
  sidebarResizer: document.querySelector("#sidebar-resizer"),
  detailToggle: document.querySelector("#detail-toggle"),
  detailResizer: document.querySelector("#detail-resizer"),
  updateBadge: document.querySelector("#update-badge"),
  search: document.querySelector("#paper-search"),
  categoryNav: document.querySelector("#category-nav"),
  paperList: document.querySelector("#paper-list"),
  paperDetail: document.querySelector("#paper-detail"),
  viewTitle: document.querySelector("#view-title"),
  resultCount: document.querySelector("#result-count"),
  paperCount: document.querySelector("#paper-count"),
  categoryCount: document.querySelector("#category-count"),
};

function text(key) {
  return uiText[state.lang][key];
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setButtonLabel(button, label) {
  if (!button) return;
  button.setAttribute("aria-label", label);
  button.setAttribute("title", label);
}

function applyLayout() {
  const sidebarWidth = clamp(state.layout.sidebarWidth, 180, 320);
  const detailWidth = clamp(state.layout.detailWidth, 480, 820);
  state.layout.sidebarWidth = sidebarWidth;
  state.layout.detailWidth = detailWidth;

  nodes.html.style.setProperty("--sidebar-width", `${sidebarWidth}px`);
  nodes.html.style.setProperty("--detail-width", `${detailWidth}px`);
  nodes.body.classList.toggle("is-sidebar-collapsed", state.layout.sidebarCollapsed);
  nodes.body.classList.toggle("is-detail-collapsed", state.layout.detailCollapsed);

  nodes.sidebarToggle.textContent = "‹";
  nodes.sidebarRestore.textContent = "›";
  nodes.detailToggle.textContent = state.layout.detailCollapsed ? "‹" : "›";

  setButtonLabel(nodes.sidebarToggle, text("hideSidebar"));
  setButtonLabel(nodes.sidebarRestore, text("showSidebar"));
  setButtonLabel(nodes.detailToggle, state.layout.detailCollapsed ? text("showDetail") : text("hideDetail"));
  setButtonLabel(nodes.sidebarResizer, text("resizeSidebar"));
  setButtonLabel(nodes.detailResizer, text("resizeDetail"));
}

function saveLayout() {
  localStorage.setItem("paper-layout-sidebar-collapsed", state.layout.sidebarCollapsed ? "1" : "0");
  localStorage.setItem("paper-layout-detail-collapsed", state.layout.detailCollapsed ? "1" : "0");
  localStorage.setItem("paper-layout-sidebar-width", String(state.layout.sidebarWidth));
  localStorage.setItem("paper-layout-detail-width", String(state.layout.detailWidth));
}

function stringField(value) {
  return typeof value === "string" ? value.trim() : "";
}

function stringArray(value) {
  return Array.isArray(value) ? value.map(stringField).filter(Boolean) : [];
}

function normalizeMatchKey(value) {
  return stringField(value)
    .normalize("NFKC")
    .toLowerCase()
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/+$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeLocalizedPaper(localized) {
  const value = localized && typeof localized === "object" ? localized : {};

  return {
    title: stringField(value.title),
    authors: stringField(value.authors),
    institutions: stringField(value.institutions),
    status: stringField(value.status),
    takeaway: stringField(value.takeaway),
    tags: stringArray(value.tags),
    mainContent: stringField(value.mainContent),
    innovations: stringArray(value.innovations),
    implementation: stringArray(value.implementation),
  };
}

function normalizePaperRecord(rawPaper) {
  if (!rawPaper || typeof rawPaper !== "object") {
    throw new Error("Paper item must be an object.");
  }

  const id = stringField(rawPaper.id);
  if (!id) throw new Error("Paper id is required.");

  return {
    id,
    categories: stringArray(rawPaper.categories),
    pdf: stringField(rawPaper.pdf),
    project: stringField(rawPaper.project),
    arxiv: stringField(rawPaper.arxiv),
    year: stringField(rawPaper.year),
    venue: stringField(rawPaper.venue),
    zh: normalizeLocalizedPaper(rawPaper.zh),
    en: normalizeLocalizedPaper(rawPaper.en),
  };
}

function parsePaperJson(textValue) {
  const payload = JSON.parse(textValue);
  const rawItems = payload && typeof payload === "object" && Array.isArray(payload.papers) ? payload.papers : [];
  if (!rawItems.length) return [];
  return rawItems.map(normalizePaperRecord);
}

function normalizePaperNote(value) {
  if (typeof value === "string") {
    return {
      takeaway: stringField(value),
      note: "",
    };
  }

  if (!value || typeof value !== "object") {
    return null;
  }

  const zh = typeof value.zh === "string" ? { takeaway: value.zh } : value.zh;
  const en = typeof value.en === "string" ? { takeaway: value.en } : value.en;

  return {
    takeaway: stringField(value.takeaway),
    note: stringField(value.note),
    zh: zh && typeof zh === "object" ? normalizePaperNote(zh) : null,
    en: en && typeof en === "object" ? normalizePaperNote(en) : null,
  };
}

function localPaperNote(paper) {
  const note = paperNotes.get(paper.id);
  if (!note) {
    return {
      takeaway: localPaper(paper).takeaway,
      note: "",
    };
  }

  const localized = note[state.lang] || {};

  return {
    takeaway: localized.takeaway || note.takeaway || localPaper(paper).takeaway,
    note: localized.note || note.note || "",
  };
}

function allNoteText(paper) {
  const note = paperNotes.get(paper.id);
  if (!note) return localPaper(paper).takeaway;

  return [
    note.takeaway,
    note.note,
    note.zh && note.zh.takeaway,
    note.zh && note.zh.note,
    note.en && note.en.takeaway,
    note.en && note.en.note,
    localPaper(paper).takeaway,
  ]
    .filter(Boolean)
    .join(" ");
}

function noteMatchValues(paper) {
  return [
    paper.id,
    paper.zh && paper.zh.title,
    paper.en && paper.en.title,
    paper.arxiv,
    paper.pdf,
    paper.project,
  ]
    .map(normalizeMatchKey)
    .filter(Boolean);
}

function findPaperForNoteKey(rawKey) {
  const key = normalizeMatchKey(rawKey);
  if (!key || key.startsWith("_")) return null;

  const exact = papers.find((paper) => noteMatchValues(paper).some((value) => value === key));
  if (exact) return exact;

  if (key.length < 4) return null;

  return papers.find((paper) =>
    noteMatchValues(paper).some((value) => value.includes(key) || key.includes(value)),
  );
}

function parsePaperNotes(textValue) {
  const payload = JSON.parse(textValue);
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return 0;

  let matched = 0;
  Object.entries(payload).forEach(([key, value]) => {
    if (key.startsWith("_")) return;
    const paper = findPaperForNoteKey(key);
    const note = normalizePaperNote(value);
    if (!paper || !note) return;
    paperNotes.set(paper.id, note);
    matched += 1;
  });

  return matched;
}

function upsertPaperList(target, imported) {
  let added = 0;
  let updated = 0;

  imported.forEach((paper) => {
    const index = target.findIndex((item) => item.id === paper.id);
    if (index >= 0) {
      target[index] = paper;
      updated += 1;
    } else {
      target.push(paper);
      added += 1;
    }
  });

  return { added, updated };
}

async function loadExternalPapers() {
  try {
    const response = await fetch(externalPapersPath, { cache: "no-cache" });
    if (!response.ok) return 0;
    const imported = parsePaperJson(await response.text());
    upsertPaperList(papers, imported);
    return imported.length;
  } catch {
    return 0;
  }
}

async function loadPaperNotes() {
  try {
    const response = await fetch(externalNotesPath, { cache: "no-cache" });
    if (!response.ok) return 0;
    return parsePaperNotes(await response.text());
  } catch {
    return 0;
  }
}

async function loadSiteMeta() {
  try {
    const response = await fetch(siteMetaPath, { cache: "no-cache" });
    if (!response.ok) return false;
    const payload = await response.json();
    const lastUpdated = payload && typeof payload === "object" ? payload.lastUpdated : null;
    if (!lastUpdated || typeof lastUpdated !== "object") return false;

    siteMeta.lastUpdated = {
      iso: stringField(lastUpdated.iso) || siteMeta.lastUpdated.iso,
      zh: stringField(lastUpdated.zh) || stringField(lastUpdated.iso) || siteMeta.lastUpdated.zh,
      en: stringField(lastUpdated.en) || stringField(lastUpdated.iso) || siteMeta.lastUpdated.en,
    };
    return true;
  } catch {
    return false;
  }
}

function localPaper(paper) {
  return paper[state.lang];
}

function localInstitutions(paper) {
  const localized = localPaper(paper);
  const override = paperInstitutionOverrides[paper.id];
  const overrideText =
    typeof override === "string" ? override : override && (override[state.lang] || override.en || override.zh);

  return stringField(localized.institutions) || stringField(overrideText);
}

function categoryLabel(categoryId) {
  const category = categories.find((item) => item.id === categoryId);
  return category ? category.label[state.lang] : categoryId;
}

function categoryCount(categoryId) {
  return papers.filter((paper) => paper.categories.includes(categoryId)).length;
}

function isLocalReadLink(link) {
  return typeof link === "string" && link.startsWith("read/");
}

function validExternalLink(link) {
  return Boolean(link && !isLocalReadLink(link));
}

function isProjectPage(link) {
  if (!validExternalLink(link)) return false;

  try {
    const { hostname, pathname } = new URL(link);
    const host = hostname.toLowerCase();
    const path = pathname.toLowerCase();

    return ![
      "arxiv.org",
      "openreview.net",
      "researchgate.net",
      "pmc.ncbi.nlm.nih.gov",
      "dl.acm.org",
      "roboticsproceedings.org",
      "ar5iv.org",
      "github.com",
    ].some((domain) => host === domain || host.endsWith(`.${domain}`)) && !path.endsWith(".pdf");
  } catch {
    return false;
  }
}

function primaryLink(paper) {
  if (isProjectPage(paper.project)) {
    return {
      label: text("project"),
      url: paper.project,
    };
  }

  const url = [paper.arxiv, paper.pdf, paper.project].find(validExternalLink);
  return url
    ? {
        label: text("paperLink"),
        url,
      }
    : null;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderText(value) {
  const text = String(value).trim();
  // MathJax handles explicitly delimited inline or display formulas. Inferring
  // formulas from underscores or carets misclassifies technical prose such as
  // "Q_D receives privileged state" and turns the whole paragraph into one
  // non-wrapping math expression.
  return escapeHtml(text);
}

function listItems(items) {
  return items.map((item) => `<li>${renderText(item)}</li>`).join("");
}

function tagItems(items, className = "") {
  const extraClass = className ? ` ${className}` : "";
  return items.map((item) => `<span class="tag${extraClass}">${escapeHtml(item)}</span>`).join("");
}

function typesetMath() {
  if (!window.MathJax || !window.MathJax.typesetPromise) return;

  const targets = [nodes.paperList, nodes.paperDetail].filter(Boolean);

  if (window.MathJax.typesetClear) {
    window.MathJax.typesetClear(targets);
  }

  window.MathJax.typesetPromise(targets).catch(() => {});
}

function searchableText(paper) {
  const localized = localPaper(paper);
  const institutions = localInstitutions(paper);
  return [
    localized.title,
    localized.authors,
    institutions,
    allNoteText(paper),
    localized.mainContent,
    localized.innovations.join(" "),
    localized.implementation.join(" "),
    paper.categories.map(categoryLabel).join(" "),
    localized.tags.join(" "),
    paper.year,
    paper.venue,
  ]
    .join(" ")
    .toLowerCase();
}

function filteredPapers() {
  const query = state.query.trim().toLowerCase();

  return papers.filter((paper) => {
    const matchesCategory = state.category === "all" || paper.categories.includes(state.category);
    const matchesQuery = !query || searchableText(paper).includes(query);
    return matchesCategory && matchesQuery;
  }).reverse();
}

function syncLanguage() {
  nodes.html.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = text(key);
  });
  if (nodes.updateBadge) {
    const lastUpdated = siteMeta.lastUpdated;
    nodes.updateBadge.innerHTML = `
      <span>${text("lastUpdated")}</span>
      <time datetime="${escapeHtml(lastUpdated.iso)}">${escapeHtml(lastUpdated[state.lang])}</time>
    `;
  }
  nodes.search.placeholder = text("searchPlaceholder");
  nodes.langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });
  nodes.promptButton.textContent = text("promptButton");
  applyLayout();
}

function renderCategories() {
  nodes.categoryCount.textContent = categories.length;

  const buttons = [
    {
      label: text("allPapers"),
      value: "all",
      count: papers.length,
    },
    ...categories.map((category) => ({
      label: category.label[state.lang],
      value: category.id,
      count: categoryCount(category.id),
    })),
  ];

  nodes.categoryNav.innerHTML = buttons
    .map(
      (category) => `
        <button class="category-button ${state.category === category.value ? "is-active" : ""}"
          type="button"
          data-category="${category.value}">
          <span>${category.label}</span>
          <small>${category.count}</small>
        </button>
      `,
    )
    .join("");
}

function renderList() {
  const list = filteredPapers();
  nodes.paperCount.textContent = papers.length;
  nodes.viewTitle.textContent = state.category === "all" ? text("allPapers") : categoryLabel(state.category);
  nodes.resultCount.textContent = `${text("showing")} ${list.length} ${text("of")} ${papers.length} ${text("items")}`;

  if (!list.length) {
    nodes.paperList.innerHTML = `<div class="empty-state">${text("noResults")}</div>`;
    nodes.paperDetail.innerHTML = "";
    return;
  }

  const selectedStillVisible = list.some((paper) => paper.id === state.selectedId);
  if (!state.selectedId || !selectedStillVisible) {
    state.selectedId = list[0].id;
  }

  nodes.paperList.innerHTML = list.map(renderPaperCard).join("");
  renderDetail(papers.find((paper) => paper.id === state.selectedId));
}

function renderPaperCard(paper) {
  const localized = localPaper(paper);
  const note = localPaperNote(paper);
  const institutions = localInstitutions(paper);
  const categoryTags = tagItems(paper.categories.map(categoryLabel), "category-tag");
  const keywordTags = tagItems(localized.tags, "keyword-tag");
  const selectedClass = paper.id === state.selectedId ? "is-selected" : "";
  const takeaway = note.takeaway
    ? `<p class="paper-card-takeaway">${renderText(note.takeaway)}</p>`
    : "";
  const institutionLine = institutions
    ? `<p class="paper-card-institutions">${escapeHtml(institutions)}</p>`
    : "";

  return `
    <button class="paper-card ${selectedClass}" type="button" data-paper-id="${paper.id}">
      <div class="meta-row">
        <span>${paper.year}</span>
        <span>${paper.venue}</span>
      </div>
      <h3>${escapeHtml(localized.title)}</h3>
      ${institutionLine}
      ${takeaway}
      <div class="paper-card-summary">
        <p>${renderText(localized.mainContent)}</p>
      </div>
      <div class="paper-card-tags">
        <div class="tag-row">${categoryTags}${keywordTags}</div>
      </div>
    </button>
  `;
}

function renderDetail(paper) {
  if (!paper) return;

  const localized = localPaper(paper);
  const note = localPaperNote(paper);
  const institutions = localInstitutions(paper);
  const categoryTags = tagItems(paper.categories.map(categoryLabel), "category-tag");
  const keywordTags = tagItems(localized.tags, "keyword-tag");
  const link = primaryLink(paper);
  const linkAction = link
    ? `<a class="action-link primary" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`
    : "";
  const takeaway = note.takeaway
    ? `
      <section class="detail-takeaway">
        <span>${text("takeaway")}</span>
        <p>${renderText(note.takeaway)}</p>
      </section>
    `
    : "";
  const personalNote = note.note
    ? `
      <section class="detail-note">
        <span>${text("personalNote")}</span>
        <p>${renderText(note.note)}</p>
      </section>
    `
    : "";
  const institutionLine = institutions
    ? `<p class="detail-institutions">${escapeHtml(institutions)}</p>`
    : "";
  const detailNav = `
    <nav class="detail-nav" aria-label="paper sections">
      <button type="button" data-detail-target="detail-summary">${text("detailNavSummary")}</button>
      <button type="button" data-detail-target="detail-innovations">${text("detailNavInnovations")}</button>
      <button type="button" data-detail-target="detail-implementation">${text("detailNavImplementation")}</button>
      <button type="button" data-detail-target="detail-links">${text("detailNavLinks")}</button>
    </nav>
  `;

  nodes.paperDetail.innerHTML = `
    <div class="tag-row">${categoryTags}</div>
    <h2 class="detail-title">${escapeHtml(localized.title)}</h2>
    <p class="detail-subtitle">${escapeHtml(localized.authors)}</p>
    ${institutionLine}
    ${takeaway}
    ${personalNote}
    ${detailNav}

    <div class="detail-grid">
      <div class="info-tile">
        <span>${text("venue")}</span>
        <strong>${escapeHtml(paper.venue)}</strong>
      </div>
      <div class="info-tile">
        <span>${text("year")}</span>
        <strong>${escapeHtml(paper.year)}</strong>
      </div>
      <div class="info-tile">
        <span>${text("status")}</span>
        <strong>${escapeHtml(localized.status)}</strong>
      </div>
    </div>

    <section class="keyword-section">
      <h3>${text("keywords")}</h3>
      <div class="tag-row">${keywordTags}</div>
    </section>

    <section class="detail-section" id="detail-summary">
      <h3>${text("mainContent")}</h3>
      <p>${renderText(localized.mainContent)}</p>
    </section>

    <section class="detail-section" id="detail-innovations">
      <h3>${text("innovations")}</h3>
      <ul>${listItems(localized.innovations)}</ul>
    </section>

    <section class="detail-section" id="detail-implementation">
      <h3>${text("implementation")}</h3>
      <ul>${listItems(localized.implementation)}</ul>
    </section>

    <div class="link-row" id="detail-links">
      ${linkAction}
    </div>
  `;

  typesetMath();
}

function render() {
  syncLanguage();
  renderCategories();
  renderList();
}

nodes.langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    state.category = "all";
    localStorage.setItem("paper-notes-lang", state.lang);
    render();
  });
});

nodes.promptButton.addEventListener("click", () => {
  openPromptModal();
});

nodes.sidebarToggle.addEventListener("click", () => {
  state.layout.sidebarCollapsed = true;
  saveLayout();
  applyLayout();
});

nodes.sidebarRestore.addEventListener("click", () => {
  state.layout.sidebarCollapsed = false;
  saveLayout();
  applyLayout();
});

nodes.detailToggle.addEventListener("click", () => {
  state.layout.detailCollapsed = !state.layout.detailCollapsed;
  saveLayout();
  applyLayout();
});

function startResize(kind, event) {
  if (event.button !== 0) return;
  if (kind === "sidebar" && state.layout.sidebarCollapsed) return;
  if (kind === "detail" && state.layout.detailCollapsed) return;

  event.preventDefault();
  const startX = event.clientX;
  const startWidth = kind === "sidebar" ? state.layout.sidebarWidth : state.layout.detailWidth;
  nodes.body.classList.add("is-resizing");

  const handleMove = (moveEvent) => {
    const deltaX = moveEvent.clientX - startX;
    if (kind === "sidebar") {
      state.layout.sidebarWidth = clamp(startWidth + deltaX, 180, 320);
    } else {
      state.layout.detailWidth = clamp(startWidth - deltaX, 480, 820);
    }
    applyLayout();
  };

  const handleUp = () => {
    nodes.body.classList.remove("is-resizing");
    saveLayout();
    window.removeEventListener("pointermove", handleMove);
    window.removeEventListener("pointerup", handleUp);
  };

  window.addEventListener("pointermove", handleMove);
  window.addEventListener("pointerup", handleUp);
}

function resizeWithKeyboard(kind, event) {
  if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
  event.preventDefault();
  const step = event.shiftKey ? 32 : 16;
  const direction = event.key === "ArrowRight" ? 1 : -1;

  if (kind === "sidebar") {
    state.layout.sidebarWidth = clamp(state.layout.sidebarWidth + direction * step, 180, 320);
  } else {
    state.layout.detailWidth = clamp(state.layout.detailWidth - direction * step, 480, 820);
  }

  saveLayout();
  applyLayout();
}

nodes.sidebarResizer.addEventListener("pointerdown", (event) => startResize("sidebar", event));
nodes.detailResizer.addEventListener("pointerdown", (event) => startResize("detail", event));
nodes.sidebarResizer.addEventListener("keydown", (event) => resizeWithKeyboard("sidebar", event));
nodes.detailResizer.addEventListener("keydown", (event) => resizeWithKeyboard("detail", event));

nodes.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderList();
});

nodes.categoryNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderCategories();
  renderList();
});

nodes.paperList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-paper-id]");
  if (!button) return;
  state.selectedId = button.dataset.paperId;
  renderList();
});

nodes.paperDetail.addEventListener("click", (event) => {
  const button = event.target.closest("[data-detail-target]");
  if (!button) return;

  const target = nodes.paperDetail.querySelector(`#${button.dataset.detailTarget}`);
  if (!target) return;

  const nav = nodes.paperDetail.querySelector(".detail-nav");
  const offset = nav ? nav.offsetHeight + 14 : 0;
  nodes.paperDetail.scrollTo({
    top: Math.max(0, target.offsetTop - offset),
    behavior: "smooth",
  });
});

function openPromptModal() {
  nodes.promptStatus.textContent = "";
  nodes.promptPreview.textContent = readingPrompts[state.lang] || readingPrompts.zh;
  nodes.promptModal.hidden = false;
}

function closePromptModal() {
  nodes.promptModal.hidden = true;
  nodes.promptStatus.textContent = "";
}

nodes.promptModal.addEventListener("click", async (event) => {
  if (event.target.closest("[data-prompt-close]")) {
    closePromptModal();
    return;
  }

  const button = event.target.closest("[data-prompt-copy]");
  if (!button) return;

  const lang = button.dataset.promptCopy;
  const prompt = readingPrompts[lang] || readingPrompts.zh;

  try {
    await navigator.clipboard.writeText(prompt);
    nodes.promptStatus.textContent = text("promptCopied");
  } catch {
    nodes.promptStatus.textContent = "";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !nodes.promptModal.hidden) {
    closePromptModal();
  }
});

function initialize() {
  render();
  loadExternalData();
}

async function loadExternalData() {
  const [metaLoaded, importedCount] = await Promise.all([
    loadSiteMeta(),
    loadExternalPapers(),
  ]);
  const noteCount = await loadPaperNotes();
  if (metaLoaded || importedCount || noteCount) {
    render();
  }
}

initialize();
