def solution(n):
    answer = 0
    for i in range(1, n + 1):
        m = [j for j in range(1, i + 1) if i % j == 0]

        if len(m) >= 3:
            answer += 1

    return answer
