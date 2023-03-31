import readlineSync from 'readline-sync';
import { greetPlayer, rules, maxNumberOfRounds, generateRandomNum  } from '../index.js';

const calcGame = () => {
  const playerName = greetPlayer();

  console.log(rules.calc);

  const operators = ['+', '-', '*'];

  const getOperator = (operators) => operators[generateRandomNum(0, operators.length - 1)];

  const getPairOfNumbers = () => [generateRandomNum(1, 25), generateRandomNum(1, 25)];

  const calculate = (num1, num2, operator) => {
    if (operator === '+') return num1 + num2;
    if (operator === '-') return num1 - num2;
    if (operator === '*') return num1 * num2;
  };

  const startRound = () => {
    const [firstNum, secondNum] = getPairOfNumbers();
    const operator = getOperator(operators);
    const expression = `${firstNum} ${operator} ${secondNum}`;
    console.log(`Question: ${expression}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = calculate(firstNum, secondNum, operator).toString();
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

export default calcGame;