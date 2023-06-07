def solution(s):
    s = s.lower()
    P = s.count('p')
    Y = s.count('y')
    
    if P == Y:
        return True
    else:
        return False