function solution(hp) {
  let minAnts = Infinity;

  for (let i = 0; i <= hp / 5; i++) {
    const remainingHp = hp - i * 5;
    const j = Math.floor(remainingHp / 3);
    const k = remainingHp % 3;

    const totalAnts = i + j + k;
    minAnts = Math.min(minAnts, totalAnts);
  }

  return minAnts;
}
