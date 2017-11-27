console.log("Generics");
function sampleFunction(data) {
    return data;
}
console.log(sampleFunction("Raj").length);
console.log(sampleFunction(21));
console.log(sampleFunction({
    name: "Raj",
    age: 21
}));
function genericsFunction(data) {
    return data;
}
console.log(genericsFunction("Raj").length);
console.log(genericsFunction(21));
console.log(genericsFunction({
    name: "Raj",
    age: 21
}));
var numbers = [1.520, 30.45];
numbers.push(10.45);
console.log(numbers);
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Raj", "Kumar"]);
printAll(["Ram", "Kumar"]);
function identity(args) {
    return args;
}
var myIdentity = identity;
var simpleMultiply = (function () {
    function simpleMultiply() {
    }
    simpleMultiply.prototype.multiply = function () {
        return this.baseValue * this.multiplyValue;
    };
    return simpleMultiply;
}());
var multiplyObj = new simpleMultiply();
multiplyObj.baseValue = 10;
multiplyObj.multiplyValue = 10;
console.log(multiplyObj.multiply());
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.multiply = function (baseValue, multiplyValue) { return baseValue * multiplyValue; };
console.log(myGenericNumber.multiply(10, 20));
