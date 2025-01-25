// Declaring variables with explicit types
let name: string = 'John'
let age: number = 30
let isActive: boolean = true

// Using `any` type (not recommended for production code)
let randomValue: any = 10
randomValue = 'Hello'

// `void` is used for functions that do not return a value
function greet (): void {
  console.log('Hello, world!')
}

console.log(name) // Output: John
greet() // Output: Hello, world!
