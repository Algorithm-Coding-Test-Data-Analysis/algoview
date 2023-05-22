def solution(n):
    answer = ''
    for i in range(1,n+1):
        answer += '수' if i%2==1 else '박'
    
    return answer