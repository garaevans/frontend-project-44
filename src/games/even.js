import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = generateRandomNumber(1, 100);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

const runGame = () => startGame(rule, generateRound);

export default runGame;
