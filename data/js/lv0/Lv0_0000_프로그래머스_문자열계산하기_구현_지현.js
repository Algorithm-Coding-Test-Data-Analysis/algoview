function solution(my_string) {
    let arr = my_string.split(' ')
    let operator = '+';
    let answer = 0
    for(let i = 0;i<=my_string.length;i++){
        let num = Number(arr[i])
        if(isNaN(num)){
            operator = arr[i]
        }else{
            operator == '+'?answer += num:answer -= num
        }
    }
    return answer
}
