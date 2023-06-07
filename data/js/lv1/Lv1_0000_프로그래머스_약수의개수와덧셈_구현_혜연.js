function solution(left, right) {
    let answer = 0;
    for(let i=left; i<=right; i++) {
        Math.sqrt(i) % 1 ? answer+=i : answer-=i
    }
    return answer;
}
