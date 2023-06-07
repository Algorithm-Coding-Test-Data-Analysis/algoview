function solution(my_string) {
    const arr = my_string.split(' ')
    let num = 0;
    for(let i=0; i<arr.length; i+=2){
        num += (arr[i-1] === '-'? -arr[i] : +arr[i])
    }
    return num
}
