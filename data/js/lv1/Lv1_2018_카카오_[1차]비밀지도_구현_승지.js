function solution(n, arr1, arr2) {
  answer = [];
  const zip = (a, b) => a.map((v, i) => [v, b[i]]);
  for ([i, j] of zip(arr1, arr2)) {
    answer.push(
      (i | j).toString(2).padStart(n, "0").replace(/1/g, "#").replace(/0/g, " ")
    );
  }
  return answer;
}
