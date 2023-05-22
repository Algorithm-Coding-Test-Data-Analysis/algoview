def solution(numbers, direction):

    if direction == "right":
        temp = numbers[-1]
        numbers.insert(0, temp)
        del numbers[-1]
    else:
        temp = numbers[0]
        numbers.append(temp)
        del numbers[0]

    return numbers
