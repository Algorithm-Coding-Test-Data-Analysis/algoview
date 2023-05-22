function solution(name, yearning, photo) {
  return photo.map((v) => {
    return v
      .filter((x) => (x = name.includes(x)))
      .map((v) => yearning[name.indexOf(v)])
      .reduce((acc, cur) => acc + cur, 0);
  });
}
