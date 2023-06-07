def solution(array, n):
    result = []
    sorted_array = sorted(array)
    for i in sorted_array:
        result.append(abs(n - i))
    
    x = result.index(min(result))
    
    return sorted(array)[x]