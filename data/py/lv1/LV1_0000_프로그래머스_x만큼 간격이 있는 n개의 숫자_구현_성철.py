def solution(x, n):
    if x == 0:
        return [0 for _ in range(n)]
    elif x >= 1:
        answer = [val for val in range(x, x * n + 1, x)]
    else:
        answer = [val for val in range(x, x * n - 1, x)]
    return answer