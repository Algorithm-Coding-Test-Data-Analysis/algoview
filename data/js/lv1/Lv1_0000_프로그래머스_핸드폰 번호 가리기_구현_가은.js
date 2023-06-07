function solution(phone_number) {
  let numArr = phone_number.split("");
  return numArr.fill("*", 0, numArr.length - 4).join("")
}