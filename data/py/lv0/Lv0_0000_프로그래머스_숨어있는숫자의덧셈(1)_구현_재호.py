def solution(my_string):
    result = 0
    for i in my_string:
        if i.isdigit():
            result += int(i)
            
    return result