function solution(t, p) {
  let array = [];
  for (let i = 0; i < t.length; i++) {
    if (t.slice(i, i + p.length).length == p.length) {
      array.push(t.slice(i, i + p.length));
    }
  }
  return array.filter((x) => parseInt(x) <= parseInt(p)).length;
}
