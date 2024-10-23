
// ------------DOM BOM Document Object-------------

// Window is the whole screen of browser including tabs, extensions, etc.
// Document is a child object of window and the websites are known as document object.

// DOM Document Object Model :-- getting elements from HTML doc, etc.
// BOM Browser Object Model :-- history, alert, confirm, prompt, etc.

// Nodes or Elements
// nextSibling
// nextElementSibling
// previousSibling
// previousElementSibling


// Element selection in JS
// 1. document.getElementBy.....
// 2. document.getElementsBy.....  //for multiple elems
// 3. document.querySelector(. || # || tagName)
// 4. document.querySelectorAll(. || tagName) //for multiple elems

// if element is selected through className(.) then it will return an collection(NodeList) of elements.



// Events in JS
// 1. Inline Events
// 2. By calling a function
// 3. By refrence of elem.event = function(){}
// 4. By event listners

// Event object is parent object of event object.
// event 
// event.target 
// event.type

// MouseEvents in JS :-- click, mouseUp, mouseDown, mouseEnter, mouseLeave
// Keybord Events :-- onKeyPress, onKeyDown, onKeyUp
// Input Events :-- onchange


// Timing Events
// setTimeout //used for single operation
// setInterval //used for infinite operations
// clearTimeout //used for stoping timout 
// clearInterval //used for stoping interval




// ---------------> objects in JavaScript <------------------
// is a key value paired variable

let aboutMe = {
    name : "Meet Panara",
    age : 20,
    // getData : () {}
    getData (){
        return `My name is ${aboutMe.name} and age is ${aboutMe.age}`;
    },
    address : {
        area: "Thakkarbapa Nagar",
        city: "Ahmedabad",
        state: "Gujarat",
    },
}

// console.log(aboutMe.getData())
// console.log(aboutMe.address);


// ---------> this object in JS <---------
// It hase different values depending on where it is placed.

// let infoObj = {
//     name : "Meet",
//     getName(){
//         console.log(this.name);
//         return this.name;
//     },

//     // this will not work because the ()=>{} has no access to current obj this object
//     // getNameWithArrowFunc: () => {
//     //     console.log(this.name);
//     // }
// }

// infoObj.getName();
// console.log(infoObj.getNameWithArrowFunc());


// ---------> Array Destructuring <-------

// let details = ['Meet', 20];

// // this will allow to put data into multipul variables.
// let [name, age] = details;

// console.log(name); //Meet


// ---------> object Destructuring <------
// same as array but [] -> {}


// -------> adding dynamically keys and values <-------

// let myName = "Meet";
// let myDetails = {
//     [myName] : "how are you?",
// }

// console.log(myDetails);


// ----------> Sprade operator for array and object <---------

// let favFruits = ['apple', 'banana', 'whatermelon', 'pineapple'];
// let fruits = [...favFruits, 'kiwi', 'strawberry'];
// console.log(fruits);

// let degree = 'B.Tech';
// let biodata = {...aboutMe, degree};
// console.log(biodata);

// ----------> object values, keys, entries <-----------

// console.log(Object.keys(aboutMe)); //will print keys in array format
// console.log(Object.values(aboutMe)); //will print values in array format

// let objToArr = Object.entries(aboutMe);
// console.log(objToArr); //will print key and values.

// -------------->to convert the array to object key value we can use 
// console.log(Object.fromEntries(objToArr));



// ---------Nullish Colision---------
// ?? ---> will consider null and undefiend as only fallsy values
// const foo = '' ?? "default String";
// console.log(foo);



// -------------> Event Bubbling and Event capturing <-----------

// bubbling means propagation from bottom to top.
// capturing means propogation from top to down.

// bubbling is default one
// we can stop propagation by using event.stopPropagation()


// ------------> Higher oorder function and callBack function<----------

// HigherOrder function :--- func which accepts other function as arg.
// CallBack function :--- function which is being passed to a function as arg.



// ----------->Asyncronous JS<-----------
// Hoistng
// Laxical Scoping in functions
// clasures in functions


// Basically the JS is Syncronous but setInterval makes it Asyncronous
const func2 = () => {
    setTimeout(() => {
        console.log("Function 2 is called");
    }, 2000);
}

const func1 = () => {
    console.log("called func 1");
    func2();
    console.log("function 1 ends");
}

func1();