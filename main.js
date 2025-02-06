let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  let computerChoice = Math.round(Math.random() * 100) / 100;
  if (computerChoice <= 0.33) {
    computerChoice = `Rock`;
  } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
    computerChoice = `Paper`;
  } else {
    computerChoice = `Scissors`;
  }
  return computerChoice;
};

const getHumanChoice = () => {
  let input = prompt(`Rock, paper, or scissors?`);
  input = `${input.split("")[0].toUpperCase()}${input.slice(1).toLowerCase()}`;
  return input;
};

const playRound = (computerChoice, humanInput) => {
  console.log(`Computer chose ${computerChoice}. You chose ${humanInput}.`);
  if (
    (computerChoice === `Rock` && humanInput === `Paper`) ||
    (computerChoice === `Paper` && humanInput === `Scissors`) ||
    (computerChoice === `Scissors` && humanInput === `Rock`)
  ) {
    humanScore++;
    console.log(`You win this round! Your score = ${humanScore}`);
    return humanScore;
  } else if (computerChoice === humanInput) {
    console.log(`It's a draw!`);
  } else {
    computerScore++;
    console.log(`You lose this round! Comp score = ${computerScore}`);
    return computerScore;
  }
};

const playGame = () => {
  while (humanScore < 5 && computerScore < 5) {
    playRound(getComputerChoice(), getHumanChoice());
  }
  if (humanScore === 5) {
    console.log(
      `Your score is ${humanScore} and Computer score is ${computerScore}. You win!`
    );
  } else if (computerScore === 5) {
    console.log(
      `Your score is ${humanScore} and Computer score is ${computerScore}.You lose!`
    );
  }
};

playGame();
