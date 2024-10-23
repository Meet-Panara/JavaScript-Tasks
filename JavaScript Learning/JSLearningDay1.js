// console.log("Hello World!");


// Data Types in JavaScript
// 1. Primitive Data Types :6
// String
// Number
// Boolean
// BigInt
// undefined
// Symbol

// console.log(typeof("string"));
// console.log(typeof(10));
// console.log(typeof(true));
// console.log(typeof(10.8888888888888888888));
// console.log(typeof(undefined));
// console.log(typeof(null)); //this returns object
// console.log(typeof()); 


// console.log(10 + "20"); //1020
// console.log(9 - "5"); //4
// console.log("Java" + "Script"); //JavaScript
// console.log(" " + " "); // " "
// console.log(" " + 0); //" 0"
// console.log("Meet" - "Panara"); //error NAN
// console.log(true + true); //2
// console.log(false - true); //-1

// null :- represents the empty space;
// undefined :- represents the space having no value

// NAN :- the value was suppose to be number but it is not so NAN(Not A Number)
// isNaN() method

// if(isNaN("hi")){
//     console.log("this is not a number");
// } //true


//-------------> Expression and Operations
// Expression :- combination of operands and operators
// Operation :- performing operations on operands using some simboles

// assingment operators
// =
// +=
// -+
// *=
// /=
// %=
// **=

// arithmatic operators
// + - * / % ** ++ --

// Comparision operators
// == === != !== < > <= >= 

// console.log("10" == 10); //true
// console.log("20" === 20); //false

// logical operators
// && || !

// Bitwise Operators
// & | ^ ~ << >> >>>

// string operators
// + (concatination operator)

// ternary operators
// variableName =  (condition) ? (return if true) : (return if false)


// --- swaping without 3rd variable
// let num1 = 10;
// let num2 = 20;

// num1 = num1+num2; //30
// num2 = num1-num2; //10
// num1 = num1-num2; //20
// console.log(num1, num2);


// ---------------> Control Statements and Loops
// control statements: if..else, switch..case

// finding that is the year a leap year or not
// let year = 2020;
// if(year % 4 === 0 ){
//     if(year % 100 === 0 ){
//         if(year % 400 === 0){
//         console.log("it is a leap year")
//         }else{
//             console.log("it is not a leap year")
//         }
//     }else{
//         console.log("it is a leap year")
//     }
// }
// else{
//     console.log("is Not a Leap Year");    
// }


//--------- Truthy and Falsy values 
// 6 falsy values 0, "", null, undefined, false, NaN

// console.log(Boolean("")); //false


// switch case
// switch(input){
    // case 1:
        // klnk
        // break;
    // case 2:
        // klnk
        // break;
    // case 3:
        // klnk
        // break;
    // default:
        // iunj
// }

// while and Do..While loop

// for loop
// for(initialization; condition; iterations){
    // code here
// }

// for(let i = 1; i <= 10; i++){
//     let tableOf = 7;
//     console.log(`${tableOf} * ${i} = ${tableOf*i}`);
// }

// ------------> Functions <------------------

//----1. function Defination
// function fName() {}

// Calling a Function
// fName()

// function Parameter
// the names which are listed in the function's defination.
// function userName(fName, lName){}

// function Arguments
// the real values which are present in function call
// userName("Meet", "Panara");


// ----2. function Expression
// function puted into variable

// function sum(num1, num2){
//     return(num1 + num2);
// }

// let submision = sum(20, 40);

// console.log("the sumbmision is "+ submision);


// ----3. Anonymus Function
// let sum = function(num1, num2){
//     return(num1 + num2);
// }



// -------------> ECMA Script: <---------------

// ES6
// ---- Template Literals
// using ` ` is template literal


// ---- Let VS Const VS var

// var: functional scope
// let: block Scope
// const: block Scope

// function myName(){
//     let firstName = "Meet";

//     if(true){
//         let lastName = "Panara";
//         console.log(`${firstName} ${lastName}`);
//     }
    
//     // will through an error because lName is not accessibal here because of let
//     console.log(`${firstName} ${lastName}`);
// }


// function myName(){
//     var firstName = "Meet";

//     if(true){
//         var lastName = "Panara";
//         console.log(`${firstName} ${lastName}`);
//     }
    
