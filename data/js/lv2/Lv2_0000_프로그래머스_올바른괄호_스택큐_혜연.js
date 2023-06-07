function solution(s){
    let acc = 0
    for(let i=0; i<s.length; i++) {
        s[i] === '(' ? acc+=1 : acc-=1
        if(acc < 0) return false
    } 
    return acc === 0 ? true : false
}
