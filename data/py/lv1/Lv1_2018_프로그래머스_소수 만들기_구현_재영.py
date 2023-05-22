from itertools import combinations

def solution(nums):
    answer = 0
    
    for e in combinations(nums,3):
        answer+=check(sum(e))

    return answer

def check(num):
    for i in range(2,num//2+1):
        if num%i == 0:
            return 0
    return 1