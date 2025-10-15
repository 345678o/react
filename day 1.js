console.log('hello world !');
// cretation of variables
// let name = "anamika";
// name = "anamika";
// const PI = 3.14; // const value cannot be updated or assigned a new value
//array
const arr = ["anamika",250,true,{city:"delhi",country:"india"},{skill:["python","js","c++"]}];
console.log(arr);
const numbers=[0,37,98.6,3.14,9.81,100]
const fruit=["apple","mango","banana","orange","grapes"]
const countries=["india","usa","uk","russia","china"]
const mixed=[1,2,3,"anamika",true,3.14]
console.log("numbers:", numbers);
console.log("fruit:",fruit);
console.log("countries:",countries);
console.log("mixed:",mixed);
console.log(numbers.length);
console.log(fruit.length);
console.log(countries.length);
console.log(mixed.length);
let js="javascript";
// creating an array using split 
const charInJavaScript=js.split("");
console.log(charInJavaScript);
const fruits="apple,mango,banana,orange,grapes";
const fruitList=fruits.split(",");
console.log(fruitList);
let text="I love javascript";
const word = text.split(" ");
console.log(word);
// accessing array items using index
console.log(numbers[0]);
console.log(fruit[1]);
console.log(countries[2]);
console.log(mixed[3]);
console.log(fruit[fruit.length-1])
console.log(numbers[numbers.length-1]);
//modfiying array element
const countries1 = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
countries[0] = "afghanistan";
let lastIndex=countries.length-1;
countries[lastIndex]="srilanka";
console.log(countries);
//methods to manipulate array
const eightEmptyValues = Array(8)
console.log(eightEmptyValues.fill('X'));
//concatenate two arrays 
const firstList=[1,2,3];
const secondList=[4,5,6];
const thirdList=firstList.concat(secondList);
console.log(thirdList); 
//length of an array
console.log(countries.length);
//index of an element in an array
console.log(numbers.indexOf(3.14));
console.log(numbers.indexOf(0));
 // if else statments 
let index = countries1.indexOf("ethiopia");
if (index !== -1) {
  console.log("ethiopia is found in the list");
} else {
  console.log("ethiopia is not found in the list");
}
//ternary operator
index !== -1
  ? console.log("ethiopia is found in the list")
  : console.log("ethiopia is not found in the list");
//last index of an element in an array
   const numbers2=[1,2,3,4,5,3,6,7,8,9,3];   
   console.log(numbers2.lastIndexOf(3));
   console.log(numbers2.lastIndexOf(0));
   console.log(numbers2.includes(0))//item exist in array or not 
   console.log(numbers2.includes(3))
//checking array
   console.log(Array.isArray(numbers2));
   console.log(Array.isArray("anamika"));
   //converting array to string 
   const s=[1,2,3,45,5]
   console.log(s.toString());
   //joining array elements
   console.log(s.join())
    console.log(s.join("*"))
    //slice array elements
    console.log(s.slice(0))
      console.log(s.slice(0,3))
//splice array elements
const months=['jan','feb','march','april','june','july'];
console.log(months.splice(1,2,'march'));
//adding element to an array using push
months.push('august');
console.log(months);
months.pop();
console.log(months);
//remove element from an array using shift
months.shift();//remove first element
console.log(months);
//add an element from beginning
months.unshift('january');
console.log(months);
//reverse the order  of an array 
months.reverse()
console.log(months);
//sort array elements
const arr1=[3,5,7,1,4,6,8,2]
arr1.sort();
console.log(arr1);
//array of arrays
const frontEnd=['html','css','js','react'];
const backEnd=['node','express','mongodb'];
const fullStack=[frontEnd,backEnd];
console.log(fullStack);
console.log(fullStack.length);
console.log(fullStack[0]);
console.log(fullStack[1]);
console.log(fullStack[0][0]);
//conditional statments
let a=5;  
if (a > 0) {
  console.log(`${a} is a positive number`)
}
let ifraining=true;
if (ifraining){
    console.log("you need a rain coat");
}
let b=-10; 
if (b > 0) {
  console.log(`${b} is a positive number`)
}
else{
      console.log(`${b} is a negative number`)
}
//if else if else
let c=0;
if (c > 0) {
  console.log(`${c} is a positive number`)
}     
else if (c < 0) {
      console.log(`${c} is a negative number`)
}
else {

      console.log(`${c} is zero`)
}
//switch case
let weather=prompt('how is the weather  today ?')
let weath= weather.toLowerCase()
switch(weath){
   case "rainy":
      console.log("you need a rain coat");
      break;
   case "cloudy":
      console.log("it might be cold, you need a jacket");
      break;
   case "sunny":
      console.log("go out freely");
      break;
   default:
      console.log("no need for rain coat");
      break;

}
//LOOPS
for (let i=0;i<=5;i++){
   console.log(i);
}
let sum = 0
for (let i = 0; i < 101; i += 2) {
  sum += i
}

console.log(sum)

// or another way

let total = 0
for (let i = 0; i < 101; i++) {
  if (i % 2 === 0) {
    total += i
  }
}
console.log(total)
// reverse an array
const nums = [1, 2, 3, 4, 5]
const lastindex = nums.length - 1
const newArray = []
for (let i = lastindex; i >= 0; i--) {
  newArray.push(nums[i])
}

