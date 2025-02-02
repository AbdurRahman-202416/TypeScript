"use strict";
// Declaring variables with explicit types
let Name = 'John';
let PersonAge = 30;
let isActiveBoolean = true;
// Using `any` type (not recommended for production code)
let random = 10;
random = 'Hello';
// `void` is used for functions that do not return a value
function print() {
    console.log('Hello, world!');
}
console.log(Name); // Output: John
print(); // Output: Hello, world!
