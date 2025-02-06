"use strict";
class Computer2 {
    constructor(name, ram) {
        this.name = name;
        this.ram = ram;
        this._ssd = 220;
        this.name = name;
        this.ram = ram;
    }
    getDetails() {
        console.log(`Computer Name: ${this.name} and RAM: ${this.ram}`);
    }
    get ssdDetails() {
        return this._ssd;
    }
}
const Mycomputer = new Computer2("HP", 8);
console.log(Mycomputer.name);
