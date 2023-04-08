import readlineSync from 'readline-sync';
import generateRandomNum from '../utils.js';
import { greetPlayer, rules, maxNumberOfRounds } from '../index.js';

const calcGame = () => {
  const playerName = greetPlayer();

  console.log(rules.calc);

  const operators = ['+', '-', '*'];

  const getOperator = (operators) => operators[generateRandomNum(0, operators.length - 1)];

  const calculate = (num1, num2, operator) => {
    if (operator === '+') return num1 + num2;
    if (operator === '-') return num1 - num2;
    if (operator === '*') return num1 * num2;
  };

  const startRound = () => {
    const randomNum1 = generateRandomNum(1, 25);
    const randomNum2 = generateRandomNum(1, 25);
    const operator = getOperator(operators);
    const expression = `${randomNum1} ${operator} ${randomNum2}`;
    console.log(`Question: ${expression}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = calculate(randomNum1, randomNum2, operator).toString();
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