import { headerHTML, onClickHeader } from './header.js';
import { sideBarHTML, sidebarMenuHighlight } from '/src/js/sidebar.js';
import { footerHTML } from './footer.js';

headerHTML();
onClickHeader();

sideBarHTML();
sidebarMenuHighlight();

document.querySelector('.footer').innerHTML = footerHTML();
