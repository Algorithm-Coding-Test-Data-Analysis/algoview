function solution(n) {
    if(Number.isInteger(Math.sqrt(n))){
    let num = Math.sqrt(n)+1 
    return num*num
    }else{
        return -1
    }
}
