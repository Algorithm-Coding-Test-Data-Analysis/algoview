const solution = (my_string, n) => {
  const arr = my_string.split("");
  const result = arr.map((str) => str.repeat(n));
  return result.join("");
