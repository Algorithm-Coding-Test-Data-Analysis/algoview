def solution(dot):
    if dot[0] > 0 and dot[1] > 0:
        return 1
    elif dot[0] > 0 and dot[1] < 0:
        return 4
    elif dot[0] < 0 and dot[1] > 0:
        return 2
    else:
        return 3