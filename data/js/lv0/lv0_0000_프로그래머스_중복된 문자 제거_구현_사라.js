function solution(my_string) {
  const newSet = new Set(my_string);
  return Array.from(newSet).join('');
}
