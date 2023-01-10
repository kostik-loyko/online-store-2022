import Link from 'core/templates/link';
import '../../../assets/img/bg.jpg';

class CartIcon extends Link {
  constructor(idName: string, href: string) {
    super(idName, href);
  }

  private renderCartIcon() {
    const containerImg = document.createElement('div');
    containerImg.className = 'cart-container-img';
    const img = document.createElement('img');
    img.className = 'cart-img';
    img.src = '../../../assets/img/bg.jpg';
    containerImg.append(img);
    this.container.append(containerImg);
  }

  private renderCountProduct() {
    const title = document.createElement('b');
    title.textContent = '27';
    this.container.append(title);
  }

  render() {
    this.renderCartIcon();
    this.renderCountProduct();
    return this.container;
  }
}
export default CartIcon;