def solution(rsp):
    d = {'0': '5', '2': '0', '5': '2'}
    return ''.join(d[i] for i in rsp)
