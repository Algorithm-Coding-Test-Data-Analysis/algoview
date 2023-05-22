function solution(arr) {
    var answer = [];
    if(arr.length===1){
        return [-1]
    }else{
        m = Math.min(...arr)
        for(let i of arr){
            if(i!==m) answer.push(i)
        }
    }
    
    return answer;
}