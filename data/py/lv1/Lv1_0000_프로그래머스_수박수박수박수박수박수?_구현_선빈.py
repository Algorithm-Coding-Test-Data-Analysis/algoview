def solution(n):
    answer = ''

    for i in range(0, n):
        if i % 2:
            answer += '박'
        else:
            answer += '수'
    return answer


# 다른풀이
def solution_b(n):
    string = "수박" * n

    return string[:n]


print(solution(3))
