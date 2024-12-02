document.addEventListener("DOMContentLoaded", () => {
  const callIcon = document.getElementById("call-icon");
  const videoContainer = document.getElementById("video-container");
  const mainVideo = document.getElementById("main-video");
  const cornerVideo = document.getElementById("corner-video");

  setTimeout(() => {
    callIcon.style.display = "none";
    videoContainer.style.display = "block";

    // Установка видео
    mainVideo.src = "https://goods-vod.kwcdn.com/goods-video/18e526c8d03123f14de2cbd14066eb53e487e856.f30.mp4";
    cornerVideo.src = "https://github.dev/UzunDemir/jucarii/blob/main/Untitled%20video(1).mp4"";

    mainVideo.play().catch((err) => console.error("Ошибка воспроизведения основного видео:", err));
    cornerVideo.play().catch((err) => console.error("Ошибка воспроизведения углового видео:", err));
  }, 3000);
});
