def solution(hp):
    total = (hp // 5) + (hp % 5 // 3) + (hp % 5 % 3)

    return total
