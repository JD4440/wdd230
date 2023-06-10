//header footer dates
document.querySelector('#footerdate').innerHTML = new Date().getFullYear();
document.querySelector('#lastupdated').innerHTML = document.lastModified;
document.querySelector('#currenttime').textContent = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(new Date());

//Hidden time form submission
document.querySelector('#hiddentime').textContent = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(new Date());

//hamburger menu
function toggleMenu() {
    document.querySelector(".nav-menu").classList.toggle("open");
    document.querySelector(".hamburger").classList.toggle("open");
}

const x = document.querySelector(".hamburger");
x.onclick = toggleMenu;

document.querySelectorAll(".nav-link").onclick = toggleMenu;

//display banner on Monday and Tursday
const today = new Date().getDay();
if (today === 1 || today === 2) {
    document.getElementById("banner").style.display = "block";
}

//Lazy Load Images
// Gather the images to load
let imagesToLoad = document.querySelectorAll("img[data-src]");

// Set up the load images function which switches the src and the data-src attributes.
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};


// Add an intersection observer 
const callback = (items, observer) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      loadImages(item.target);
      observer.unobserve(item.target);
    }
  });
};

// Set up the options
let options = {
  threshold: 0.1
};

// Create an observer
const observer = new IntersectionObserver(callback, options);

// Register each image with the intersection observer
imagesToLoad.forEach((img) => {
  observer.observe(img);
});

//Number of Visits
// number of visits

const visitsDisplay = document.querySelector("#num-visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

function displayNumVisits (visitsDisplay, numVisits) {
    if (!visitsDisplay) {
        return;
    } else {
        if (numVisits != 0) {
            visitsDisplay.textContent = numVisits;
        } else {
            visitsDisplay.textContent = `This is your first visit!`;
        }
    }
}

displayNumVisits(visitsDisplay, numVisits);

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

