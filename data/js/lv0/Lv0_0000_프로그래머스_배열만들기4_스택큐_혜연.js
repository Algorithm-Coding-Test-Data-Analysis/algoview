function solution(arr) {
    const stk = []
    for(let i = 0; i < arr.length; i++) {
        if(!stk.length) stk.push(arr[i])
        else {
            if ([...stk.slice(-1)] < arr[i]) stk.push(arr[i])
            else stk.pop(), --i
        }
    }
    return stk;
}
