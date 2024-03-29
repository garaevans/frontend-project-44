import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const randomNumber = generateRandomNumber(1, 25);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

const runGame = () => startGame(rule, generateRound);

export default runGame;
