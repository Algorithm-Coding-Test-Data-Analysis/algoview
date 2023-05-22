function solution(keymap, targets) {
  const obj = {};
  const answer = [];
  keymap.forEach(str => {
    for (let i = 0; i < str.length; i++) {
      if (!obj[str[i]] || obj[str[i]] > i+1) obj[str[i]] = i+1;
    }
  });

  targets.forEach(str => {
    let cnt = 0;
    for (const v of str) {
      if (obj[v]) cnt += obj[v];
      else return answer.push(-1);
    }
    answer.push(cnt);
  });

  return answer;
}