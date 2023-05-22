from collections import deque

def solution(maps):
    answer = 0

    n = len(maps[0])
    m = len(maps)

    q = deque([(0,0)])
    dx = [-1,1,0,0]
    dy = [0,0,1,-1]
    while q:
        x,y = q.popleft()
        for i in range(4):
            nx = dx[i]+x
            ny = dy[i]+y
            if 0<=nx<m and 0<=ny<n and maps[nx][ny] == 1:
                maps[nx][ny] = maps[x][y]+1
                q.append((nx,ny))

    if maps[-1][-1]>1:
        answer = maps[-1][-1]
    else:
        answer = -1

    return answer
