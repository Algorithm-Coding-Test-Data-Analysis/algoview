def solution(str1, str2):
    l = []
    for i in range(len(str1)):
        l.append(str1[i])
        l.append(str2[i])

    return ''.join(l)

solution('aaaaa', 'bbbbb')