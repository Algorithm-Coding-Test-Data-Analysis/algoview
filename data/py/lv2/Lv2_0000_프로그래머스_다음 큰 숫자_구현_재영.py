def solution(n):
    answer = 0
    
    t = bin(n)[2:].count('1')

    while True:
        n+=1
        if bin(n)[2:].count('1') == t:
            return n