def solution(n):
    count10 = 0
    count3 = []
    while 1:
        count10 += 1
        if count10 % 3 == 0 or '3' in str(count10):
            continue
        count3.append(count10)
        if len(count3) >= n:
            break

    return count3[-1]