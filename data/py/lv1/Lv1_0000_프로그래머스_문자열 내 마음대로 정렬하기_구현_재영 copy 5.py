def solution(strings, n):
    answer = []
    
    answer = sorted(strings,key= lambda x:(x[n],x))
    
    return answer