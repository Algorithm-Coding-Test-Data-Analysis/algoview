def solution(a, b, n):
    result = 0
    
    while True:
        result += (n // a) * b
        n = (n // a) * b + (n % a)
        if a - 1 >= n:
            break
        
    return result