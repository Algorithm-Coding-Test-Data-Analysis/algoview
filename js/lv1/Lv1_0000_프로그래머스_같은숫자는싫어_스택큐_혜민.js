function solution(arr){
  return arr.filter((v,i) => v != arr[i+1]);
}