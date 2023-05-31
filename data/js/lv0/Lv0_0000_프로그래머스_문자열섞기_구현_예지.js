function solution(str1, str2) {
    return [...str1].map((a, i) => a+str2[i]).join("")
}
