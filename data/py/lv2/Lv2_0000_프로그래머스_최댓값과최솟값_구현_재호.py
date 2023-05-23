def solution(s):
    s = s.split()
    s = [int(i) for i in s]
    
    return ' '.join([str(min(s)), str(max(s))])