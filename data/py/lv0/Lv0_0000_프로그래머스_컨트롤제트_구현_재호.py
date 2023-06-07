def solution(s):
    numbers = s.split()
    result = []
    for num in numbers:
        if num.isdigit() or num.startswith('-'):
            result.append(int(num))
        elif num == 'Z':
            if result:
                result.pop()
    return sum(result)