// Lesson: Encapsulation prevents access to data
// except through the object's functions.

// Product Class
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Basket Class
function Basket() {
  const products = [];
  
  this.addProduct = function(ammount, product) {
    products.push(...Array(ammount).fill(product));
  }

  this.calcTotal = function() {
    return products
      .map(product => product.price)
      .reduce((a, b) => a + b, 0);
  }

  this.printShoppingInfo = function() {
    console.log('one has to pay in total: ' + this.calcTotal());
    console.log(products);
  }
}

// Creating a new instance of Product
const bread = new Product('bread', 4.5);
bread.price = 50;

const water = new Product('water', 8.5)

// Creating a new instance of Basket
const basket = new Basket();

// Adding products to Basket
basket.addProduct(2, bread);
basket.addProduct(3, water);

// Showing info from Basket
basket.printShoppingInfo();