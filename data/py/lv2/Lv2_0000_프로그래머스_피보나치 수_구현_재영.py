def solution(n):
    answer = 0
    
    if n<2:
        return n

    l = [0]*(n+1)
    l[1] = 1

    for i in range(2,n+1):
        l[i] = (l[i-2] + l[i-1])
    
    return l[-1]%1234567