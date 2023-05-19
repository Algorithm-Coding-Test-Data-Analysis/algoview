function solution(dots) {
    let rowArr = []
    let row = 0
    let colArr = []
    let col = 0
    dots.forEach((item)=>{
       rowArr.push(item[0])
        row = Math.max(...rowArr) - Math.min(...rowArr)
        colArr.push(item[1])
        col = Math.max(...colArr) - Math.min(...colArr)
    })
    return row * col
}
