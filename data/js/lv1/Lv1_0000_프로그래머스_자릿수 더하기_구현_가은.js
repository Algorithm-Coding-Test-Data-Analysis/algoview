function solution(n){
  return (n + '').split("").reduce((a, c) => parseInt(a) + parseInt(c), 0);
}