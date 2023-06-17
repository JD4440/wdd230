//const url = 'http://localhost:8000/JSON/data.json';
const url = 'https://jd4440.github.io/wdd230/chamber/JSON/data.json';

const cardbutton = document.querySelector("#card");
const listbutton = document.querySelector("#list");
const display = document.querySelector("cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

cardbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("cards");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("cards");
}

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.directory);  // note that we reference the prophet array of the data object given the structure of the json file
    displayDirectory(data.directory);
  }
  
  getBusinessData();
   
   function displayDirectory (directory) {
    
    const cards = document.querySelector('div.cards'); // select the output container element

  
    directory.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let logo = document.createElement('img');
      let name = document.createElement('h2');
      let address= document.createElement('h3');
      let phone = document.createElement('h3');
      let membership = document.createElement('h3');
      let website = document.createElement('h3');
    

  
      // Build the h2 content out to show the prophet's full name - finish the template string
      name.textContent = `${business.name}`;
      address.textContent = `${business.address}`;
      phone.textContent = `${business.phone}`;
      membership.textContent = `${business.membership}`;
      website.textContent = `${business.website}`;
      

  
      // Build the image portrait by setting all the relevant attribute
        logo.setAttribute('src', business.imageurl);
        logo.setAttribute('alt', `logo of ${business.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(logo);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(membership);
      card.appendChild(website);
  
      cards.appendChild(card);
    }) // end of forEach loop
  } // end of function expression

  businessList = {};
