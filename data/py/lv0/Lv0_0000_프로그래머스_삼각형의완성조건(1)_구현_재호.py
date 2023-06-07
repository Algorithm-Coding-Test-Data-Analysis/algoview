def solution(sides):
    sides.sort()
    if sides[-1] < sides[0] + sides[1]:
        return 1
    else:
        return 2