//     // will not through an error because lName is accessibal here because of var 
//     console.log(`${firstName} ${lastName}`);
// }

// myName();


// ------ Default Parameters

// function sum(num1, num2 = 20){
//     return num1 * num2;
// }
// console.log(sum(20,20));
// console.log(sum(40));
// // will return NaN because 1value is nacasery to be passed
// console.log(sum()); //NaN


// ------- Arrow Function

// var sum = () => {
//     let a = 35;
//     let b = 23;
//     return(a + b);
// }

// console.log(`the sum is ${sum()}`);



// ------------>Arrays<-------------
let arrayExample = [true, 43, "Meet", undefined, ["another array"]];

// console.log(arrayExample);

// ----->Traversing array-----
// console.log(arrayExample[2]); //"Meet"

// Accessing last element of array using "lenght" property of array
// console.log(arrayExample[arrayExample.length -1]);

// ------->reversing array<-------
// console.log(arrayExample.reverse());

// console.log("Accessing keys by for in loop");
// // ------->for-in loop----
// for (const key in arrayExample) {
//     if(key > 3){
//         break;
//     }
//     const elem = arrayExample[key];
//     console.log(`key: ${key} having value: ${elem}`);
// }

// // -------->for-of loop-------
// for (const element of arrayExample) {
//     console.log(element);
// }

// // ----->forEach loop---
// console.log("Accessing Each elem by forEach loop");
// arrayExample.forEach((elem,index) => {
//     console.log( index + ": " +elem);
// });


// -----Searching and Filtering in Array
// console.log(arrayExample.indexOf("Meet", 3)); //finding Meet from index 3

// used for backword search
// console.log(arrayExample.lastIndexOf("Meet", 2)); //finding Meet from index 3

// includes() for checking that a variable is inside the array
// console.log(arrayExample.includes(null)); //false

// const ages = [3, 10, 18, 20];
// // this will return single value which satisfies the condition to over come that filter takes place
// console.log(ages.find((age)=>{ 
//     return(age >= 10) 
// }));

// // ---------->filter() method------------
// console.log(ages.filter((age)=>{ 
//     return(age >= 10) 
// }));

// // ----------> map() function--------
// console.log(ages.map((elem, index, arr) => {
//     return(elem + 10);
// }));


const numbers = [2,8,48,20,1,32];

// const newArr = numbers.map((elem, index, arr) => elem < 9).filter((elem) => elem);
// console.log(newArr);


// // finding sqrt of given array
// const arr = [25, 36, 49, 64, 81];
// console.log(arr.map((elem, index, arr) => Math.sqrt(elem)))
// // multiply each item with 2 and return only which are < 10
// const arr2 = [2, 3, 4, 6, 8]
// console.log(arr2.map((elem) => elem*2).filter((elem) => elem > 10));


// console.log(ages.reduce((accumulator, currentValue) => {
//     return(Math.max(accumulator, currentValue));
// }))

// // adding the values which are returend by filter method
// console.log(arr2.map((elem) => elem*2).filter((elem) => elem > 10).reduce((acc, elem) => acc += elem))



// ------push() pop() unshift() shift()----------

// ---------->splice()<------------
// mostlly used for deleting but can also used for adding elements.
const months = ['jan', 'march', 'april', 'june', 'july'];

// adding 'dec' at end
// const sol1 = months.splice(months.length, 0, "dec");
// console.log(months);

// what does the splice method returns 
// console.log(sol1); //[] an empty array

// update 'march' to 'March'
// const marchIndex = months.indexOf('mamrch');
// if(marchIndex >= 0){
//     months.splice(marchIndex, 1, "March"); //will remove 'march' and adds 'March'
//     console.log(months);
// }else{
//     console.log("the element does not exist");
// }



// -----sorting------
const nums = [10, 4, 22, 65, 29];

// console.log(nums.sort()); //this is for string sorting so not efficient for numerical values


// // for numaricals the below attributes are required to be passed
// console.log(nums.sort((a, b) => a - b )); //assending order
// console.log(nums.sort((a, b) => b - a )); //disanding order






// ----------->String Methods<-------------

let str = "hi this is a string";

// ---------length property of string-----
// console.log(str.length); //19

