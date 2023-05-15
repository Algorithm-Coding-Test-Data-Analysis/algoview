// todo 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

let str = 23;
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
let result = []

//! 일단 풀어서 해봤을때 결과가 잘 안나왔던
String(str).split("").map(el => {
  console.log(arr[el]) // 'c', 'd'
  return result.push(arr[el]) // [1, 2]가 반환 왜?
})

String(str).split("").map(el => {
    console.log(el) // '2', '3'
    result.push(arr[el])
    return result // [ [ 'c', 'd' ], [ 'c', 'd' ] ] 엥??
})


//*
function solution (age) {
    return String(age).split("").map(Number).reduce((a,b) => a+= arr[b], "")
}  
