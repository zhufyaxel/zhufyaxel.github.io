// Initialize video handling
$(document).ready(function () {
  // Create a floating video player overlay
  $("body").append(`
    <div id="floating-video-overlay">
      <div id="floating-video-container">
        <video id="floating-video" controls autoplay loop></video>
        <button id="close-floating-video">&times;</button>
      </div>
    </div>
  `);

  // Style the floating video player
  $("<style>")
    .text(
      `
      #floating-video-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.85);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      #floating-video-container {
        position: relative;
        width: 80%;
        max-width: 1200px;
      }
      #floating-video {
        width: 100%;
        height: auto;
        border-radius: 4px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      }
      #close-floating-video {
        position: absolute;
        top: -40px;
        right: -40px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s;
      }
      #close-floating-video:hover {
        background-color: rgba(255, 255, 255, 0.4);
      }
    `
    )
    .appendTo("head");

  // Handle click on video container
  $(".video-container[data-zoomable]").on("click", function (e) {
    // Prevent the default click behavior which would pause/play the video
    e.preventDefault();

    // Find the video inside this container
    const videoElement = $(this).find("video")[0];

    if (!videoElement) return;

    // Get the video source
    const videoSrc = videoElement.currentSrc || videoElement.src;

    if (!videoSrc) return;

    // Set the source for the floating video
    const floatingVideo = $("#floating-video")[0];
    floatingVideo.src = videoSrc;

    // Show the overlay
    $("#floating-video-overlay").addClass("visible");

    // Start playing the video
    floatingVideo.play();
  });

  // Also handle clicks on the fallback images
  $(".video-fallback").on("click", function (e) {
    e.preventDefault();

    // Get the video path from the data attribute
    const videoPath = $(this).data("video-path");

    if (!videoPath) return;

    // Set the source for the floating video
    const floatingVideo = $("#floating-video")[0];
    floatingVideo.src = videoPath;

    // Show the overlay
    $("#floating-video-overlay").addClass("visible");

    // Start playing the video
    floatingVideo.play();
  });

  // Close the floating video when the close button is clicked
  $("#close-floating-video").on("click", function () {
    $("#floating-video-overlay").removeClass("visible");
    setTimeout(function () {
      $("#floating-video")[0].pause();
    }, 300);
  });

  // Also close when clicking outside the video
  $("#floating-video-overlay").on("click", function (e) {
    if (e.target === this) {
      $(this).removeClass("visible");
      setTimeout(function () {
        $("#floating-video")[0].pause();
      }, 300);
    }
  });

  // Ensure videos are properly loaded in Docker environments
  $("video").each(function () {
    // Force the browser to recognize the video by reloading it
    const video = $(this)[0];
    const src = $(this).attr("src");

    // Add a timestamp parameter to bypass cache
    if (src && !src.includes("?")) {
      const newSrc = src + "?t=" + new Date().getTime();
      $(this).attr("src", newSrc);
    }

    // Add error handling
    $(this).on("error", function () {
      console.error("Video failed to load:", src);
      // Try to reload with explicit type
      $(this).attr("type", "video/mp4");

      // If still failing, replace with a message
      $(this).on("error", function () {
        $(this).replaceWith('<div class="video-error">Video could not be loaded</div>');
      });
    });
  });

  // Handle keyboard events for the floating video
  $(document).keydown(function (e) {
    if (e.key === "Escape" && $("#floating-video-overlay").hasClass("visible")) {
      $("#floating-video-overlay").removeClass("visible");
      setTimeout(function () {
        $("#floating-video")[0].pause();
      }, 300);
    }
  });
});
