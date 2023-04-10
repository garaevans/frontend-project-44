import generateRandomNum from '../utils.js';
import startGame from '../index.js';

const generateProgression = (startNum, step, length) => {
  const progression = [];
  progression[0] = startNum;
  let current = startNum;
  for (let i = 1; i < length; i += 1) {
    current += step;
    progression.push(current);
  }

  return progression;
};

const startRound = () => {
  const startNum = generateRandomNum(1, 25);
  const step = generateRandomNum(1, 10);
  const length = generateRandomNum(5, 10);
  const progression = generateProgression(startNum, step, length);

  const randomIndex = generateRandomNum(0, length - 1);
  const missingNum = progression[randomIndex];

  const correctAnswer = missingNum.toString();

  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const progressionGame = () => startGame('progression', startRound);

export default progressionGame;
