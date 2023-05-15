function solution(s) {
  let isOpen = 0;
  s = s.split('');

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      isOpen++;
    } else {
      if (isOpen < 1) {
        return false;
      }
      isOpen--;
    }
  }
  return isOpen === 0 ? true : false;
}
