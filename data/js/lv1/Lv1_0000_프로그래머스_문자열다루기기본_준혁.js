function solution(s) {
  const regex = /[a-zA-Z]/g;

  return !regex.test(s) ? s.length === 4 || s.length === 6 : false;
}
