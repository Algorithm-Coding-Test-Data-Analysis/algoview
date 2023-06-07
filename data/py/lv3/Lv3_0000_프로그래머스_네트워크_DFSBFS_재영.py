def solution(n, computers):
    answer = 0
    graph = [[] for _ in range(n+1)]
    visited = [False]*(n+1)
    for i in range(n):
        for j in range(n):
            if computers[i][j] == 1:
                graph[i+1].append(j+1)
    
    def dfs(s):
        visited[s] = True
        
        for i in graph[s]:
            if not visited[i]:
                visited[i] = True
                dfs(i)
        
        return True
    
    for i in range(1,n+1):
        if not visited[i]:
            dfs(i)
            answer+=1
    
    return answer