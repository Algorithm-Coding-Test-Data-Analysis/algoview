def solution(absolutes, signs):
    answer = 0
    for n, c in zip(absolutes, signs):
        if c:
            answer += n
        else:
            answer -= n
    return answer