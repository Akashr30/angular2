// interface definition sample
function greeting(personObject) {
    console.log("Hello " + personObject.company);
}
var personObject = {
    name: "Prabha",
    company: "OFS"
};
greeting(personObject);
// greeting()
// interface defining type
function typeDefinitionSample(person) {
    console.log("Hello " + person.name);
}
typeDefinitionSample(personObject);
var Company = /** @class */ (function () {
    function Company() {
        this.firstName = "Prabha";
    }
    Company.prototype.printName = function (lastName) {
        console.log(this.firstName + " " + lastName);
    };
    return Company;
}());
var company = {
    firstName: "Prabha",
    hobbies: ["Sports"]
};
var companyObject = new Company();
var implementingFunctionDefinition;
implementingFunctionDefinition = function (value1, value2) {
    return value1 * value2;
};
var EmployeeDetail = /** @class */ (function () {
    function EmployeeDetail() {
        this.firstName = "Tom";
        this.country = "India";
    }
    EmployeeDetail.prototype.printName = function (lastName) {
        console.log(this.firstName + " " + lastName + " lives in" + this.country);
    };
    return EmployeeDetail;
}());
var EmployeeDetailObject = new EmployeeDetail();
// EmployeeDetailObject.printName("Riddle");
