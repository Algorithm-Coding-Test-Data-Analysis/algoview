function solution(angle) {
    if(angle < 90) return 1;
    else if(angle === 90) return 2;
    else if(angle <180) return 3;
    else return 4;
}