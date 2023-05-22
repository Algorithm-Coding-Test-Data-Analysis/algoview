class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }
  push(item) {
    this.arr[this.index++] = item;
  }

  pop() {
    if (this.index <= 0) return null;
    const popValue = this.arr[--this.index];
    return popValue;
  }

  peek() {
    if (this.index <= 0) return null;
    return this.arr[this.index - 1];
  }
}

function solution(numbers) {
  const answer = new Array(numbers.length).fill(-1);
  const stack = new Stack();
  let data = {};
  for (let i = 0; i < numbers.length; i++) {
    if (stack.peek() === null || numbers[stack.peek()] >= numbers[i]) {
      stack.push(i);
    } else {
      while (stack.peek() !== null && numbers[stack.peek()] < numbers[i]) {
        data = stack.pop();
        answer[data] = numbers[i];
      }
      stack.push(i);
    }
  }
  return answer;
}
