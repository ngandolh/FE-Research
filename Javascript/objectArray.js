// Object & Array Destructuring

//1.Object Destructuring
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

const { name, age } = person;
console.log("Name: " + name + ", Age: " + age);
console.log("City: " + person.city); // Accessing property directly) 

//2. Array Destructuring
const numbers = [1, 2, 3, 4];
const [first, second] = numbers;
console.log("First: " + first + ", Second: " + second);

//3. Default Values
const { gender = "Not specified" } = person;
console.log("Gender: " + gender);
console.log("Person: " + JSON.stringify(person));

//4. Destructuring in Function Parameters
function displayPerson({ name, age, city }) {
    console.log("Name: " + name + ", Age: " + age + ", City: " + city);
}
displayPerson(person);

//5. Nested Destructuring
console.log("Nested Destructuring:");
const user = {
    id: 1,
    fullname: "Alice",
    address: {
        city: "Wonderland",
        zip: "12345"
    }
};

const { fullname, address: { city } } = user;
console.log("Name: " + fullname + ", City: " + city);

//6.Skipping Properties
const arr = [1, 2, 3, 4, 5];
const [, , third] = arr;
console.log("Third: " + third + ", Fourth: " + arr[3] + ", Fifth: " + arr[4]);

//7. Rest Operator in Destructuring
const [f, ...rest] = arr;
console.log("First: " + f + ", Rest: " + JSON.stringify(rest));