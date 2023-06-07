function solution(n) {
    for(let i=1, m=1; true; ++i) {
        if(m > n) return i-2
        m *= i
    }
}
