$(document).ready(function () {
    let board = document.getElementById('board');
    let boardContent = ``;

    let chessBoard = [
        [9814,9816,9815,9813,9812,9815,9816,9814],
        [9817,9817,9817,9817,9817,9817,9817,9817],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [9823,9823,9823,9823,9823,9823,9823,9823],
        [9820,9821,9822,9819,9818,9822,9821,9820]
    ];

    let bw = [
        ['w','w','w','w','w','w','w','w'],
        ['w','w','w','w','w','w','w','w'],
        ['e','e','e','e','e','e','e','e'],
        ['e','e','e','e','e','e','e','e'],
        ['e','e','e','e','e','e','e','e'],
        ['e','e','e','e','e','e','e','e'],
        ['b','b','b','b','b','b','b','b'],
        ['b','b','b','b','b','b','b','b'],
    ];


    for(let i=0;i<8;i++) {
        boardContent += `<div class="row">`
        for(let j=0;j<8;j++) {
            boardContent += `
            <div id="p_${i}_${j}" class="cellContainer">
            <div 
            data-number="${chessBoard[i][j] == 0 ? `0` : `${chessBoard[i][j]}` }" 
            data-color="${bw[i][j]}"
            class="cell">
            ${chessBoard[i][j] == 0 ? `` : `&#${chessBoard[i][j]};` }
            </div>
            </div>
            `
        }
        boardContent += `</div>`;
    }

    board.innerHTML = boardContent;


});