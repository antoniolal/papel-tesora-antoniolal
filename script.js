console.log("Hello World");

function gethumanChoice() {
  let jogar = prompt("Escolhe: pedra, papel, tesoura ");
  if (!jogar) return null;
  return jogar;
 
}
function getcomputerChoice(){
  const random = Math.random();
  if(random < 0.33) {
    return "pedra";
  } else if (random < 0.66) {
   
  return  "papel";

  } else {
   return "tesoura";
  }

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
   if  (!humanChoice) return;
   console.log("Tu escolheste: " + humanChoice);
   console.log("O Computador escolheu: " + computerChoice);

   if (humanChoice === computerChoice) {
     
    console.log("Empate!");
    return ;
  }
  
  if (
    (humanChoice == "pedra"  && computerChoice == "tesoura" ) ||
    (humanChoice == "papel" && computerChoice == "pedra") ||
    (humanChoice == "tesoura" && computerChoice == "papel")
){
  humanScore++;
  console.log("Ganhaste esta ronda!");
} else {
  computerScore++;
  console.log("Perdeste esta ronda!");
}

console.log("Pontuação - Tu: " + humanScore + " | Computador: " + computerScore);
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

   for (let i = 1; i <= 5; i++) {
    console.log("Ronda " + i);
    const human = gethumanChoice();
    if (human === null) {
         console.log("O Jogo foi cancelado.");
         return;
      }
      const computer = getcomputerChoice();
      playRound(human,computer);
  }
  console.log("Fim do Jogo");
  if (humanScore > computerScore){
       console.log("Ganhaste o jogo!");

    } else if (humanScore < computerScore) {
        console.log("O computador ganhou o jogo!");

      } else {
         console.log("Houve um empate!");
      }  

    }
    playGame();



