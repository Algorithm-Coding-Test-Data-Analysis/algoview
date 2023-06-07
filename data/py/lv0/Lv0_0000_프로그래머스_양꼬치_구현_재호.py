def solution(n, k):
    result = 12000*n + 2000*k
    if n >= 10:
        result -= 2000*(n // 10)
    return result