function solution(my_string) {
  var answer = '';
  for (str of my_string){
      if ('a'.charCodeAt(0) <= str.charCodeAt(0) && str.charCodeAt(0)<= 'z'.charCodeAt(0)){
          answer += String.fromCharCode(str.charCodeAt(0)-32)
      }
      else if ('A'.charCodeAt(0) <= str.charCodeAt(0) && str.charCodeAt(0) <= 'Z'.charCodeAt(0)){
          answer += String.fromCharCode(str.charCodeAt(0)+32)
      }

  }
  return answer;
}