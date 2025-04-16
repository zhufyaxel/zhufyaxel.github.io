# al-folio

<div align="center">

[![Preview](readme_preview/al-folio-preview.png)](https://alshedivat.github.io/al-folio/)

**A simple, clean, and responsive [Jekyll](https://jekyllrb.com/) theme for academics.**

---

[![deploy](https://github.com/alshedivat/al-folio/actions/workflows/deploy.yml/badge.svg)](https://github.com/alshedivat/al-folio/actions/workflows/deploy.yml)
[![GitHub release](https://img.shields.io/github/v/release/alshedivat/al-folio)](https://github.com/alshedivat/al-folio/releases/latest)
[![GitHub license](https://img.shields.io/github/license/alshedivat/al-folio?color=blue)](https://github.com/alshedivat/al-folio/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/alshedivat/al-folio)](https://github.com/alshedivat/al-folio)
[![GitHub forks](https://img.shields.io/github/forks/alshedivat/al-folio)](https://github.com/alshedivat/al-folio/fork)

</div>

## Enhanced Video Support

This fork of [al-folio](https://github.com/alshedivat/al-folio) adds robust video support with the following features:

### Video as Publication Previews

You can now use videos as previews for your publications, providing a more dynamic way to showcase your research. Videos automatically:

- Play on hover with autoplay, muted, and loop attributes
- Have fallback poster images (generated from the video)
- Feature a floating player when clicked for better viewing

### Implementation Details

The video preview system includes:

1. **Enhanced Video Template**: The `_includes/video_preview.liquid` template supports multiple source formats and fallback options
2. **Floating Video Player**: Click on any video to open it in a full-screen floating player
3. **Fallback Support**: Automatically shows a poster image if the video fails to load
4. **Responsive Design**: Works well on both desktop and mobile devices

### Usage Example

To use a video as a preview in your publication entry, add the `video` field to your BibTeX entry:

```bibtex
@inproceedings{example2023,
  title={Example Research Paper},
  author={Researcher, A.},
  booktitle={Proceedings of Example Conference},
  year={2023},
  video={assets/video/publication_preview/example.mp4}
}
```

### Video Processing Tools

Two utility scripts are included to help prepare videos:

1. `convert-video.sh`: Converts videos to web-compatible format
2. `generate-poster.sh`: Creates poster images from videos

## Layout Differences from Original al-folio

This fork includes several layout improvements:

1. **Enhanced Media Support**: Better handling of videos and images with responsive layouts
2. **Floating UI Elements**: Interactive elements like the video player that improve user experience
3. **Docker Compatibility**: Improved media serving in Docker environments with proper MIME types
4. **Fallback Mechanisms**: Graceful degradation when media can't be loaded
5. **Optimized Loading**: Better resource loading strategies for media-heavy pages

These changes maintain the clean aesthetic of al-folio while providing more dynamic content options.

## Original al-folio Documentation

For information about the original theme features, installation, customization, and more, please refer to the [original al-folio repository](https://github.com/alshedivat/al-folio).

## License

The theme is available as open source under the terms of the [MIT License](https://github.com/alshedivat/al-folio/blob/master/LICENSE).

Originally, **al-folio** was based on the [\*folio theme](https://github.com/bogoli/-folio) (published by [Lia Bogoev](https://liabogoev.com) and under the MIT license). Since then, it got a full re-write of the styles and many additional cool features.
