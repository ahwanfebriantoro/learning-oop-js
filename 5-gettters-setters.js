function Product(_name, _price) {
  const name = _name;
  const price = _price;

  // Getter
  this.getName = function() {
    return name;
  }

  this.getPrice = function() {
    return price;
  }

  // Setter
  this.setName = function(newName) {
    name = newName;
  }
}