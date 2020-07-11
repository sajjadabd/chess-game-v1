$(document).ready( function () {


    class Pawn {
        constructor() {
            this.movementTop = [
                { i : 0 ,  j : 1},
                { i : 0 ,  j : 2},
                { i : 1 ,  j : 1},
                { i : -1 , j : 1}
            ];
            this.movementDown = [
                { i : 0 ,  j : -1},
                { i : 0 ,  j : -2},
                { i : 1 ,  j : -1},
                { i : -1 , j : -1}
            ];
        }
    }
    
    class King {
        constructor() {
            this.movements = [
                { i : 0 , j : 1},
                { i : 0 , j : -1},
                { i : 1 , j : 0},
                { i : -1, j : 0},
                { i : 1 , j : 1},
                { i : -1, j : 1},
                { i : 1 , j : -1},
                { i : -1, j : -1}
            ];
        }
    }

    

    class Queen   {
        constructor() {
            this.movementsTop = [];
            this.movementsDown = [];
            this.movementsRight = [];
            this.movementsLeft = [];
            this.i = [1,2,3,4,5,6,7];
            this.j = [1,2,3,4,5,6,7];
            this.i.map( (value,index) => {
                this.movementsDown.push({
                    i : value,
                    j : 0
                });
                this.movementsTop.push({
                    i : -value,
                    j : 0
                });
                this.movementsRight.push({
                    i : 0,
                    j : value
                });
                this.movementsLeft.push({
                    i : 0,
                    j : -value
                });
            });

            this.movementsTopRight = [];
            this.movementsDownRight = [];
            this.movementsTopLeft = [];
            this.movementsDownLeft = [];
            this.i = [1,2,3,4,5,6,7];
            this.j = [1,2,3,4,5,6,7];
            this.i.map( (value,index) => {
                this.movementsDownRight.push({
                    i : -value,
                    j : value
                });
                this.movementsTopRight.push({
                    i : value,
                    j : value
                });
                this.movementsTopLeft.push({
                    i : value,
                    j : -value
                });
                this.movementsDownLeft.push({
                    i : -value,
                    j : -value
                });
            });
        }
    }

    class Rook {
        constructor() {
            this.movementsTop = [];
            this.movementsDown = [];
            this.movementsRight = [];
            this.movementsLeft = [];
            this.i = [1,2,3,4,5,6,7];
            this.j = [1,2,3,4,5,6,7];
            this.i.map( (value,index) => {
                this.movementsDown.push({
                    i : value,
                    j : 0
                });
                this.movementsTop.push({
                    i : -value,
                    j : 0
                });
                this.movementsRight.push({
                    i : 0,
                    j : value
                });
                this.movementsLeft.push({
                    i : 0,
                    j : -value
                });
            });
        }
    }

    class Bishops {
        constructor() {
            this.movementsTopRight = [];
            this.movementsDownRight = [];
            this.movementsTopLeft = [];
            this.movementsDownLeft = [];
            this.i = [1,2,3,4,5,6,7];
            this.j = [1,2,3,4,5,6,7];
            this.i.map( (value,index) => {
                this.movementsDownRight.push({
                    i : -value,
                    j : value
                });
                this.movementsTopRight.push({
                    i : value,
                    j : value
                });
                this.movementsTopLeft.push({
                    i : value,
                    j : -value
                });
                this.movementsDownLeft.push({
                    i : -value,
                    j : -value
                });
            });
        }
    }

    class Knights {
        constructor() {
            this.movements = [
                { i : 1 , j : 2},
                { i : -1 , j : 2},
                { i : 1 , j : -2},
                { i : -1 , j : -2},
                { i : 2 , j : 1},
                { i : 2 , j : -1},
                { i : -2 , j : 1},
                { i : -2 , j : -1},
            ];
        }
    }

    let pawn = new Pawn();
    let king = new King();
    let knights = new Knights();
    let rook = new Rook();
    let bishops = new Bishops();

    //console.log(rook);


    let handlePawnMovements = (y,x) => {
        pawn.movementTop.map( (value) => {
            //console.log(`#p_/e|b/_${y-value.j}_${x-value.i}`);
            let selected = $(`#p_${y-value.j}_${x-value.i}`);
            ///console.log(selected); 
            if( value.i != 0 ) {
                let c = selected.children().attr('data-number');
                let color = selected.children().attr('data-color');
                if( c != '0' && color != 'b' ) {
                    selected.children().addClass('highlight');
                } else {
                    
                }
            } else {
                let c = selected.children().attr('data-number');
                //console.log(c);
                if( c == '0' ) {
                    selected.children().addClass('highlight');
                } else {
                    
                }
            }
        });
    }


    let handleKingMovements = (y,x) => {
        king.movements.map( (value) => {
            let selected = $(`#p_${y-value.j}_${x-value.i}`);
            //let c = selected.children().attr('data-number');
            let color = selected.children().attr('data-color');
            if( color != 'b' ) {
                selected.children().addClass('highlight');
            } else {
                
            }
        });
    }

    let handleKnightsMovements = (y,x) => {
        knights.movements.map( (value) => {
            let selected = $(`#p_${y-value.j}_${x-value.i}`);
            //let c = selected.children().attr('data-number');
            let color = selected.children().attr('data-color');
            if( color != 'b' ) {
                selected.children().addClass('highlight');
            } else {
                
            }
        });
    }

    let handleRookMovements = (y,x) => {
        for(let i=0;i<rook.movementsTop.length;i++){
            let selected = $(`#p_${y-rook.movementsTop[i].j}_${x-rook.movementsTop[i].i}`);
            //let c = selected.children().attr('data-number');
            let color = selected.children().attr('data-color');
            if ( color == 'b' ) {
                break;
            } else if( color == 'w' ) {
                selected.children().addClass('highlight');
                break;
            } else if( color != 'b' ) {
                selected.children().addClass('highlight');
            } 
        }
            
        
        for(let i=0;i<rook.movementsDown.length;i++){
            let selected = $(`#p_${y-rook.movementsDown[i].j}_${x-rook.movementsDown[i].i}`);
            //let c = selected.children().attr('data-number');
            let color = selected.children().attr('data-color');
            if ( color == 'b' ) {
                break;
            } else if( color == 'w' ) {
                selected.children().addClass('highlight');
                break;
            } else if( color != 'b' ) {
                selected.children().addClass('highlight');
            } 
        }

        for(let i=0;i<rook.movementsRight.length;i++){
            let selected = $(`#p_${y-rook.movementsRight[i].j}_${x-rook.movementsRight[i].i}`);
            //let c = selected.children().attr('data-number');
            let color = selected.children().attr('data-color');
            if ( color == 'b' ) {
                break;
            } else if( color == 'w' ) {
                selected.children().addClass('highlight');
                break;
            } else if( color != 'b' ) {
                selected.children().addClass('highlight');
            } 
        }

        for(let i=0;i<rook.movementsLeft.length;i++){
            let selected = $(`#p_${y-rook.movementsLeft[i].j}_${x-rook.movementsLeft[i].i}`);
            //let c = selected.children().attr('data-number');
            let color = selected.children().attr('data-color');
            if ( color == 'b' ) {
                break;
            } else if( color == 'w' ) {
                selected.children().addClass('highlight');
                break;
            } else if( color != 'b' ) {
                selected.children().addClass('highlight');
            } 
        }
    }



    let handleBishopsMovements = (y,x) => {
        for(let i=0;i<bishops.movementsTopRight.length;i++){
            let selected = $(`#p_${y-bishops.movementsTopRight[i].j}_${x-bishops.movementsTopRight[i].i}`);
            //let c = selected.children().attr('data-number');
            let color = selected.children().attr('data-color');
            if ( color == 'b' ) {
                break;
            } else if( color == 'w' ) {
                selected.children().addClass('highlight');
                break;
            } else if( color != 'b' ) {
                selected.children().addClass('highlight');
            } 
        }
            
        
        for(let i=0;i<bishops.movementsTopLeft.length;i++){
            let selected = $(`#p_${y-bishops.movementsTopLeft[i].j}_${x-bishops.movementsTopLeft[i].i}`);
            //let c = selected.children().attr('data-number');
            let color = selected.children().attr('data-color');
            if ( color == 'b' ) {
                break;
            } else if( color == 'w' ) {
                selected.children().addClass('highlight');
                break;
            } else if( color != 'b' ) {
                selected.children().addClass('highlight');
            } 
        }

        for(let i=0;i<bishops.movementsDownRight.length;i++){
            let selected = $(`#p_${y-bishops.movementsDownRight[i].j}_${x-bishops.movementsDownRight[i].i}`);
            //let c = selected.children().attr('data-number');
            let color = selected.children().attr('data-color');
            if ( color == 'b' ) {
                break;
            } else if( color == 'w' ) {
                selected.children().addClass('highlight');
                break;
            } else if( color != 'b' ) {
                selected.children().addClass('highlight');
            } 
        }

        for(let i=0;i<bishops.movementsDownLeft.length;i++){
            let selected = $(`#p_${y-bishops.movementsDownLeft[i].j}_${x-bishops.movementsDownLeft[i].i}`);
            //let c = selected.children().attr('data-number');
            let color = selected.children().attr('data-color');
            if ( color == 'b' ) {
                break;
            } else if( color == 'w' ) {
                selected.children().addClass('highlight');
                break;
            } else if( color != 'b' ) {
                selected.children().addClass('highlight');
            } 
        }
    }


    let handleQueenMovements = (y,x) => {
        handleRookMovements(y,x);
        handleBishopsMovements(y,x);
    }


    let showMovements = (number,id) => {
        let split = id.split("_");
        //console.log(split);
        console.log(number);
        let y = parseInt(split[1]);
        let x = parseInt(split[2]);
        num = parseInt(number);
        if( num == 9823 ) { //Pawn
            handlePawnMovements(y,x);
        } else if ( num == 9818 ) { // King
            handleKingMovements(y,x);
        } else if ( num == 9822 ) { // Knight
            handleKnightsMovements(y,x);
        } else if ( num == 9820 ) { // Rook
            handleRookMovements(y,x);
        } else if ( num == 9821 ) { // Bishops
            handleBishopsMovements(y,x);
        } else if ( num == 9819 ) { // Queen
            handleQueenMovements(y,x);
        }
    }


    let board = document.getElementById('board');
    
    let yourTurn = true;
    let replace = false ;
    let first ;
    let second ;
    let temp ;

    let firstClickToMove = (item) => {
        if(yourTurn == false) {
            //return;
        }
        //console.log(item);
        let color = item.children().attr('data-color');
        let number = item.children().attr('data-number');
        if( number != '0' && color != 'w') {
            replace = !replace;
            first = item;
            //console.log(first);
            item.children().addClass('active');
            showMovements(
                first.children().attr('data-number'),
                first.attr('id')
            );
        }
    }


    let backToNormal = () => {
        $(`div.cell`).removeClass('active highlight');
        first = second = null;
        replace = !replace;
    }


    let secondClickToMove = (item) => {
        second = item;
        if(second.children().hasClass('highlight')) {
            if(first && second) {
                //console.log(first);
                //console.log(second);
                //first.children().removeClass('active');
                
                temp = first.html();
                first.children().text('');
                first.children().attr('data-color','0');
                first.children().attr('data-number','0');
                second.html(temp); 
                yourTurn = false;
            }
            backToNormal();
        } else {
            if(second.children().attr('data-number') != '0') {
                backToNormal();
                firstClickToMove(item);
                //console.log(item);
            } else {
                backToNormal();
            }
        }   
    }


    


    $(document).on('click','div.cellContainer',function(){
        if(replace == false) {
            firstClickToMove($(this))
        } else {
            secondClickToMove($(this));
        }
    });

    let boardContent = ``;

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

    let bottomPieces = [
        [],
        []
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
