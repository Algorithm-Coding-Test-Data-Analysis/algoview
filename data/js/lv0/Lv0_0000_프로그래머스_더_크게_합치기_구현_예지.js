function solution(a, b) {
    let ab = String(a) + String(b);
    let ba = String(b) + String(a);
    
    if(Number(ab) < Number(ba)){
        return Number(ba)
    }else if(Number(ab) > Number(ba)){
        return Number(ab)
    }else{
        return Number(ab)}
}
