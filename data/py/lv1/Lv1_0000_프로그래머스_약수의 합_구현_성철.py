def solution(n):
    keep = n

    answer = [i for i in range(1, n + 1) for j in range(1, n + 1) if i * j == keep]
    return sum(answer)