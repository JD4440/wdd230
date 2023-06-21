//header footer dates
document.querySelector('#footerdate').innerHTML = new Date().getFullYear();
document.querySelector('#lastupdated').innerHTML = document.lastModified;
document.querySelector('#currenttime').textContent = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(new Date());


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

