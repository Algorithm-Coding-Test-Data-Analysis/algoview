from collections import deque

def solution(begin, target, words):
    answer = 0
    
    if target in words:
        t = words.index(target)
        graph = [0]*(len(words))

        q = deque(check(begin,words))
        for i in q:
            graph[i] = 1
        while q:
            v = q.popleft()

            for i in check(words[v],words):
                if graph[i] == 0:
                    graph[i] = graph[v] + 1
                    q.append(i)
        answer = graph[t]
    
    return answer

def check(pivot,words):
    result = []
    l = len(pivot)

    for i in range(len(words)):
        a = l
        for j in range(l):
            if pivot[j] != words[i][j]:
                a -= 1
        if a == l-1:
            result.append(i)
    
    return result

print(solution("aab", "aba", ["abb", "aba"]))