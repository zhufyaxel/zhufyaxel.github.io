---
layout: post
title: 使用视频预览增强论文展示
date: 2025-04-16
description: 如何为精选论文添加吸引人的视频预览
tags: demo video publications
categories: tutorials
lang: zh
other_languages:
  en: /blog/2025/video-preview-demo/
---

# 使用视频预览增强论文展示

这个学术网站模板的最强大功能之一是能够为精选论文添加视频预览。这为您的研究提供了一种引人入胜且动态的展示方式。

## 视频预览的工作原理

当访问者浏览您的精选出版物时，他们会看到自动播放的视频预览，这些预览能快速直观地展示您的论文内容。这对于包含视觉元素、用户界面或交互系统的研究特别有效。

以下是我的一些带有视频预览的精选论文：

{% include selected_papers.liquid %}

## 如何为论文添加视频预览

为您的出版物添加视频预览非常简单。在您的BibTeX条目（通常在`_bibliography/papers.bib`中）中，您需要添加两个关键元素：

1. 通过添加`selected={true}`将论文标记为精选
2. 通过包含`preview={YourPaperName.mp4}`添加视频预览

以下是带有视频预览的BibTeX条目示例：

```bibtex
@INPROCEEDINGS{PaperKey,
  author={Author, A. and Researcher, B.},
  title={Your Amazing Research Paper},
  booktitle={2025 Conference Proceedings},
  year={2025},
  pages={1-10},
  abstract={Your paper abstract goes here...},
  selected={true},
  preview={YourPaperName.mp4},
  pdf={YourPaper.pdf},
  video={https://youtu.be/your-full-video}
}
```

## 视频要求和技巧

为了获得最佳的视频预览效果：

1. **格式**：创建MP4文件以获得最佳兼容性
2. **时长**：保持视频简短（5-15秒）以快速传达关键视觉方面
3. **大小**：优化文件大小以确保快速加载
4. **内容**：专注于您研究中最具视觉吸引力的方面
5. **无音频**：视频以静音方式播放，因此视觉内容是关键
6. **备用图像**：系统会自动使用同名的JPG作为备用选项

## 文件组织

将您的视频预览文件放在`/assets/video/publication_preview/`目录中。系统会自动在那里查找它们。

## 视频预览的好处

为您的精选论文添加视频预览提供了几个优势：

- **增加参与度**：访问者更有可能注意到并探索具有动态内容的论文
- **更好的理解**：复杂概念可以通过视觉方式快速传达
- **专业外观**：为您的研究创建现代、交互式的展示
- **差异化**：从传统的静态出版物列表中脱颖而出

通过为您的关键出版物实现视频预览，您可以创建一个更具吸引力和信息量的学术网站，有效地展示您的研究贡献。
