// class Computer {
//   private _ssd: number = 220;
//   public name: string;
//   public ram: number;

//   constructor(name: string, ram: number) {
//     this.name = name;
//     this.ram = ram;
//   }
//   private getDetails() {
//     console.log(`Computer Name: ${this.name} and RAM: ${this.ram}`);
//   }
//   get ssd(): number {
//     return this._ssd;
//   }
// }

// interface IComputer {
//   name: string;
//   ram: number;
//   getDetails(): void;
// }

// const computer1: IComputer = {
//   name: "HP",
//   ram: 8,
//   getDetails: () =>
//     console.log(`Computer Name: ${computer1.name} and RAM: ${computer1.ram}`),
// };
// computer1.getDetails();

// const computer = new Computer("Dell", 16);
// console.log(computer.name);
// console.log(computer.ram);

interface ComputerInterface {
  name: string;
  ram: number;
}
interface getDetails {
  getDetails(): void;
}
//using multiple interfaces in a class

class Computer implements ComputerInterface, getDetails {
  constructor(public name: string, public ram: number) {}
  getDetails(): void {
    console.log(`Computer Name: ${this.name} and RAM: ${this.ram}`);
  }
}
let computer10 = new Computer("HP", 8);
console.log(computer10.name);
computer10.getDetails();

