def solution(arr, divisor):
    answer = []
    
    arr.sort()
    
    for e in arr:
        if e%divisor==0:
            answer.append(e)
    
    if len(answer)==0:
        answer.append(-1)
    
    return answer