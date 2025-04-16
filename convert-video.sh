#!/bin/bash

# This script converts videos to a web-compatible format
# Usage: ./convert-video.sh input.mp4 output.mp4

if [ $# -lt 2 ]; then
    echo "Usage: $0 input.mp4 output.mp4"
    exit 1
fi

INPUT=$1
OUTPUT=$2

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "FFmpeg is not installed. Please install it first."
    echo "On Ubuntu/Debian: sudo apt-get install ffmpeg"
    echo "On macOS with Homebrew: brew install ffmpeg"
    exit 1
fi

echo "Converting $INPUT to web-compatible format..."

# Convert to a web-compatible MP4 format
# - Using H.264 codec for video
# - Using AAC codec for audio
# - Setting a reasonable bitrate
# - Adding faststart flag for web streaming
ffmpeg -i "$INPUT" -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -c:a aac -movflags +faststart -b:v 1500k -b:a 128k "$OUTPUT"

echo "Conversion complete. Output saved to $OUTPUT"
echo "You can now replace the original video with this web-optimized version."