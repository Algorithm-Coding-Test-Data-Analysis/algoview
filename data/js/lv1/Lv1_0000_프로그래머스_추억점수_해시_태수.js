function solution(name, yearning, photo) {
    const hash = new Map()
    name.forEach((name, i) => {
        hash.set(name, yearning[i])
    })
    const answer = photo.map((el) => {
        return el.reduce((acc, e) => {
            if (hash.get(e)) {
                return acc + hash.get(e)
            }
            return acc
        }, 0)
    })
    return answer
}