// ------escap char(\) ---------------
// console.log("we are so called \"vikings\" from the north");

// -------->indexOf()----
// console.log(str.indexOf("is", 6)); //8 //6 is the starting index 


// ------->lastIndexOf()---------
// console.log(str.lastIndexOf("is")); //8 //start from last 

// ------->startsWith()---------
// console.log(str.startsWith('yhhbj'));

// -------search() in string returns position of str-----------
// console.log(str.search("string")); //13 //same as indexOf but can't pass starting position

// ------Extracting sub string from string--------- 

// -------1.-->slice(start, end) method--------
// console.log(str.slice(8)); //is a string
// console.log(str.slice(8, -3)); //is a str //-3 will remove 3 char from end

let mockString = "yhhvbj jknjkuijkmnj l kjujm mjkuigb jmbuigb hbkigiyhm mjkuig";
// console.log(mockString.slice(0, 20)); //will only print 20 chars

// -------2.--->subString(start, end) method-----
// does not accept negative values ex.(-3)

// -------3.--->substr(start, length) method-----
// will take starting position and length of required sub string
// console.log(mockString.substr(0, 4));
// console.log(mockString.substr(-10)); //will return 10 char from end


// --------->replace() & replaceAll() methods----

// will return new string and does not mutate the original string
// console.log(str.replace("is", "isssss"));
// console.log(str.replaceAll('is', "issss"));


// ------>charAt(index) finding charecer at perticuler index-------
// console.log(str.charAt(0)); //h
// console.log(str.charCodeAt(0)); //104 uniCode(UTF-16) of h

// ----->toUpperCase() toLowerCase()----
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// ------>concat(str)------
// console.log(str.concat(" ", "jknuhmnkhu")); //concating strings

// ------->.trim()--------
// console.log("   Huuuuuuu II      ".trim());

// ---------->split(spliting_str)-------converting str to array
// console.log(str.split(" "));



// -----Shallow Copy VS Deep Copy-------

const originalArray1 = [1, 2, 3, [4, 5]];
const shallowCopy = [...originalArray]; //[1, 2, 3, [4, 5]]

shallowCopy[0] = 10; //[10, ......]
shallowCopy[3][1] = "Meet"; //

console.log(originalArray1);
console.log(shallowCopy);



//Array example for shallo copy and deep copy
const originalArray = [1, 2, 3, [4, 5]];
const deepCopyArr = structuredClone(originalArray);

deepCopyArr[0] = 10;
deepCopyArr[3].push(6);

// console.log(originalArray);
// console.log(deepCopyArr);


// object example for shallo copy and deep copy
let obj = {
    name: "Meet Panara",
    add: {
        city: "ahmedabad",
        area: "India Colony thakkarbapa nagar",
        code: {
            pinCode: 123456,
        }
    }
}

let objCopy = structuredClone(obj);
obj.name = "Raj Talvaniya";
objCopy.add.city = "Jamnagar";
objCopy.add.code.pinCode = 654321;
// console.log(obj);
// console.log(objCopy);


//----------> Date and Time <-----------

// ---4 types to write date and time 
// new Date()  new date constructor.
// new Date(year,month,day,hour,minit,second,milisec.)
// new Date(milisecond)
// new Date(date string)


// // new Date() 
// let currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.toString());


// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

// console.log( Date.now());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getMonth());
// console.log(currentDate.getDate());
// console.log(currentDate.getDay());
// console.log(currentDate.getMinutes());



//-----> math properties <----------

// console.log(Math.PI);
 
// let num = 555.524;
// console.log(Math.round(num));
 
// console.log(Math.pow(2,3));
// console.log(2**3);

// console.log(Math.sqrt(66));

// console.log(Math.abs(-555));  //always give positive number 


// console.log(Math.ceil(20.2)); //21 //will increment the num if cosist of decimal point
// console.log(Math.floor(25.1)); //25 //will ignore the decimal point

// console.log(Math.max(222,222.3));
// console.log(Math.min(222,222.3));

// ---Math.random()---
// console.log(Math.round(Math.random()*10));

// console.log(Math.trunc(990.22)); //if positive num then Math.floor
// console.log(Math.trunc(-990.22)); //if negative num then Math.ceil