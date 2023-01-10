import Page from 'core/templates/page';

class Cart extends Page {

  constructor(id: string) {
    super(id);
  }

  render() {
    this.container.append(this.renderTitle('Cart Page'));
    return this.container;
  }
}
export default Cart;