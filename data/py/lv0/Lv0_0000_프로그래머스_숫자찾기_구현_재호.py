def solution(num, k):
    if str(k) in str(num):
        return str(num).find(str(k)) + 1
    else :
        return -1