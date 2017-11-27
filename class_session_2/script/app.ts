class Person {
    name: string;
    private designation: string;
    protected gender: string;

    constructor(name: string, public username: string) { // creating a new property using the constructor
        this.name = name;
    }

    public getDesignation(): string {
        return this.designation;
    }

    public setDesignation(designation: string): void {
        this.designation = designation
    }
}

let person = new Person('Prabha', 'prabhar');
console.log(person);
person.setDesignation('developer');
console.log(person.name, person.username);

// Inheritance
console.log('inheritance');

class Employee extends Person {
    name = 'Alice';

    constructor(username: string) {
        super('Alice', username);
        this.gender = 'female';
    }

    printDetails(): void {
        console.log(this.name, this.username);
    }
}

// let employee = new Employee('Keerthana', 'keerthanar');
let emp = new Employee('keerthanar')
emp.printDetails();

// getters & setters
class Company {
    private name: string;

    get companyName() {
        return name;
    }

    set companyName(name: string) {
        if (name.length > 3) {
            this.name = name;
        } else {
            this.name = 'default';
        }
    }
}

let company = new Company();
console.log(company.companyName);
company.companyName = 'object frontier software';
console.log(company.companyName);

// static properties and methods
class Circle {
    static pi: number = 3.14;
    static area(radius: number): number {
        return this.pi * radius * radius;
    }
}
console.log(Circle.area(5));

// abstract class
abstract class Address {
    city: string;

    abstract printAddress(): void;
    public setCity(city: string): void {
        this.city = city;
    }
}

class University extends Address {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    printAddress() {
        console.log(this.name, this.city);
    }
}

let university = new University('Anna University');
university.setCity('Chennai');
university.printAddress();

// singleton
class Singleton {
    private static singletonObject: Singleton;
    private constructor(public readonly name: string) {}

    static getSingletonObject() {
        if (!Singleton.singletonObject) {
            Singleton.singletonObject = new Singleton('singleton sample');
        }
        return Singleton.singletonObject;
    } 
}

// let s1 = new Singleton();
let s2 = Singleton.getSingletonObject();
// s2.name = 'does not work';
