function solution(box, n) {
    const width = Math.floor(box[0]/n);
    const length = Math.floor(box[1]/n);
    const height = Math.floor(box[2]/n);
    
    return width * length * height;
}
