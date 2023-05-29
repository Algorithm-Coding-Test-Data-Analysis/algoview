function solution(sizes) {
  let width = [];
  let height = [];
  sizes
    .map((x) => x.sort((a, b) => b - a))
    .map((x) => {
      width.push(x[0]);
      height.push(x[1]);
    });
  return Math.max(...width) * Math.max(...height);
}
