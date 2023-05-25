function solution(s) {
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    for(let i in arr) s = s.replaceAll(arr[i], i)
    return s*1
}
