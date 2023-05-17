def solution(order):
    order = str(order)

    return order.count('3') + order.count('6') + order.count('9')
