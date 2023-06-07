function solution(fees, records) {
  const number = Array.from(new Set(records.map((v) => v.split(" ")[1]))).sort(
    (a, b) => a - b
  );
  const answer = Array(number.length).fill(0);

  for (let item of records) {
    item = item.split(" ");

    if (item[2] === "IN") {
      item[0] = item[0].split(":");
      answer[number.indexOf(item[1])] -= item[0][0] * 60 + +item[0][1] - 1439;
    } else {
      item[0] = item[0].split(":");
      answer[number.indexOf(item[1])] += item[0][0] * 60 + +item[0][1] - 1439;
    }
  }

  return answer.map((v) =>
    v - fees[0] > 0
      ? fees[1] + Math.ceil((v - fees[0]) / fees[2]) * fees[3]
      : fees[1]
  );
}
