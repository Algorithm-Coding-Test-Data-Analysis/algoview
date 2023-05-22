function solution(brown, yellow) {
  let a = brown - 4;
  let b = 1;

  while (true) {
    if (a == (yellow / b) * 2 + b * 2) {
      break;
    }
    b++;
  }

  return [yellow / b + 2, b + 2];
}
