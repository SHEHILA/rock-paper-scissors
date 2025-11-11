let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
    if (roundsPlayed >= 5) return; // Stop after 5 rounds

    const computerChoice = getComputerChoice();
    let result = "";

    if (humanChoice === computerChoice) {
        result = `Tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    roundsPlayed++;
    document.getElementById("round-result").innerText = `Round ${roundsPlayed}: ${result}`;
    document.getElementById("score").innerText = `Score -> You: ${humanScore} | Computer: ${computerScore}`;

    if (roundsPlayed === 5) {
        declareWinner();
    }
}

function declareWinner() {
    let finalMessage = "";
    if (humanScore > computerScore) finalMessage = "🎉 Game Over: You are the overall winner!";
    else if (computerScore > humanScore) finalMessage = "💻 Game Over: Computer wins!";
    else finalMessage = "🤝 Game Over: It's a tie!";
    
    document.getElementById("final-winner").innerText = finalMessage;
}
