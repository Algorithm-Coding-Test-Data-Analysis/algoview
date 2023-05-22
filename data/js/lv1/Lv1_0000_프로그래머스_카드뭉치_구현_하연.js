function solution(cards1, cards2, goal) {
    let a = 0,
        b = 0;
    for (const v of goal) {
        if (cards1[a] === v) a++;
        else if (cards2[b] === v) b++;
        else return 'No';
    }
  return 'Yes';
}