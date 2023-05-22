function solution(num, total) {
    return Array.from({length: num}, (v,i) => Math.ceil(total/num) - ~~(num/2) + i)
}
