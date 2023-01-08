import Page from 'core/templates/page';

class Product extends Page {

  constructor(id: string) {
    super(id);
  }

  render() {
    this.container.append(this.renderTitle('Product Page'));
    return this.container;
  }
}
export default Product;