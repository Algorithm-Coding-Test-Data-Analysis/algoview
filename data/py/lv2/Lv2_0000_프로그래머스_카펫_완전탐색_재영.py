def solution(brown, yellow):
    answer = []
    total = brown + yellow
    
    for i in range(1,total+1):
        if total%i == 0:
            bh = i
            bw = total//i
            yh = bh - 2
            yw = bw - 2
        if yh*yw == yellow:
            break
    answer = [bw,bh]
    return answer
