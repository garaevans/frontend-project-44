import readlineSync from 'readline-sync';
import { greetPlayer, rules, maxNumberOfRounds, generateRandomNum } from '../index.js';

const evenGame = () => {
  const playerName = greetPlayer();

  console.log(rules.even);

  const isEven = (num) => num % 2 === 0;

  const startRound = () => {
    const randomNum = generateRandomNum(1, 100);
    console.log(`Question: ${randomNum}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
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

export default evenGame;
