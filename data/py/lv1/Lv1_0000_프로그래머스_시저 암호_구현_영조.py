def solution(s, n):
    l = list(s)
    for i in range(len(s)):
        if l[i].isupper():
            l[i] = chr((ord(l[i]) - ord('A') + n) % 26 + ord('A'))
        elif l[i].islower():
            l[i] = chr((ord(l[i]) - ord('a') + n) % 26 + ord('a'))
    return ''.join(l)