console.log(newArray)
//WHILE LOOP
let count1=0
   while(count1>0){
      console.log(count1)
      count1--
}
//do while loop
let count2=0
do{
   console.log(count2)
   count2++;
   
}while (count2<11)
   //for of loop
   const numbers3=[1,2,3,4,5]
   for (const num of numbers3){
      console.log(num);
   }
//foreach loop
  // const country = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
countries.forEach((country, i, arr) => {
  console.log(i, country.toUpperCase())
})
//FOR IN LOOP 
const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
}
for (const key in user) {
   console.log(key, user[key])
}
//Interrupting a loop and skipping an item
//break 
for (let i=0;i<=5;i++){
  if (i === 3) {
      break;
   }
   console.log(i);
}
//continue 
for (let i=0;i<=5;i++){
  if (i === 3) {
      continue;

   }
}
// console.log(i);
//scope
//window scope
a="javascript"
b=10
// function letsLearnScope() {
//   console.log(a, b);
//   if (true) {
//     console.log(a, b);
//   }
// }
// console.log(a, b);
//global scope
let x="javascript"
let y=10
// global scope example
function letsLearnScopeGlobal(){
  console.log(x, y); // uses global x and y
  if(true){
    x = 'python'; // modifies global x
    y = 20;       // modifies global y
    console.log(x, y);
  }
  console.log(x, y);
}
letsLearnScopeGlobal();
console.log(x, y);
// local/block scope example
function letsLearnScopeLocal(){
  // x and y are not defined here
  if(true){
    let x = 'python';
    let y = 20;
    console.log(x, y); // accessible here
  }
  // console.log(x, y); // would cause ReferenceError
}
letsLearnScopeLocal();
// console.log(x, y); // would cause ReferenceError
// block scope with var
// function letsLearnScopeBlock() {
//   var gravity = 9.81;
//   console.log(gravity);
// }
// console.log(gravity); // Uncaught ReferenceError: gravity is not defined

if (true) {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 3
//  object 
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .slice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.slice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())
//OBJECT METHODS
const copyperson=Object.assign({},person)
console.log(copyperson);
const keys=Object.keys(copyperson)
console.log(keys);
const values=Object.values(copyperson)
console.log(values);
const entries=Object.entries(copyperson)
console.log(entries);// to get the keys and values in array form
//functions
//declaration function 
// function functionName() {
//   //function body
// }



// function without parameter
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}

addTwoNumbers() // a function has to be called by its name to be executed
// function returning values
function printFullName() {
  let firstName = 'Asabeneh'
  let lastName = 'Yetayeh'
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}
console.log(printFullName())
// function with parameters
function areaOfCircle(r) {
   let area = Math.PI * r * r
   return area
}
console.log(areaOfCircle(10)) // should be called with one argument

function square(number) {
  return number * number
}

console.log(square(10)) // 100
// function with two parameters
function sumTwoNumbers(numOne, numTwo) {
   let sum = numOne + numTwo  
   return sum
}
console.log(sumTwoNumbers(10, 20)) // 30
// function with three parameters
function sumarrayvalues(arr) {
   let sum=0;
   for (let i=0;i<arr.length;i++){
      sum+=arr[i];
   }
   return sum;
}
const numbers4=[1,2,3,4,5]
console.log(sumarrayvalues(numbers4));
//Unlimited number of parameters in arrow function
const sumAllNumbers = (...args) => {
   let sum = 0
   for (const num of args) {
       sum += num
   }  
   return sum
}
console.log(sumAllNumbers(1, 2, 3, 4, 5, 6)) // 21
console.log(sumAllNumbers(10, 20, 30)) // 60
//anonymous function
// const anonymousFun = function () {
//   console.log(
//     'I am an anonymous function and my value is stored in anonymousFun'
//   )
// }

//Expression Function
// const square2 = function (n) {
//   return n * n
// }
//self invoking functions  
;(function (n) {
  console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function (n) {
  return n * n
})(10)

console.log(squaredNum)
//ARROW FUNCTION
//Arrow function uses arrow instead of the keyword function to declare a function. L
function squares2(n) {
  return n * n
}
console.log(squares2(2)) // 4
//is the same as
const squareArrow = (n) => {
  return n * n
}
console.log(squareArrow(2)) // 4
 // 4
//function with default parameters
// function greetings(name = 'Peter') {
//   let message = `${name}, welcome to 30 Days Of JavaScript!`
//   return message
// }
//higher order function
//callback function 
const callback = (n) => {
  return n ** 2
}

function cube(callback, n) {
  return callback(n) * n
}
console.log(cube(callback, 3))
//Returning function
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }

  return doSomething
}
console.log(higherOrder(2)(3)(10))
//setting time
//set interval
// function sayHello()  {
//   console.log('hello')
// }
//setInterval(sayHello,1000)// it will print hello every second
//sethiTimeout(sayHello, 3000) // it will print hello after 2 seconds
//clearTimeout(sayHello);

// Destructuring and Spreading
//destructuring arrays
// const numbers5 = [1, 2, 3]
 const countries2 = ['Finland', 'Sweden', 'Norway']
 // accessing array items using loop
 for (const number of numbers) {
  console.log(number)
}

for (const country of countries2) {
  console.log(country)
}
// accessing array items using manually