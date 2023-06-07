def solution(rsp):
    result = ''    
    for i in rsp:
        if i == '2':
            result += '0'
        elif i == '0':
            result += '5'
        else:
            result += '2'
    return result