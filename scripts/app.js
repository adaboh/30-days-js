//* Day 1 - JS Drum Kit

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  //! add playing classlist
  key.classList.add("playing");
}

function removePlaying(e) {
  // if (e.propertyName !== "box-shadow") return;
  // this.classList.remove("playing")

  if(this.classList.contains("playing")){
    this.classList.remove("playing")
  } //* this works here instead of e.classList...
}

window.addEventListener("keydown", playSound);
// const testKey = document.querySelector(`div[data-key='65']`);
// const testKeyId = document.getElementById("keywrap")

const keyWrap = document.querySelectorAll(".key__wrap");

keyWrap.forEach( (key) =>{
  key.addEventListener("transitionend", removePlaying);
});

keyWrap.forEach(function(key){
  key.addEventListener("click", ()=>{
    const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`)
    audio.play();
    audio.currentTime = 0;
    key.classList.add("playing")
  })
})

/* const audio = document.querySelector(`audio[data-key="TashaLayton"]`);
const key65 = document.querySelector("audio[data-key='83']") */;

// const key65 = document.querySelector("")


