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

# Multilingual Project Demo

This is a demonstration of the multilingual feature for projects. This project page is in English, but you can switch to Chinese using the language switcher above.

## Project Overview

This is a sample project that demonstrates how to create multilingual project pages. The same approach used for blog posts can be applied to projects.

## Implementation Details

To create multilingual project pages, you need to:

1. Create separate files for each language version of your project.
2. Add the `lang` parameter to the front matter of each file.
3. Add the `other_languages` parameter to the front matter of each file, mapping language codes to URLs.

For example, this project has the following front matter:

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

And the Chinese version has:

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

## Benefits

- Consistent user experience across blog posts and projects
- Ability to provide detailed project information in multiple languages
- Better accessibility for international audiences
