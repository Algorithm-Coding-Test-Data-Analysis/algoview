function solution(a, b) {
    const atob = String(a) + String(b)
    const ab2 = 2*a*b
    
    return atob >= ab2 ? Number(atob) : Number(ab2)
}
