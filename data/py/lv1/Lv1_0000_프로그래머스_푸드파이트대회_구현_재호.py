def solution(food):
    result = ''
    
    for i in range(1, len(food)):
        num = food[i] // 2
        result += str(i) * num
        
    return result + '0' + result[::-1]