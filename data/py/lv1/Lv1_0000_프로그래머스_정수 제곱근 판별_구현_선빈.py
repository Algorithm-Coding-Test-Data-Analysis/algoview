import math


def solution(n):
    sqrt_n = math.isqrt(n)

    if sqrt_n * sqrt_n == n:
        answer = (sqrt_n + 1) ** 2
    else:
        answer = -1

    return answer
