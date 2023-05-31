function solution(arr) {
    return arr.length < 2 ? [-1] : arr.filter(i => i !== Math.min(...arr))
}
