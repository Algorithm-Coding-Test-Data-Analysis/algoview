import { headerHTML, hamburger } from './header.js';
import {
  sidebarHTML,
  sidebarMenuHighlight,
  sidebarScrollEvent,
  sidebarToggleEvent,
} from './sidebar.js';
import { footerHTML } from './footer.js';
import { toggleDarkMode } from './darkmode.js';

headerHTML();
hamburger();

footerHTML();

sidebarHTML();
sidebarMenuHighlight();
sidebarScrollEvent();
sidebarToggleEvent();

toggleDarkMode();
