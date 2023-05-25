function solution(s) {
  s = s.split('');
  let pCnt = s.filter(char => char === 'p' || char === 'P').length;
  let yCnt = s.filter(char => char === 'y' || char === 'Y').length;

  if (pCnt === yCnt) return true;
  else return false;
}
