// ES6 + Features 

//1.map
const nums = [1, 2, 3];
const third = nums.map(num => num * 3); // [3, 6, 9]
console.log("Map: " + third);

//2. filter 
const even = nums.filter(num => num % 3 == 0);
console.log("Filter: " + even);//3

//3. reduce
const sum = nums.reduce((acc, num) => acc + num, 0);
console.log("Reduce: " + sum); //6 = 1 + 2 + 3

//4. find 
const firstElement = nums.find(num => num > 2);
console.log("Find: " + firstElement); // 3 - return 1 value

//5. includes 
const includesTwo = nums.includes(4);
console.log("Includes: " + includesTwo); //FALSE

//6. Template string 
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting);
