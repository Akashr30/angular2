//es6 features
console.log("const keyword");
var maxLevel = 100;
console.log(maxLevel);
// maxLevel = 99;
// block scope
console.log("block scope");
var reelAge = 27;
function reset() {
    // console.log(reelAge);
    var reelAge = 22;
    console.log(reelAge);
}
reset();
console.log(reelAge);
// spread operator
console.log("spread operator");
var numbers = [1, 10, 99, -5];
console.log(Math.max.apply(Math, numbers));
// rest operator
console.log("rest operator");
function prepareArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(prepareArray(1, 2, 3));
// destructuring array
console.log("destructuring array");
var numberArray = prepareArray(1, 2, 3);
var number1 = numberArray[0], number2 = numberArray[1];
console.log(number1, number2);
// destructuring object
console.log("destructuring object");
var user = {
    age: 30,
    name: 'Max'
};
var userName = user.name, age = user.age;
console.log(userName, age);
//template literal
console.log("Template Literal");
var templateLiteral = "Hi, I am " + userName + " ";
console.log(templateLiteral);
//# sourceMappingURL=app.js.map