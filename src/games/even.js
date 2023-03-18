import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(rule);

  const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const isEven = (num) => num % 2 === 0;

  const startRound = () => {
    const randomNum = generateRandomNum(1, 100);
    console.log(`Question: ${randomNum}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
    return [playerAnswer, correctAnswer];
  };

  for (let i = 0; i < 3; i += 1) {
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
