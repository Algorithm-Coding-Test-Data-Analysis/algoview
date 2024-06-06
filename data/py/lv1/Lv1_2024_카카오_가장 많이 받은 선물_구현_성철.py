def solution(friends, gifts):
    score = {name: {friend: 0 for friend in friends} for name in friends}
    
    for gift in gifts:
        p, d = gift.split()
        
        score[p][p] += 1
        score[d][d] -= 1
        
        score[p][d] += 1
        score[d][p] -= 1

    gift = {name: 0 for name in friends}    

    for order, fre in score.items():
        cnt = 0
        for k, v in fre.items():
            if v > 0 and order != k:
                cnt += 1
            elif v == 0 and (score[k][k] < score[order][order]) and order != k:
                cnt += 1
        gift[order] = cnt
    
    return max(gift.values())
