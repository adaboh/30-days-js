// console.log("Welcome to 100 days of js")

const secondHand = document.querySelector(".hand--secs");
const minsHand = document.querySelector(".hand--mins");
const hourHand = document.querySelector(".hand--hour");
const hand = document.querySelector(".hand");

//! Time query Selections
const timeHour = document.querySelector(".clock-time--hour");
const timeMins = document.querySelector(".clock-time--min");
const timeSecs = document.querySelector(".clock-time--secs");

//* Digital Time funtion -finction Expression
const setDigitalTime = function (hour, minute, second) {
  timeHour.textContent = pad(hour);
  timeMins.textContent = pad(minute);
  timeSecs.textContent = pad(second);
};

function setDate() {
  function stopTransiton(degree, typeOfHand) {
    if (degree == 90) {
      ree;
      typeOfHand.classList.add("no-transition");
    } else {
      typeOfHand.classList.remove("no-transition");
    }
  }
  const now = new Date();
  //! get current time for all hands
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hour = now.getHours();

  // console.log(hour);

  //! set degrees for all hands
  const secondsDegree = (seconds / 60) * 360 + 90;
  const minsDegree = (mins / 60) * 360 + (seconds / 60) * 6 + 90;

  const hourDegree = (hour / 12) * 360 + (mins / 60) * 30 + 90;

  // console.log("secondsDegree", secondsDegree)
  // console.log("hour", hourDegree)

  //! stop transition at 60 - this is a glitch in transition of all hands when rotation is from 444deg(59s to 0degs)
  stopTransiton(secondsDegree, secondHand);
  stopTransiton(minsDegree, minsHand);
  stopTransiton(hourDegree, hourHand);

  //! set transform of all hands
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minsHand.style.transform = `rotate(${minsDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

  //call setDigitalTime funtion
  setDigitalTime(hour, mins, seconds);
}

//? adds 0 to seconds less than 0
function pad(n) {
  return n < 10 ? "0" + n : n;
}

setDate();
// calling setDate() ensures the clock hands are set when the page loads for the first time
setInterval(setDate, 1000);
// prevents showing initial stage of the clock during reload
