from collections import deque

def solution(A,B):
    answer = 0

    A = deque(sorted(A))
    B = deque(sorted(B,reverse=True))

    for i in range(len(A)):
        answer += A.popleft()*B.popleft()


    return answer