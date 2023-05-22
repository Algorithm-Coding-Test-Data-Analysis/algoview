def solution(numbers):
    numbers.sort()

    answer = numbers[-1] * numbers[-2]

    return answer
