// Declaring variables with explicit types
var name = 'John';
var age = 30;
var isActive = true;
// Using `any` type (not recommended for production code)
var randomValue = 10;
randomValue = 'Hello';
// `void` is used for functions that do not return a value
function greet() {
    console.log('Hello, world!');
}
console.log(name); // Output: John
greet(); // Output: Hello, world!
