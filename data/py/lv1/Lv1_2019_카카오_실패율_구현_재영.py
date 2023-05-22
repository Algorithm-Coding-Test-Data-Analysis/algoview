def solution(N, stages):
    answer = []
    
    result = {i:[0,0] for i in range(1,N+2)}
    
    fail = {i:0 for i in range(1,N+1)}
    
    for i in stages:
        result[i][0] += 1
        for j in range(1,i+1):
            result[j][1] += 1
            
    for i in range(1,N+1):
        if result[i][1] == 0:
            pass
        else:
            fail[i] = result[i][0]/result[i][1]
    
    answer = [x for x,y in sorted(fail.items(), key = lambda x : x[1], reverse = True)]
    
    return answer