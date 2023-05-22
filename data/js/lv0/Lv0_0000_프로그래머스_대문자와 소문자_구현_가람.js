function solution(my_string) {
    let result = "";
    for(let i of my_string){
        if(i === i.toUpperCase()){
            result += i.toLowerCase();
        }else{
            result += i.toUpperCase();
        }
    }
    return result;
}
