---
layout: post
title: 多语言演示
date: 2025-04-16
description: 多语言功能的演示
tags: demo multilingual
categories: sample-posts
lang: zh
other_languages:
  en: /blog/2025/multilingual-demo/
---

# 多语言演示

这是多语言功能的演示。这篇文章是中文的，但您可以使用上方的语言切换器切换到英文。

## 工作原理

1. 每篇文章在前置元数据中都有一个 `lang` 参数，用于指定文章的语言。
2. `other_languages` 参数包含语言代码到同一篇文章其他语言版本URL的映射。
3. 语言切换器组件显示指向文章其他语言版本的链接。

## 创建多语言内容

要创建多语言内容，您需要：

1. 为内容的每种语言版本创建单独的文件。
2. 在每个文件的前置元数据中添加 `lang` 参数。
3. 在每个文件的前置元数据中添加 `other_languages` 参数，将语言代码映射到URL。

例如，这篇文章的前置元数据如下：

```yaml
---
layout: post
title: 多语言演示
date: 2025-04-16
description: 多语言功能的演示
tags: demo multilingual
categories: sample-posts
lang: zh
other_languages:
  en: /blog/2025/multilingual-demo/
---
```

而英文版本的前置元数据为：

```yaml
---
layout: post
title: Multilingual Demo
date: 2025-04-16
description: A demonstration of the multilingual feature
tags: demo multilingual
categories: sample-posts
lang: en
other_languages:
  zh: /blog/2025/multilingual-demo-zh/
---
```

## 优势

- 用户可以轻松地在同一内容的不同语言版本之间切换。
- 搜索引擎可以正确索引不同语言的内容。
- 您可以为每种语言版本维护单独的URL。
