// Menu toggle
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("hide");
}
menuButton.addEventListener("click", toggleMenu);

// Resize handler
function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}
handleResize();
window.addEventListener("resize", handleResize);

// Viewer template function
function viewHandler(event) {
  const clicked = event.target;
  if (clicked.tagName !== "IMG") return;

  // swap small image with full image
  const srcParts = clicked.getAttribute("src").split("-");
  const newSrc = srcParts[0] + "-full.jpg";

  const viewerTemplate = `
    <div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${newSrc}" alt="${clicked.alt}">
    </div>`;

  document.body.insertAdjacentHTML("afterbegin", viewerTemplate);

  document.querySelector(".close-viewer")
    .addEventListener("click", closeViewer);
}

function closeViewer() {
  const viewer = document.querySelector(".viewer");
  viewer.remove();
}

// Attach click listener to gallery
document.querySelector(".gallery").addEventListener("click", viewHandler);
