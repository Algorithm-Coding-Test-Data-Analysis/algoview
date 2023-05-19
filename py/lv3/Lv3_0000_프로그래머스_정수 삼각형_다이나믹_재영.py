def solution(t):
    answer = 0
    n = len(t)
    m = len(t[-1])
    a = []
    for i in range(n):
        a.append([0]*m)
    
    a[0][0] = t[0][0]
        
    for i in range(1,n):
        for j in range(0,i+1):
            if j==0:
                a[i][j] = t[i][j] + a[i-1][j]
            elif j==i:
                a[i][j] = t[i][j] + a[i-1][j-1]
            else:
                a[i][j] = t[i][j] + max(a[i-1][j],a[i-1][j-1])

    return max(a[-1])