function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1*denom2 + numer2*denom1
    let denom = denom1 * denom2
    for(let i = ~~(denom/2); i > 1; i--){
        if(!(numer % i) && !(denom % i)) {
            numer /= i
            denom /= i
        }
    }
    return [numer, denom]
}
