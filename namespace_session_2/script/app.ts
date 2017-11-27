// namespace MyMath {
    const PI = 3.14;
    // export while using namespace
    function calculateCircumference(diameter: number): number {
        return PI * diameter;
    }
    
    function calculateRectangle(width: number, length: number) {
        return width * length;
    }
// }

console.log(calculateCircumference(2));
console.log(calculateRectangle(3, 4));
