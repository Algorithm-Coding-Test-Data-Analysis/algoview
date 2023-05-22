from collections import deque

def solution(s):
    cnt1 = 0
    cnt2 = 0
    
    while s != '1':
        a =''
    
        for c in s:
            if c=='1':
                a+='1'
            else:
                cnt2+=1
        s = sol(len(a))    
        cnt1+=1
        
    return [cnt1,cnt2]

def sol(n):
    s=''
    while n>0:
        n, m = divmod(n,2)
        s += str(m)

    return s[::-1]