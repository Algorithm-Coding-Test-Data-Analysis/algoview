function solution(quiz) {
    return quiz.map(i => eval(i.replace('=', '===')) ? 'O' : 'X')
}
