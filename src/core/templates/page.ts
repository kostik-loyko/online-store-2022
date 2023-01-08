abstract class Page {
  protected container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  protected renderTitle(title: string) {
    const titlePage = document.createElement('h1');
    titlePage.textContent = title;
    return titlePage;
  }

  render() {
    return this.container;
  }
}
export default Page;