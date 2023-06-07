function solution(sides) {
   sides.sort((a,b) => b-a);
   return sides[0] < sides[1] + sides[2] ? 1 : 2;
}
