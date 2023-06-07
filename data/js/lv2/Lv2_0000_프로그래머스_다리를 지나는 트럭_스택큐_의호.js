function solution(bridge_length, weight, truck_weights) {
  let answer = 0;

  let temp = Array(bridge_length).fill(0);

  while (truck_weights.length) {
    if (
      temp.reduce((a, c) => a + c) - temp[temp.length - 1] + truck_weights[0] <=
      weight
    ) {
      temp.unshift(truck_weights.shift());
      if (temp.length > bridge_length) {
        temp.pop();
      }
      answer++;
    } else {
      temp.unshift(0);
      if (temp.length > bridge_length) {
        temp.pop();
      }
      answer++;
    }
  }

  return answer + bridge_length;
}
