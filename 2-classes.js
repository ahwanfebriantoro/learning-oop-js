// Lesson: A class is a template for generating objects during runtime.

// Product Class
function Product(_name, _price) {
  const name = _name;
  const price = _price;

  this.getName = function() {
    return name;
  }

  this.getPrice = function() {
    return price;
  }
}

// Basket Class
function Basket() {
  const products = [];
  
  this.addProduct = function(ammount, product) {
    products.push(...Array(ammount).fill(product));
  }

  this.calcTotal = function() {
    return products
      .map(product => product.getPrice())
      .reduce((a, b) => a + b, 0);
  }

  this.printShoppingInfo = function() {
    console.log('one has to pay in total: ' + this.calcTotal());
  }
}

// Creating a new instance of Product
const bread = new Product('bread', 4.5);
const water = new Product('water', 8.5)

// Creating a new instance of Basket
const basket = new Basket();

// Adding products to Basket
basket.addProduct(2, bread);
basket.addProduct(3, water);

// Showing info from Basket
basket.printShoppingInfo();