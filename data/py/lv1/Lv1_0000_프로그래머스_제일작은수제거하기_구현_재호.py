def solution(arr):
    arr.remove(min(arr))
    if arr == []:
        return [-1]
    else:
        return arr