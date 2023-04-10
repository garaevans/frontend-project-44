import generateRandomNum from '../utils.js';
import startGame from '../index.js';

const getGCD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
};

const startRound = () => {
  const randomNum1 = generateRandomNum(1, 25);
  const randomNum2 = generateRandomNum(1, 25);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = getGCD(randomNum1, randomNum2).toString();
  return [question, correctAnswer];
};

const gcdGame = () => startGame('gcd', startRound);

export default gcdGame;
