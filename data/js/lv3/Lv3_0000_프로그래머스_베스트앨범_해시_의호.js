function solution(genres, plays) {
  let answer = [];

  let zip = genres.map((v, i) => v + plays[i]);
  let sorted = genres.map((v, i) => [v, plays[i]]).sort((a, b) => b[1] - a[1]);
  let temp = [];

  let list = new Map();
  let count = new Map();

  for (let i = 0; i < sorted.length; i++) {
    if (list.has(sorted[i][0]) && list.get(sorted[i][0]).length < 4) {
      list.set(sorted[i][0], [list.get(sorted[i][0]), sorted[i]].flat());
    } else if (list.get(sorted[i][0])) {
      continue;
    } else {
      list.set(sorted[i][0], sorted[i].flat());
    }
  }

  for (let i = 0; i < genres.length; i++) {
    if (count.get(genres[i]) !== undefined) {
      count.set(genres[i], count.get(genres[i]) + plays[i]);
    } else {
      count.set(genres[i], plays[i]);
    }
  }

  [...count].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < count.size; i++) {
    temp.push(list.get([...count].sort((a, b) => b[1] - a[1])[i][0]));
  }

  for (let i = 0; i < temp.flat().length / 2; i++) {
    let zipIndex = zip.findIndex(
      (x) =>
        x ===
        temp
          .flat()
          .splice(2 * i, 2)
          .join("")
    );
    zip.splice(zipIndex, 1, null);
    answer.push(zipIndex);
  }

  return answer;
}
