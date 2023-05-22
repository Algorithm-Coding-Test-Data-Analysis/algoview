function solution(x, n) {
    let answer = [];
    let y = 0;
        for(let i = 0; i < n; i++){
        answer[i] = x + y;
        y += x;
    }
    return answer;
}