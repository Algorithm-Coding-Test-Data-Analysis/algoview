function solution(emergency) {
    let arr = [...emergency].sort((a,b)=>b-a)
    return emergency.map(v => arr.indexOf(v)+1)
}
