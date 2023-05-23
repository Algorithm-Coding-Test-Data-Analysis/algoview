def solution(left, right):
    result = 0
    for i in range(left, right + 1):
        if int(i**0.5) == i**0.5:
            result -= i
        else:
            result += i
    
    return result