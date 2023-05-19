def solution(a, b):
    answer = ''
    
    d = 'THU,FRI,SAT,SUN,MON,TUE,WED'.split(',')
    l = [31,29,31,30,31,30,31,31,30,31,30,31]
    total = 0
    for i in range(1,a):
        total += l[i-1]
    total += b
    answer += d[total%7]
    
    return answer