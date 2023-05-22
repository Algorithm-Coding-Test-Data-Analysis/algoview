def solution(s):
    answer = True
    
    s = s.lower()
    
    p = s.count('p')
    y = s.count('y')
    answer = True if p==y else False

    return answer