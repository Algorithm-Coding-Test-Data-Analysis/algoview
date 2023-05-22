import re


def solution(phone_number):
    answer = re.sub(r".(?=\d{4})", "*", phone_number)

    return answer
