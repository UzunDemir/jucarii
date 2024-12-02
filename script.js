document.addEventListener("DOMContentLoaded", () => {
  const callIcon = document.getElementById("call-icon");
  const videoContainer = document.getElementById("video-container");
  const mainVideo = document.getElementById("main-video");
  const cornerVideo = document.getElementById("corner-video");

  // Эмуляция звонка
  setTimeout(() => {
    callIcon.style.display = "none";
    videoContainer.style.display = "block";

    // Установка видео (замените ссылки на ваши видеофайлы)
    mainVideo.src = "https://goods-vod.kwcdn.com/goods-video/18e526c8d03123f14de2cbd14066eb53e487e856.f30.mp4";
    cornerVideo.src = "https://github.dev/UzunDemir/jucarii/blob/main/Untitled%20video(1).mp4";
  }, 3000); // 3 секунды
});
