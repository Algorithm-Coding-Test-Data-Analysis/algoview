def solution(arr, divisor):
    result = sorted([i for i in arr if i % divisor == 0])
    if result == []:
        result.append(-1)
    
    return result