abstract class Link {
  protected container: HTMLAnchorElement;

  constructor(idName: string, href: string) {
    this.container = document.createElement('a');
    this.container.id = idName;
    this.container.href = href;
  }

  render() {
    return this.container;
  }
}
export default Link;