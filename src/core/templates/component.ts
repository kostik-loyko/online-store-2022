abstract class Component {
  protected container: HTMLElement;

  constructor(tagName: string, idName: string) {
    this.container = document.createElement(tagName);
    this.container.id = idName;
  }

  render() {
    return this.container;
  }
}
export default Component;