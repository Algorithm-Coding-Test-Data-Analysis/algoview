function solution(arr) {    
    return arr.filter((v,i) => arr[i-1] !== v)
}
