def solution(absolutes, signs):
    answer = []
    for i, v in enumerate(absolutes):
        if signs[i] is True:
            answer.append(v)
        else:
            answer.append(-v)

    return sum(answer)
