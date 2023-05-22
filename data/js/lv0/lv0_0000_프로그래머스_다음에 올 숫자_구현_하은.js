function solution(common) {
    let obj = common[1] - common[0]
    let obj2 = common[2] - common[1]
    
    return (obj === obj2)? common[common.length-1] + obj : common[common.length-1] * (obj2 / obj)  
}