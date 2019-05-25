// Class Product
class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

// Class Basket
class Basket {
  constructor() {
    this.products = []
  }

  addProduct(ammount, product) {
    this.products.push(...Array(ammount).fill(product));
  }

  total() {
    return this.products.reduce((a, b) => a + b.price, 0)
  }

  printShoppinglist() {
    this.products.forEach((product) => {
      console.log(`\nName: ${product.name}, Price: ${product.price}`)
    })
  }

  checkout() {
    this.products = []
  }
}

// Class Book
class Book extends Product {
  constructor(name, price, description, author, isbn, pages) {
    super(name, price, description);
    this.author = author;
    this.isbn = isbn;
    this.pages = pages;
  }
}

const pan = new Product('Pan', 4.5, 'Este es un rico Pan');
const botellaAgua = new Product('Botella de Agua', 8.5, 'El agua ligera');
const sopa = new Product('Sopa', 10.5, 'Sopitas');
const origen = new Book('Origen', 350, 'Una descripción del libro', 'Dan Brown', 'ISBN89327493279', 347);

const cesta = new Basket();
cesta.addProduct(3, pan);
cesta.addProduct(2, botellaAgua);
cesta.addProduct(5, sopa);
cesta.addProduct(1, origen);

console.log(`Total: ${cesta.total()}`)
cesta.printShoppinglist()