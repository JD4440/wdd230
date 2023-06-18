//const url = 'http://localhost:8000/JSON/data.json';
const url = 'https://jd4440.github.io/wdd230/chamber/JSON/data.json';

async function getBusinessData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.directory);  
  displayDirectory(data.directory);
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#business-container");



listbutton.addEventListener("click", () => {
  display.classList.remove('cards')
  display.classList.add("list");
})

gridbutton.addEventListener("click", () => {
  display.classList.remove("list");
  display.classList.add('cards')
})


  //business cards
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





