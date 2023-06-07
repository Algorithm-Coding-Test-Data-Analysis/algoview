def solution(s):
    answer = True
    
    stack = []

    for c in s:
        if not stack and c == ')':
            return False
        if c == '(':
            stack.append(c)
        elif stack[-1] == '(' and c == ')':
            stack.pop()
        
    if stack:
        return False 

    return answer