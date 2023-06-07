function solution(n, numlist) {
  return numlist.filter((el) => el % n === 0)
}