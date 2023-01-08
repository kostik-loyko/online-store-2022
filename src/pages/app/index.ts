import Header from 'core/components/header';
import Page from 'core/templates/page';
import Card from 'pages/card';
import ErrorPage from 'pages/error';
import Main from 'pages/main';
import Product from 'pages/product';

class App {
  private container: HTMLElement;
  private containerContent: HTMLElement;
  private header: Header;

  constructor() {
    this.container = document.body;
    this.containerContent = document.createElement('div');
    this.header = new Header('header', 'header');
  }

  private renderPage(idPage: string) {
    this.containerContent.innerHTML = '';
    let page: Page;
    if (idPage === 'main-page') {
      page = new Main(idPage);
    } else if (idPage === 'product-page') {
      page = new Product(idPage);
    } else if (idPage === 'card-page') {
      page = new Card(idPage);
    } else {
      page = new ErrorPage(idPage);
    }
    this.containerContent.append(page.render());
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
    this.container.append(this.containerContent);
    return this.container;
  }
}
export default App;