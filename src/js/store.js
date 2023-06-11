import { updateCharts } from './chartpage.js';

class Store {
  isDarkMode;

  get getDarkMode() {
    return this.isDarkMode;
  }

  set setDarkMode(newMode) {
    this.isDarkMode = newMode;
    if (window.location.pathname === '/') {
      updateCharts({ newMode });
    }
  }
}

const store = new Store();

export default store;
