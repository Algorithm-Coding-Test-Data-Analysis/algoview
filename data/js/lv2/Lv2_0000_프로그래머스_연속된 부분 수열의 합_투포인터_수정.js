function solution(sequence, k) {
    let answer = [];
    let start = 0;
    let end = 0;
    let sum = sequence[0];
  
    while (end < sequence.length) {
      if (sum < k) {
        end++;
        sum += sequence[end];
      } else if (sum > k) {
        sum -= sequence[start];
        start++;
      } else {
        if (!answer.length || end - start < answer[1] - answer[0]) {
          answer = [start, end];
        }
        end++;
        sum += sequence[end];
      }
    }
  
    return answer;
  }