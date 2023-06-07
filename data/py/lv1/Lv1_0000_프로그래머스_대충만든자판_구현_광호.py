def solution(keymap, targets):
    answer = []
    s = ''.join(keymap)
    temp = -1
    find_index = -1
    d = {}
    for i in set(s):
        temp = -1
        for j in keymap:
            find_index = j.find(i)
            if find_index == -1:
                continue
            if temp == -1:
                temp = find_index
            elif find_index < temp:
                temp = find_index
        if temp != -1:    
            d[i] = temp + 1
    for i in targets:
        temp = 0
        for j in i:
            if j not in d:
                temp = -1
                break
            temp += d[j]
        answer.append(temp)
    return answer