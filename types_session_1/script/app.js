console.log("Hello World!");
var myName;
myName = 'Max';
// let myName = 'Max';
// myName = 27;
var myRealAge; // of type any
myRealAge = 27;
myRealAge = 'Max';
myRealAge = true;
//Array and Types
console.log("Array and Types");
var hobbies = ['Cooking', 'Driving', 'Sports'];
console.log(hobbies[0]);
// hobbies = [100];// assigning an array values
// hobbies = ['string']
var passion = ['Cooking', 'Driving', 'Sports'];
passion = [100];
// passion = 100;
//Tuples
console.log("Tuples");
var address = [93, 'Ascendas', 'chennai', 1];
address = [94, 'tidel', 1];
address.push("true");
console.log(address);
//Enum
console.log("Enum");
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 100] = "Blue";
    Color[Color["Red"] = 101] = "Red";
})(Color || (Color = {}));
var myColor = Color.Green;
var anotherColor = Color.Blue;
var color = Color.Red;
console.log(myColor);
console.log(anotherColor);
console.log(color);
// Using type in Function 
console.log("Function");
function returnMyName() {
    return 'Max';
    // return 27;  
}
console.log(returnMyName());
function sayHello() {
    console.log('Hello');
}
//Argument Types
console.log("Argument Type Function");
var multiply;
multiply = multiplication;
function multiplication(num1, num2) {
    return num1 * num2;
}
console.log(typeof multiply);
//Arrow Function
var myMultiply = function (num1, num2) { return num1 * num2; };
console.log(myMultiply(2, 3));
//Objects
var userData = {
    age: 30,
    name: 'Max'
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// Union Types
var reelAge;
reelAge = 27;
reelAge = '27';
// reelAge = true;
//# sourceMappingURL=app.js.map