//select video
var vid = document.querySelector('#vid');

// Set Button
var playBtn = document.querySelector('.play');
var stopBtn = document.querySelector('.stop');
var muteBtn = document.querySelector('.mute');
var fullScreenBtn = document.querySelector('.fullscreen');
var secondsFloor = Math.floor(vid.duration);


// Functions

function playFnc () {
  vid.play();
  console.log(secondsFloor);
}

function stopFnc () {
  vid.pause();
}

function muteFnc () {
  if (vid.muted) {
    vid.muted = false;
  } else {
    vid.muted = true;
  }
}

function fullscreenFnc () {
  if(vid.requestFullscreen) {
      vid.requestFullscreen();
    } else if(vid.mozRequestFullScreen) {
      vid.mozRequestFullScreen();
    } else if(vid.webkitRequestFullscreen) {
      vid.webkitRequestFullscreen();
    } else if(vid.msRequestFullscreen) {
      vid.msRequestFullscreen();
    }
}

// Events
playBtn.addEventListener('click', playFnc, false);
stopBtn.addEventListener('click', stopFnc, false);
muteBtn.addEventListener('click', muteFnc, false);
fullScreenBtn.addEventListener('click', fullscreenFnc, false);
