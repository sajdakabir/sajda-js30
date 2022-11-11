// get our elements
const  player=document.querySelector('.player');
const video=document.querySelector('.viewer');
const progress=document.querySelector('.progress');
const progressBar=document.querySelector('.progress__filled');
const toggle=document.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen =player.querySelector('.fullscreen');


// build out function

function togglePlay(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

function updateButton(){
const icon=this.paused ? '►' : '❚ ❚'
toggle.textContent=icon;
}
function skip(){
    console.log(this.dataset.skip);
    video.currentTime +=parseFloat(this.dataset.skip);
}
function handleRangeUpdate(){
video[this.name]=this.value;
}

function handleProgress(){
    const percent=(video.currentTime / video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}
function scrub(e){
    const scrubTime=(e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime=scrubTime;
}
function toggleFullScreen() {
	if (!document.fullscreenElement) {
      player.requestFullscreen();
      fullscreenBtn.querySelector('i').classList.remove('fa-expand')
      fullscreenBtn.querySelector('i').classList.add('fa-compress')
  } else {
      document.exitFullscreen(); 
      fullscreenBtn.querySelector('i').classList.add('fa-expand')
      fullscreenBtn.querySelector('i').classList.remove('fa-compress')

  }
}
function controlFromKeyBoard(e){
    
	// toggle fullscreen with the f key
	if(e.keyCode === 70) toggleFullScreen(); 

    // pause or play with the space key
	if(e.keyCode === 32) togglePlay();

}
// HOOk up the event listners
video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress);
video.addEventListener('dblclick', toggleFullScreen);
toggle.addEventListener('click',togglePlay);
skipButtons.forEach(button  => 
    button.addEventListener('click',skip)
);
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));

let mousedown=false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e)=> mousedown && scrub(e));
// progress.addEventListener('mousemove',(e)=>{
//     if(mousedown){
//         scrub(e);
//     }
// });
progress.addEventListener('mousedown',() => mousedown=true);;
progress.addEventListener('mouseup',() => mousedown=false);;

fullscreen.addEventListener('click', toggleFullScreen);
window.addEventListener('keydown', controlFromKeyBoard);