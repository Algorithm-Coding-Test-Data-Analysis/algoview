def solution(n):
    result = []
    for i in range(3, n+1):
        for j in range(2, i):
            if i % j == 0:
                result.append(i)
    return len(set(result))