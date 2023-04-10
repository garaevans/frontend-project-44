import readlineSync from 'readline-sync';
import generateRandomNum from '../utils.js';
import { greetPlayer, rules, maxNumberOfRounds } from '../index.js';

const primeGame = () => {
  const playerName = greetPlayer();

  console.log(rules.prime);

  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }

    for (let i = 2; i < num / 2; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  const startRound = () => {
    const randomNum = generateRandomNum(1, 25);
    console.log(`Question: ${randomNum}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
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

export default primeGame;
