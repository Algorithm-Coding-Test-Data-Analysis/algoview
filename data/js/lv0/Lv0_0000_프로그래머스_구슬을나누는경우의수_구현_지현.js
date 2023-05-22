function solution(balls, share) {

const Fac =(n) => {
    let result = 1;
    for(let i=2; i<=n; i++) {
        result *= i;}
    return result;
}
   return Math.round(Fac(balls) / (Fac(balls-share) * Fac(share)))
}
