function solution(common) {
    return (common[0]-common[1] === common[1] - common[2]) 
    ? common.pop()-common[0]+common[1]
    : common.pop()/common[0]*common[1]
}
