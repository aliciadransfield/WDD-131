function convertGradeToPoints(grade) {

}

function calculateGpa(gpaPoints) {

}

function cleanGrade(grade) {
    return grade.trim().toUpperCase();
}

function getGrades() {
//get grades from input
    const gradesEl = document.querySelector("#grades");
//split grades on comma
    gradesEl.value.split(","); //brake apart and remove comma, creating an array
//clean up white space
//convert all grades to uppercase
    grades = grades.map(cleanGrade);
//return grade list
    return grades;
}

function calculateHandler(event) {
//get the grades
    const grades = getGrades();
    const gpaPoints=grades.map(convertGradeToPoints);
//calculate gpa
    const gpa = calculateGpa(gpaPoints);
//output to browser
    outputGpa(gpa, "#output");
}

function ourputGpa(gpa, selector) {

}

document.querySelector("#submitButton").addEventListener("click", calculateHandler);