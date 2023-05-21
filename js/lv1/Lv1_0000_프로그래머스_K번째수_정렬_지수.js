function solution(array, commands) {
  let cmArr = [];
  let result = [];
  for (let i = 0; i < commands.length; i++) {
    cmArr.push(
      array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)
    );
    result.push(cmArr[i][commands[i][2] - 1]);
  }
  return result;
}
