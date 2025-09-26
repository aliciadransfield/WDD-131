const pi = 3.14; //You often use uppercase for variables that don't change
let radius = 3;
let area = 0;
function circleArea(radius) {
    const area = radius * radius * pi;
    return area;
}
area = circleArea(3);
console.log(area)

area = radius * radius * pi;
console.log("Area 1:", area)
radius = 4;
area = circleArea(3);
console.log("Area 2:", area)