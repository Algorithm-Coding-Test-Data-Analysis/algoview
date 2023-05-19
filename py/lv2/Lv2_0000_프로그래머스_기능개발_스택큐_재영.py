from collections import deque
from math import ceil

def solution(progresses, speeds):
    answer = []

    arr = deque([int(ceil((100-i)/j)) for i,j in zip(progresses,speeds)])

    while True:
        pivot = arr[0]
        cnt = 0
        try:
            while pivot>=arr[0]:
                arr.popleft()
                cnt+=1
            answer.append(cnt)
        except IndexError:
            answer.append(cnt)
            break

    return answer
