function solution(s) {
  const wordToNumber = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  
  let answer = "";
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!isNaN(char)) {
      answer += char;
    } else {
      temp += char;
      if (temp in wordToNumber) {
        answer += wordToNumber[temp];
        temp = "";
      }
    }
  }

  return parseInt(answer);
}
