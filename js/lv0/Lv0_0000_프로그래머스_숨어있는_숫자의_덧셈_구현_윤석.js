const solution = (my_string) => {
  let sum = 0;
  for (const str of my_string) {
    if (isNaN(parseInt(str)) === false) {
      sum += parseInt(str);
    }
  }
  return sum;
};
