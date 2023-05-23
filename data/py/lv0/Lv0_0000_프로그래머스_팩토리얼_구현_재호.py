def solution(n):
    result = 1
    factorial = 1
    while factorial <= n:
        result += 1
        factorial = factorial * result
    result -= 1
    return result