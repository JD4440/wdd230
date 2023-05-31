// get all imgs with data-src attribute
const imaginesToLoad = document.querySelectorAll("img[data-src]");

//optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

//first check to see if Intersection Observer is supported
if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items,observer) => {
        items.forEach((item) => {
        });
    }, imgOptions);

    //Loop through each img and check status and load if necessary 
    imaginesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
}
else { // just load ALL images if not supported
    imaginesToLoad.forEach((img) => {
        loadImages(img);
});
}



const date1 = document.querySelector("#date1");

try {
    const options = {year: "numeric"};

date1.innerHTML = `<span class="highlight">${new Date().toLocaleDateString("en-US", options)}</span>`;} 
catch (e) {console.log("Error with code or your browser does not support Locale");}

const modified1 = document.querySelector("#modified1");
modified1.innerHTML = new Date(document.lastModified);