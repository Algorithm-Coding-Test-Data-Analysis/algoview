function solution(keyinput, board) {
    const point = [0,0]
    const newboard = [~~(board[0]/2), ~~(board[1]/2)]
    const move = {
        up: arr => arr[1] = Math.min(arr[1] + 1, newboard[1]),
        down: arr => arr[1] = Math.max(arr[1] - 1, -newboard[1]),
        left: arr => arr[0] = Math.max(arr[0] - 1, -newboard[0]),
        right: arr => arr[0] = Math.min(arr[0] + 1, newboard[0]),
    }
    keyinput.forEach(i => move[i](point))
    return point
}
