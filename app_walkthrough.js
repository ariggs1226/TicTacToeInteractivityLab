let winningCombos = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]],
]



function cellClicked() {
    
}

function checkWin() {
    for (let i = 0; i < winningCombos.length; i++) {
        let xCount = 0;
        let oCount = 0;

        for (let j = 0; j < winningCombos[i].length; j++) {
            if (winningCombos[i][j].textContent == 'X') {
                xCount++;
            } else if (winningCombos[i][j].textContent == 'O') {
                oCount++;
            }
        }

        if (xCount == 3) {
            alert("X Wins!");
            break;
        } else if (oCount == 3) {
            alert("O Wins!");
            break;
        } else if (turnCount == 9) {
            alert("Draw");
            break;
        }
    }


    
    // if(cells[0].textContent == 'X' && cells[1].textContent == 'X' && cells[2].textContent == 'X') {
    //     alert('X Wins!')
    // }
    //etc etc for all win conditions

    function clear() {
        cells.forEach((cell)
        => {
            cell.textContent = '';
        });
    }