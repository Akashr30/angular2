console.log("Hello World!");

let userName: string;
userName = 'Max';
// let userName = 'Max';
// userName = 27;

let age; // of type any
age = 27;
age = 'Max';
age = true;

//Array and Types
console.log("Array and Types");
let hobbies = ['Cooking', 'Driving', 'Sports'];
console.log(hobbies[0]);
// hobbies = [100];// assigning an array values
// hobbies = ['string']

let passion: any[] = ['Cooking', 'Driving', 'Sports'];
passion = [100];
// passion = 100;

//Tuples
console.log("Tuples");
let address: [number, string] = [ 93, 'Ascendas', 'chennai', 1];
address = [94, 'tidel', 1];
address.push("true");
console.log(address);

//Enum
console.log("Enum");
enum Color {
  Gray,
  Green,
  Blue = 100, // indexing
  Red
}

let greenColor: Color = Color.Green;
let blueColor: Color = Color.Blue;
let redColor: Color = Color.Red;
console.log(greenColor);
console.log(blueColor);
console.log(redColor);

// Using type in Function 
console.log("Function");
function returnUserName(): String {
  return 'Max';
  // return 27;  
}
console.log(returnUserName());

function printHello(): void {
  console.log('Hello');
}

//Argument Types
console.log("Argument Type Function");
let multiply :(a: number, b: number) => number;
multiply = multiplication;
function multiplication(num1: number, num2: number): number {
  return num1 * num2;
}
console.log(typeof multiply);

//Arrow Function
let myMultiply = (num1: number, num2: number) => num1 * num2;
console.log(myMultiply(2, 3));

//Objects
let userData: { name: string, age: number } = {
  age: 30,
  name: 'Max'
}

// userData = {
//   isAdmin: true,
//   age: 'Max'
// }

//Type Keyword
type complexType = { data: number[], output: (all: boolean) => number[] };

let complex: complexType = {
  data: [100, 3.99, 10],
  
  output: function (all: boolean): number[] {
    return this.data;
  }
}

// Union Types
let userAge: number | string;
userAge = 27;
userAge = '27';
// userAge = true;