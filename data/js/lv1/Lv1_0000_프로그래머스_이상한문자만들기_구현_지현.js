function solution(s) {
    let arr = s.split(' ')
    let answer = ''
    let str = ''
    for(let i = 0; i<arr.length;i++){
        let str = arr[i]
        for(let j = 0; j<str.length;j++){
            if(j%2 ===0){
                 answer += str[j].toUpperCase();
            }else{
                 answer += str[j].toLowerCase();
            }
        } 
        answer += ' '
    }
     answer = answer.substr(0,answer.length-1);
    return answer;
}
