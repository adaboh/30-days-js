//* difference between querySelector and getElement
// const wrap = document.getElementById("wrap");

// const itemsByClassName = document.getElementsByClassName("divy");
// const itemsByQuerySelector = document.querySelectorAll(".divy");

// console.log("first console.log", itemsByClassName, itemsByQuerySelector);

//! adds new elements to the DOM
// wrap.innerHTML += `<li class="divy">New added element</li>`;

// console.log("2nd console.log", itemsByClassName, itemsByQuerySelector);

//* forEach method to add css styles

// function changeStyle(item) {
//   item.style.color = "steelblue";
//   item.style.fontSize = "2.4rem";
// }
// itemsByQuerySelector.forEach(changeStyle)
// Array.from(itemsByClassName).forEach(changeStyle) //! does not work with HTMLCollection

// document.addEventListener("click", function () {
//   for (let i = 0; i < itemsByQuerySelector.length; i++) {
//     itemsByQuerySelector[i].style.color ="orange"
//   }
// });

//  for (let i = 0; i < itemsByQuerySelector.length; i++) {
//    itemsByQuerySelector[i].style.color = "steelblue";
//  }

//@ for.. of statement application

/* for(item of itemsByQuerySelector){
  item.style.color = "blue"
}
for(item of itemsByClassName) {
  item.style.fontSize = "2rem"
} */

//  for(let i =0; i< itemsByClassName.length; i++){
//    itemsByClassName[i].style.color = "steelblue";
//    itemsByClassName[i].style.fontSize = "2rem"
//  }

//* forEach() method
// let colors = ["red", "blue", "orange", "white"]

/* colors.forEach(function (color) {
  console.log(color);
}); */

/* function print(item) {
  console.log("item is", item.textContent);
} */

// function print(color, index, array) {
//   console.log(`${color} has index ${index}`)
//   console.log(color, index, array)
// }
// colors.forEach(print)

//* Function declaration, function expression and ARROW FUNTIONS
// sum(2, 3);

//! function declaration
// function sum(a,b){
//   return a + b
// }

//! function expression : as a named function
// const sum = function add(a,b) {
//   return a + b
// }
//! function expression : as anonymous function - function has no name
// const sum = function (a,b) {
//   return a + b
// }

// console.log(sum)
// sum(2, 3);
//@ ARROW FUNTIONS
// const sum = (a, b) => {
//   return a + b;
// };

// let double = (a) => {
//   return a * a;
// };

//! arrow function with only one parameter
// let double = a => {
//   return a + a
// }

//! arrow function with no arguments : If there are no arguments, parentheses will be empty (but they should be present):
// let print = () => {
//   console.log("printed")
// }

//* Arrow function and forEach
// let colors = ["red", "blue", "grey"];
// colors.forEach(print)

//! this has an anonymous function decalaration in arrow fun.
// colors.forEach((ele) => {
//   console.log(ele)
// })

// const btn = document.querySelector(".btn");

// function print(div) {
//   item.style.color = "steelblue";
// }

// const itemsByClassName = document.getElementsByClassName("divy");
// const itemsByQuerySelector = document.querySelectorAll(".divy");

// for(let i =0; i<itemsByQuerySelector.length; i++){
//   console.log(itemsByQuerySelector[i].textContent)
// }

/* function print() {
  console.log("printed");
}
 */
// function style() {
//   this.style.color = "blue"
//   console.log(this.textContent);
// }
// itemsByQuerySelector.forEach(item => item.addEventListener("click", style))

//!forEach with a regular function expression
// itemsByQuerySelector.forEach(function(item){
//   item.addEventListener("click", style)
// })

// itemsByQuerySelector.forEach(function(item){
//   item.addEventListener("click", function(){
//     item.style.fontSize = "2rem"
//   })
// })

/* itemsByQuerySelector.forEach((item) =>
  item.addEventListener("click", function () {
    if ((item.style.color === "blue")) {
      item.style.color = "black";
    } else {
      item.style.color = "blue";
    }
  })
); */

//@  addEventlistners to NodeList elements
// for(let item of itemsByClassName){
//   item.addEventListener("click", function(){
//     item.style.color = "steelblue"
//     item.style.fontSize = "2.4rem"
//   })
// }

// for (let item of itemsByClassName) {
//   item.addEventListener("click", () => {
//     item.style.color = "steelblue";
//     item.style.fontSize = "2.4rem";
//   });
// }


const wrap = document.getElementById("wrap");
const itemsByClassName = document.getElementsByClassName("divy");
const itemsByQuerySelector = document.querySelectorAll(".divy");

colors = ["red", "blue", "orange", "grey"];

function print(item) {
  console.log("item is ", item);
}

function style() {
  this.style.color = "#5624a2";
  this.style.fontSize = "2rem";
}

// itemsByQuerySelector.forEach(function (ele) {
//   ele.addEventListener("click", () => {
//     ele.style.color = "#25ccdb";
//     ele.style.fontSize = "2.4rem";
//   });
// });

// itemsByQuerySelector.forEach(function(ele,ind){
//   ele.addEventListener('click', style)
// })

// itemsByQuerySelector.forEach(function (ele) {
//   ele.addEventListener("click", style);
// });

for(item of itemsByClassName){
  item.addEventListener("click", style)
}
