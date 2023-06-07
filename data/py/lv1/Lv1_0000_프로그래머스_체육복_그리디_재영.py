def solution(nums):
    answer = 0
    
    l = len(set(nums))
    N = len(nums)//2
    
    if N<=l :
        return N
    else:
        return l