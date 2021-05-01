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
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>S/.${prod.price}</h3>
          <p>${prod.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
