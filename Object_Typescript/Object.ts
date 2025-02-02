let insctructor: {
  firstName: string;
  lastName: string;
  age: number;
  city: string;
} = {
  firstName: "Shanto",
  lastName: "Monir",
  age: 25,
  city: "Dhaka",
};

console.log(insctructor);

// Object Type with Type Alias in TypeScript 
type Person = {
    firstName: string;
    lastName: string;
    age: number;
    city: string;
    };

    //using type alias to create new object
let student: Person = {
    firstName: "Shanto",
    lastName: "Ahmed",
    age: 30,
    city: "New York",
    };
console.log(student);

//
let employee: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 35,
    city: "Paris",
    };
console.log(employee);


