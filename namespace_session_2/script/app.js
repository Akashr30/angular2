var Person = /** @class */ (function () {
    function Person(name, gender, experience) {
        this.experience = experience;
        this.name = name;
        this.gender = gender;
    }
    Person.prototype.getGender = function () {
        return this.gender;
    };
    Person.prototype.printGender = function () {
        console.log(this.getGender());
    };
    return Person;
}());
var person = new Person('Prabha', 'female', 1);
console.log(person);
person.printGender();
//# sourceMappingURL=app.js.map