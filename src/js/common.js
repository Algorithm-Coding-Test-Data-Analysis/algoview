import { headerHTML, hamburger } from './header.js';
import {
  sidebarHTML,
  sidebarMenuHighlight,
  sidebarScrollEvent,
} from './sidebar.js';
import { footerHTML } from './footer.js';
import { toggleDarkMode } from './darkmode.js';

headerHTML();
hamburger();

sidebarHTML();
sidebarMenuHighlight();
sidebarScrollEvent();

footerHTML();

toggleDarkMode();
