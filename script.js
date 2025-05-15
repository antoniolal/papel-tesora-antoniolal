console.log("Hello World");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const choice = prompt("Escolhe: pedra, papel ou tesora");
  return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`Empate! Ambos escolheram ${humanChoice}`);
    return;
  }

  const winConditions = {
    rock: "tesora",
    paper: "pedra",
    scissors: "papel"
  };

  if (winConditions[humanChoice] === computerChoice) {
    humanScore++;
    console.log(`Ganhaste! ${humanChoice} ganha a ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`Perdeste! ${computerChoice} ganha a ${humanChoice}`);
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`\n--- Ronda ${i} ---`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Pontuação: Humano ${humanScore} - Computador ${computerScore}`);
  }

  console.log("\n=== Resultado Final ===");
  if (humanScore > computerScore) {
    console.log("Parabéns! Ganhaste o jogo!");
  } else if (humanScore < computerScore) {
    console.log("Perdeste o jogo. Tenta novamente!");
  } else {
    console.log("Empate! Foi um bom jogo.");
  }
}

playGame();
