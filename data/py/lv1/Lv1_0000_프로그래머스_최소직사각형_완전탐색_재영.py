def solution(sizes):
    answer = 0
    
    number = [i for i in range(len(sizes))]
    w = [x for x,y in sizes]
    h = [y for x,y in sizes]
    
    for i in number:
        if w[i]<h[i]:
            h[i],w[i] = w[i],h[i]
    
    s = max(w)*max(h)
    
    answer = s
        
    return answer