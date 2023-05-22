def solution(arr, divisor):
    answer = [i for i in arr if i % divisor == 0]

    if len(answer) == 0:
        answer = [-1]

    answer.sort()

    return answer
