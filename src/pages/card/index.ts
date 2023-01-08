import Page from 'core/templates/page';

class Card extends Page {

  constructor(id: string) {
    super(id);
  }

  render() {
    this.container.append(this.renderTitle('Card Page'));
    return this.container;
  }
}
export default Card;