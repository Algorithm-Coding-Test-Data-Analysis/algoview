def solution(participant, completion):
    answer = ''
    
    participant.sort()
    completion.sort()
    
    if len(set(participant)) == len(set(completion)): 
        for i in range(len(participant)):
            if participant[i] != completion[i] :
                
                return participant[i%len(participant)]
            
    else :
        return list(set(participant) - set(completion))[0]
        
    return answer