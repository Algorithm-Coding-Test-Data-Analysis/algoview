def solution(my_string):
    vowel = ["a", "e", "i", "o", "u"]

    for i in vowel:
        my_string = my_string.replace(i, "")

    return my_string
