var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
    }
    Person.prototype.getDesignation = function () {
        return this.designation;
    };
    Person.prototype.setDesignation = function (designation) {
        this.designation = designation;
    };
    return Person;
}());
var person = new Person('Prabha', 'prabhar');
console.log(person);
person.setDesignation('developer');
console.log(person.name, person.username);
// Inheritance
console.log('inheritance');
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(username) {
        var _this = _super.call(this, 'Alice', username) || this;
        _this.name = 'Alice';
        _this.gender = 'female';
        return _this;
    }
    Employee.prototype.printDetails = function () {
        console.log(this.name, this.username);
    };
    return Employee;
}(Person));
// let employee = new Employee('Keerthana', 'keerthanar');
var emp = new Employee('keerthanar');
emp.printDetails();
// getters & setters
var Company = /** @class */ (function () {
    function Company() {
    }
    Object.defineProperty(Company.prototype, "companyName", {
        get: function () {
            return name;
        },
        set: function (name) {
            if (name.length > 3) {
                this.name = name;
            }
            else {
                this.name = 'default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Company;
}());
var company = new Company();
console.log(company.companyName);
company.companyName = 'object frontier software';
console.log(company.companyName);
// static properties and methods
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.area = function (radius) {
        return this.pi * radius * radius;
    };
    Circle.pi = 3.14;
    return Circle;
}());
console.log(Circle.area(5));
// abstract class
var Address = /** @class */ (function () {
    function Address() {
    }
    Address.prototype.setCity = function (city) {
        this.city = city;
    };
    return Address;
}());
var University = /** @class */ (function (_super) {
    __extends(University, _super);
    function University(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    University.prototype.printAddress = function () {
        console.log(this.name, this.city);
    };
    return University;
}(Address));
var university = new University('Anna University');
university.setCity('Chennai');
university.printAddress();
// singleton
var Singleton = /** @class */ (function () {
    function Singleton(name) {
        this.name = name;
    }
    Singleton.getSingletonObject = function () {
        if (!Singleton.singletonObject) {
            Singleton.singletonObject = new Singleton('singleton sample');
        }
        return Singleton.singletonObject;
    };
    return Singleton;
}());
// let s1 = new Singleton();
var s2 = Singleton.getSingletonObject();
// s2.name = 'does not work';
//# sourceMappingURL=app.js.map