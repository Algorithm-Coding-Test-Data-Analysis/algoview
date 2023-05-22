def solution(my_string, num1, num2):
    str_list = list(my_string)

    a = str_list[num1]
    b = str_list[num2]

    str_list[num1] = b
    str_list[num2] = a

    answer = "".join(str_list)

    return answer
