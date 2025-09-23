console.log('hello world !');
// cretation of variables
let name="anamika";
name="anamika";
const PI=3.14;// const value cannot be updated or assigned a new value 
//array
const arr = ["anamika",250,true,{city:"delhi",country:"india"},{skill:["python","js","c++"]}];
console.log(arr);
const numbers=[0,37,98.6,3.14,9.81,100]
const fruit=["apple","mango","banana","orange","grapes"]
const countries=["india","usa","uk","russia","china"]
const mixed=[1,2,3,"anamika",true,3.14]
console .log ("numbers:",numbers);
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
countries [0]="afghanistan";
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
 let index =countries1.indexOf("ethiopia");
 if (index!=-1){
    console.log("ethiopia is found in the list");
 } else {
    console.log("ethiopia is not found in the list");

 }
 //ternary operator
 index !=-1 
 ?console.log("ethiopia is found in the list")
 :console.log("ethiopia is not found in the list");
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

