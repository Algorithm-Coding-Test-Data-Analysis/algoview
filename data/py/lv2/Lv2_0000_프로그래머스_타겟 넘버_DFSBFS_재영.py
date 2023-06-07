def dfs(iter_,v,target,numbers):
    global answer
    if iter_ == len(numbers):
        if v==target:
            answer+=1
        return
    dfs(iter_+1,v+numbers[iter_],target,numbers)
    dfs(iter_+1,v-numbers[iter_],target,numbers)


def solution(numbers, target):
    global answer
    answer = 0 
    v = 0
    i = 0
    dfs(i,v,target,numbers)
    
    return answer