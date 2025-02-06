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

const rockPaperScissors = (computerChoice, humanInput) => {
  console.log(`Computer chose ${computerChoice}. You chose ${humanInput}.`);
  if (
    (computerChoice === `Rock` && humanInput === `Paper`) ||
    (computerChoice === `Paper` && humanInput === `Scissors`) ||
    (computerChoice === `Scissors` && humanInput === `Rock`)
  ) {
    console.log(`You win!`);
  } else if (computerChoice === humanInput) {
    console.log(`It's a draw!`);
  } else {
    console.log(`You lose!`);
  }
};

rockPaperScissors(getComputerChoice(), getHumanChoice());
