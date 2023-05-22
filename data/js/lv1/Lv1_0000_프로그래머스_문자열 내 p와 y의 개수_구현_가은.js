function solution(s){
  let p = [];
  let y = [];
  let str = s.toUpperCase().split("");

  for(let i = 0; i < str.length; i++){
      if(str[i] === "P") {
          p.push(str[i])
      } 
      if (str[i] === "Y") {
          y.push(str[i])
      }
  }
  return p.length === y.length
}