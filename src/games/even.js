import generateRandomNum from '../utils.js';
import startGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const startRound = () => {
  const randomNum = generateRandomNum(1, 100);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [randomNum, correctAnswer];
};

const evenGame = () => startGame('even', startRound);

export default evenGame;
