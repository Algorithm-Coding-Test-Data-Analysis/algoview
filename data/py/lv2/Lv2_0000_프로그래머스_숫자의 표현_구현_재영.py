def solution(n):
    answer = 0

    for i in range(1,n+1):
        d = [0]
        num = i
        while sum(d)<n:
            d.append(num)
            if sum(d) == n:
                answer += 1
            num+=1

    return answer

