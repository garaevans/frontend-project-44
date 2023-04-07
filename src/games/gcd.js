import readlineSync from 'readline-sync';
import generateRandomNum from '../utils.js';
import { greetPlayer, rules, maxNumberOfRounds } from '../index.js';

const gcdGame = () => {
  const playerName = greetPlayer();

  console.log(rules.gcd);

  const getGCD = (a, b) => {
    while (a !== b) {
      if (a > b) {
        a -= b;
      } else {
        b -= a;
      }
    }

    return a;
  };

  const startRound = () => {
    const randomNum1 = generateRandomNum(1, 25);
    const randomNum2 = generateRandomNum(1, 25);
    console.log(`Question: ${randomNum1} ${randomNum2}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getGCD(randomNum1, randomNum2).toString();
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

export default gcdGame;