import Link from 'core/templates/link';
import '../../../assets/img/bg.jpg';

class Logo extends Link {
  constructor(idName: string, href: string) {
    super(idName, href);
  }

  private renderImg() {
    const containerImg = document.createElement('div');
    containerImg.className = 'logo-container-img';
    const img = document.createElement('img');
    img.className = 'logo-img';
    img.src = '../../../assets/img/bg.jpg';
    containerImg.append(img);
    this.container.append(containerImg);
  }

  private renderTitle() {
    const title = document.createElement('h1');
    title.textContent = 'Online Store 2022';
    this.container.append(title);
  }

  render() {
    this.renderImg();
    this.renderTitle();
    return this.container;
  }
}
export default Logo;