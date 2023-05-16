function solution(my_string) {
  let answer = [];
  const newArr = my_string.split('');
  for (let i = 0; i < newArr.length; i++) {
    if (Number.isInteger(Number(newArr[i]))) {
      answer.push(Number(newArr[i]));
    }
  }
  return answer.sort();
}
