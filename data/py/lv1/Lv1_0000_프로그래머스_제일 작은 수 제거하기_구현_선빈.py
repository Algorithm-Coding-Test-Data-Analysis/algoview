def solution(arr):
    arr.pop(arr.index(min(arr)))

    answer = [-1] if arr == [] else arr

    return answer
