function solution(clothes) {
    const obj = {}
    clothes.forEach(i => obj[i[1]] = ++obj[i[1]] || 1)
    return Object.values(obj).reduce((a,c) => a*(c+1), 1) - 1
}
