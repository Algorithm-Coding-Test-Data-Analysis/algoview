function solution(my_string) {
    return [...my_string].map(i => 
        /[a-z]/.test(i) ? i.toUpperCase() : i.toLowerCase()
    ).join('')
}
