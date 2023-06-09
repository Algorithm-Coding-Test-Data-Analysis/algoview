import { headerHTML, hamburger } from './header.js';
import { sideBarHTML, sidebarMenuHighlight } from '/src/js/sidebar.js';
import { footerHTML } from './footer.js';
import { toggleDarkMode } from './darkmode.js';

headerHTML();
hamburger();

sideBarHTML();
sidebarMenuHighlight();

footerHTML();

toggleDarkMode();
