function solution(s) {
    s = s.split(" ")
    let max = Math.max(...s)
    let min = Math.min(...s)
    return min+" "+max;
}
