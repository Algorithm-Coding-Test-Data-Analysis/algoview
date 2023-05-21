def solution(x, n):
    answer = []
    for i in range(1, n+1):
        if i == 1:
            answer.append(x)
        else:
            answer.append(answer[-1] + x)

    return answer
