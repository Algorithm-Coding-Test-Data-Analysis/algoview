def solution(n):
    answer = int(''.join(map(str, sorted(list(str(n)), reverse=True))))

    return answer
