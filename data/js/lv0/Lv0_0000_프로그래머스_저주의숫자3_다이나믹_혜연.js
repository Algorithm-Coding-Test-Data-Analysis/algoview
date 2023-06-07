function solution(n) {
    return Array.from({length: n*3}, (_,i) => i).filter(i => i%3 && !(/3/.test(i)))[n-1]
}
