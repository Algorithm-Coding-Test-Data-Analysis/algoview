function solution(nums) {
  const half = nums.length / 2;
  const setSize = new Set(nums).size;
  return half < setSize ? half : setSize;
}