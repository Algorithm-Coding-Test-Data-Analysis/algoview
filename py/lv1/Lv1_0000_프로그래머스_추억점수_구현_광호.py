def solution(name, yearning, photo):
    answer = []
    d = dict(zip(name, yearning))
    hap = 0
    for i in photo:
        hap = 0
        for j in i:
            hap += d.get(j) if d.get(j) else 0
        answer.append(hap)
    return answer