import readlineSync from 'readline-sync';

const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const rules = {
  even: 'Answer "yes" if the number is even, otherwise answer "no".',
  calc: 'What is the result of the expression?',
  gcd: 'Find the greatest common divisor of given numbers.',
  progression: 'What number is missing in the progression?',
  prime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

const maxNumberOfRounds = 3;

const startGame = (gameName, startRound) => {
  const playerName = greetPlayer();

  console.log(rules[gameName]);

  for (let i = 0; i < maxNumberOfRounds; i += 1) {
    const [question, correctAnswer] = startRound();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default startGame;
