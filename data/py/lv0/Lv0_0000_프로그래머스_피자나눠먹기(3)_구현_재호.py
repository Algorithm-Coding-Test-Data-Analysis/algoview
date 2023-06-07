def solution(slice, n):
    return (n // slice) + (n % slice != 0)