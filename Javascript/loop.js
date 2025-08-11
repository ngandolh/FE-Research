//Loop Statements

//1. for
const dance = ["S", "D", "A"];
for (let i = 0; i < dance.length; i++) {
    console.log(dance[i]);
}

//2. while  
let count = 0;
while (count < 3) {
    console.log("Count is: " + count);
    count++;
}

//3. for...of (foreach)
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log("Fruit: " + fruit);
}

//4. for...in
let person = { name: "Alice", age: 25, city: "Wonderland" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}

//5. forEach
fruits.forEach(function (fruit) {
    console.log("Fruit: " + fruit);
});