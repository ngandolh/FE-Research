// Data type

// 1.String
let str = "Hello, World!";

// 2. Number
let num = 42;

// 3. Boolean
let isTrue = true;

// 4.Object 
let tom = {
    name: "Tom",
    age: 25,
    isStudent: true
}

// 5. Array
let fruits = ["Apple", "Banana", "Cherry"];

// 6. Function
function greet(name) {
    return "Hello, " + name + "!";
}

//7. null
let data = null;

//8. undefined
let notAssigned;
console.log(notAssigned); //underfined

//9. Symbol
let sym = Symbol("description");
const person = {
    [sym]: "Tom"
};

console.log(person[sym]); // "Tom"