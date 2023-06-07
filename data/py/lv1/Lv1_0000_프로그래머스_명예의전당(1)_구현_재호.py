def solution(k, score):
    result = []
    
    for i in range(1, len(score) + 1):
        result.append(min((sorted(score[0:i], reverse = True))[0:k]))
        
    return result