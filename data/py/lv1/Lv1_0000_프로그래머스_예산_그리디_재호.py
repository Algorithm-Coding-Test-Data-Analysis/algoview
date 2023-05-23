def solution(d, budget):
    d.sort()
    result = 0
    
    for i in d:
        if budget >= i:
            budget -= i
            result += 1
        else:
            break
    
    return result