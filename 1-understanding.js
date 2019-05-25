// Lesson: An object modeled on real-world
// things consists of data and functions

// Generating objects
const bread = { name: 'Bread', price: 4.5 }; // new Product('Bread', 4.5);
const water = { name: 'Water', price: 8.5 }; // new Product('Water', 8.5);

// Added array of objects
const basket = []; // new Basket();
basket.push(bread); // Adding object to basket
basket.push(bread); // Adding object to basket
basket.push(water); // Adding object to basket
basket.push(bread); // Adding object to basket
basket.push(water); // Adding object to basket

// Object-Oriented Programming
// basket.addProduct(2, bread);

// Getting prices from products
const prices = basket.map(product => product.price);

// Calculating total from products in baskets
let total = 0;
prices.forEach((value) => {
  total += value;
});

// Calculating total from products in baskets using Reduce
// const prices = basket
//   .map(product => product.price)
//   .reduce((a, b) => a + b, 0);

// basket.printShoppingInfo();
console.log(total); // Show total from products in basket