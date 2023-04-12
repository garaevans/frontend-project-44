import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
};

const generateRound = () => {
  const randomNumber1 = generateRandomNumber(1, 25);
  const randomNumber2 = generateRandomNumber(1, 25);
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = getGCD(randomNumber1, randomNumber2).toString();
  return [question, answer];
};

const runGame = () => startGame(rule, generateRound);

export default runGame;
