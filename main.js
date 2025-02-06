const getComputerChoice = () => {
    let computerChoice = Math.round(Math.random() * 100) / 100;
    console.log(computerChoice);

    if (computerChoice <= 0.33) {
        console.log(`You got Rock!`);
    } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
        console.log(`You got Paper!`);
    } else {
        console.log(`You got Scissors!`)
    }
}

getComputerChoice()