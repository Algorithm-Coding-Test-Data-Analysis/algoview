function solution(n) {
  let odd = [];

  for(let i = 1; i <= n; i++){
    if(i % 2 === 1) {
      odd.push(i);
    }
  }
  return odd;
}