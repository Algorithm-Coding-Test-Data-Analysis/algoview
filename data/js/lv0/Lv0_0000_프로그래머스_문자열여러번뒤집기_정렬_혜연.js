function solution(my_string, queries) {
    const arr = [...my_string]
    queries.forEach(([s,e]) => {
        for(let i=0; i<(e-s)/2; i++) {
            [arr[s+i], arr[e-i]] = [arr[e-i], arr[s+i]]
        } 
    })
    return arr.join('')
}
