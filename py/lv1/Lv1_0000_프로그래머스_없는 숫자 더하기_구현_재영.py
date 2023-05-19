def solution(numbers):
    answer = 0
    for e in [1,2,3,4,5,6,7,8,9,0]:
        if e not in numbers:
            answer+=e
    return answer