// ----- Step 2: Get Computer Choice -----
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

// ----- Step 3: Get Human Choice -----
function getHumanChoice() {
  const choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
  return choice;
}

// ----- Step 4: Initialize Scores -----
let humanScore = 0;
let computerScore = 0;

// ----- Step 5: Play One Round -----
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}.`);
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
  }
}

// ----- Step 6: Play Full Game (5 Rounds) -----
function playGame() {
  for (let round = 1; round <= 5; round++) {
    console.log(`\n--- Round ${round} ---`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score → You: ${humanScore} | Computer: ${computerScore}`);
  }

  console.log("\n=== Final Result ===");
  if (humanScore > computerScore) {
    console.log(`You win the game! 🎉 Final Score: You ${humanScore} - Computer ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You lose the game. 😢 Final Score: You ${humanScore} - Computer ${computerScore}`);
  } else {
    console.log(`It's a tie! 🤝 Final Score: You ${humanScore} - Computer ${computerScore}`);
  }
}

// Start the game
playGame();
