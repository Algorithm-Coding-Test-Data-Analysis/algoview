from collections import deque

def solution(s):
    answer = 0

    s = deque(list(s))

    for i in range(len(s)):
        answer += check(s)
        s.append(s.popleft())

    return answer

def check(d):
    stack = []
    for c in d:
        if c in '[({':
            stack.append(c)
        if not stack and c in '])}':
            return 0
        elif c in '])}':
            if c ==']' and stack[-1] == '[':
                stack.pop()
                continue
            if c =='}' and stack[-1] == '{':
                stack.pop()
                continue
            if c ==')' and stack[-1] == '(':
                stack.pop()
                continue
    if stack:
        return 0
    else:
        return 1
            

        