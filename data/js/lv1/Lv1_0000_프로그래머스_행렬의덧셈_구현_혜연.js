function solution(arr1, arr2) {
    return arr1.map((outer, oi) => outer.map((inner, ii) => inner + arr2[oi][ii]))
}
