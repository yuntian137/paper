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
papers_extra.json         可选的新增论文 JSON 数据，网站启动时自动读取
```

网站发布只依赖 `app.js`、`papers_extra.json` 和外部论文链接，不保存本地 PDF，也不维护 `read/` 目录。这样 GitHub Pages 仓库不会因为论文文件变大。

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

## 添加一篇论文

推荐优先用网页右上角的“新增论文”按钮导入 JSON。导入后的论文会保存在当前浏览器的 `localStorage`，刷新后仍然可见；如果要发布到 GitHub Pages 给其他设备或其他人看，把同样的 JSON 写入 `papers_extra.json` 并提交。

长期维护有两种方式：

1. 少量稳定内置论文：在 `app.js` 的 `papers` 数组里新增一个对象。
2. 后续批量新增论文：在 `papers_extra.json` 的 `papers` 数组里追加对象。

字段约定：

1. `id` 必须稳定，建议用英文 slug；同 id 会覆盖已有论文。
2. `arxiv` 和 `project` 优先写外部链接。
3. `pdf` 可以留空或写外部 PDF 链接；不要写本地 PDF 路径。
4. `categories` 使用上面的固定分类 id。
5. 建议同时补充 `zh` 和 `en` 两套内容，保证中英文切换稳定。

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
        "title": "中文或英文论文标题",
        "authors": "作者",
        "status": "摘要已整理",
        "tags": ["Dexterous Hand", "PPO", "Sim-to-Real"],
        "mainContent": "根据摘要概括：研究问题、核心方法和主要结论。",
        "innovations": ["摘要中明确提到的创新点；不确定时写待阅读全文补充"],
        "implementation": ["摘要中明确提到的实现信息；不确定时写待阅读全文补充"]
      },
      "en": {
        "title": "Paper title",
        "authors": "Authors",
        "status": "Abstract summarized",
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
