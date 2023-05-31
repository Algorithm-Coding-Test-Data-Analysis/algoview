function solution(arr, queries) {
    queries.forEach(([i,j]) => [arr[i], arr[j]] = [arr[j], arr[i]])
    return arr
}
