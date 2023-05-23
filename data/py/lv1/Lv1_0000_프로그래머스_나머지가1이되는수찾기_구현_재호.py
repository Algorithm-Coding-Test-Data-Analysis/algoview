def solution(n):
    return min([i for i in range(1, n) if n % i == 1])