def solution(m, n, puddles):
    answer = 0

    arr = []
    for _ in range(n):
        arr.append([1]*m)
    
    for x,y in puddles:
        arr[y-1][x-1] = 0
    
    for i in range(n):
        for j in range(m):
            if (i!=0 or j!=0) and not arr[i][j] == 0:

                if i == 0:
                    arr[i][j] = arr[i][j-1]
                elif j == 0:
                    arr[i][j] = arr[i-1][j]
                else:
                    arr[i][j] = arr[i-1][j] + arr[i][j-1]

    return arr[-1][-1]%1000000007
