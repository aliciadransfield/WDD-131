const inspiration = [
    {
        name: "Alice in wonderland book cover",
        tags: ['font', 'colorPalette', ],
		description: 'Cover of Alice in wonderland where Alice is holding the white rabbit with ornamental details along the edges.',
		image: 'bookCover1',
    },
    {
        name: "Alice's Adventures in wonderland book cover",
        tags: ['font', 'concept', ],
		description: 'Cover of Alice in wonderland where there is a keyhole and inside the keyhole is a clock and the white rabbit.',
		image: 'bookCover2',
    },
    {
        name: "The Adventures of Alice in wonderland book cover",
        tags: ['layout', 'concept', 'imagery'],
		description: 'Cover of Alice in wonderland where Alice is walking through the forest with flowers and trees surrounding her. Above the path around where the title is and then on the title is the Queen of Hearts.',
		image: 'bookCover3',
    },
    {
        name: "The Adventures of Alice in wonderland Alice falling book cover",
        tags: ['concept', 'imagery'],
		description: 'Cover of Alice in wonderland where Alice is falling. Then there is ornamental art around the edges of the book the incorporates important imagery like the key, flamingos, and the Cheshire cat.',
		image: 'bookCover4',
    },
    {
        name: "The Adventures of Alice in wonderland cat keyhole book cover",
        tags: ['concept', 'layout', 'colorPalette'],
		description: 'Cover of Alice in wonderland with a keyhole and the Cheshire cat is at the top of the hole and the forest is below him.',
		image: 'bookCover5',
    },
    {
        name: "Color Palette",
        tags: ['colorPalette'],
		description: 'Color palette inspiration',
		image: 'colorPalette',
    },
    {
        name: "Den of Liars",
        tags: ['layout', 'concept'],
		description: 'Cover for Den of Liars',
		image: 'layout',
    },
    {
        name: "Norma",
        tags: ['layout', 'concept'],
		description: 'Norma poster where womans torso takes up most of the space with a man on one side and the title on the other.',
		image: 'layout1',
    },
    {
        name: "The Northman",
        tags: ['layout', 'concept', 'imagery'],
		description: 'The Northman poster where inside the silhouette of a crow is the silhouette of a man holding a bloody axe.',
		image: 'layout2',
    },
    {
        name: "Coraline Poster",
        tags: ['layout', 'colorPalette', 'imagery'],
		description: 'Coraline running outside and in a puddle is a reflection of a more colorful world',
		image: 'layout3',
    },
    {
        name: "Alice in Wonderland Pouring Tea",
        tags: ['typography', 'concept', 'imagery'],
		description: 'Silhouette of a man pouring tea',
		image: 'motifs',
    },
    {
        name: "Little Women",
        tags: ['typography', 'concept', 'imagery'],
		description: "Silhouette of 4 woman's faces with the silhouette of a women doing a particular hobby.",
		image: 'motifs2',
    },
    {
        name: "The Rift",
        tags: ['concept'],
		description: "A man dragging a body leaving a red line behind in the woods. ",
		image: 'motifs3',
    },
    {
        name: "Dracula",
        tags: ['concept', 'imagery', 'typography'],
		description: "The title dracula where the A are upside down",
		image: 'motifs4',
    },
    {
        name: "The Bed Moved",
        tags: ['concept', 'typography'],
		description: "Title of the Bed Moved where there is words and letters scrambled.",
		image: 'typography15',
    },
    {
        name: "The Lady in the Snow",
        tags: ['typography', 'layout'],
		description: "A lady standing in the snow surrounded by trees.",
		image: 'typography1',
    },
    {
        name: "The Red Shoes",
        tags: ['typography', 'concept', 'imagery'],
		description: "The legs of a ballerina wearing red shoes with a rose at her feet.",
		image: 'typography3',
    },
    {
        name: "Les Miserables",
        tags: ['concept'],
		description: "A man standing on a pile of wreckage with arm raised towards a white building with the French flag with red skies.",
		image: 'typography4',
    },
    {
        name: "Neverwhere",
        tags: ['concept', 'typography'],
		description: "A person walking up a long set of stairs into an unknown door.",
		image: 'typography5',
    },
    {
        name: "The Grey",
        tags: ['typography'],
		description: "A repetition of 'the grey' using different shades of grey and using variety of scale.",
		image: 'typography6',
    },
    {
        name: "Moby Dick",
        tags: ['typography', 'concept'],
		description: "There is a boat in the water with the title acting is in the shape of a whales tale and is acting as the sails.",
		image: 'typography7',
    },
    {
        name: "The Secret Club That Runs the World",
        tags: ['typography', 'layout'],
		description: "Black and white rectangles that look like wood planks with the title taking place of some of those wood planks.",
		image: 'typography8',
    },
    {
        name: "Elterror En La Litera Tura",
        tags: ['typography', 'imagery'],
		description: "Red background with black title where the bottom of the title is dripping like blood.",
		image: 'typography9',
    },
    {
        name: "Fahrenheit 451",
        tags: ['typography', 'imagery', 'concept'],
		description: "Quotes from the Fahrenheit 451 about burning creating a fire.",
		image: 'typography10',
    },
    {
        name: "The rules do not apply",
        tags: ['typography'],
		description: "On top of the title is drawn using a marker is a box with the author name and other text.",
		image: 'typography11',
    },
    {
        name: "All the Odes",
        tags: ['typography'],
		description: "The title and author name being connected by lines.",
		image: 'typography12',
    },
    {
        name: "New Gotham",
        tags: ['typography', 'imagery'],
		description: "A poster using different font styles of New Gotham to create a subway station",
		image: 'typography13',
    },
    {
        name: "Real Help",
        tags: ['typography', 'concept'],
		description: "The title has the E as a door.",
		image: 'typography14',
    }
];

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function imageTemplate(inspo) {
    return `<section class="inspo-img" data-tags="${inspo.tags.join(' ')}">
        <img src="images/${inspo.image}.png" alt="${inspo.description}" fetchpriority="high"/>
        <p class="image-title">${inspo.name}</p> 
    </section>`;
}


function renderImages(inspirationList) {
	const imagesOutput = document.getElementById("imageGallery");
	const imagesData = inspirationList.map((inspo) => imageTemplate(inspo)).join('');
	imagesOutput.innerHTML = imagesData;
}

renderImages(shuffleArray(inspiration));

const filterOptions = document.getElementById("filter-options");
const filterButton = document.querySelector(".galleryFilter button");

filterButton.addEventListener("click", filterItems);

function filterItems() {
  const selectedTags = Array.from(
    filterOptions.querySelectorAll('input[type="checkbox"]:checked')
  ).map((checkbox) => checkbox.value);

  const images = document.querySelectorAll(".inspo-img");

  images.forEach(img => {
    const itemTags = (img.dataset.tags || "").split(" ");
    const show =
      selectedTags.length === 0 ||
      selectedTags.some(tag => itemTags.includes(tag));
    
    img.style.display = show ? "block" : "none";
  });
}

filterItems();

/* function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}
handleResize();
window.addEventListener("resize", handleResize);

function viewHandler(event) {
  const clicked = event.target;
  if (clicked.tagName !== "IMG") return;

  document.body.insertAdjacentHTML("afterbegin", viewerTemplate);

  document.querySelector(".close-viewer")
    .addEventListener("click", closeViewer);
}

function closeViewer() {
  const viewer = document.querySelector(".viewer");
  viewer.remove();
}

document.querySelector(".gallery").addEventListener("click", viewHandler);
 */