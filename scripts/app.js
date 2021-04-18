//! Javascript Array

const data1 = ["car", "bike", "car", "bus", "bike", "train", "car", "bus", "bike", "bus", "car", "car"]

const dataZ = data1.reduce((obj, item) =>{
if(!obj[item]){
   obj[item] = 0
}
obj[item]++
return obj
}, {})
console.log(dataZ)

/* //@ Array Methods that modify the original array are known as mutator methods, and methods that return a new value or representation are known as accessor methods.
 */

//* isArray()
/* let teams = ["lfc", "man u", "ars", 'fcb']
Array.isArray(teams) //true
typeof(teams) */ // returns object is isArray() is usefully in distinguishing between object and array

let teams = [
  "lfc",
  "man u",
  "ars",
  "fcb",
]; /* lfcPlayers.fill("Mpabe");
console.log(lfcPlayers) */ /* let lfcPlayers = ["keita", "ox", "hendo", "vvd", "origi"];
console.log(lfcPlayers.sort()) */ /* let numbers = [15,4, 17, 13, 8, 24, 3 ]

const sortNumberically = (a,b)=>{
  return a-b
  // return a-b //use this for descending 
}
// console.log(numbers.sort(sortNumberically)) */ /* let epl = ["liv", "man u", "man city"];
let liga = ["barca", "atm", "real madrid"]; */ /* let ucl = epl.concat(liga)
console.log(ucl) */ /* console.log(epl.join("_"))
console.log(epl.join("*")) */ //*fill()  - replaces all the elements in an array with a static value //[("Mpabe", "Mpabe", "Mpabe", "Mpabe", "Mpabe")]; //*sort() - sorts elements based on the first character //Since sort() is based on the first unicode character, it will sort uppercase items before lowercase //* sorting numbers out numberically with sort method //*concat() - merges two or more arrays into one array //* join() - converts all element of an array into a new string

// //* pop() - removes last element in an array

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
/* lfcPlayers.reverse()[("origi", "vvd", "hendo", "haland", "keita") */ //* slice() - copies a portion of an array into a new array

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

/* const movies = [
  {
    title: "Amadeus",
    score: 75,
    year: 2013,
  },
  {
    title: "Stand By Me",
    score: 95,
    year: 2086,
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
]; */

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
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];


const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
//* 1. Filter the list of inventors for those who were born in the 1500's
const fifteens = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);
//! console.table(fifteens);
// Array.prototype.map()
//* 2. Give us an array of the inventors first and last names
/* const fullNames = inventors.map((inventor) => {
  return `${inventor.first}  ${inventor.last}`;
});
 console.table(fullNames); */

// Array.prototype.sort()
//* 3. Sort the inventors by birthdate, oldest to youngest
// const orderd = function(a, b){
//   return a.year - b.year
// }
// console.log(orderd)

/* let numbers = [1, 21,13,-4, 5, 7, 14, 18, 14]

const sortNos = numbers.sort(function(a,b){
  // if(a > b){
  //   return 1
  // } else {
  //   return -1
  // }
  //! conditional if
  return (a > b)? 1: -1
}) */

// console.table(sortNos)

/* const ordered = inventors.sort((a,b)=>{
  return a.year - b.year
})
console.table(ordered) */

// Array.prototype.reduce()
//* 4. How many years did all the inventors live all together?
/* const numbers = [1,2,3, 0,-4]
const sum = numbers.reduce(function(total,num){
  return total + num
},2)  // 2 is the initial value for accumulator
console.log(sum) */

/* const totalage = inventors.reduce(function (total, inventor) {
  return total + (inventor.passed - inventor.year);
}, 0); */
// console.log("totalage for all inventors is ", totalage);

//* 5. Sort the inventors by years lived
// console.table(inventors);
// const yearsLived = inventors.sort(function (a, b) {
//   let lastInventor = a.passed - a.year;
//   let nextInventor = b.passed - b.year;
//   return nextInventor - lastInventor;
// });
// console.table(yearsLived);

//* 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/* 
const category = document.querySelector(".mw-category");

const links = Array.from(category.querySelectorAll("a"));
//or 
links = [...category.querySelectorAll("a")]

const de = links.map((link) => link.textContent); 
de.filter(streetName => streetName.includes("de") )

*/

//* 7. sort Exercise
// Sort the people alphabetically by last name
// console.table(people)
const sortLastNames = people.sort(function(lastOne,nextOne){
  const [aLast, aFirst] = lastOne.split(", ")
  const [bLast, bFirst] = nextOne.split(", ")
  return (aLast > bLast)? 1: -1
})

// console.table(sortLastNames)



//* 8. Reduce Exercise
// Sum up the instances of each of these
// console.table(data)
const data = ["car", "car", "truck", "truck", "bike", "walk", "car", "van", "bike", "walk", "car", "van", "car", "truck"];

const trasportation = data.reduce(function(obj, item){
  if(!obj[item]){
    obj[item] = 0
  }
  obj[item]++
  return obj
},{})
// console.log(trasportation)

