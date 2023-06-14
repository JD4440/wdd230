
async function getBusinessData() {
    const response = await fetch(data.json);
    const data = await response.json();
    console.table(data.business);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.business);
  }
  
  getBusinessData();
   
   function displayDirectory (directory) {
    
    const cards = document.querySelector('div.cards'); // select the output container element

  
    directory.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let dateofbirth = document.createElement('h3');
      let placeofbirth = document.createElement('h3');

  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${data.name}`;
      dateofbirth.textContent = `Date of Birth: ${prophet.birthdate}`;
      placeofbirth.textContent = `Place of Birth: ${prophet.birthplace}`;

  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(dateofbirth);
      card.appendChild(placeofbirth);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }) // end of forEach loop
  } // end of function expression

  prophetList = {};

 