def solution(sides):
    result = []
    side = sorted(sides)
    
    min = side[1] - side[0]
    max = side[0] + side[1]
    
    for i in range(min, max):
        if min < i < max:
            result.append(i)
    
    return len(result)