const url = './JSON/data.json';
    
    // Fetch fruit data from the provided JSON source
    fetch('url')
      .then(response => response.json())
      .then(data => {
        // Populate fruit select elements
        const fruitSelects = document.querySelectorAll('select[id^="fruit"]');
        data.forEach(fruit => {
          fruitSelects.forEach(select => {
            const option = document.createElement('option');
            option.value = fruit.name;
            option.textContent = fruit.name;
            select.appendChild(option);
          });
        });
      });

    // Handle form submission
    document.getElementById('drinkForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Get input values
      const firstName = document.getElementById('firstName').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const fruit1 = document.getElementById('fruit1').value;
      const fruit2 = document.getElementById('fruit2').value;
      const fruit3 = document.getElementById('fruit3').value;
      const instructions = document.getElementById('instructions').value;

      // Get the current date
      const currentDate = new Date().toLocaleDateString();

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
    });