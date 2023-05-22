def solution(sides):
    max_side = max(sides)

    sides.remove(max_side)
    other_sides_sum = sum(sides)

    if max_side < other_sides_sum:
        return 1
    else:
        return 2
