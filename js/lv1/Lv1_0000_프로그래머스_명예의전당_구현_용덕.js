function solution(k, score) {
    var answer = [];
    let temp = []
    for (let i = 0; i < score.length; i++) {
    temp.push(score[i]);
      if (temp.length > k) {
        temp.splice(temp.indexOf(Math.min(...temp)),1);
      }
      answer.push(Math.min(...temp));
    }
    return answer;
  }