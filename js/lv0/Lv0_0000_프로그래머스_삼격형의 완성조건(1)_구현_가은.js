function solution(sides) {
  const arr = sides.sort((a, b) => a - b)
  return arr[0] + arr[1] > arr[2] ? 1 : 2
}