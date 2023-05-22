def solution(new_id):
    answer = ''
    
    new_id = new_id.lower()
    s = ''
    for i in range(len(new_id)):
        if new_id[i] not in '~!@#$%^&*()=+[{]}:?,<>/':
            s+=new_id[i]
    new_id = s
    
    d = []
    for i in range(len(new_id)-1):
        if new_id[i] =='.' and new_id[i+1]=='.':
            d.append(i)
    s = ''
    for i in range(len(new_id)):
        if i in d and i != 0:
            continue
        s+=new_id[i]
    
    new_id = s
    new_id = new_id.strip('.')
    
    if len(new_id) == 0:
        new_id += 'a'
        
    if len(new_id)>=16:
        new_id = new_id[:15]
    
    while len(new_id)<=2:
        new_id += new_id[-1]
        
    answer = new_id.strip('.')
            
    return answer