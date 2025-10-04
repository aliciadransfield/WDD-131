//Activity 1
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`//the html string made from step
}
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("");// set the innerHTML


//Activity 2
const letterGrade = ["A", "B", "A"];
function letterGradePoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    }
    else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpaPoints = letterGrade.map(letterGradePoints);


//Activity 3
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
},0);
const gpa = pointsTotal / gpaPoints.length;
console.log(gpa);


//Activity 4
const fruit = ["watermelon", "peach", "apple", "tomato", "grape"];
const result = fruit.filter((word) => word.length < 6);
console.log(result)


//Activity 5
const number = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = number.indexOf(luckyNumber);


//push adds an item to the end
//forEach(callback(currentValue [, index [, array]])) used for callbacks a function makes sure the function applies to the entire array      if something is in square brackets it is optional        Gives an undefined value
//function passed into another function
// => arrow function lamda and is very simple and is a more consice way to write it
//const square = function (number {return number * number})
//const square = (number) => {return number * number}

//const steps = ["one", "two", "three"];
//function makeList(item) {
//    const listElement = document.getElementById("myList");
//    listElement.innerHTML += `<li>${item}</li>`
//}

//steps.forEach(makeList);
//30x44px needs to be at least this big

//map is used to transform a list into a list of something else and it does ont modify the original array
