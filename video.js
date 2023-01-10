window.addEventListener("load", start);

const video = document.querySelector("#video_file");
const stop = document.querySelector("#stop");
const play = document.querySelector("#play");

function start() {
  document.querySelector("#play").addEventListener("click", playVideo);
  document.querySelector("#stop").addEventListener("click", stopVideo);

  function playVideo() {
    console.log("play");
    if (video.paused === true) {
      video.play();
      play.style.backgroundImage = "url(images/pause-icon.png)";
    } else {
      video.pause();
      play.style.backgroundImage = "url(images/play-icon.png)";
    }
  }
  function stopVideo() {
    console.log("Stop");
    video.pause();
    video.currentTime = 0;
    play.style.backgroundImage = "url(images/play-icon.png)";
  }
}
