function solution(num) {
  var answer = 0;
  let cnt = 0;
  while(num!==1 && cnt<500){
      num = !(num%2) ? num/2 : num*3+1;
      cnt++;
  }
  if(cnt>=500){
      cnt = -1
  }
  
  return cnt;
}