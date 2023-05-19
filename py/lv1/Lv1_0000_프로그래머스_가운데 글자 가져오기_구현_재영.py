def solution(s):
    answer = ''
    
    l = len(s)
    if l%2 !=0:
        answer += s[l//2]
    else:
        answer += s[l//2-1:l//2+1]
    
    return answer