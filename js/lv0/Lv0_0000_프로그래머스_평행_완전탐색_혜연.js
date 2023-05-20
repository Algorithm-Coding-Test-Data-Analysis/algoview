function solution(dots) {
    for(let i = 1; i < dots.length; i++) {
        const arr = [...dots]
        const [pick] = arr.splice(i,1)
        if ((arr[0][0]-pick[0])*(arr[1][1]-arr[2][1])===(arr[0][1]-pick[1])*(arr[1][0]-arr[2][0])) return 1
    }
    return 0
}
