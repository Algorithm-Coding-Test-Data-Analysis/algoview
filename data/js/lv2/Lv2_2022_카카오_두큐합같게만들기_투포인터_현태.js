function solution(survey, choices) {
    
    let answer = '';
    const table = [['R','T'],['C','F'],['J','M'],['A','N']];
    const map = new Map();
    
    table.forEach((alphas) => {
      alphas.forEach(alpha =>{
            map.set(alpha,0);
      })
    })
    
    for(let i=0; i<survey.length; i++){
        const [front, back] = survey[i].split('');
        const choice = choices[i];
        
        if (choice === 4) continue;
        
        if (choice < 4){
            map.set(front, map.get(front) + (4 - choice));
        } else {
            map.set(back, map.get(back) + (choice - 4));
        }        
    }
    
    for(let i = 0; i < table.length; i++){
        const [typeOne, typeTwo] = table[i];
        const [typeOneData, typeTwoData] = [map.get(typeOne), map.get(typeTwo)];
        
        if (typeOneData ===  typeTwoData || typeOneData > typeTwoData) answer += typeOne;
        else answer += typeTwo;      
    }
    return answer;
}