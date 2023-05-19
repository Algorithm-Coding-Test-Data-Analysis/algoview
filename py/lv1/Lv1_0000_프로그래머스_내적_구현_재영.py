def solution(a, b):
    answer = 1234567890
    
    answer = sum([i*j for i,j in zip(a,b)])
    
    return answer