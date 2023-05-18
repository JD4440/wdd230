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

