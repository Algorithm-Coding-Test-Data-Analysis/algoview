from itertools import combinations as cb
def solution(numbers):
    answer = []
    
    for x,y in set(cb(numbers,2)):
        answer.append(x+y)
    
    answer = list(set(answer))
    answer.sort()
    return answer