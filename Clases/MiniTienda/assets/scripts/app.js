class Product {
  /*   title;
  imageUrl;
  description;
  price; */

  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log('adding product to cart');
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
    <div>
      <img src="${this.product.imageUrl}" alt="${this.product.title}">
      <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>S/.${this.product.price} // US\$${
      Math.floor((this.product.price / 3.8) * 100) / 100
    }</h3>
        <p>${this.product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
    `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'Almohada',
      'https://static8.depositphotos.com/1177973/1040/i/600/depositphotos_10404781-stock-photo-bright-pillows-isolated-on-white.jpg',
      'Almohada de lujo',
      200
    ),
    new Product(
      'Sábanas',
      'https://ep01.epimg.net/elpais/imagenes/2018/06/07/icon/1528362397_392956_1528372261_noticia_normal.jpg',
      'Sábanas de seda egipcia',
      650
    ),
  ];

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();

/* class Person {
  name;
  lastname;
}



const nameCustomer = document.getElementById('name');
const lastnameCustomer = document.getElementById('lastname');
const btnSend = document.getElementById('send');

const listPersons = [];

const addPerson = () => {
  if (
    nameCustomer.value.trim() === '' ||
    lastnameCustomer.value.trim() === ''
  ) {
    return;
  }

  const person = new Person();
  person.name = nameCustomer.value;
  person.lastname = lastnameCustomer.value;

  listPersons.push(person);
  console.log(listPersons);

  nameCustomer.value = '';
  lastnameCustomer.value = '';
};

btnSend.addEventListener('click', addPerson);
 */
