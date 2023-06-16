def solution(s):
    y_list = []
    p_list = []
    for i in s:
        if i == 'p' or i == 'P':
            p_list.append(i)
        elif i == 'y' or i == 'Y':
            y_list.append(i)
    
    if len(y_list) == len(p_list):
        return True
    return False