---
layout: post
title: Enhancing Publications with Video Previews
date: 2025-04-16
description: How to add engaging video previews to your selected papers
tags: demo video publications
categories: tutorials
lang: en
other_languages:
  zh: /blog/2025/video-preview-demo-zh/
---

# Enhancing Publications with Video Previews

In this for, I have added the feature of rendering video previews to your selected papers. This creates an engaging and dynamic way to showcase your research at a glance.

## How Video Previews Work

When a visitor browses your selected publications, they'll see an autoplay video preview that gives a quick visual overview of your paper. This is particularly effective for research that involves visual elements, user interfaces, or interactive systems.

Here's how some of my selected papers appear with video previews:

{% include selected_papers.liquid %}

## How to Add Video Previews to Your Papers

Adding video previews to your publications is straightforward. In your BibTeX entries (typically in `_bibliography/papers.bib`), you need to add two key elements:

1. Mark the paper as selected by adding `selected={true}`
2. Add a video preview by including `preview={YourPaperName.mp4}`

Here's an example of a BibTeX entry with video preview:

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

## Video Requirements and Tips

For optimal results with video previews:

1. **Format**: Create MP4 files for best compatibility
2. **Duration**: Keep videos short (5-15 seconds) to quickly convey the key visual aspects
3. **Size**: Optimize file size to ensure fast loading
4. **Content**: Focus on the most visually interesting aspects of your research
5. **No Audio**: The videos play muted, so visual content is key
6. **Fallback Image**: The system automatically uses a JPG with the same name as fallback

## File Organization

Place your video preview files in the `/assets/video/publication_preview/` directory. The system will automatically look for them there.

## Benefits of Video Previews

Adding video previews to your selected papers offers several advantages:

- **Increased Engagement**: Visitors are more likely to notice and explore papers with dynamic content
- **Better Understanding**: Complex concepts can be quickly conveyed visually
- **Professional Appearance**: Creates a modern, interactive showcase of your research
- **Differentiation**: Stands out from traditional static publication lists

By implementing video previews for your key publications, you can create a more engaging and informative academic website that effectively showcases your research contributions.
