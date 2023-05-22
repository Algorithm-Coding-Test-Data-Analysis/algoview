import re


def solution(s):
    p_p = re.compile('p|P')
    p_y = re.compile('y|Y')

    p_count = len(p_p.findall(s))
    y_count = len(p_y.findall(s))

    answer = True if p_count == y_count or p_count == y_count == 0 else False

    return answer


