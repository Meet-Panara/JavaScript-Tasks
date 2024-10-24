
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

// MouseEvents in JS :-- click, mouseUp, mouseDown, mouseEnter, mouseLeave :::
// click: Triggered when the user clicks an element.
// dblclick: Triggered when the user double-clicks an element.
// mousedown: Triggered when the user presses a mouse button over an element.
// mouseup: Triggered when the user releases a mouse button over an element.
// mousemove: Triggered when the mouse pointer moves over an element.
// mouseover: Triggered when the mouse pointer enters an element.
// mouseout: Triggered when the mouse pointer leaves an element.
// mouseenter: Triggered when the mouse pointer enters an element and its descendants.
// mouseleave: Triggered when the mouse pointer leaves an element and its descendants.
// contextmenu: Triggered when the user right-clicks on an element.

// Keybord Events :-- onKeyPress, onKeyDown, onKeyUp :::
// keydown: Triggered when the user presses a key on the keyboard.
// keyup: Triggered when the user releases a key on the keyboard.
// keypress: Triggered when the user presses and releases a key on the keyboard (deprecated).

// Form Events:
// focus: Triggered when an element receives focus.
// blur: Triggered when an element loses focus.
// change: Triggered when the value of an element changes.
// submit: Triggered when a form is submitted.
// input: Triggered when the user enters text into an input field.

// Window Events:
// load: Triggered when the entire page has finished loading.
// unload: Triggered when the page is about to be unloaded.
// resize: Triggered when the browser window is resized.
// scroll: Triggered when the user scrolls the document.

// Touch Events:
// touchstart: Triggered when a touch point is placed on the touch surface.
// touchmove: Triggered when a touch point is moved along the touch surface.
// touchend: Triggered when a touch point is removed from the touch surface.
// touchcancel: Triggered when a touch event is interrupted.

// Other Events:
// dragstart: Triggered when the user starts dragging an element.
// drag: Triggered while the user is dragging an element.
// dragend: Triggered when the user stops dragging an element.
// drop: Triggered when a dragged element is dropped over a valid drop target.
// paste: Triggered when the user pastes content into an element.
// copy: Triggered when the user copies content from an element.
// cut: Triggered when the user cuts content from an element.
// error: Triggered when an error occurs during the loading of an image or other resource.


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

// callBack Hell Problem   // This Problem is solved by Promises
// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//             setTimeout(() => {
//                 console.log(4);
//                 setTimeout(() => {
//                     console.log(5);
//                     setTimeout(() => {
//                         console.log(6);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// ----------->Asyncronous JS<-----------
// Hoistng
// Laxical Scoping in functions
// clasures in functions

// ---->(Day 15) Execution Context in JavaScript with CallStack <---
// Firstly JavaScript is single Threaded means it consist only one CallStack


// To handle heavy tasks JavaScript uses web APIs and Event Loop for off loding them from call stack,
// which then continues the execution of less heavy tasks into  call stack.

// Every callback functions generally being assigned to TaskQueue rather then CallStack directly.
// then Event Loop checks callstack if it is emply then the callback functions are passed to the callStack by Event Loop. 


// there are two Execution Contexes are available:--- 
//  1)global EC
//  2)functional EC

// Phases of code Execution in JS
// 1) global Execution is assigned to "this object"
// 2) Memory creation Phase  //vars with undefined 
// 3) Execution Phase //assigning values and executing code
// 4) Execution Phase






// Basically the JS is Syncronous but setInterval makes it Asyncronous
// const func2 = () => {
//     setTimeout(() => {
//         console.log("Function 2 is called");
//     }, 2000);
// }

// const func1 = () => {
//     console.log("called func 1");
//     func2();
//     console.log("function 1 ends");
// }

// func1();

// callStack > MicroTaskQueue > TaskQueue


// Example of Asyncronous JS
// Promise.resolve().then(() => console.log(1));  //this will be at microTask Queue then after at callStack

// setTimeout(() => console.log(6),1000); //this will be at WebAPI then aftter at task Queue then after at callStack 
// setTimeout(() => console.log(2),1000); //this will be at WebAPI then aftter at task Queue then after at callStack
// // because the delay is same it will see the order of task Queue

// queueMicrotask(() => { //this will directly being put at MicroTask queue then to callStack
//     console.log(3);
//     queueMicrotask(() => console.log(4)); //will create a new micro task at MicroTask queue and will being puted into callStack in order of MicroTaskQueue
// })
// console.log(5); //it will directly prints 5 because it is directly puted into callStack


// 5 > promise as it is assigned to Microtask 1 > 3 > 4 > 6 as the delay of both is same > 2





// ------------> JSON (JavaScript Object Notation) <-------------

// if the APIs do return HTML data to convert it we need to use .json() method
// JSON.stringify :- converts the simple object into a JSON Text
// JSON.parse :- will convert the JSON text into simple object


// --------------> Promises <-----------
// promise consist of three stages :- pending, fulfilled, rejected
// If a promise is pending, .then/catch/finally handlers wait for its outcome.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async Task");
//         resolve();
//     }, 1000)
// });

// promise1.then(() => console.log("Async Task resolved"));
// promise is an object so while usning it () are not required like "promise1.then()" not promise1().then()

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject();
//     }, 1000)
// }).catch(() => console.log("Promise Rejected"));


// ---------> Async/Await <----------
// there may occure callBack Hell problem by using too many .then() so, we can use async/await to resolve the problem.

const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        // let error = false;
        let error = true;
        if(!error) {
            res({username: 'Meet', password: '321'});
        }else{
            rej("Error: something went wrong!!");
        }
    }, 2000);
})

// // Handling promise by .then and .catch and .finally
// promise2.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log('username: ', username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("The promise either resolved or rejected!");
// })


// handling promise by async /await
async function consumePromise() {
    try{
        const res = await promise2;
        console.log(res);
    }catch(error){
        console.log(error);
    }
}

consumePromise();