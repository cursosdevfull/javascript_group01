class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}
class Component {
  constructor(renderHookId, shouldRenderer = true) {
    this.hookId = renderHookId;
    if (shouldRenderer) {
      this.render();
    }
  }

  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }

    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  constructor(renderHookId) {
    super(renderHookId);
  }

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `Total: S/.${this.totalAmount.toFixed(2)}`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );

    return sum;
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
      <h2>Total: 0</h2>
      <button>Order Now</button>
    `;
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement('li', 'product-item');
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
  }
}

class ProductList extends Component {
  products = [];

  constructor(renderHookId) {
    super(renderHookId);
    this.fetchData();
  }

  fetchData() {
    this.products = [
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
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this.products) {
      new ProductItem(prod, 'prod-list');
    }
  }

  render() {
    this.createRootElement('ul', 'product-list', [
      new ElementAttribute('id', 'prod-list'),
    ]);
    if (this.products && this.products.length > 0) {
      this.renderProducts();
    }
  }
}

class Shop {
  constructor() {
    this.render();
  }

  render() {
    this.cart = new ShoppingCart('app');
    new ProductList('app');
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
