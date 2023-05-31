function solution(s) {
    const arr = s.replaceAll('{','').replaceAll('}','').split(',').sort()
    const map = new Map()
    for(let i of arr) map.set(i, (map.get(i) || 0)+1) 
    return [...map].sort((a,b) => b[1]-a[1]).map(i => ~~i[0])
}
