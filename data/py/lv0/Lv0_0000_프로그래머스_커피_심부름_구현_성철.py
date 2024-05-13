def solution(order):
    answer = 0
    for coffe in order:
        if "cafelatte" in coffe:
            answer += 5000
        elif "americano" in coffe or "anything" in coffe:
            answer += 4500
    return answer