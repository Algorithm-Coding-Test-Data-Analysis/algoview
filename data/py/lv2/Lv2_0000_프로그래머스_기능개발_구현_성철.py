def solution(progresses, speeds):
    answer = []
    i = 0
    while len(speeds) > i:
        cnt = 0
        while progresses[i] < 100:
            progresses[i] += speeds[i]
            cnt += 1
        success = 0
        while len(progresses[(i + 1):]):
            if progresses[(i + 1)] + (speeds[(i + 1)] * cnt) >= 100:
                success += 1
                i += 1
            else:
                break
        answer.append(success + 1)
        i += 1
    return answer