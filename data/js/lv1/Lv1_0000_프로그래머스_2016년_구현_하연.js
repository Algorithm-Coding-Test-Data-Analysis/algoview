function solution(a, b) {
    const day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = b;
    for (let i = 0; i < a-1; i++) {
        days += month[i];
    }
    return day[days % 7];
}