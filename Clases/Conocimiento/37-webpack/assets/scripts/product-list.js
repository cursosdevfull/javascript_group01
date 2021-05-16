import { Product } from './product';
import { ProductItem } from './product-item';
import { ElementAttribute } from './element-attribute';
import { Component } from './component';

export class ProductList extends Component {
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
        'Almohada de pluma de ganso',
        400
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
