function solution(sizes) {
    
    sizes.forEach(size => size.sort((a,b) => b-a))
    let row = Number.MIN_SAFE_INTEGER;
    let col = Number.MIN_SAFE_INTEGER;
    
    for(let size of sizes){
        const [a,b] = size;
        row = Math.max(a, row);
        col = Math.max(b, col);
    }
    
    return row*col
    
}