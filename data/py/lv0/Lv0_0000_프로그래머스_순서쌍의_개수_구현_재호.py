def solution(n):
    num_1 = []
    num_2 = []
    for x in range(1, n+1):
        if n % x == 0:
            num_1.append(x)
    for i in num_1:
        for j in num_1:
            if i * j == n:
                num_2.append((i, j))
    return len(num_2)