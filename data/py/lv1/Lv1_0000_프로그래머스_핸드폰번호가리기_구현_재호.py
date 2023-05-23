import re

def solution(phone_number):
    number = re.sub('[0-9]', '*', phone_number[:-4])
    return number + phone_number[-4:]