const url = 'https://jd4440.github.io/wdd230/bountiful/json/data.json';
    
async function fruitFetch(url) {
  try {
      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          console.log(data)

      //Poppulate options
      data.forEach((item)=>{
        let fruit1 = document.getElementById("fruit1")
        let fruit2 = document.getElementById("fruit2")
        let fruit3 = document.getElementById("fruit3")
        fruit1.innerHTML += `<option value = "${item.name}">${item.name}</option>`
        fruit2.innerHTML += `<option value = "${item.name}">${item.name}</option>`
        fruit3.innerHTML += `<option value = "${item.name}">${item.name}</option>`
      })
    }
  }
  catch(error){console.log(error)}
}

fruitFetch(url)

async function  drinkCard() {
  console.log("here")
    // Get the current date
    const orderDate = new Date().toDateString();
    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const fruit1 = document.getElementById('fruit1').value;
    const fruit2 = document.getElementById('fruit2').value;
    const fruit3 = document.getElementById('fruit3').value;
    const instructions = document.getElementById('instructions').value;

    // Calculate the total nutrition values based on selected fruits

    let data
    try {
      const  response = await fetch(url);
      if (response.ok) {
          data = await response.json();
          console.log(data)
      }
    }catch(error){
        console.log(error)
      }
    const selectedFruits = [fruit1, fruit2, fruit3];
    let totalCarbs = 0, totalProtein = 0, totalFat = 0, totalSugar = 0, totalCalories = 0;
    selectedFruits.forEach(fruitName => {
      const fruit = data.find(fruit => fruit.name === fruitName);
      if (fruit) {
      
        totalCarbs += fruit.nutritions.carbohydrates;
        totalProtein += fruit.nutritions.protein;
        totalFat += fruit.nutritions.fat;
        totalSugar += fruit.nutritions.sugar;
        totalCalories += fruit.nutritions.calories;
        }
      });

      console.log(totalCarbs,totalProtein,totalFat,totalSugar,totalCalories)
    
    // Generate the formatted output
    const output = `
      <h1>Order Details:</h1>
      <h2><strong>First Name:</strong> ${firstName}</h2>
      <h2><strong>Email:</strong> ${email}</h2>
      <h2><strong>Phone Number:</strong> ${phone}</h2>
      <h2><strong>Order Date:</strong> ${orderDate}</h2>
      <h2><strong>Selected Fruits:</strong> ${fruit1 + " " + fruit2 + " " + fruit3}</h2>
      <h2><strong>Special Instructions:</strong> ${instructions}</h2>
      <h1>Total Nutrition:</h1>
      <h2><strong>Carbohydrates:</strong> ${totalCarbs.toFixed(2)}g</h2>
      <h2><strong>Protein:</strong> ${totalProtein.toFixed(2)}g</h2>
      <h2><strong>Fat:</strong> ${totalFat.toFixed(2)}g</h2>
      <h2><strong>Sugar:</strong> ${totalSugar.toFixed(2)}g</h2>
      <h2><strong>Calories:</strong> ${totalCalories.toFixed(2)}kcal</h2>
    `;
      // Display the output
      document.getElementById('output').innerHTML = output;

      //Count number of orders
      let numOrders = parseInt(localStorage.getItem("num-orders") || 0)+1;
      localStorage.setItem("num-orders", numOrders);

      
    
}



document.querySelector("#drink-card-submit").addEventListener("click",drinkCard)




