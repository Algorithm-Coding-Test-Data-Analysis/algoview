function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;
  return babbling.filter(v => !regexp1.test(v) && regexp2.test(v)).length;
}