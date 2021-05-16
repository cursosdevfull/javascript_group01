import { ShoppingCart } from './shopping-cart';
import { ProductList } from './product-list';

export class Shop {
  constructor() {
    this.render();
  }

  render() {
    this.cart = new ShoppingCart('app');
    new ProductList('app');
  }
}
