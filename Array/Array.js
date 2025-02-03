"use strict";
let arr = [1, 2, 3, 4, 5];
// arr.push("a"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(arr); // Output: [1, 2, 3, 4, 5]
let maltiplyArr = arr.map((num) => {
    return num * 2;
});
console.log(maltiplyArr); // Output: [2, 4, 6, 8, 10]
let NameOfStudent = ["Shanto", "Monir", "Shuvro"];
console.log(NameOfStudent); // Output: [ 'Shanto', 'Monir', 'Shuvro' ]
let ageOfStudent = [25, 26, 27];
let StudetnRequgular = [true, false, true];
console.log(StudetnRequgular); // Output: [ true, false, true ]
console.log(ageOfStudent); // Output: [ 25, 26, 27 ]
let towDarray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let threeDarray = [
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
];
console.log(threeDarray);
