function solution(array) {
    const map = new Map()
    array.forEach(i => map.set(i, (map.get(i) || 0) + 1))
    const sorted = [...map].sort((a,b) => b[1] - a[1])
    return (sorted.length === 1 || sorted[0][1] !== sorted[1][1]) ? sorted[0][0] : -1
}
