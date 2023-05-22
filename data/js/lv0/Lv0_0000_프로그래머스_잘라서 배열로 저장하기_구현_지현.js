function solution(my_str, n) {
    let strArr = my_str.split('')
    let arr = []
    for(let i = 0; i<strArr.length;i += n){
        arr.push(strArr.slice(i,i+n).join(''))
    }
    return arr
}
