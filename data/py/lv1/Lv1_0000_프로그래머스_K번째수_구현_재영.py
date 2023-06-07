def solution(array, commands):
    answer = []
    
    for e1,e2,e3 in commands:
        print(sorted(array[e1-1:e2-1]))
        answer.append(sorted(array[e1-1:e2])[e3-1])
    
    return answer