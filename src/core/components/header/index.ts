import { linksData } from '../constants';

class Header {
  protected container: HTMLElement;

  constructor(tagName: string, idName: string) {
    this.container = document.createElement(tagName);
    this.container.id = idName;
  }

  protected renderLinks() {
    linksData.forEach(linkData => {
      const link = document.createElement('a');
      link.textContent = linkData.title;
      link.href = `#${linkData.id}`;
      this.container.append(link);
    });
  }

  render() {
    this.renderLinks();
    return this.container;
  }
}
export default Header;