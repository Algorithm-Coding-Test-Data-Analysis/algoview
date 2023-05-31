def solution(numbers):
    answer = sum([i for i in [i for i in range(0, 10)] if i not in numbers])

    return answer
