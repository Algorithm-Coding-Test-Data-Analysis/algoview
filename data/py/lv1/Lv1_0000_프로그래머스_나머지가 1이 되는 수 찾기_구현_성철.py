def solution(n):
    keep = n
    return min([val for val in range(1, n) if keep % val == 1])