def solution(x):
    case_a = sum([int(i) for i in str(x)])

    if x % case_a == 0:
        answer = True
    else:
        answer = False

    return answer
