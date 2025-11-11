function getComputerChoice() {
  // Generate a random number between 0 (inclusive) and 1 (exclusive)
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Test the function
console.log(getComputerChoice());
