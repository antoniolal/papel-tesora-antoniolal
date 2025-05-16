console.log("Hello World");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const choice = prompt("Escolhe: rock, paper ou scissors");
  if (!choice) {
    console.log("Jogo cancelado.");
    return null;
  }
  return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (!humanChoice) return;

  console.log(`🧍 Jogador escolheu: ${humanChoice}`);
  console.log(`🤖 Computador escolheu: ${computerChoice}`);


  if (humanChoice === computerChoice) {
    console.log(`Empate! Ambos escolheram ${humanChoice}`);
    return;
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (winConditions[humanChoice] === computerChoice) {
    humanScore++;
    console.log(`Ganhaste! ${humanChoice} ganha a ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`Perdeste! ${computerChoice} ganha a ${humanChoice}`);
  }
  console.log(`Pontuação atual - Tu: ${humanScore} | Computador: ${computerScore}`);
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`\n🔁 Ronda ${i}`);
    const humanChoice = getHumanChoice();
    if (humanChoice === null) return;

    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  console.log("\n=== Resultado Final ===");
  if (humanScore > computerScore) {
    console.log("Parabéns! Ganhaste o jogo!");
  } else if (humanScore < computerScore) {
    console.log("Perdeste o jogo.");
  } else {
    console.log("Empate!");
  }
}

playGame();
