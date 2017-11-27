// interface definition sample
function greeting(personObject: any) {
  console.log("Hello " + personObject.company);
}

const personObject = {
  name: "Prabha",
  company: "OFS"
};

greeting(personObject);
// greeting()

// interface defining type

function typeDefinitionSample(person: { name: string }) {
  console.log("Hello " + person.name);
}

typeDefinitionSample(personObject);
// typeDefinitionSample({ name: "Tom", company: "OFS" });

// interface sample
interface Employee {
  firstName: string;
  age?: number;// optional value
  [propName: string]: any; // allows to have new properties
  // printName(lastName: string): void;
}

class Company implements Employee {
  firstName: string = "Prabha";
  lastName: string;
  address: string;
  printName(lastName: string): void {
    console.log(this.firstName + " " + lastName);
  }
}

const company: Employee = {
  firstName : "Prabha",
  hobbies: ["Sports"]
}

const companyObject = new Company();
// companyObject.printName("Ramaswamy");

// implementing interface for a function

interface FunctionDefinition {
   // allows to have new properties
  (number1: number, number2: number): number;
}

let implementingFunctionDefinition: FunctionDefinition;
implementingFunctionDefinition = function(value1: number, value2: number) {
  return value1 * value2;
}  

// console.log(implementingFunctionDefinition(10, 20));

// interface inheritance
interface Address extends Employee {
  country: string;
}

class EmployeeDetail implements Address, Employee {
  firstName: string = "Tom";
  country: string = "India";
  printName(lastName: string) {
    console.log(this.firstName + " " + lastName + " lives in" + this.country);
  }
}

const EmployeeDetailObject = new EmployeeDetail();
// EmployeeDetailObject.printName("Riddle");
