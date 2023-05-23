def solution(array):
    result = []
    result.append(max(array))
    num = array.index(max(array))
    result.append(num)
    return result