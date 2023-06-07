function solution(emergency) {
  let sort = [...emergency].sort((a, b) => b - a);
  return emergency.map((v) => sort.indexOf(v) + 1);
}