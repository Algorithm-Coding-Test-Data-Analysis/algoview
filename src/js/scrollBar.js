const $scrollBarBox = document.createElement('div');
const $scrollBar = document.createElement('div');
$scrollBarBox.className = 'scroll-indicator';
$scrollBar.id = 'scroll-indicator-bar';

$scrollBarBox.appendChild($scrollBar);

document
  .querySelector('.sec-main')
  .insertAdjacentElement('afterbegin', $scrollBarBox);

window.onscroll = () => {
  const windowTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (windowTop / scrollHeight) * 100;

  document.getElementById('scroll-indicator-bar').style.width = scrolled + '%';
};
