def solution(cards1, cards2, goal):
    answer = ''
    for i in goal:
        if i in cards1:
            if cards1.pop(0) != i:
                answer = 'No'
                break
        if i in cards2:
            if cards2.pop(0) != i:
                answer = 'No'
                break
    if not(answer):
        answer = 'Yes'
    return answer