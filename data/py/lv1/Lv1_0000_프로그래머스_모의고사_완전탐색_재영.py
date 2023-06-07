def solution(answers):
    answer = []
    n = len(answers)//5+1
    
    s1 = [1,2,3,4,5]*n
    s2 = [2,1,2,3,2,4,2,5]*n
    s3 = [3,3,1,1,2,2,4,4,5,5]*n

    question = [s1[:len(answers)],s2[:len(answers)],s3[:len(answers)]]
    
    d = {i:0 for i in range(1,4)}
    
    for i in range(0,3):
        for j in range(len(answers)):
            if answers[j] == question[i][j]:
                d[i+1] += 1
    
    m = max(d.values())
    
    for i in range(1,4):
        if m == d[i]:
            answer.append(i)
    
    return answer