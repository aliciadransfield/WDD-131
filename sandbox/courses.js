const aCourse = {
  "code": "CSE121b",
  "name": "Javascript Language",
  "sections": [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'},
  ],

  enrollStudent: function (sectionNum) {
    console.log("inenrollStudents", this);
    const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum === sectionNum
    );
    if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled++;
        sectionTemplate(this.sections);
    }
  },
  dropStudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNumb == sectionNum
    );
    if (sectionIndex  >=0) {
        this.sections[sectionIndex].enrolled--;
        sectionTemplate(this.sections);
    }
  },
}


function courseList(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name; //not inserting any html textContent is the best option
    courseCode.textContent = course.code;
}

function sectionTemplate(section) {
    return `<tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
            </tr>` //`` used for template form
};

function renderSections(sections) {
    //get reference to section element
    const sectionsEl = document.querySelector("#sections");
    //convert from javaScript to HTML
    const htmlStrings = sections.map(sectionTemplate); //needs a callback as to how to transform a string
    //insert the HTML string into the sections element
    sectionsEl.innerHTML = htmlStrings.join(""); //.join requires an empty string unless you want characters between array items. 
};

function clickHandler(event) {
  aCourse.enrollStudent(2)
  console.log("inclickhandler", this);
}

courseList(aCourse);
renderSections(aCourse.sections);
document.querySelector("#enrollStudent").addEventListener("click", clickHandler);

/* aCourse["code"]
{} are object literals and are used to create objects 
 const fieldName = "code"; 
 aCourse[fieldName]  You don't know which field is going to be used
 keys that store data are properties, keys that store functions are called methods */

//to access the first object in an array you go [0] for a multi dimentional array you do [0][0}
// A good way to organize is to do a function { name = {'id'='', amount = "" }}