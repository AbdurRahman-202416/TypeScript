type DetailsType = {
  firstName: string;
  lastName: string;
  age?: number; // Age is optional
  city?: string; // City is optional
};

function ShowDetails(obj: DetailsType): string {
  let { firstName, lastName, age, city } = obj;
  if (!obj.firstName || !obj.lastName || !obj.city) {
    throw new Error("Invalid object passed to ShowDetails function");
  }
  return `${firstName} ${lastName} ${age ? age : ""} ${city ? city : ""}`;
}

let studentDetails: DetailsType = {
  firstName: "Shanto",
  lastName: "Ahmed",
  age: 26,
  city: "Dhaka",
};
console.log(ShowDetails(studentDetails)); // Output: Shanto Ahmed 26 Dhaka
 
//using IIFF(Immediately Invoked Function Expression)
(function () {
  let studentDetails: DetailsType = {
    firstName: "Shanto",
    lastName: "Ahmed",
    age: 26,
    city: "Dhaka",
  };
  console.log(ShowDetails(studentDetails)); // Output: Shanto Ahmed 26 Dhaka
})();


type nameType = {
    firstName: string;
    lastName: string;
    };
    type ageType = {
    age: number;
    };
    let employeeDetails: nameType & ageType = {
    firstName: "Shanto",
    lastName: "Ahmed",
    age: 26,
    };
    console.log(employeeDetails); // Output: { firstName: 'Shanto', lastName: 'Ahmed', age: 26 }


