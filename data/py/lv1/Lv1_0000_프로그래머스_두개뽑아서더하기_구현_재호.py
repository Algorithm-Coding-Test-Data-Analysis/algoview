def solution(numbers):
    result = []
    
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers)):
            result.append(numbers[i] + numbers[j])
        
    result = set(result)
    return sorted(result)