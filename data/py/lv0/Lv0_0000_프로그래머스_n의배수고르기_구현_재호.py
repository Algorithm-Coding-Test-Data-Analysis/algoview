def solution(n, numlist):
    result = [i for i in numlist if i%n==0]
    return result