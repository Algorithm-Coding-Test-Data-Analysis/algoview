function solution(n) {
    let answer = 0;
    let array = n.toString().split('')
    return array.reduce((acc,cur)=>acc+Number(cur),0)
}
