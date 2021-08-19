//객체의 생성자 연결에 call 사용

function Product(name, price) {
    this.name = name;
    this.price = price;
  
    if (price < 0) {
      throw RangeError('Cannot create product ' + this.name + ' with a negative price');
    }
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  function Clothes(name, price) {
    Product.call(this, name, price);
    this.category = 'clothes';
  }
  
  var pizza = new Food('dominos', 15000);
  var outter = new Clothes('jacket', 40000);

  

