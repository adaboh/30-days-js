//!
setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour]");
const minsHand = document.querySelector("[data-mins]");
const secsHand = document.querySelector("[data-secs]");

function setClock() {
  function removeTransition(handRatio, ele) {
    if (handRatio === 0) {
      ele.classList.add("no-transition");
    } else {
      ele.classList.remove("no-transition");
    }
  }
  const currentDate = new Date();

  const secsRatio = currentDate.getSeconds() / 60;
  const minsRatio = (secsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minsRatio + currentDate.getHours()) / 12;
  setRotation(secsHand, secsRatio);
  setRotation(minsHand, minsRatio);
  setRotation(hourHand, hoursRatio);
  removeTransition(secsRatio, secsHand);
  removeTransition(minsRatio, minsHand);
  removeTransition(hoursRatio, hourHand);
}

function setRotation(ele, ratio) {
  ele.style.setProperty("--hand-rotation", ratio * 360);
}
setClock();
