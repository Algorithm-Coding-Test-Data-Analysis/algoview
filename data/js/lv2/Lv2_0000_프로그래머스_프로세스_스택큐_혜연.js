function solution(priorities, location) {
    let count = 0
    const maxArr = [...priorities].sort((a,b) => a-b) 
    for(let i = 0; true; i++){
        if(priorities[i] === maxArr.slice(-1)*1) {
            count++
            maxArr.pop()
            if(i === location) return count
        }
        if(i === priorities.length) i = -1
    }
}
