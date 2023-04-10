import generateRandomNum from '../utils.js';
import startGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const startRound = () => {
  const randomNum = generateRandomNum(1, 100);
  const question = randomNum;
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenGame = () => startGame('even', startRound);

export default evenGame;
