import generateRandomNum from '../utils.js';
import startGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const startRound = () => {
  const randomNum = generateRandomNum(1, 25);
  const question = randomNum;
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeGame = () => startGame('prime', startRound);

export default primeGame;
