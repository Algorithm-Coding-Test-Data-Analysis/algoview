def solution(num):
    result = 0
    for i in range(501):
        if num % 2 == 0:
            num /= 2
            result += 1
            if num == 1:
                return result
        elif num == 1:
            return 0
        elif num % 2 != 0:
            num = num * 3 + 1
            result += 1
    if num != 1:
        return -1