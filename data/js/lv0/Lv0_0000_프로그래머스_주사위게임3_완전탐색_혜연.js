function solution(a, b, c, d) {
    const obj = {}
    for(let i of [a, b, c, d]) obj[i] = (obj[i] || 0) + 1
    const arr = Object.entries(obj).sort((a,b) => a[1]-b[1])
    const arr2 = arr.map(v => ~~v[0])
    switch(arr.length) {
        case 4: return Math.min(a, b, c, d)
        case 3: return arr2[0]*arr2[1]
        case 2: return (arr[0][1] === 1 
                ? (10 * arr2[1] + arr2[0])**2 
                : (arr2[0] + arr2[1]) * Math.abs(arr2[0] - arr2[1]))
        case 1: return 1111 * arr2[0]
    }
}
