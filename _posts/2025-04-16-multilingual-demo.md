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

# Multilingual Demo

This is a demonstration of the multilingual feature. This post is in English, but you can switch to Chinese using the language switcher above.

## How it works

1. Each post has a `lang` parameter in the front matter that specifies the language of the post.
2. The `other_languages` parameter contains a mapping of language codes to URLs of the same post in other languages.
3. The language switcher component displays links to the other language versions of the post.

## Creating multilingual content

To create multilingual content, you need to:

1. Create separate files for each language version of your content.
2. Add the `lang` parameter to the front matter of each file.
3. Add the `other_languages` parameter to the front matter of each file, mapping language codes to URLs.

For example, this post has the following front matter:

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

And the Chinese version has:

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

## Benefits

- Users can easily switch between languages for the same content.
- Search engines can properly index content in different languages.
- You can maintain separate URLs for each language version.
