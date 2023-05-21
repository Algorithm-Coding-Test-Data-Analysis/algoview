function solution(nums) {
  const answer = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i+1; j < nums.length - 1; j++) {
      for (let k = j+1; k < nums.length; k++) {
        answer.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  return answer.filter(v => {
    for (let i = 2; i < v; i++) {
      if (v % i === 0) return false;
    }
    return true;
  }).length;
}