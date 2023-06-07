def solution(order):
    result = 0
    result += str(order).count('3')
    result += str(order).count('6')
    result += str(order).count('9')
    return result