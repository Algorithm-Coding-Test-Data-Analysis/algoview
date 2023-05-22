function solution(message){
    let result = message.match(/[a-zA-Z~! ]/g).join("");
    return result.length * 2;
}
