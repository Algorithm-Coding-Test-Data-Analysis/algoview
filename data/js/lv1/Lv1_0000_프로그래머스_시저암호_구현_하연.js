function solution(s, n) {
  const result = s.replace(/[^ ]/g, v => {
      const c = v.charCodeAt(0);
      return String.fromCharCode((c & 96) + (c % 32 + n - 1) % 26 + 1);
  })
  return result;
}