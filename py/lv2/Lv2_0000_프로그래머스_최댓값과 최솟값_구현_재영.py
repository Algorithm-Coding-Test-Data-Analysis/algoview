def solution(s):
    answer = ''
    d = list(map(int,s.split()))

    answer += str(min(d))
    answer += ' '
    answer += str(max(d))
    
    return (answer)