def solution(left, right):
    answer = []
    for i in range(left, right + 1):
        sub = []
        for j in range(1, i + 1):
            if i % j == 0:
                sub.append(i)
        if len(sub) % 2:
            answer.append(-i)
        else:
            answer.append(i)
    return sum(answer)