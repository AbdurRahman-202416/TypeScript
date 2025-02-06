"use strict";
// class Computer {
//   private _ssd: number = 220;
//   public name: string;
//   public ram: number;
//using multiple interfaces in a class
class Computer {
    constructor(name, ram) {
        this.name = name;
        this.ram = ram;
    }
    getDetails() {
        console.log(`Computer Name: ${this.name} and RAM: ${this.ram}`);
    }
}
let computer10 = new Computer("HP", 8);
console.log(computer10.name);
computer10.getDetails();
