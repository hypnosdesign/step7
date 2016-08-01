// ICONS
var playIcn = '<svg version="1.1" id="pbtn" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20"> <path d="M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852 c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"/>    </svg>';
var pauseIcn = '<svg version="1.1" id="Paus" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20"> <path d="M15,3h-2c-0.553,0-1,0.048-1,0.6V16.4c0,0.552,0.447,0.6,1,0.6h2c0.553,0,1-0.048,1-0.6V3.6C16,3.048,15.553,3,15,3z M7,3H5     	C4.447,3,4,3.048,4,3.6V16.4C4,16.952,4.447,17,5,17h2c0.553,0,1-0.048,1-0.6V3.6C8,3.048,7.553,3,7,3z"/></svg>'

var muteIcn = '<svg version="1.1" id="Sound_mute" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20"> <path d="M14.201,9.194c1.389,1.883,1.818,3.517,1.559,3.777c-0.26,0.258-1.893-0.17-3.778-1.559l-5.526,5.527 c4.186,1.838,9.627-2.018,10.605-2.996c0.925-0.922,0.097-3.309-1.856-5.754L14.201,9.194z M8.667,7.941 c-1.099-1.658-1.431-3.023-1.194-3.26c0.233-0.234,1.6,0.096,3.257,1.197l1.023-1.025C9.489,3.179,7.358,2.519,6.496,3.384 C5.568,4.31,2.048,9.261,3.265,13.341L8.667,7.941z M18.521,1.478c-0.39-0.391-1.023-0.391-1.414,0L1.478,17.108      c-0.391,0.391-0.391,1.024,0,1.414c0.391,0.391,1.023,0.391,1.414,0L18.521,2.892C18.912,2.501,18.912,1.868,18.521,1.478z"/></svg>';

var unmuteIcn = '<svg version="1.1" id="Sound" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20"><path d="M5.312,4.566C4.19,5.685-0.715,12.681,3.523,16.918c4.236,4.238,11.23-0.668,12.354-1.789	c1.121-1.119-0.335-4.395-3.252-7.312C9.706,4.898,6.434,3.441,5.312,4.566z M14.576,14.156c-0.332,0.328-2.895-0.457-5.364-2.928    	C6.745,8.759,5.956,6.195,6.288,5.865c0.328-0.332,2.894,0.457,5.36,2.926C14.119,11.258,14.906,13.824,14.576,14.156z    	 M15.434,5.982l1.904-1.906c0.391-0.391,0.391-1.023,0-1.414c-0.39-0.391-1.023-0.391-1.414,0l-1.904,1.906    	c-0.391,0.391-0.391,1.024,0,1.414C14.41,6.372,15.043,6.372,15.434,5.982z M11.124,3.8c0.483,0.268,1.091,0.095,1.36-0.388    	l1.087-1.926c0.268-0.483,0.095-1.091-0.388-1.36c-0.482-0.269-1.091-0.095-1.36,0.388l-1.087,1.926 C10.468,2.924,10.642,3.533,11.124,3.8z M19.872,6.816c-0.267-0.483-0.877-0.657-1.36-0.388l-1.94,1.061    	c-0.483,0.268-0.657,0.878-0.388,1.36c0.268,0.483,0.877,0.657,1.36,0.388l1.94-1.061C19.967,7.907,20.141,7.299,19.872,6.816z"/></svg>';

var reloadIcn = '<svg version="1.1" id="CCW" x="0px" y="0px"	 viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M0.685,10h2.372V9.795c0.108-4.434,3.724-7.996,8.169-7.996c4.515,0,8.174,3.672,8.174,8.201s-3.659,8.199-8.174,8.199	c-1.898,0-3.645-0.65-5.033-1.738l1.406-1.504c1.016,0.748,2.27,1.193,3.627,1.193c3.386,0,6.131-2.754,6.131-6.15	c0-3.396-2.745-6.15-6.131-6.15c-3.317,0-6.018,2.643-6.125,5.945V10h2.672l-3.494,3.894L0.685,10z"/></svg>';
var subtitlesIcn = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM16 28h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4v-4h4v4zm14 12H20v-4h10v4zm6-6H20v-4h16v4zm0-6H20v-4h16v4z"/></svg>'
var fullscreenIcn = '<svg version="1.1" id="Resize_full_screen" x="0px"   y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M6.987,10.987l-2.931,3.031L2,11.589V18h6.387l-2.43-2.081l3.03-2.932L6.987,10.987z M11.613,2l2.43,2.081l-3.03,2.932l2,2  l2.931-3.031L18,8.411V2H11.613z"/></svg>';

