def solution(s):
    answer = ''
    d = {'zero':0,
        'one':1,
        'two':2,
         'three':3,
         'four':4,
         'five':5,
         'six':6,
         'seven':7,
         'eight':8,
         'nine':9
        }
    s2=''
    for c in s:
        if c in '1234567890':
            answer+=c
        else:
            s2+=c
            if s2 in list(d.keys()):
                answer+=str(d[s2])
                s2=''
    return int(answer)