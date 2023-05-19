function solution(arr) {
  var answer = [];
  for(let i=0; i<arr.length;i++){
      if(arr[i]>=50 && arr[i]%2===0) answer.push(arr[i]/2)
      else if(arr[i]<50 && arr[i]%2!==0) answer.push(arr[i]*2)
      else answer.push(arr[i])
  }
  return answer;
}