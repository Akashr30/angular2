console.log("Generics");
// Creating reusable components is Generics.
// Being able to create a component that can be work over a variety of types rather than a single one.

//sample function

function sampleFunction(data: any) {
    return data;
}

console.log(sampleFunction("Raj").length);
console.log(sampleFunction(21));
console.log(sampleFunction({
    name: "Raj",
    age: 21
}));


// Generic function

function genericsFunction<T>(data: T) {
    return data;
}

console.log(genericsFunction("Raj").length); // length = 3
console.log(genericsFunction<number>(21));
console.log(genericsFunction({
    name: "Raj",
    age: 21
}));


//Array (Built-in generics)

const numbers: Array<number> = [1.520, 30.45];
numbers.push(10.45);
// numbers.push("10");  // Compilation Error
console.log(numbers);


//Generic Array

function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}

printAll<string>(["Raj", "Kumar"])
printAll(["Ram", "Kumar"])

//sample class

class simpleMultiply {
    baseValue;
    multiplyValue;
    multiply() {
        return this.baseValue * this.multiplyValue;
    }
}

const multiplyObj = new simpleMultiply();
multiplyObj.baseValue = 10;
multiplyObj.multiplyValue = 10;
// multiplyObj.baseValue = "something"; // Error - NaN
console.log(multiplyObj.multiply());


//Generic class with more than one generics

class GenericNumber<U extends number | string, T extends U> {
    baseValue: U;
    multiplyValue: T;
    multiply: (baseValue: U, multiplyValue: T) => U;
}

let myGenericNumber = new GenericNumber<number, number>();
myGenericNumber.multiply = function(baseValue, multiplyValue) { return baseValue * multiplyValue; };
console.log(myGenericNumber.multiply(10, 20));
