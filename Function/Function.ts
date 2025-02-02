function print(name: string) {
  console.log(name);
}
// print(100);
//Error: Argument of type '100' is not assignable to parameter of type 'string'.

print("Hello"); // Output: Hello

function add(a: number, b: number): number {
  return a + b;
}
// Error: Argument of type '"2"' is not assignable to parameter of type 'number'.
// add(1, '2');

let result = add(1, 2);
console.log(result); // Output: 3

// Function with optional parameter
function multiply(a: number, b: number, c?: number): number {
  if (c) {
    return a * b * c;
  }
  return a * b;
}
let product = multiply(2, 3);
console.log(product); // Output: 6
product = multiply(2, 3, 4);
console.log(product); // Output: 24

// Function with default parameter
function divide(a: number, b: number = 2): number {
  return a / b;
}

let quotient = divide(10);
console.log(quotient); // Output: 5
quotient = divide(10, 5);
console.log(quotient); // Output: 2

// Function with rest parameter
function introduce(firstName: string, ...lastNames: string[]): string {
  return firstName + " " + lastNames.join(" ");
}

let fullName = introduce("Shanto", "Monir", "Shuvro");
console.log(fullName); // Output: Shanto Monir Shuvro
fullName = introduce("John", "Doe", "Smith", "Jr.");
console.log(fullName); // Output: John Doe Smith Jr.

// Function with variable number of arguments
function sum(...numbers: number[]): number {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
let total = sum(1, 2, 3, 4, 5);
console.log(total); // Output: 15

// Function with void return type
function printMessage(message: string): void {
  console.log(message);
}
printMessage("Hello, world!");
// Output: Hello, world!

// Function with unknown return type
function throwError(message: string): never {
  throw new Error(message);
}

throwError("This is an error message"); // Error: This is an error message
