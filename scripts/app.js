const panels = document.querySelectorAll(".panel")

function toggleOpen(){
  this.classList.toggle("open")
  
}

function toggleActice(e){
  this.classList.toggle("open-active")
}

panels.forEach((panel)=> panel.addEventListener("click", toggleOpen))
panels.forEach((panel)=> panel.addEventListener("click", toggleActice))

const screenWidth = window.innerWidth;
console.log("screenWidth", screenWidth)

function resizeWindow(){
  if (screenWidth < 768) {
    const msg = "💡 ➡ To have a better experience on this page, position your device horizontally. 😉";
    alert(msg);
  }
}

// if(screenWidth < 768){
//   const msg = "💡 ➡ To have a better experience on this page, position your device horizontally. 😉";
//   alert(msg)
// }

window.addEventListener("load",resizeWindow)
// window.addEventListener("resize", resizeWindow)

// console.log(window)