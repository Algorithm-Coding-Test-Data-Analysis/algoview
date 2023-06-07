import re


def solution(my_string):
    numbers = re.sub('[^0-9]', '', my_string)
    answer = sum([int(i) for i in numbers])

    return answer
