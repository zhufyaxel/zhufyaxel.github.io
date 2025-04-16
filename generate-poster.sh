#!/bin/bash

# This script generates a poster image from a video file
# Usage: ./generate-poster.sh input.mp4

if [ $# -lt 1 ]; then
    echo "Usage: $0 input.mp4"
    exit 1
fi

INPUT=$1
OUTPUT="${INPUT%.*}.jpg"

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "FFmpeg is not installed. Please install it first."
    echo "On Ubuntu/Debian: sudo apt-get install ffmpeg"
    echo "On macOS with Homebrew: brew install ffmpeg"
    exit 1
fi

echo "Generating poster image from $INPUT..."

# Extract a frame from the middle of the video
ffmpeg -i "$INPUT" -ss 00:00:03 -frames:v 1 "$OUTPUT"

echo "Poster image generated: $OUTPUT"