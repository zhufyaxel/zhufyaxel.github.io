# Video Playback Fix for Docker Environment

This document provides comprehensive instructions to fix video playback issues in Docker environments for your Jekyll website.

## Diagnosis

The error message `MEDIA_ELEMENT_ERROR: Format error` indicates that the browser in the Docker environment cannot play the video due to format compatibility issues. This can be caused by:

1. Incompatible video codec or container format
2. Incorrect MIME type configuration in the server
3. File permission issues
4. Missing video codecs in the Docker environment

## Solution Components

We've implemented several solutions to address these issues:

1. **Enhanced Video Template**: Updated `_includes/video_preview.liquid` with multiple source formats and fallback options
2. **Custom JavaScript**: Added `assets/js/video_handler.js` for better error handling and floating video player functionality
3. **Custom CSS**: Added `assets/css/video.css` for consistent styling
4. **Nginx Configuration**: Added `nginx.conf` to properly serve video files with correct MIME types
5. **Docker Configuration**: Updated `docker-compose.yml` to use Nginx as a reverse proxy
6. **Video Conversion Tools**: Added scripts to convert videos to web-compatible formats and generate poster images

## New Features

### Floating Video Player

We've implemented a floating video player that appears when you click on a video:

1. **Click to Enlarge**: Click on any video to open it in a full-screen floating player
2. **Keyboard Controls**: Press ESC to close the floating player
3. **Click Outside**: Click outside the video to close the floating player
4. **Fallback Support**: Works with both videos and fallback images

## Step-by-Step Instructions

### 1. Convert Your Videos to Web-Compatible Format

```bash
# Make the script executable if needed
chmod +x ./convert-video.sh

# Convert your video
./convert-video.sh assets/video/publication_preview/BeyondThePhone.mp4 assets/video/publication_preview/BeyondThePhone-web.mp4

# Replace the original with the web-compatible version
mv assets/video/publication_preview/BeyondThePhone-web.mp4 assets/video/publication_preview/BeyondThePhone.mp4
```

### 2. Generate Poster Images for Videos

```bash
# Make the script executable if needed
chmod +x ./generate-poster.sh

# Generate poster image
./generate-poster.sh assets/video/publication_preview/BeyondThePhone.mp4
```

### 3. Restart Docker with Nginx Configuration

```bash
# Stop existing containers
docker-compose down

# Start with new configuration
docker-compose up -d
```

### 4. Test Video Playback

Visit `./video-test.html` (accessible at http://localhost:8080/video-test.html when running locally) to test different video configurations.

## Troubleshooting

If videos still don't play after implementing these solutions:

### Check File Permissions

```bash
docker-compose exec nginx ls -la /srv/jekyll/assets/video/publication_preview/
```

Ensure files have read permissions (at least 644).

### Check MIME Type Configuration

```bash
docker-compose exec nginx nginx -T | grep mp4
```

### Convert to Alternative Formats

For maximum compatibility, consider converting your videos to WebM format as well:

```bash
ffmpeg -i BeyondThePhone.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus BeyondThePhone.webm
```

### Check Browser Console

Open your browser's developer tools (F12) and check the console for specific error messages.

## Additional Notes

- The fallback system will automatically show a poster image if the video fails to load
- The click-to-enlarge functionality should work for both videos and fallback images
- For very large videos, consider creating lower-resolution versions for preview purposes

## References

- [HTML5 Video in Docker](https://stackoverflow.com/questions/tagged/html5-video+docker)
- [FFmpeg Web Video Encoding Guide](https://trac.ffmpeg.org/wiki/Encode/H.264)
- [Nginx MIME Types Configuration](https://nginx.org/en/docs/http/ngx_http_core_module.html#types)
