const newParagraph = document.createElement("p"); //declaring a new variable        Uses camel case so every new word is capitalized    Uses a function it will create a new paragraph element and store it in the variable. 
newParagraph.innerText = "Added with Javascript!"; //modifies the text of the paragraph   inner text adds just text like a string, if we did innerHTML it would recognize that some of it is HTML
document.body.append(newParagraph); //adds the new paragraph to the body.

const newImage = document.createElement("img")
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random Image");
document.body.append(newImage);

const myList = ["one", "two", "three"]
const newDiv = document.createElement("div");
newDiv.innerHTML = `<ul><li>One</li><li>Two</li><li>Three</li></ul>`;
document.body.appendChild(newDiv);