function solution(numbers, hand) {
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  };

  let leftHand = [3, 0];
  let rightHand = [3, 2];
  let result = "";

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number === 1 || number === 4 || number === 7) {
      result += "L";
      leftHand = keypad[number];
    } else if (number === 3 || number === 6 || number === 9) {
      result += "R";
      rightHand = keypad[number];
    } else {
      const leftDistance = calculateDistance(leftHand, keypad[number]);
      const rightDistance = calculateDistance(rightHand, keypad[number]);

      if (leftDistance < rightDistance) {
        result += "L";
        leftHand = keypad[number];
      } else if (leftDistance > rightDistance) {
        result += "R";
        rightHand = keypad[number];
      } else {
        if (hand === "left") {
          result += "L";
          leftHand = keypad[number];
        } else {
          result += "R";
          rightHand = keypad[number];
        }
      }
    }
  }

  return result;
}

function calculateDistance(handPosition, numberPosition) {
  const [handRow, handCol] = handPosition;
  const [numberRow, numberCol] = numberPosition;

  return Math.abs(handRow - numberRow) + Math.abs(handCol - numberCol);
}
