function solution(lottos, win_nums) {
  const zero = lottos.filter(v => v === 0).length;
  if (zero === 6) return [1, 6];
  const min = lottos.filter(v => win_nums.includes(v)).length;
  if (min === 0) return [6, 6];
  return [7 - min - zero, 7 - min];
}