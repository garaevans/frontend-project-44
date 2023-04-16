import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const rule = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const randomNumber1 = generateRandomNumber(1, 25);
  const randomNumber2 = generateRandomNumber(1, 25);
  const operator = operators[generateRandomNumber(0, operators.length - 1)];
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  const answer = calculate(randomNumber1, randomNumber2, operator).toString();
  return [question, answer];
};

const runGame = () => startGame(rule, generateRound);

export default runGame;
