---
layout: page
title: 多语言项目演示
description: 项目多语言功能的演示
img: assets/img/12.jpg
importance: 1
category: demo
lang: zh
other_languages:
  en: /projects/multilingual-project/
---

# 多语言项目演示

这是项目多语言功能的演示。这个项目页面是中文的，但您可以使用上方的语言切换器切换到英文。

## 项目概述

这是一个示例项目，演示如何创建多语言项目页面。用于博客文章的相同方法也可以应用于项目。

## 实现细节

要创建多语言项目页面，您需要：

1. 为项目的每种语言版本创建单独的文件。
2. 在每个文件的前置元数据中添加 `lang` 参数。
3. 在每个文件的前置元数据中添加 `other_languages` 参数，将语言代码映射到URL。

例如，这个项目的前置元数据如下：

```yaml
---
layout: page
title: 多语言项目演示
description: 项目多语言功能的演示
img: assets/img/12.jpg
importance: 1
category: demo
lang: zh
other_languages:
  en: /projects/multilingual-project/
---
```

而英文版本的前置元数据为：

```yaml
---
layout: page
title: Multilingual Project Demo
description: A demonstration of the multilingual feature for projects
img: assets/img/12.jpg
importance: 1
category: demo
lang: en
other_languages:
  zh: /projects/multilingual-project-zh/
---
```

## 优势

- 博客文章和项目之间的一致用户体验
- 能够以多种语言提供详细的项目信息
- 为国际受众提供更好的可访问性
