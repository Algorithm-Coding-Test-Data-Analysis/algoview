function solution(s){
    if(s.length%2) return false
    if(s[0]==='(' && s.slice(-1) === ')') s = s.slice(1, -1)
    
    while(s.length) {
        if ((s[0]==='(' && s.slice(-1)+'' === ')')
           || (s[0]===')' && s.slice(-1)+'' === '(')) {
            s = s.slice(1, -1)
        } else return false
    } return true
}
