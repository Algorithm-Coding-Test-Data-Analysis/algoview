function solution(my_string) {
  return (my_string.match(/\d+/g) ?? [])
      .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}
