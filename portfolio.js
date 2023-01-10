// Add an event listener listening for scroll
window.addEventListener("scroll", hide);

function hide() {
  document.querySelector("#arrowdown").classList.add("hide");
}

window.addEventListener("load", start);

const video = document.querySelector("#video_file");
const stop = document.querySelector("#stop");
const play = document.querySelector("#play");

const video2 = document.querySelector("#video_file2");
const stop2 = document.querySelector("#stop2");
const play2 = document.querySelector("#play2");

function start() {
  document.querySelector("#play").addEventListener("click", playVideo);
  document.querySelector("#stop").addEventListener("click", stopVideo);

  document.querySelector("#play2").addEventListener("click", playVideo);
  document.querySelector("#stop2").addEventListener("click", stopVideo);

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
