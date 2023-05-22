from collections import deque

def solution(n, words):
    answer = [0,0]
    words = deque(words)
    dummy = []
    p = 1
    cnt = 1
    
    for _ in range(len(words)):
        if not dummy:
            dummy.append(words.popleft())
            p+=1
            continue
        if dummy[-1][-1] != words[0][0] or words[0] in dummy:
            return [p,cnt]
        dummy.append(words.popleft())
        p += 1
        if p>n:
            p = p%n
            cnt += 1

    return answer