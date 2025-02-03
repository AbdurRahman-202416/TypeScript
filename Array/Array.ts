let arr: number[] = [1, 2, 3, 4, 5];

// arr.push("a"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(arr); // Output: [1, 2, 3, 4, 5]

let maltiplyArr: number[] = arr.map((num) => {
  return num * 2;
});
console.log(maltiplyArr); // Output: [2, 4, 6, 8, 10]

let NameOfStudent: string[] = ["Shanto", "Monir", "Shuvro"];
console.log(NameOfStudent); // Output: [ 'Shanto', 'Monir', 'Shuvro' ]
let ageOfStudent: number[] = [25, 26, 27];
let StudetnRequgular: boolean[] = [true, false, true];
console.log(StudetnRequgular); // Output: [ true, false, true ]

console.log(ageOfStudent); // Output: [ 25, 26, 27 ]

let towDarray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];


let threeDarray: number[][][] = [
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
