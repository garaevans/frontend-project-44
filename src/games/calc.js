import generateRandomNum from '../utils.js';
import startGame from '../index.js';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  let result;
  if (operator === '+') result = num1 + num2;
  if (operator === '-') result = num1 - num2;
  if (operator === '*') result = num1 * num2;
  return result;
};

const startRound = () => {
  const randomNum1 = generateRandomNum(1, 25);
  const randomNum2 = generateRandomNum(1, 25);
  const operator = operators[generateRandomNum(0, operators.length - 1)];
  const question = `${randomNum1} ${operator} ${randomNum2}`;
  const correctAnswer = calculate(randomNum1, randomNum2, operator).toString();
  return [question, correctAnswer];
};

const calcGame = () => startGame('calc', startRound);

export default calcGame;
