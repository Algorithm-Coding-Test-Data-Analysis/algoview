function solution(a, b) {
  let day = new Date(`2016-${a}-${b}`);
  const dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return dayArr
    .filter((a, b) => (day.getDay() === b ? dayArr[b] : null))
    .join("");
}
