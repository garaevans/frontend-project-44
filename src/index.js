import readlineSync from 'readline-sync';

export const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

export const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const maxNumberOfRounds = 3;

export const rules = {
  even: 'Answer "yes" if the number is even, otherwise answer "no".',
  calc: 'What is the result of the expression?',
}
