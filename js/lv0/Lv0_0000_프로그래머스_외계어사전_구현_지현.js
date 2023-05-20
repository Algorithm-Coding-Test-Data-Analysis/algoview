function solution(spell, dic) {
    spell = spell.sort().join('')
    let answer = dic.map(item=>item.split('').sort().join('')).find(item=>item ===spell)
    return answer!==undefined?1:2
}
