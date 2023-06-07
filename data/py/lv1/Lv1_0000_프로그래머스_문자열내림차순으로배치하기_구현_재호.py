def solution(s):
    lower_s = []
    upper_s = []
    for i in s:
        if i.islower():
            lower_s.append(i)
        else:
            upper_s.append(i)
    return ''.join(sorted(lower_s, reverse = True) + sorted(upper_s, reverse = True))