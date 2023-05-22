function solution(players, callings) {
    const obj = {}
    players.forEach((name, i) => {
        obj[name] = i
    })
    callings.forEach((name) => {
        const idx = obj[name]
        const front = players[idx - 1]
        players[idx] = front
        players[idx - 1] = name
        obj[name] -= 1
        obj[front] += 1
    })
    return players
}
