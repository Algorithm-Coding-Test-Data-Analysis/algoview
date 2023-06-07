def solution(array, height):
    num = 0

    for i in array:
        if i > height:
            num += 1

    return num