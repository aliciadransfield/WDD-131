const themeSelector = document.querySelector("select");// replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function changeTheme() {
    const currentTheme = themeSelector.value;// check to see what the current value of our select is.
    console.log("Theme selected: ", currentTheme);// The current value is conveniently found in themeSelector.value!

    if (currentTheme === "dark") {// if the value is dark then:
        document.body.classList.add("dark");// add the dark class to the body
        logo.src="byui-logo_white.png"; }// change the source of the logo img to point to the white logo.
    else {// otherwise
        document.body.classList.remove("dark")// remove the dark class
        logo.src="byui-logo_blue.png" }// make sure the logo src is the blue logo.
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);