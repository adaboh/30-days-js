//! day 3 input
const inputs = document.querySelectorAll(".container input");

function handleInput() {
  const suffix = this.dataset.sizing || "";
  const hightLight = document.querySelector(".h1");
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  hightLight.style.color = `--${this.value}`;
  // console.log(this.dataset)
}

/* 
ele.style.setProperty(pro, value), this automatically appends : to the property value and hence no need for ":"
*/

inputs.forEach((input) => {
  input.addEventListener("change", handleInput);
});

const inputColor = document.querySelector(".wrap-color");
inputColor.addEventListener("change", function () {
  const wrap = document.querySelector(".wrap");
  wrap.style.setProperty(`--${this.name}`, this.value);
});
