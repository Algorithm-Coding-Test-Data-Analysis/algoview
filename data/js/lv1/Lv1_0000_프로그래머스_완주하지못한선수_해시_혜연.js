function solution(participant, completion) {
    completion.sort()
    return participant.sort().find((v,i) => v !== completion[i])
}
