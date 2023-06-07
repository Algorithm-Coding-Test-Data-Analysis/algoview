def solution(genres, plays):
    answer = []

    d = {}
    d2 = {}

    for i,x in enumerate(zip(genres,plays)):
        try:
            d[x[0]].append([i,x[1]])
            d2[x[0]] += x[1]
        except:
            d[x[0]] = []
            d[x[0]].append([i,x[1]])
            d2[x[0]] = x[1]

    for k in d:
        d[k].sort(key = lambda x:x[1],reverse=True)
    d2 = sorted(d2.items(), key = lambda x:x[1], reverse=True)
    
    for c,_ in d2:
        if len(d[c])==1:
            answer.append(d[c][0][0])
        else:
            answer.append(d[c][0][0])
            answer.append(d[c][1][0])

    return answer
            