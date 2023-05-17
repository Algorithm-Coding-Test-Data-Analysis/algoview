def solution(my_string):
    answer = sorted([int(c) for c in my_string if c.isdigit()])

    return answer
