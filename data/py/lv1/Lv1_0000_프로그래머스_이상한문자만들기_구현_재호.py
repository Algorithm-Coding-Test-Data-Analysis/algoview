def solution(s):
    result = []
    split_s = s.split(' ')
    
    for i in split_s:
        result_word = ''
        for x in range(len(i)):
            if x % 2 == 0:
                result_word += i[x].upper()
            else:
                result_word += i[x].lower()
        
        result.append(result_word)
        
    return ' '.join(result)