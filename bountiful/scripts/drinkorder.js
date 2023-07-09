const url = 'https://jd4440.github.io/wdd230/bountiful/json/data.json';
    
async function fruitFetch(url) {
  try {
      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          createOption(data);

      // Get input values
      const firstName = document.getElementById('firstName').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const fruit1 = document.getElementById('fruit1').value;
      const fruit2 = document.getElementById('fruit2').value;
      const fruit3 = document.getElementById('fruit3').value;
      const instructions = document.getElementById('instructions').value;

      // Get the current date
      const orderDate = new Date().toDateString();

      // Calculate the total nutrition values based on selected fruits
      const selectedFruits = [fruit1, fruit2, fruit3];
      let totalCarbs = 0, totalProtein = 0, totalFat = 0, totalSugar = 0, totalCalories = 0;
      selectedFruits.forEach(fruitName => {
        const fruit = data.find(fruit => fruit.name === fruitName);
        if (fruit) {
          totalCarbs += fruit.carbs;
          totalProtein += fruit.protein;
          totalFat += fruit.fat;
          totalSugar += fruit.sugar;
          totalCalories += fruit.calories;
        }
      });

      // Generate the formatted output
      const output = `
        <h2>Order Details:</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Order Date:</strong> ${currentDate}</p>
        <p><strong>Selected Fruits:</strong> ${selectedFruits.join(', ')}</p>
        <p><strong>Special Instructions:</strong> ${instructions}</p>
        <h2>Total Nutrition:</h2>
        <p><strong>Carbohydrates:</strong> ${totalCarbs}g</p>
        <p><strong>Protein:</strong> ${totalProtein}g</p>
        <p><strong>Fat:</strong> ${totalFat}g</p>
        <p><strong>Sugar:</strong> ${totalSugar}g</p>
        <p><strong>Calories:</strong> ${totalCalories}kcal</p>
      `;

      // Display the output
      document.getElementById('output').innerHTML = output;
    }
  })
}

