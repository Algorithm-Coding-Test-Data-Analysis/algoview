def solution(number):
    arr = list(number)
    sum = 0
    for i in range(len(arr)):
        sum += int(arr[i])
    answer = sum % 9
    return answer