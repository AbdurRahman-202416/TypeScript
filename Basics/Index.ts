// Declaring variables with explicit types
let Name: string = 'John'
let PersonAge: number = 30
let isActiveBoolean: boolean = true 

// Using `any` type (not recommended for production code)
let random: any = 10
random = 'Hello'

// `void` is used for functions that do not return a value
function print (): void {
  console.log('Hello, world!')
}

console.log(Name) // Output: John
print() // Output: Hello, world!
