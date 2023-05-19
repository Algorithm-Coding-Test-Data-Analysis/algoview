function solution(n)
{
    var answer = n.toString()
                    .split('')
                    .reduce((acc,cur)=>acc+cur*1,0);

    return answer;
}