import { footerHTML } from './footer.js';
import { headerHTML, onClickHeader } from './header.js';

headerHTML();
onClickHeader();

document.querySelector('.footer').innerHTML = footerHTML();
