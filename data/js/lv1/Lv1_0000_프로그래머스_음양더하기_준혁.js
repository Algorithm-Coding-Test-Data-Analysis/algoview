function solution(absolutes, signs) {
  let sum = 0;
  absolutes.forEach((num, index) => {
    if (signs[index]) sum += num;
    else sum -= num;
  });
  return sum;
}
