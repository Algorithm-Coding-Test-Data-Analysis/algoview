def solution(lottos, win_nums):
    answer = []
    s=0
    f=0
    
    rank = [6,6,5,4,3,2,1]
    
    for i in lottos:
        if i == 0:
            s+=1
            continue
        if i in win_nums:
            s+=1
            f+=1

    answer = [rank[s],rank[f]]
        
    
    return answer