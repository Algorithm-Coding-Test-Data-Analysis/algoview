function solution(s, x=0, y=0) {
    function rec(s) {
        if(s === '1') return
        const t = s.replaceAll('0','')
        y += s.length - t.length
        x++
        rec(t.length.toString(2))
    }
    rec(s)
    return [x,y]
}
