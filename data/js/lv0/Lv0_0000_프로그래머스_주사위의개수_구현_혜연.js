function solution(box, n) {
    return box.reduce((a,c) => a * ~~(c/n), 1)
}
