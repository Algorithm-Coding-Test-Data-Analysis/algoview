function solution(num_list) {
    num_list.sort((a, b) => a - b);
  
    return num_list.slice(0, 5);
  }