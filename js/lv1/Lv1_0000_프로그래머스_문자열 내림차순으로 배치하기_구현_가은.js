function solution(s) {
  let answer = s.split("").sort((a, b) => {
      if(a < b) return 1;
      if(a === b) return 0;
      if(a > b) return -1;
  }).join("");

  return answer;
}

function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}