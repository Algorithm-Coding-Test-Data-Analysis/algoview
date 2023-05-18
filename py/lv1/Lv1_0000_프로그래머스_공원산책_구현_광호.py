def solution(park, routes):
    direction = {
        'N': (-1, 0),
        'S': (1, 0),
        'W': (0, -1),
        'E': (0, 1),
    }
    pos = [0, 0]
    temp_pos = [0, 0]
    width = len(park[0])
    height = len(park)
    route_dir = ''
    route_count = ''
    for i in range(height):
        if 'S' in park[i]:
            pos[0], pos[1] = i, park[i].find('S')
            break
    for i in routes:
        temp_pos[0], temp_pos[1] = pos[0], pos[1]
        route_dir, route_count = i.split(' ')
        for _ in range(int(route_count)):
            temp_pos[0] += direction[route_dir][0]
            temp_pos[1] += direction[route_dir][1]
            if temp_pos[0] < 0 or temp_pos[0] >= height:
                temp_pos[0], temp_pos[1] = pos[0], pos[1]
                break
            if temp_pos[1] < 0 or temp_pos[1] >= width:
                temp_pos[0], temp_pos[1] = pos[0], pos[1]
                break   
            if park[temp_pos[0]][temp_pos[1]] == 'X':
                temp_pos[0], temp_pos[1] = pos[0], pos[1]
                break
        pos[0], pos[1] = temp_pos[0], temp_pos[1]
    answer = pos
    return answer