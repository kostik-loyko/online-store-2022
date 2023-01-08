import Page from 'core/templates/page';

class Main extends Page {

  constructor(id: string) {
    super(id);
  }

  render() {
    this.container.append(this.renderTitle('Main Page'));
    window.location.hash = 'main-page';
    return this.container;
  }
}
export default Main;