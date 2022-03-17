function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return;

  audio.play();
  audio.currentTime = 0;
  key.classList.add("playing");
}

window.addEventListener("keydown", playSound);

const keyWrap = document.querySelectorAll(".key__wrap");

function removePlaying() {
  if (this.classList.contains("playing")) {
    this.classList.remove("playing");
  }
}
keyWrap.forEach(function (key) {
  key.addEventListener("transitionend", removePlaying);
});
//!alternative
// keyWrap.forEach((key)=>{
//   key.addEventListener("transitionend", (e)=>{
//     key.classList.remove("playing")
//   })
// })

keyWrap.forEach((key) => {
  const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);

  key.addEventListener("click", (e) => {
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  });
});
