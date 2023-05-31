function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        return arr.slice(s,e+1).sort((a,b) => a-b).find(i => i>k) || -1
    })
}
