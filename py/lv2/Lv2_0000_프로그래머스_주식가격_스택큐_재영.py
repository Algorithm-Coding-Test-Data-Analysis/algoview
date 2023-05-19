from collections import deque

def solution(prices):
    answer = []
    prices = deque(prices)
    while prices:
        p = prices.popleft()
        num = 0
        for i in prices:
            num +=1
            if i<p:
                break
        answer.append(num)

    return answer