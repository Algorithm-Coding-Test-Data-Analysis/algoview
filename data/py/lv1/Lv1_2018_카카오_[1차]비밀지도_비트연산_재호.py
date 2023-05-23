def solution(n, arr1, arr2):
    result = []
    for i in range(n):
        result.append((bin(arr1[i] | arr2[i])[2:].zfill(n)).replace('1', '#').replace('0',' '))
    
    return result