import Component from 'core/templates/component';

class Total extends Component {
  constructor(tagName: string, idName: string) {
    super(tagName, idName);
  }

  private renderTitle() {
    const title = document.createElement('b');
    title.textContent = 'Total price:';
    this.container.append(title);
  }

  render() {
    this.renderTitle();
    return this.container;
  }
}
export default Total;