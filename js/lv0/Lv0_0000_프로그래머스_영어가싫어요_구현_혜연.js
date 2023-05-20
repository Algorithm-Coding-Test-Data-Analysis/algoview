function solution(numbers) {
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    arr.forEach((v,i) => numbers = numbers.replaceAll(v, i))
    return Number(numbers)
}
