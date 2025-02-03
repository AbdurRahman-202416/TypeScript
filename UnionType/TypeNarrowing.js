"use strict";
function SayDetails(name, age) {
    let curretage;
    //type narrowing
    if (typeof age === 'string') {
        curretage = age;
    }
    else {
        curretage = age.toString();
    }
    console.log(`Name: ${name} Age: ${age}`);
}
SayDetails('Shanto', 25);
function Print(obj) {
    //type narrowing
    if (typeof obj === 'object') {
        console.log(obj.name);
        console.log(obj.age);
    }
    else if (typeof obj === 'string') {
        console.log(obj.toUpperCase());
    }
    else {
        console.log(obj.toFixed(2));
    }
}
let obj = {
    name: 'Shanto',
    age: 25
};
Print(obj);
Print(25);
Print('Shanto');
Print(25.12345);
