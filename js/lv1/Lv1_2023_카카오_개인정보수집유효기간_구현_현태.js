function solution(today, terms, privacies) {
    
    const answer = [];
    const map = new Map();
    
    for(let term of terms){
        const [alpha, month] = term.split(' ');
        
        map.set(alpha, month);
    }
    for(let i = 0; i < privacies.length; i++){
        const [date, type] = privacies[i].split(' ');
        let [year, month, day] = date.split('.').map(Number);
        
        let addMonth = Number(map.get(type));
        
        year += parseInt(addMonth / 12);
        month += addMonth % 12;
        if (month > 12){
            year += 1;
            month %= 12;
        }
        
        const [tY, tM, tD] = today.split('.').map(Number);
        
        if (year < tY){
            answer.push(i+1);
            continue;
        } else if (year === tY){
            if (month < tM) {
                answer.push(i+1);
                continue;
            } else if (month === tM){
                if (day <= tD) {
                    answer.push(i+1);
                    continue;
                }
            }
        }
    }
    return answer
}