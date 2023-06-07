const COMPONENTS_CLASS = ['.header', '.sidebar', '.main', '.footer'];

export function toggleDarkMode() {
  const darkmode = document.getElementById('toggle');

  darkmode.addEventListener('click', () => {
    COMPONENTS_CLASS.forEach((component) =>
      document.querySelector(component).classList.toggle('dark')
    );
  });
}
