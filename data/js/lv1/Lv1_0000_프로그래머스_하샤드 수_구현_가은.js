function solution(x) {
  let add = x.toString().split("").map(Number).reduce((a, c) => a + c);
  return x % add === 0 ? true : false;
}