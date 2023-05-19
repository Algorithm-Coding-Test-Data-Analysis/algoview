def solution(a, b):
    answer = (a+b)//2*(abs(b-a)+1) if (a+b)%2==0 else (a+b)*(abs(b-a)+1)//2
    
    return answer