//es6 features
console.log("const keyword")
const maxLevel = 100;
console.log(maxLevel);
// maxLevel = 99;

// block scope
console.log("block scope")
let reelAge: number = 27;
function reset() {
  // console.log(reelAge);
  let reelAge: number = 22;
  console.log(reelAge);
}

reset();
console.log(reelAge);

// spread operator
console.log("spread operator");
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));

// rest operator
console.log("rest operator");
function prepareArray(...args: number[]): number[] {
  return args;
}
console.log(prepareArray(1, 2, 3));

// destructuring array
console.log("destructuring array");
let numberArray: number[] = prepareArray(1, 2, 3);
let [number1, number2] = numberArray;
console.log(number1, number2);

// destructuring object
console.log("destructuring object");
let user: { name: string, age: number } = {
  age: 30,
  name: 'Max'
}
let { name: userName, age} = user;
console.log(userName, age);

//template literal
console.log("Template Literal");
let templateLiteral = `Hi, I am ${userName} `;
console.log(templateLiteral);