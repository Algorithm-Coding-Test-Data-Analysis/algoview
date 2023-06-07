function solution(numbers) {
    
    const answer = [];
    for(let number of numbers){
        let numberToBinary = number.toString(2);
        const treeHeight = parseInt(Math.log2(numberToBinary.length)) + 1
        const nodes = Math.pow(2, treeHeight) - 1;
        
        const dummyCount = nodes - numberToBinary.length;
        for(let i = 0; i < dummyCount; i++){
            numberToBinary = '0' + numberToBinary
        }
        let flag = 0;
        
        function isMakeBinaryTree(start, end, binary){
    
            const half = parseInt( (start + end) / 2);
            if (start === end) {
                return ;
            }
            if (binary[half] == 0){
                for(let i=start; i<half; i++){
                    if (binary[i] == 1) {
                        flag = 1;
                        return ;
                    }
                }
                for(let j=half+1; j<=end; j++){
                    if (binary[j] == 1) {
                        flag = 1;
                        return ;
                    }
                }
            }
            isMakeBinaryTree(start,half-1,binary)
            isMakeBinaryTree(half+1,end,binary)
        }
        isMakeBinaryTree(0,numberToBinary.length-1,numberToBinary);
        
        if (flag) answer.push(0);
        else answer.push(1);
    }
    return answer;
}