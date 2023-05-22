function solution(order) {
    let value = order.toString().match(/[369]/g) ?? []
    return value.length;
}