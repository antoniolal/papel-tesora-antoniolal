

console.log("Hello World");

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
let jogoAtivo = false;

function getcomputerChoice() {
  const random = Math.random();
  if (random < 0.33) {
    return "pedra";
  } else if (random < 0.66) {
    return "papel";
  } else {
    return "tesoura";
  }
}

function playRound(humanChoice, computerChoice) {
  if (!humanChoice) return;

  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  let mensagem = `Tu escolheste: ${humanChoice}. Computador escolheu: ${computerChoice}. `;

  if (humanChoice === computerChoice) {
    mensagem += "Empate!";
  } else if (
    (humanChoice == "pedra" && computerChoice == "tesoura") ||
    (humanChoice == "papel" && computerChoice == "pedra") ||
    (humanChoice == "tesoura" && computerChoice == "papel")
  ) {
    humanScore++;
    mensagem += "Ganhaste esta ronda!";
  } else {
    computerScore++;
    mensagem += "Perdeste esta ronda!";
  }

  document.getElementById("pontuacao").textContent = `Jogador: ${humanScore} | Computador: ${computerScore}`;
  document.getElementById("mensagem").textContent = mensagem;
}

function checkGameOver() {
  if (roundCount === 5) {
    let finalMsg = "Fim do jogo! ";
    if (humanScore > computerScore) {
      finalMsg += "Ganhaste o jogo!";
    } else if (humanScore < computerScore) {
      finalMsg += "O computador ganhou o jogo!";
    } else {
      finalMsg += "Houve um empate!";
    }

    document.getElementById("mensagem").textContent = finalMsg;

    const buttons = document.querySelectorAll('button[data-choise]');
    buttons.forEach(btn => btn.disabled = true);
  }
}

const choiceButtons = document.querySelectorAll('button[data-choise]');
choiceButtons.forEach(button => {
  button.addEventListener("click", () => {
    const humanChoice = button.getAttribute("data-choise");

    if (roundCount < 5) {
      const computerChoice = getcomputerChoice();
      playRound(humanChoice, computerChoice);
      roundCount++;
      checkGameOver();
    }
  });
});

function playGame() {
  humanScore = 0;
  computerScore = 0;
  roundCount = 0;
  jogoAtivo = true;
  document.getElementById("pontuacao").textContent =
    "Jogador: 0 | Computador: 0";
document.getElementById("mensagem").textContent =
    "O jogo começou! Escolhe Pedra, Papel ou Tesoura.";
const buttons = document.querySelectorAll('button[data-choise]');
buttons.forEach(btn => btn.disabled = false);
}



