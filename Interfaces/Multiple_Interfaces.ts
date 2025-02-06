interface Workers {
  name: string;
  age: number;
  salary: number;
}

// Here we have two interfaces, Employee and Workers. Employee interface extends Workers interface.
interface Employee extends Workers {
  email: string;
  fullName(): string;
}

const employee2: Employee = {
  name: "Shanto",
  age: 22,
  salary: 20000,
  email: " lZDdI@example.com",
  fullName: function () {
    return this.name;
  },
};

interface Manager extends Workers {
  department: string;
}

const manager: Manager = {
  name: "Shanto",
  age: 22,
  salary: 20000,
  department: "IT",
};
console.log(manager);

// Here we have three interfaces, Employee, Manager, and Workers. Employee and Manager interfaces extend Workers interface.
interface admin extends Employee, Manager, Workers {
  role: string;
}
let admin1: admin = {
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