//select video elements
var vid = document.querySelector('#vid');
var controllers = document.querySelector('.controllers');
var containerBtn = document.querySelector('.buttons-container');
// Target Button
var playBtn = document.querySelector('.play');
var stopBtn = document.querySelector('.stop');
var muteBtn = document.querySelector('.mute');
var fullScreenBtn = document.querySelector('.fullscreen');
var secondsFloor = Math.floor(vid.duration);
var captions = '<track kind="captions" src="video/captions.vtt" srclang="en" default>';
var timebar = document.querySelector('.progress-bar');
var timebarContainer = document.querySelector('.bar-container');
var timeNumber = document.querySelector('.time');
var soundContainer = document.querySelector('.sound-container');
var progressSound = document.querySelector('.progress-sound');
var subtitlesBtn = document.querySelector('.subtitles');

// Append icons to DOM
playBtn.innerHTML = playIcn;
muteBtn.innerHTML = unmuteIcn;
fullScreenBtn.innerHTML = fullscreenIcn;
subtitlesBtn.innerHTML = subtitlesIcn;


// Functions

function playFnc () {

  if (vid.paused) {
    vid.play();
    playBtn.innerHTML = pauseIcn;
    intervall = window.setInterval(progressBar, 10);
  }

  else if(vid.played) {
    vid.pause();
    playBtn.innerHTML = playIcn;
    window.clearInterval(intervall);

  }

}

progressBar = function (){
  var p = (vid.currentTime/vid.duration)*100;
  timebar.style.width = p + '%';
  timeNumber.innerHTML = getTime();
    if (vid.ended) {
      playBtn.innerHTML = reloadIcn;
      clearInterval(intervall);
    }
}

getTime = function() {
  var seconds = Math.floor(vid.currentTime);
  var minutes = Math.floor(seconds/60);
  var durationsMin = Math.floor(vid.duration/60);
  var durationsSec = Math.floor(vid.duration);
  var minutes0 = '0' + minutes;
  html ="";
  if(minutes < 10){
    html += minutes0;
  } else {
    html += minutes;
  }
  html += ":";
  if ((seconds -= minutes*60) < 10) {
    html += '0' + seconds;
  } else {
    html += seconds;
  }

  html += ' / ';
  if (durationsMin < 10) {
    html += '0' + durationsMin;
  } else {
    html += durationsMin;
  }
  html += ":"
  if ((durationsSec -= durationsMin*60) < 10) {
    html += "0" + durationsSec;
  } else {
    html += durationsSec;
  }

  return html;
}

function skipTime(e) {
  var mouseX = e.pageX - timebarContainer.offsetLeft;
  var widthContainer = window.getComputedStyle(timebarContainer).getPropertyValue('width');
  widthContainer = parseFloat(widthContainer.substr(0, widthContainer.length - 2));
  vid.currentTime = (mouseX/widthContainer)*vid.duration;
  progressBar();
}
function skipSound(e) {
  var mouseX = e.pageX - soundContainer.offsetLeft;
  var widthContainer = window.getComputedStyle(soundContainer).getPropertyValue('width');
  widthContainer = parseFloat(widthContainer.substr(0, widthContainer.length));

  var vol = vid.volume = (mouseX/widthContainer);
  if (vid.volume > 0.80) {
    vid.volume = 1;
  } else if (vid.volume < 0.20){
    vid.volume = 0;
  } else {
    vid.volume += 0.20;
  }

  ps = progressSound.style.width = vol*100+'%';

  vid.muted = false;
  muteBtn.innerHTML = unmuteIcn;
  progressSound.style.display = 'block';
  console.log(vid.volume);
  console.log(ps);
}

function muteFnc () {
  if (vid.muted) {
    vid.muted = false;
    muteBtn.innerHTML = unmuteIcn;
    progressSound.style.display = 'block';
  } else {
    vid.muted = true;
    muteBtn.innerHTML = muteIcn;
    progressSound.style.display = 'none';

  }
}
ActiveSubt = function() {

        if(vid.textTracks[0].mode = "hidden"){
          vid.textTracks[0].mode = "showing";
        } else if(vid.textTracks[0].mode = "hidden"){
          vid.textTracks[0].mode = "hidden"
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
    } else {
      vid.webkitExitFullscreen();
    }
}

// Events
playBtn.addEventListener('click', playFnc, false);
muteBtn.addEventListener('click', muteFnc, false);
fullScreenBtn.addEventListener('click', fullscreenFnc, false);
timebarContainer.addEventListener('click', skipTime, false);
soundContainer.addEventListener('click', skipSound, false);
subtitlesBtn.addEventListener('click', ActiveSubt, false);
