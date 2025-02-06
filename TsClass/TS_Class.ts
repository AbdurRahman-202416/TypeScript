class Computer2 {
  private _ssd: number = 220;
  constructor(public name: string, public ram: number) {
    this.name = name;
    this.ram = ram;
  }
  private getDetails(): void {
    console.log(`Computer Name: ${this.name} and RAM: ${this.ram}`);
  }
  get ssdDetails(): number {
    return this._ssd;
  }

}
const Mycomputer = new Computer2("HP", 8);

console.log(Mycomputer.name);

