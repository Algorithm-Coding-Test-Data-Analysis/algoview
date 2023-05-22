function solution(myString, pat) {
  let count = 0;
  let startIndex = 0;

  while (startIndex <= myString.length - pat.length) {
    const substring = myString.substring(startIndex, startIndex + pat.length);
    if (substring === pat) {
      count++;
    }
    startIndex++;
  }

  return count;
}
