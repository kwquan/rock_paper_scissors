let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    value = Math.random();
    if (value <= 1/3)
        {
            choice = "rock"
        }

    else if (value > 1/3 && value <= 2/3)
    {
            choice = "paper"
    }

    else 
    {
        choice = "scissors"
    }
    return choice

}

function getHumanChoice()
{
    player_choice = prompt("your choice?").toLowerCase();
    allowed_choice = ["rock", "paper", "scissors"];
    if (allowed_choice.includes(player_choice) != true)
    {
        console.log("Invalid choice! Please choose again")
        getHumanChoice();
    }
    return player_choice
}

function playRound(humanSelection, computerSelection)
{
    if (humanSelection == "rock" && computerSelection == "scissors")
    {
        console.log("You win! Rock beats Scissors.")
        humanScore += 1
    }
    else if (humanSelection == "rock" && computerSelection == "paper")
    {
        console.log("You lose! Paper beats Rock.")
        computerScore += 1
    }
    else if (humanSelection == "paper" && computerSelection == "rock")
    {
        console.log("You win! Paper beats Rock.")
        humanScore += 1
    }
    else if (humanSelection == "paper" && computerSelection == "scissors")
    {
        console.log("You lose! Scissors beats Paper.")
        computerScore += 1
    }
    else if (humanSelection == "scissors" && computerSelection == "paper")
    {
        console.log("You win! Scissors beats Paper.")
        humanScore += 1
    }
    else if (humanSelection == "scissors" && computerSelection == "rock")
    {
        console.log("You lose! Rock beats Scissors.")
        computerScore += 1
    }
    else
    {
        console.log(humanSelection + " draws with " + computerSelection + " It's a draw!")
    }
}

function playGame()
{
    playTimes = 0;
    limit = 5;
    for (let i = 0; i < limit; i++)
    {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }
    if (humanScore > computerScore)
    {
        console.log("You win!" + " The Score is " + humanScore + " - " + computerScore)
    }
    else if (humanScore < computerScore)
    {
        console.log("You lose!" + " The Score is " + humanScore + " - " + computerScore)
    }
    else
    {
        console.log("Draw!" + " The Score is " + humanScore + " - " + computerScore)
    }
}

playGame();