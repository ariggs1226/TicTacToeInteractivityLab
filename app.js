let turnCount = 0;
let match1 = false;
let match2 = false;

let cells = document.querySelectorAll('.row > div')

function nextTurn () {
    turnCount++;
    // while (turnCount < 9) {
    // } 
};

function whosTurn () {
    if (turnCount % 2 == 0) {
        
    } else if (turnCount % 2 !== 0) {

    }
}

function checkLine (a, b, c) {
    return (
        cells[a] == cells[b] &&
        cells[b] == cells[c] &&
        (cells[a] == 'X' || cells[a] == 'O')
    );
};


for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
};

function cellClicked() {
    console.log(turnCount)
    if (turnCount % 2 == 0) {
        event.target.textContent = 'X';
    } else if (turnCount % 2 !== 0) {
        event.target.textContent = 'O';
    }
    checkMatch1();
    checkMatch2();
    checkWinner();
    nextTurn();
};

function checkMatch1() {
    for (i = 0; i < 9; i += 3) {
        if(checkLine(i, i + 1, i + 2) && cells[i].textContent == 'X'  && cells[i + 1].textContent == 'X'  && cells[i + 2].textContent == 'X') {
            return match1 = true;
        }
    }
    
    for (i = 0; i < 3; i++) {
        if (checkLine(i, i + 3, i + 6) && cells[i, i + 3, i + 6].textContent === 'X') {
            return match1 = true;
        }
    }

    if (checkLine(0, 4, 8) && cells[0, 4, 8].textContent === 'X') {
        return match1 = true;
    }
    if (checkLine(2, 4, 6) && cells[2, 4, 6].textContent === 'X') {
        return match1 = true;
    }
}

function checkMatch2() {
    for (i = 0; i < 9; i += 3) {
        if(checkLine(i, i + 1, i + 2) && cells[i, i + 1, i + 2].textContent === 'O') {
            return match2 = true;
        }
    }
    
    for (i = 0; i < 3; i++) {
        if (checkLine(i, i + 3, i + 6) && cells[i, i + 3, i + 6].textContent === 'O') {
            return match2 = true;
        }
    }

    if (checkLine(0, 4, 8) && cells[0, 4, 8].textContent === 'O') {
        return match2 = true;
    }
    if (checkLine(2, 4, 6) && cells[2, 4, 6].textContent === 'O') {
        return match2 = true;
    }
}

let player1Win
let player2Win
let draw

function checkWinner() {
    if (match1 == true) {
        return player1Win = true;
    } else if (match2 == true) {
        return player2Win = true;
    } else if ((cells[0, 1, 2, 3, 4, 5, 6, 7, 8].textContent !== '') && (player1Win == false) && (player2Win == false)) {
        return draw = true;
    }

    if (player1Win == true || player2Win == true || draw == true) {
        if (player1Win == true) {
            alert("Player 1 Has Won!")
        } else if (player2Win == true) {
            alert('Player 2 Has Won!')
        } else if (draw == true) {
            alert('No noves left, so Draw!')
        }

        
    }
}