"use strict";
function ShowDetails(obj) {
    let { firstName, lastName, age, city } = obj;
    if (!obj.firstName || !obj.lastName || !obj.city) {
        throw new Error("Invalid object passed to ShowDetails function");
    }
    return `${firstName} ${lastName} ${age ? age : ""} ${city ? city : ""}`;
}
let studentDetails = {
    firstName: "Shanto",
    lastName: "Ahmed",
    age: 26,
    city: "Dhaka",
};
console.log(ShowDetails(studentDetails)); // Output: Shanto Ahmed 26 Dhaka
//using IIFF(Immediately Invoked Function Expression)
(function () {
    let studentDetails = {
        firstName: "Shanto",
        lastName: "Ahmed",
        age: 26,
        city: "Dhaka",
    };
    console.log(ShowDetails(studentDetails)); // Output: Shanto Ahmed 26 Dhaka
})();
//uisng intersection type
let employeeDetails = {
    firstName: "Shanto",
    lastName: "Ahmed",
    age: 26,
};
console.log(employeeDetails); // Output: { firstName: 'Shanto', lastName: 'Ahmed', age: 26 }
