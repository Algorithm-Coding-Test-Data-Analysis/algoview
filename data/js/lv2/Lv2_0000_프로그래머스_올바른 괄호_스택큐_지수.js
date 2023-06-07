function solution(s){
    let answer = true
    let cnt = 0
    for(let i=0;i<s.length;i++){
        if(s[i] === '('){
            cnt++
        }else cnt--
        
        if(cnt < 0){
            answer = false
            break
        }
        else if(cnt > s.length - 1){
            answer = false
            break
        }
    }
    if(cnt !== 0) answer = false
    return answer
}
