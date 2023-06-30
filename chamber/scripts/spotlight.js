const urlspotlight = './JSON/data.json';
//create an array 
//Filter the array for Silber and Gold Memberships
// if membership === "silver" or membership ==='gold'
//From the filtered results chosse 3 random businesses

async function getBusinessData() {
  let directoryList = []
  const response = await fetch(urlspotlight);
  const data = await response.json();
 
  directoryList = (data.directory).filter(item => item.membership == "Gold Member" || item.membership == "Silver Member")
  
  let spotlightarray = []
  for(let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random()*directoryList.length)
    spotlightarray.push(directoryList.splice(random,1))
  }
  console.log(spotlightarray)
  displayDirectory(spotlightarray);
}


  //business cards
  getBusinessData();
   
   function displayDirectory (businesses) {
    
    const spotlightContainer = document.querySelector('.sec-spotlight'); // select the output container element

  
    businesses.forEach((business) => {
      // Create elements to add to the div.cards element
      
      spotlightContainer.innerHTML += `
        <div>
        <img src = "${business[0].imageurl}" alt = "${business[0].name} logo"/>
        <h3>${business[0].name}</h3>
        <h3>${business[0].phone}</h3>
        <h3>${business[0].Membership}</h3>
        </div>
      `
      
    }) // end of forEach loop
  } // end of function expression