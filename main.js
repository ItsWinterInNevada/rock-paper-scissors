const getComputerChoice = (humanInput) => {
  let computerChoice = Math.round(Math.random() * 100) / 100;

  if (computerChoice <= 0.33) {
    computerChoice = `Rock`;
    console.log(`You chose ${humanInput}. Computer chose ${computerChoice}.`);
  } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
    computerChoice = `Paper`;
    console.log(`You chose ${humanInput}. Computer chose ${computerChoice}.`);
  } else {
    computerChoice = `Scissors`;
    console.log(`You chose ${humanInput}. Computer chose ${computerChoice}.`);
  }

  if (
    (computerChoice === `Rock` && humanInput === `Paper`) ||
    (computerChoice === `Paper` && humanInput === `Scissors`) ||
    (computerChoice === `Scissors` && humanInput === `Rock`)
  ) {
    console.log(`You Win!`);
  } else if (computerChoice === humanInput) {
    console.log(`You Draw!`);
  } else {
    console.log(`You Lose!`);
  }
};

let getHumanChoice = () => {
  let input = prompt(`Rock, Paper, or Scissors?`);

  if (input === `Rock` || input === `Paper` || input === `Scissors`) {
    return input;
  } else {
    return (input = prompt(
      `Incorrect value entered! Rock, Paper, or Scissors? (Be sure to capitalise and check spelling!)`
    ));
  }
};

getComputerChoice(getHumanChoice());
