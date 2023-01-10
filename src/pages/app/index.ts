import { IdData } from 'core/components/constants';
import Header from 'core/components/header';
import Page from 'core/templates/page';
import Cart from 'pages/cart';
import ErrorPage from 'pages/error';
import Main from 'pages/main';
import Product from 'pages/product';

class App {
  private container: HTMLElement;
  private containerMain: HTMLElement;
  private header: Header;

  constructor() {
    this.container = document.body;
    this.containerMain = document.createElement('main');
    this.header = new Header('header', 'header');
  }

  private renderPage(idPage: string) {
    this.containerMain.innerHTML = '';
    let page: Page;
    if (idPage === IdData.MainID) {
      page = new Main(idPage);
    } else if (idPage === IdData.ProductID) {
      page = new Product(idPage);
    } else if (idPage === IdData.CartID) {
      page = new Cart(idPage);
    } else {
      page = new ErrorPage(idPage);
    }
    this.containerMain.append(page.render());
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      let hash = window.location.hash.slice(1);
      this.renderPage(hash);
    });
  }

  run() {
    this.container.append(this.header.render());
    this.renderPage('main-page');
    this.enableRouteChange();
    this.container.append(this.containerMain);
    return this.container;
  }
}
export default App;