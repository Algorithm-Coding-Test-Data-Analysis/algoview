function solution(board, moves) {
  const basket = []
  let cnt = 0
  const boardArr = Array.from({length:board.length}, () => [])
  board.forEach(arr => {
      arr.forEach((v, i) => {
          if (v !== 0) boardArr[i].push(v)
      })
  })
  moves.forEach(v => {
      if (boardArr[v-1].length) {
          const shift = boardArr[v-1].shift()
          if (basket[basket.length-1] === shift) {
              basket.pop()
              cnt += 2
          } else {
              basket.push(shift)
          }
      }
  })
  return cnt
}