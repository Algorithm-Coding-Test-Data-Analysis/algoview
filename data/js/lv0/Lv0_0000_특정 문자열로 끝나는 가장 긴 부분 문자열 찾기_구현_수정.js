function solution(myString, pat) {
    const lastOccurrence = myString.lastIndexOf(pat); 
    
    if (lastOccurrence !== -1) {
      const longestSubstr = myString.slice(0, lastOccurrence + pat.length); 
      return longestSubstr;
    }
    
    return "";
  }