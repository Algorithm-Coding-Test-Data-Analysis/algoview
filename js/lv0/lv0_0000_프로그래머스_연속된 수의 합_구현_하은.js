function solution(num, total) {
    var answer = [];
    let start = (total/num) - ((num-1)/2);
    
    for(let i = 0 ; i < num; i++){
        answer.push(start);
        start += 1;
    }
    return answer;
}