def solution(a, b):
    if a < b:
        answer = sum([i for i in range(a, b + 1)])
    else:
        answer = sum([i for i in range(b, a + 1)])

    return answer
