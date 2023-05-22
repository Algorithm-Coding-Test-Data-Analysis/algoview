function solution(s1, s2){
    const checkArr = s1.filter(el => s2.includes(el));
    return checkArr.length
}
