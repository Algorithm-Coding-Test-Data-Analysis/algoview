def solution(priorities, location):
    answer = 0
    l = len(priorities)
    m = max(priorities)
    while priorities:
        if m != priorities[0]:
            priorities.append(priorities.pop(0))
            location = (location-1)%l

        else:
            if location == 0:
                answer+=1
                break
            else:
                priorities.pop(0)
                l-=1
                answer+=1
                location = (location-1)%l
                m = max(priorities)

    return answer