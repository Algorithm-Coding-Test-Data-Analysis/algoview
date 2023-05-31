function solution(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    for (let k = 0; k < arr1[i].length; k++) {
      sum.push(arr1[i][k] + arr2[i][k]);
    }
    result.push(sum);
  }
  return result;
}
