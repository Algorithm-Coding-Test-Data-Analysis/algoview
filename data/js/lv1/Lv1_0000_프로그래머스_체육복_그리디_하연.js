function solution(n, lost, reserve) {
  const filter_reserve = reserve.filter(v => !lost.includes(v));
  const filter_lost = lost.filter(v => !reserve.includes(v));
  
  filter_lost.sort((a, b) => a - b);
  filter_reserve.sort((a, b) => a - b);
  
  filter_reserve.forEach(v => {
      if(filter_lost.includes(v-1)) {
          filter_lost.splice(filter_lost.indexOf(v-1), 1);
      } else if (filter_lost.includes(v+1)) {
          filter_lost.splice(filter_lost.indexOf(v+1), 1);
      }
  });
  return n - filter_lost.length;
}