// function age1(age: string): string {
//   return age;
// }
// function age2(age: number): number {
//   return age;
// }
// function age3(age:boolean): boolean {
//   return age;
// }
//console.log(age1("20"));
//console.log(age2(20));
//console.log(age3(true));

// age3(11); // Error: Argument of type '11' is not assignable to parameter of type 'boolean'.

function parsonAge<daynamicType>(age: daynamicType): daynamicType {
  return age;
}

parsonAge<string>("20");
parsonAge<number>(20);
parsonAge<boolean>(true);

// Generic with multiple objects
function combineObject<T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 };
}
combineObject({ name: "John" }, { age: 20 });

 // Error: Argument of type '20' is not assignable to parameter of type 'object'.
//  combineObject({ name: "John" }, "20");

console.log(combineObject({ name: "John" }, { age: 20 }));
//  {name: "John", age: 20}
