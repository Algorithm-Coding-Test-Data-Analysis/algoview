def solution(n):
    result = ''
    for i in range(n):
        if (i + 1) % 2 != 0:
            result += '수'
        else:
            result += '박'
    return result