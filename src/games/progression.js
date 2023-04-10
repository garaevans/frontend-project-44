import readlineSync from 'readline-sync';
import generateRandomNum from '../utils.js';
import { greetPlayer, rules, maxNumberOfRounds } from '../index.js';

const progressionGame = () => {
  const playerName = greetPlayer();

  console.log(rules.progression);

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
    console.log(`Question: ${progression.join(' ')}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    return [playerAnswer, correctAnswer];
  };

  for (let i = 0; i < maxNumberOfRounds; i += 1) {
    const [playerAnswer, correctAnswer] = startRound();
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default progressionGame;
