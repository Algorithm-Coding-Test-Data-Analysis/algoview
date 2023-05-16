function solution(cacheSize, cities) {
  let time = 0;
  let cache = [];
  for (let i = 0; i < cities.length; i++) {
    let city = cities[i].toLowerCase();
    let index = cache.indexOf(city);
    if (index !== -1) {
      //hit
      cache.splice(index, 1);
      cache.push(city);
      time += 1;
    } else {
      //miss
      cache.push(city);
      time += 5;
      if (cacheSize < cache.length) {
        cache.shift();
      }
    }
  }
  return time;
}
