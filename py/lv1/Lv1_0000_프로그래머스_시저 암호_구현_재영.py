def solution(s, n):
    answer = ''
    
    for c in s:
        if c ==' ':
            answer+=c
        if ord(c)+n>ord('z'):
            answer += chr(ord(c)+n-26)
        elif ord(c)>=ord('a'):
            answer += chr(ord(c)+n)
        elif ord(c)+n>ord('Z'):
            answer += chr(ord(c)+n-26)
        elif ord(c)>=ord('A'):
            answer += chr(ord(c)+n)
    return answer