function solution(s) {
    let binary = 0
    let zero = 0
    
    while(s !== "1"){
        zero += s.split('').filter(x => x === '0').length
        s = s.split('').filter(x => x !== '0').length
        s = s.toString(2)
        binary++
    }
    return [binary, zero]
}
