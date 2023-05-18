function solution(k, score) {
    let best = []
    let result = []
    for(let i=0;i<score.length;i++){
        best.push(score[i])
        best.sort((a,b) => b-a)
        
        if(best.length > k){
            best.pop()
        }
        result.push(Math.min(...best))
    }
    return result
}
