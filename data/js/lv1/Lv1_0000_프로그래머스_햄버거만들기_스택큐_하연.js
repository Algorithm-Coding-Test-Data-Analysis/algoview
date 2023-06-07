function solution(ingredient) {
  const stk = [];
  let count = 0;
  ingredient.forEach(v => {
      stk.push(v);
      if (stk[stk.length-1] === 1 &&
          stk[stk.length-2] === 3 &&
          stk[stk.length-3] === 2 &&
          stk[stk.length-4] === 1) {
          count++;
          stk.splice(-4);
      }
  })
  return count;
}