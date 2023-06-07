def solution(sizes):
    max_size = []
    min_size = []
    
    for x, y in sizes:
        if x >= y :
            max_size.append(x)
            min_size.append(y)
        else:
            max_size.append(y)
            min_size.append(x)
    
    return max(max_size) * max(min_size)