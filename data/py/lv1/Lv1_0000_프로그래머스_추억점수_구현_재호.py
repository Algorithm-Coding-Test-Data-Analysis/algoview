def solution(name, yearning, photo):
    result = []
    
    for i in photo:
        sum_ = 0
        for j in range(len(i)):
            if i[j] in name:
                index_ = name.index(i[j])
                sum_ += yearning[index_]
            else:
                pass
        
        result.append(sum_)
        
    return result