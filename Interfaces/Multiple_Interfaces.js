"use strict";
const employee2 = {
    name: "Shanto",
    age: 22,
    salary: 20000,
    email: " lZDdI@example.com",
    fullName: function () {
        return this.name;
    },
};
const manager = {
    name: "Shanto",
    age: 22,
    salary: 20000,
    department: "IT",
};
console.log(manager);
let admin1 = {
    name: "Shanto",
    age: 22,
    salary: 20000,
    email: "lZDdI@example.com",
    fullName: function () {
        return this.name;
    },
    department: "IT",
    role: "Admin",
};
console.log(admin1);
console.log(admin1.fullName());
console.log(admin1.department);
console.log(admin1.role);
