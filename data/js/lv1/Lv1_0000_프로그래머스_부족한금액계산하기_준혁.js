function solution(price, money, count) {
  let totalNeedMoney = 0;

  for (let i = 1; i <= count; i++) {
    totalNeedMoney += i * price;
  }

  if (totalNeedMoney <= money) return 0;
  return totalNeedMoney - money;
}
