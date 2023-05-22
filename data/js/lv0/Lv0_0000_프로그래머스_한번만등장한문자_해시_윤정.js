function solution(s) {
  const count = {};

  for (let char of s) {
    count[char] = count[char] ? count[char] + 1 : 1;
  }

  const uniqueChars = [];

  for (let char in count) {
    if (count[char] === 1) {
      uniqueChars.push(char);
    }
  }

  uniqueChars.sort();

  return uniqueChars.join("");
}
