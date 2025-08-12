// Function

// 1. Function declaration 
function add(a) {
    return a + 1;
}
console.log("Function declaration result: " + add(5)); //Result = 6

//2. Arrow function
const sum = (a, b) => a + b;
console.log("Arrow function result: " + sum(2, 3)); //Result = 5

//3. Default parameters
function multiply(a, b = 1) {
    return a * b;
}

console.log("Default parameters result: " + multiply(5)); //Result = 5

//4. Rest parameters
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Rest parameters result: " + sumAll(1, 2, 3, 4)); //Result = 10

//5. Spread operator
const numbers = [1, 2, 3, 4];
console.log("Spread operator result: " + sumAll(...numbers)); //Result = 10

//6. Function Expression
const divide = function (a, b) {
    return a / b;
}
console.log("Function expression result: " + divide(10, 2)); //Result = 5

//7. Anonymous Function
setTimeout(function () {
    console.log("Anonymous function result: " + divide(10, 2)); //Result = 5
}, 1000);

//8. Callback function
[1, 2, 3, 4].forEach(function (num) {
    console.log("Callback function result: " + divide(num, 2)); //Result = 0.5, 1, 1.5, 2
});