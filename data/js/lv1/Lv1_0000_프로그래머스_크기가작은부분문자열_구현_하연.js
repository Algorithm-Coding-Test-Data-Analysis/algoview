
function solution(t, p) {
  const arr = [];
  for (let i = 0; i <= t.length - p.length; i++) {
    arr.push(t.slice(i, i+p.length));
  }
  return arr.filter(v => v <= p).length;
}

function solution(t, p) {
  let cnt = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    if (t.slice(i, i + p.length) <= p) cnt++;
  }
  return cnt;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/147355