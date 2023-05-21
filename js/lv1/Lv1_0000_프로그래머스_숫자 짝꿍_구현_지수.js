function solution(X, Y) {
  let xArr = X.split("");
  let yArr = Y.split("");
  let result = "";

  for (let i = 0; i < 10; i++) {
    const curX = xArr.filter((a) => Number(a) === i).length;
    const curY = yArr.filter((a) => Number(a) === i).length;
    result += String(i).repeat(Math.min(curX, curY));
  }

  if (result === "") return "-1";
  if (Number(result) === 0) return "0";
  return result
    .split("")
    .sort((a, b) => Number(b) - Number(a))
    .join("");
}
