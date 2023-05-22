def solution(price, money, count):
    answer = 0
    
    for i in range(1,count+1):
        print(money)
        money -= price*i
    
    if money<0:
        answer = abs(money)

    return answer