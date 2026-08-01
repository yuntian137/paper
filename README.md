# Paper Reading Notes

这是一个适合部署到 GitHub Pages 的中英文机器人论文阅读笔记站点。项目是纯静态页面，不需要构建步骤；论文数据、分类、搜索和详情渲染都维护在 `app.js` 中。

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
app.js                    UI 文案、论文数据、分类、筛选、搜索和详情渲染
example.json              给论文阅读 agent 使用的论文卡片填写模板
papers_extra.json         可选的新增论文 JSON 数据，网站启动时自动读取
paper_notes.json          个人复习笔记，按 id、标题片段或链接匹配论文
site_meta.json            站点元信息，例如最近更新时间
```

网站发布只依赖 `app.js`、`papers_extra.json`、`paper_notes.json`、`site_meta.json` 和外部论文链接。

## 分类方式

仓库按两层分类维护：

```txt
页面分类：用于网页左侧筛选和论文标签
关键词：用于描述方法、硬件、任务和迁移方式，并参与搜索
```

页面内的主分类由 `app.js` 的 `categories` 数组维护，适合保持少量、稳定。当前固定分类 id 为：

```txt
locomotion          -> 运动控制 / Locomotion
manipulation        -> Manipulation
loco-manipulation   -> Loco-Manipulation
sim2real            -> Sim2Real / 动力学辨识
real-robot-rl       -> 真机 RL
imitation-teleop    -> 模仿学习 / 遥操作
vla-world-model     -> VLA / 世界模型
benchmark-dataset   -> Benchmark / Dataset
```

一篇论文可以属于多个页面分类，例如：

```js
categories: ["locomotion", "sim2real"]
```

关键词由每篇论文的 `tags` 字段维护，适合放方法、硬件、任务和细粒度主题，例如：

```txt
PPO, SAC, Diffusion Policy, BC, DAgger, residual RL
humanoid, quadruped, dexterous hand, bimanual
in-hand manipulation, grasping, tool use, velocity tracking
system identification, domain randomization, real-world finetuning
```

如果新增页面主分类，需要同时更新 `categories` 数组和论文对象里的 `categories` 字段。一般情况下优先新增关键词，不要轻易新增左侧主分类。

## 使用精读 Prompt

页面右上角的“精读 Prompt”主要面向能读写本地文件的 Codex。把 Prompt 与论文 PDF 一起交给 Codex 后，它会生成实际的 Markdown 报告文件，并从论文中选取少量真正有解释价值的原图，裁剪后保存到报告旁的 assets 目录，再通过相对路径嵌入文档。Prompt 不强制执行额外的预览或提交前复查，以免增加不必要的处理时间。

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
5. `categories` 使用上面的固定分类 id。
6. 建议同时补充 `zh` 和 `en` 两套内容，保证中英文切换稳定。
7. `zh.title` 和 `en.title` 必须完全一致，均使用论文官方英文标题；中文正文可以保留 PPO、RL、VLA、Sim-to-Real 等必要英文缩写和专业术语。
8. `takeaway` 是给自己复习用的一句话定性理解，不需要像摘要一样客观完整。
9. `institutions` 填论文首页、PDF 首页或官方页面明确列出的作者机构；查不到或不确定时留空，不要猜测。
10. `example.json` 里所有以下划线开头的字段都只是给 agent 的说明，最终生成的论文对象不得包含这些字段。
11. LaTeX 必须按使用场景显式定界：论文卡片 JSON 字符串使用 `\\(...\\)` 表示行内公式、`\\[...\\]` 表示独立公式；“精读 Prompt”生成的 Markdown 报告使用 `$...$` 和 `$$...$$`；报告交付后的问答对话使用 `\(...\)` 和 `\[...\]`。普通文字不要放进数学模式。

```json
{
  "papers": [
    {
      "id": "paper-id",
      "categories": ["manipulation", "sim2real"],
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

## 摘要级整理规范

`mainContent` 默认只需要基于论文摘要整理，避免为了补页面内容而完整通读全文。推荐写 2-4 句，覆盖：

```txt
论文解决什么问题
使用什么核心方法
实验或结果声称解决了什么
```

`innovations` 和 `implementation` 只记录摘要里能确认的信息。摘要没有说明的内容可以保留为“待阅读全文补充”，不要写成已经确认的细节。

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

这个站点没有构建流程，直接打开 `index.html` 即可预览。若要测试 `papers_extra.json` 自动加载，建议在仓库根目录启动一个静态服务器：

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
