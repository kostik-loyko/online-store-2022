import Page from 'core/templates/page';

class ErrorPage extends Page {

  constructor(id: string) {
    super(id);
  }

  render() {
    this.container.append(this.renderTitle('Error Page'));
    return this.container;
  }
}
export default ErrorPage;