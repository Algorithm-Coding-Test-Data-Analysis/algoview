function solution(a, b) {
    for(let i=0; i<=Math.min(a,b); i++) {
        (a%i===0 && b%i===0) && (a=a/i, b=b/i)
    }
    while (!(b%2)) b /= 2
    while (!(b%5)) b /= 5
    return b === 1 ? 1 : 2
}
