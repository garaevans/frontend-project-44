import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (startNumber, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(startNumber + (i * step));
  }

  return progression;
};

const generateRound = () => {
  const startNumber = generateRandomNumber(1, 25);
  const step = generateRandomNumber(1, 10);
  const length = generateRandomNumber(5, 10);
  const progression = generateProgression(startNumber, step, length);

  const hiddenIndex = generateRandomNumber(0, progression.length - 1);

  const answer = progression[hiddenIndex].toString();

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const runGame = () => startGame(rule, generateRound);

export default runGame;
