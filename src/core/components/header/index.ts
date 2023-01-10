import Component from 'core/templates/component';
import { IdData, linksData } from '../constants';
import CartIcon from './cart';
import Logo from './logo';
import Total from './total';

class Header extends Component {
  private logo: Logo;
  private total: Total;
  private cartIcon: CartIcon;

  constructor(tagName: string, idName: string) {
    super(tagName, idName);
    this.logo = new Logo('logo', `#${IdData.MainID}`);
    this.cartIcon = new CartIcon('cart-icon', `#${IdData.CartID}`);
    this.total = new Total('div', 'total');
  }

  private renderHeader() {
    this.container.append(this.logo.render(),
      this.total.render(), this.cartIcon.render());
  }

  render() {
    this.renderHeader();
    return this.container;
  }
}
export default Header;