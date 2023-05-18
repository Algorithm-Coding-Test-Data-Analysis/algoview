function solution(before, after) {
  const newArr1 = Array.from(before);
  const newArr2 = Array.from(after);
  const beforeArr = newArr1.sort().join('');
  const afterArr = newArr2.sort().join('');
  return beforeArr === afterArr ? 1 : 0;
}
