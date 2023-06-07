function solution(numbers) {
    const answer = numbers.sort((a,b) => (b+''+a) - (a+''+b)).join('')
    return answer[0] !== '0' ? answer : '0'
}
