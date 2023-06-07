function solution(brown, yellow) {
    const total = brown + yellow;

    for (let i = 3; i * i <= total; i++) {
        if (total % i === 0) {
            let col = total / i;
            let row = i;
            if ((col - 2) * (row - 2) === yellow) {
                return [col, row];
            }
        }
    }
}