function solution(cipher, code) {
    return cipher.split('').filter((_, index) => (index + 1) % code === 0).join('');
}
