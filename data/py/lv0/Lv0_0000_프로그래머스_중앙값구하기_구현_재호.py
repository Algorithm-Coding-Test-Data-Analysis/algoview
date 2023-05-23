def solution(array):
    array.sort()
    answer = (len(array) // 2)
    return array[answer]