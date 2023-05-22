function solution(nums) {
  const getCnt = nums.length / 2;
  let set = new Set([...nums]);
  return getCnt < set.size ? getCnt : set.size;
}
