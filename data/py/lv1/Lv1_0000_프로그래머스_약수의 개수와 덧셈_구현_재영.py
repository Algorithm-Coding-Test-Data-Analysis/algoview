def solution(left, right):
    answer = 0
    
    d = {}
    for a in range(left,right+1):
        l = []
        for i in range(1,a//2+1):
            if a%i == 0:
                l.append(i)
        l.append(a)
        answer += a if len(l)%2 == 0 else -a
    
    return answer