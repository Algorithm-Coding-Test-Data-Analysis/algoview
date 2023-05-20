function solution(s) {
    let arr = s.toLowerCase().split(' ')
    return arr.map(x => x.replace(/^[a-z]/,char => char.toUpperCase())).join(' ')
}
