"use strict";
let age;
age = 25;
age = '25'; // valid
// age = true; // invalid
console.log(age);
let ageArr = [25, 30, '35', '40'];
console.log(ageArr);
// ageArr.push(true); // invalid
let StringArr = ['25', '30', '35', '40'];
console.log(StringArr);
let NumberArr = [25, 30, 35, 40];
console.log(NumberArr);
let mixedArr = [25, 30, '35', '40', true];
console.log(mixedArr);
mixedArr.push(false); //output: [25, 30, '35', '40', true, false]
console.log(mixedArr);
