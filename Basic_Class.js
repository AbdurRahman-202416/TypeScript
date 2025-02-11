'use strict'

class Computer {
  constructor (name, ram, cpu, storage) {
    this.name = name
    this.ram = ram
    this.cpu = cpu
    this.storage = storage
  }
  showDetails () {
    console.log(
      `Name: ${this.name} RAM: ${this.ram} CPU: ${this.cpu} Storage: ${this.storage}`
    )
  }
  ram () {
    console.log(`RAM: ${this.ram}`)
  }
  cpu () {
    console.log(`CPU: ${this.cpu}`)
  }
}
let Hp = new Computer('Hp', '8GB', 'i5', '1TB')
let Lenovo = new Computer('Lenovo', '4GB', 'i3', '500GB')
let Dell = new Computer('Dell', '16GB', 'i7', '2TB')
let Acer = new Computer('Acer', '2GB', 'i3', '500GB')
let Asus = new Computer('Asus', '4GB', 'i5', '1TB')
let Apple = new Computer('Apple', '8GB', 'i5', '1TB')
let Microsoft = new Computer('Microsoft', '4GB', 'i3', '500GB')

Hp.showDetails()
Lenovo.showDetails()
Dell.showDetails()
Acer.showDetails()
Asus.showDetails()
Apple.showDetails()
Microsoft.showDetails()
console.log(Hp.cpu)
console.log(Lenovo.ram)



