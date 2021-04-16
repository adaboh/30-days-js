//! Javascript Array

/* //@ Array Methods that modify the original array are known as mutator methods, and methods that return a new value or representation are known as accessor methods.
 */

//* isArray()
/* let teams = ["lfc", "man u", "ars", 'fcb']
Array.isArray(teams) //true
typeof(teams) */ // returns object is isArray() is usefully in distinguishing between object and array

let teams = ["lfc", "man u", "ars", "fcb"];

//* pop() - removes last element in an array

// let lfcPlayers = ["keita", "ox", "hendo", "vvd", "origi"];
/* console.log(lfcPlayers);
lfcPlayers.pop();
console.log(lfcPlayers); */

//* shift() - removes first element in an array
/* lfcPlayers.shift();
console.log("shift removes first element", lfcPlayers); */

//* push() -- adds a new element to the end of an array
/* lfcPlayers.push("Mpabbe")
console.log(lfcPlayers) */

//* unshift()  --adds a new element to the beggining
/* lfcPlayers.unshift("Haland")
console.log(lfcPlayers) */

//* splice() -method can add or remove an item from any position in an array.
//splice(index number, number of items to remove, items to add)
// let lfcPlayers = [("keita", "ox", "hendo", "vvd", "origi")];

// lfcPlayers.splice(1, 1, "haland"); // remove ox and replace with haland, replace is option
// console.log(lfcPlayers);

//*reverse() - reverses the order of elements in an array
/* lfcPlayers.reverse()[("origi", "vvd", "hendo", "haland", "keita") */ //*fill()  - replaces all the elements in an array with a static value
/* lfcPlayers.fill("Mpabe");
console.log(lfcPlayers) */
//[("Mpabe", "Mpabe", "Mpabe", "Mpabe", "Mpabe")];

//*sor() - sorts elements based on the first character
//Since sort() is based on the first unicode character, it will sort uppercase items before lowercase

/* let lfcPlayers = ["keita", "ox", "hendo", "vvd", "origi"];
console.log(lfcPlayers.sort()) */

//* sorting numbers out numberically with sort method
/* let numbers = [15,4, 17, 13, 8, 24, 3 ]

const sortNumberically = (a,b)=>{
  return b-a
  // return a-b //use this for descending 
}
console.log(numbers.sort(sortNumberically)) */

//*concat() - merges two or more arrays into one array
let epl = ["liv", "man u", "man city"];
let liga = ["barca", "atm", "real madrid"];

/* let ucl = epl.concat(liga)
console.log(ucl) */

//* join() - converts all element of an array into a new string
/* console.log(epl.join("_"))
console.log(epl.join("*")) */

//* slice() - copies a portion of an array into a new array

/* let eplWinner = epl.slice(0,1)
console.log(eplWinner) */

//* indexOf() - returns the index of the first instance of an element and -1 if the element does not exist
/* let word = "cardio"
console.log(word.indexOf("x")) */

//* lastIndexOf() - returns the index of the last instance of an element

// let states = ["ohio", 'pa', 'new york', "ohio", 'masachute']
// console.log(states.lastIndexOf("ohio"))

//? ARRAY ITERATION METHODS
/* 
Iteration methods in javascript are methods that operates on EVERY ELEMENT in an array, one at a time. These methods are closely associated with loops
*/

//* forEach()
/* let teams = ["Liverpool", "Manchester United", "Arsenals", "Manchester City", "Spurs"];
teams.forEach((team) => {
  console.log(team);
});
 */

/* let colors = ['blue', 'orange', 'purple', 'white'] 
function iterate(item, ind) {
  console.log(item, `${item} has index of`, ind)  
}
colors.forEach(iterate) */
// same as calling iterate function on each array element
// iterate(blue)
// iterate(orange)
// iterate(purple)
// iterate(white)

//! for ... of
// for(color of colors){
//   console.log("color is ", color)
// }

//! digital ocean iteration methods

//*map() this creates a new array with the result of function call on each element in the array
/* unlike forEach(), map() method must be assigned to a new variable  map() does not mutate the original array,
mutating an array simply means add or removing element from it or changing it original state which can be achieved with .push(), .pop()

What’s a mutation?
An immutable value is one that, once created, can never be changed. In JavaScript, primitive values such as numbers, strings and booleans are always immutable. However, data structures like objects and arrays are not.

By mutation I mean changing or affecting a source element. The goal is to keep the original element unchanged at all times.

    A mutation is a side effect: the fewer things that change in a program, the less there is to keep track of, which results in a simpler program.
*/
/* let fishes = ["piranha", "barracuda", "cod", "eel"];
let printFish = fishes.map((fish) => {
  console.log(`${fish} here`);
}); */

//* filter() - creates a new array with the elements that pass the result of a given test.

// let seaCreatures = ["shark", "whale", "squid", "starfish", "narwhal"];
// let filterList = seaCreatures.filter((creater) => {
//   return creater[0] === "s";
// });

// const numbers = [1, 3, 4, 45, 87, 1, 2];
// let greater4 = numbers.filter((no) => {
//   return no > 4;
// });

//* reduce() - this reduce an array to a single array

// let numbers2 = [1,3,5,7]  //16

// let sum = numbers2.reduce((acc,cv)=>{
//   return acc + cv
// })

//* find() returns the first element in an array that meets a given condition

/* let evenNos = [2,4,6,8,10,12]

let greater6 = evenNos.find(no =>{
  return no > 6
})

console.log(greater6) //8 */

//? udemy

const movies = [
  {
    title: "Amadeus",
    score: 75,
    year: 2013,
  },
  {
    title: "Stand By Me",
    score: 95,
    year: 1986,
  },
  {
    title: "Parasite",
    score: 97,
    year: 2004,
  },
  {
    title: "Alien",
    score: 59,
    year: 2018,
  },
  {
    title: "Yes & Amen",
    score: 73,
    year: 2007,
  },
  {
    title: "Nothing Hill",
    score: 93,
    year: 2006,
  },
];

/* movies.forEach((movie) => {
  console.log(`${movie.title}  ${movie.score}`);
}); */

//! map
/* let numbers = [2,3,5,6]
const doubles = numbers.map(no => no * 2)
console.log(doubles)

const titles = movies.map(movie => movie.title.toUpperCase())
console.log(titles) */

//! map exercise
/* let names = [" timothy", " sassy ", " elton john  "];
function cleanArrays(arr) {
 return arr.map((names)=>{
   return names.trim()
 }) 
} */

//! filter
/* const goodMovies = movies.filter((movie) => movie.score > 80).map((m)=> m.title).join("*")
console.log(goodMovies) */


//? wesBos
