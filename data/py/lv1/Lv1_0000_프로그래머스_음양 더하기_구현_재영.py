def solution(absolutes, signs):
    answer = 0
    
    answer = sum([a if s else -a for a,s in zip(absolutes,signs)])
        
    return answer

