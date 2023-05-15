function solution(n) {
    for(let i = 1 ; i <= n; i++){
        if(6 * i % n == 0) {
            return i
        }   
    }
}