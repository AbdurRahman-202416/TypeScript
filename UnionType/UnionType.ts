let age :number | string;
age = 25;
age = '25'; // valid
// age = true; // invalid

console.log(age);

let ageArr: (number | string) [] =[25, 30, '35', '40'];
console.log(ageArr);
// ageArr.push(true); // invalid
let StringArr: string []| number[] = ['25', '30', '35', '40'];
console.log(StringArr);
let NumberArr: number []| string[] = [25, 30, 35, 40];
console.log(NumberArr);


let mixedArr: (number | string | boolean) [] =[25, 30, '35', '40', true];
console.log(mixedArr);
mixedArr.push(false);//output: [25, 30, '35', '40', true, false]
console.log(mixedArr); 
