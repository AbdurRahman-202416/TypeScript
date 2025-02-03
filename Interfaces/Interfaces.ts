 interface IEmployee {
    Firstname: string;
    lastName: string;
    age: number;
    salary: number;
}
interface IEmployee{
    Email: string;
    fullName (): string;
}


let Shanto: IEmployee = {
    Firstname: "Shanto",
    lastName: "Ahmed",
    age: 22,
    salary: 20000,
    Email:"lZDdI@example.com",
    fullName: function(){
        return this.Firstname + " " + this.lastName;
    }

}
console.log(Shanto.fullName()); // Shanto Ahmed


console.log(Shanto); // { Firstname: 'Shanto', lastName: 'Ahmed', age: 22, salary: 20000 }



