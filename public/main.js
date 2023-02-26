// export default function myFunction(a, b){
//      return a+b;
// }
// exporting
export const myValue = 42;
export function myFunction() {
  console.log('Hello, world!');
}


export function multiply(num1,num2){
  return num1 * num2 ; 
}

document.getElementById('section-hero').innerHTML = myFunction(3, 10);

function myBtn(){
    document.getElementById('spanBtn').innerHTML = "Joshua Pogi"
}

export const myFriends = {
  name:'Antonio',
  age:21,
  location:"Pampanga"
};


$("p").hide()

//show
$("#show").click(
    function(){
    $("p").show();
  }
);

// Jquery
//Hide and show the element
$(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });

  $(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });


//jquery toggler(hide and show)
  $(function(){
    $("#myBtn1").click(function(){
        $("#name").toggle();
    });
  });

  console.log('Hello')
  console.warn('Hello Warning')
  console.error('Hello Error')
 
 const firstName = 'Joshua'
 console.log(firstName)

//Function and statement practice
 function myAge(age){
  if(age < 18){
    return "Minor";
  }
    else{
    return "adult";
  }
    
 }
  console.log(myAge(15))


  //Looking up for data types
  const lastName = "Santos"
  let currentAge = 22;
  console.log(typeof currentAge);
  console.log(typeof lastName);

//Concatenation  using the symbol(``)
const myName = 'Joshua Santos';
const currAge = ' 22 Years Old Student';
const myLocation = 'Pampanga';
let myInfo = `Hello Im ${myName} a ${currAge} from ${myLocation}`;
console.log(myInfo);

//Array
const myHobby = [
  'Basketball','Movies','Program'
];
myHobby.push('Swimming')
myHobby.shift()
myHobby.unshift('Sleeping')
console.log(Array.isArray(myHobby));
console.log(myHobby.indexOf("Swimming"))
 

//javascript objects
const techTools = {
    laptop: "Acer Nitro",
    mouse: "A4tech",
    keyboard:"Leaven",
    totalTech: 4,
    laptopSpecs:[
      'RTX 3050','COre i5','6 GB'
    ],

};
console.log(techTools.laptopSpecs)


//array and inside objects
const techStacks = [
  {
    id:1,
    proglang:"html",
    experience:"20%",
  },
  {
    id:2,
    proglang:"css",
    experience:"50%",
  },
  {
    id:3,
    proglang:"javascript",
    experience:"70%",
  },
]
console.log(techStacks[2].experience);


//for loop
for(let x = 0; x < techStacks.length  ; x++){
    console.log(techStacks[x].proglang);
}

//easiest way of creating for loop
for(let stack of techStacks){
  console.log(stack.experience)
};

//filter function
const myTechStacks = techStacks.filter(function(myStacks){

  return myStacks.id == 1;

} );
console.log(myTechStacks);


//JSON 
const techStacksJSON = JSON.stringify(techStacks);
console.log(techStacksJSON);


//if statement
let joshAge = 22;
if(joshAge = 22){
  console.log('True');
}else{
  console.log("false");
}

//If statement practice
function joshFunction(year){
  if(year === 1){
    return "You're a First Year College";
  }
  else if(year === 2){
    return "You're a Second Year College";
  }
  else if(year === 3){
    return "You're a Third Year College";
  }
  else if(year === 4){
    return "You're a Fourth Year College";
  }else{
    return "Graduated";
  }
}
console.log(joshFunction(1));


//Other syntax for function
const modernFunction = (num1, num2) => {
  return num1 * num2;
}
console.log(modernFunction(7, 6));

// Dark mode
const darkMode = document.querySelector("#darkBtn");
const lightMode = document.querySelector("#lightBtn");
const manipulateMain = document.querySelector(".myMain");
const hideMode = document.querySelector('lightBtn')

darkMode.addEventListener("click", function(e){
  manipulateMain.style.background = "black";
  
});

lightMode.addEventListener("click", function(e){
  manipulateMain.style.background = "white"
});


const myInformation = {
  name:"Joshua",
  gender:"Male",
}

const {myFirstName , myGender} = myInformation;
console.log(myInformation);

let a = 10;
let b = 20;

[a,b] = [b,a];

console.log(a,b);


const [aa, bb, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(aa, bb);
console.log(arr);


const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line

console.log(half);


const person = {
  name:'Joshua Santos',
  gender:'Male',
  age:22
};


const greeting = `Hello my name is ${person.name}! I am a ${person.gender} and ${person.age} years of age.`;
console.log(greeting);

// SImple Calculator
// Get the input fields and the result field
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");

// Add event listeners to the buttons
document.getElementById("add").addEventListener("click", function(){
  result.value = Number(num1.value) + Number(num2.value);
});
document.getElementById("subtract").addEventListener("click", function(){
  result.value = Number(num1.value) - Number(num2.value);
});
document.getElementById("multiply").addEventListener("click", function(){
  result.value = Number(num1.value) * Number(num2.value);
});
document.getElementById("divide").addEventListener("click", function(){
  result.value = Number(num1.value) / Number(num2.value);
});



const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender
  };
  // Only change code above this line
};

console.log(createPerson("Joshua Santos",22,"Male"));


// Only change code below this line
class Vegetable{
  constructor(name,price){
    this.name = name;
    this.price = price;
  }
  
}
// Only change code above this line
const prices = new Vegetable("Celery",12);
console.log(prices.name);

const Wtf = new Vegetable('carrot');
console.log(Wtf.name); // Should display 'carrot'


class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);


// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius


// Constructor, get , set
// Centimeter to meter 
class JoshuaSantos{
  constructor(height){
    this._height = height;
  }

  get centimeter(){
    return this._height
  }
  set centimeter(meter){
    this._height = (meter  / 100);
  }
}

const myHeight = new JoshuaSantos(177);

let mySelf = myHeight.centimeter;
console.log(mySelf);

myHeight.centimeter = 180;
mySelf = myHeight.centimeter;
console.log(mySelf);



class JoshuaSantosWeight{
  constructor(weight){
    this._weight = weight; // weight in kilogram
  }

  get pounds(){   //Just return the weight specified in the function
    return this._weight;
  }
  set pounds(pound){ //Update the value 
    this._weight = (pound * 2.2)
  }
}
const myPound = new JoshuaSantosWeight (64);

let tempPound = myPound.pounds;
console.log(tempPound);

myPound.pounds = 63;
tempPound = myPound.pounds;
console.log(tempPound);

// Promise
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
	
  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});