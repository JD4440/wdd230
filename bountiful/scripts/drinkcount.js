let numOrders = parseInt(localStorage.getItem("num-orders") || 0);
localStorage.setItem("num-orders", numOrders);
let numberOfOrders = document.querySelector('#orderNumber');

      
numberOfOrders.textContent = localStorage.getItem("num-orders");
console.log(numberOfOrders)