function _getWeaponName(weaponNumber) {
    switch (weaponNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function _getWeaponNumer(weaponName) {
    switch (weaponName) {
        case "Rock":
            return 0;
        case "Paper":
            return 1;
        case "Scissors":
            return 2;
    }
}

function getComputerChoice() {
    const random = Math.floor(Math.random() * 10) % 3;
    return _getWeaponName(random);
}

function promptPlayerChoice() {
    let player;
    while (true) {
        player = prompt('Chin chan pú!', getComputerChoice());
        if (player &&
            (player.toLowerCase() == 'rock' ||
            player.toLowerCase() == 'paper' ||
            player.toLowerCase() == 'scissors')) {
                break;
        }
        alert('Please enter only "Rock", "Paper" or "Scissors');
    }
    return player;
}

function _whoWins(player1, player2) {
    if (player1 == player2) {
        return 0;
    }

    if (player1 == 0) {     //Rock
        if (player2 == 1) { //Paper
            return 1;
        }
        return -1;          //Scissors
    }

    if (player1 == 1) {     //Paper
        if (player2 == 2) { //Scissors
            return 1;
        }
        return -1;          //Rock
    }

    if (player1 == 2) {     //Scissors
        if (player2 == 0) { //Rock
            return 1;
        }
        return -1;          //Paper
    }
}

function playRound(player, computer) {
    console.log(`player: ${player}`);
    console.log(`computer: ${computer}`);

    const playerNumber = _getWeaponNumer(player);
    const computerNumber = _getWeaponNumer(computer);

    const result = _whoWins(playerNumber, computerNumber);

    return result;
}

function game() {
    let games = 5;
    let playerScore = 0;
    let computerScore = 0;
    
    while (games > 0) {
        const playerSelection = promptPlayerChoice();
        const computerSelection = getComputerChoice();
        const round = playRound(playerSelection, computerSelection);

        switch (round) {
            case -1:
                console.log('Player scores!');
                playerScore++;
                break;
            case 1:
                console.log('Computer scores!');
                computerScore++;
                break;
            default:
                console.log('Tie!');
                continue;
        }
        console.log(`SCORE: (P) ${playerScore} vs ${computerScore} (C)`);
        games--;
    }

    if (playerScore == computerScore) {
        console.log('GAME TIED!');
        return
    }

    if (playerScore > computerScore) {
        console.log('PLAYER WINS!');
    }
    else {
        console.log('COMPUTER WINS!');
    }
    
}

game();