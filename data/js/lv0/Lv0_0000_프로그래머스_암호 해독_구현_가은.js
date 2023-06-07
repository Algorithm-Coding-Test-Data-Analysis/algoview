function solution(cipher, code) {
    var answer = cipher.split('').filter((v, i) => (i + 1) % code === 0).join('');
    return answer;
}