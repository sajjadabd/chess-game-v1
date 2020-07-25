$(document).ready( function () {


	class PawnPiece_Black {
        constructor() {
			this.first_move = true;
			this.data_number = 9823;
			this.data_color = 'b';
		}
	}
	
	class KingPiece_Black {
        constructor() {
            this.first_move = true;
			this.data_number = 9818;
			this.data_color = 'b';
		}
	}
	
	class QueenPiece_Black {
        constructor() {
            this.first_move = true;
			this.data_number = 9819;
			this.data_color = 'b';
		}
	}
	
	
	class RookPiece_Black {
        constructor() {
            this.first_move = true;
			this.data_number = 9820;
			this.data_color = 'b';
		}
	}
	
	
	class BishopPiece_Black {
        constructor() {
            this.first_move = true;
			this.data_number = 9821;
			this.data_color = 'b';
		}
	}
	
	class KnightPiece_Black {
        constructor() {
            this.first_move = true;
			this.data_number = 9822;
			this.data_color = 'b';
		}
	}
	
	
	/*
	============White Pieces
	*/
	
	
	class PawnPiece_White {
        constructor() {
			this.first_move = true;
			this.data_number = 9817;
			this.data_color = 'w';
		}
	}
	
	class KingPiece_White {
        constructor() {
            this.first_move = true;
			this.data_number = 9812;
			this.data_color = 'w';
		}
	}
	
	class QueenPiece_White {
        constructor() {
            this.first_move = true;
			this.data_number = 9813;
			this.data_color = 'w';
		}
	}
	
	
	class RookPiece_White {
        constructor() {
            this.first_move = true;
			this.data_number = 9814;
			this.data_color = 'w';
		}
	}
	
	
	class BishopPiece_White {
        constructor() {
            this.first_move = true;
			this.data_number = 9815;
			this.data_color = 'w';
		}
	}
	
	class KnightPiece_White {
        constructor() {
            this.first_move = true;
			this.data_number = 9816;
			this.data_color = 'w';
		}
	}
	
	
	/*
	=====================
	*/
	

    class Pawn {
        constructor() {
			this.first_move = true;
			this.data_number = 9823;
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
			this.data_number = 9818;
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
			this.data_number = 9819;
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
			this.data_number = 9820;
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
			this.data_number = 9821;
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
			this.data_number = 9822;
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

        let isItFirstMove = chessBoard[y][x].first_move;
        //console.log(isItFirstMove);

        pawn.movementTop.map( (value) => {
            //console.log(`#p_/e|b/_${y-value.j}_${x-value.i}`);
            let selected = $(`#p_${y-value.j}_${x-value.i}`);
            ///console.log(selected); 
            if( !isItFirstMove && Math.abs(value.j) >= 2 ) {
                //console.log('1 happen');
            } else if( value.i != 0 ) {
                let data_number = selected.children().attr('data-number');
                let data_color = selected.children().attr('data-color');
                if( data_number != '0' && data_color != 'b' ) {
                    selected.children().addClass('highlight');
                } else {
                    
                }
                //console.log('2 happen');
            } else {
                let data_number = selected.children().attr('data-number');
                //console.log(data_number);
                if( data_number == '0' ) {
                    selected.children().addClass('highlight');
                } else {
                    
                }
                //console.log('3 happen');
            }
        });
    }


    let handleKingMovements = (y,x) => {
        king.movements.map( (value) => {
            let selected = $(`#p_${y-value.j}_${x-value.i}`);
            //let c = selected.children().attr('data-number');
            let data_color = selected.children().attr('data-color');
            if( data_color != 'b' ) {
                selected.children().addClass('highlight');
            } else {
                
            }
        });
    }

    let handleKnightsMovements = (y,x) => {
        knights.movements.map( (value) => {
            let selected = $(`#p_${y-value.j}_${x-value.i}`);
            //let c = selected.children().attr('data-number');
            let data_color = selected.children().attr('data-color');
            if( data_color != 'b' ) {
                selected.children().addClass('highlight');
            } else {
                
            }
        });
    }

    let handleRookMovements = (y,x) => {
        for(let i=0;i<rook.movementsTop.length;i++){
            let selected = $(`#p_${y-rook.movementsTop[i].j}_${x-rook.movementsTop[i].i}`);
            //let c = selected.children().attr('data-number');
            let data_color = selected.children().attr('data-color');
            if ( data_color == 'b' ) {
                break;
            } else if( data_color == 'w' ) {
                selected.children().addClass('highlight');
                break;
            } else if( data_color == '0' ) {
                selected.children().addClass('highlight');
            } 
        }
            
        
        for(let i=0;i<rook.movementsDown.length;i++){
            let selected = $(`#p_${y-rook.movementsDown[i].j}_${x-rook.movementsDown[i].i}`);
            //let c = selected.children().attr('data-number');
            let data_color = selected.children().attr('data-color');
            if ( data_color == 'b' ) {
                break;
            } else if( data_color == 'w' ) {
                selected.children().addClass('highlight');
                break;
            } else if( data_color == '0' ) {
                selected.children().addClass('highlight');
            } 
        }

        for(let i=0;i<rook.movementsRight.length;i++){
            let selected = $(`#p_${y-rook.movementsRight[i].j}_${x-rook.movementsRight[i].i}`);
            //let c = selected.children().attr('data-number');
            let data_color = selected.children().attr('data-color');
            if ( data_color == 'b' ) {
                break;
            } else if( data_color == 'w' ) {
                selected.children().addClass('highlight');
                break;
            } else if( data_color == '0' ) {
                selected.children().addClass('highlight');
            } 
        }

        for(let i=0;i<rook.movementsLeft.length;i++){
            let selected = $(`#p_${y-rook.movementsLeft[i].j}_${x-rook.movementsLeft[i].i}`);
            //let c = selected.children().attr('data-number');
            let data_color = selected.children().attr('data-color');
            if ( data_color == 'b' ) {
                break;
            } else if( data_color == 'w' ) {
                selected.children().addClass('highlight');
                break;
            } else if( data_color == '0' ) {
                selected.children().addClass('highlight');
            } 
        }
    }



    let handleBishopsMovements = (y,x) => {
        for(let i=0;i<bishops.movementsTopRight.length;i++){
            let selected = $(`#p_${y-bishops.movementsTopRight[i].j}_${x-bishops.movementsTopRight[i].i}`);
            //let c = selected.children().attr('data-number');
            let data_color = selected.children().attr('data-color');
            if ( data_color == 'b' ) {
                break;
            } else if( data_color == 'w' ) {
                selected.children().addClass('highlight');
                break;
            } else if( data_color == '0' ) {
                selected.children().addClass('highlight');
            } 
        }
            
        
        for(let i=0;i<bishops.movementsTopLeft.length;i++){
            let selected = $(`#p_${y-bishops.movementsTopLeft[i].j}_${x-bishops.movementsTopLeft[i].i}`);
            //let c = selected.children().attr('data-number');
            let data_color = selected.children().attr('data-color');
            if ( data_color == 'b' ) {
                break;
            } else if( data_color == 'w' ) {
                selected.children().addClass('highlight');
                break;
            } else if( data_color == '0' ) {
                selected.children().addClass('highlight');
            } 
        }

        for(let i=0;i<bishops.movementsDownRight.length;i++){
            let selected = $(`#p_${y-bishops.movementsDownRight[i].j}_${x-bishops.movementsDownRight[i].i}`);
            //let c = selected.children().attr('data-number');
            let data_color = selected.children().attr('data-color');
            if ( data_color == 'b' ) {
                break;
            } else if( data_color == 'w' ) {
                selected.children().addClass('highlight');
                break;
            } else if( data_color == '0' ) {
                selected.children().addClass('highlight');
            } 
        }

        for(let i=0;i<bishops.movementsDownLeft.length;i++){
            let selected = $(`#p_${y-bishops.movementsDownLeft[i].j}_${x-bishops.movementsDownLeft[i].i}`);
            //let c = selected.children().attr('data-number');
            let data_color = selected.children().attr('data-color');
            if ( data_color == 'b' ) {
                break;
            } else if( data_color == 'w' ) {
                selected.children().addClass('highlight');
                break;
            } else if( data_color == '0' ) {
                selected.children().addClass('highlight');
            } 
        }
    }


    let handleQueenMovements = (y,x) => {
        handleRookMovements(y,x);
        handleBishopsMovements(y,x);
    }

    let GlobalY ;
    let GlobalX ;


    let showMovements = (data_number,id) => {
        let split = id.split("_");
        //console.log(split);
        //console.log(data_number);
		
        let y = parseInt(split[1]);
        let x = parseInt(split[2]);

        GlobalY = y;
        GlobalX = x;
		
        let num = parseInt(data_number);
		
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
        let data_color = item.children().attr('data-color');
        let data_number = item.children().attr('data-number');
		
        if( data_number != '0' && data_color != 'w') {
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
        
        let split = item.attr('id').split("_");
        //console.log(split);
        //console.log(data_number);
		
        let y = parseInt(split[1]);
        let x = parseInt(split[2]);

        second = item;


        if(second.children().hasClass('highlight')) {
            if(first && second) {
                //console.log(first);
                //console.log(second);
                //first.children().removeClass('active');
                let temp = first.html();
                first.children().text('');
                first.children().attr('data-color','0');
                first.children().attr('data-number','0');
                second.html(temp); 


                /*
                set the first move to false
                */
                chessBoard[GlobalY][GlobalX].first_move = false;

                /*
                swap chess pieces in 2D array
                */
                //console.log(chessBoard[y][x]);
                //console.log(chessBoard[GlobalY][GlobalX]);
                chessBoard[y][x] = chessBoard[GlobalY][GlobalX];
                chessBoard[GlobalY][GlobalX] = 0;

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

    let chessBoard = [
        [new RookPiece_White(),new KnightPiece_White(),new BishopPiece_White(),new KingPiece_White(),
        new QueenPiece_White(),new BishopPiece_White(),new KnightPiece_White(),new RookPiece_White()],
        [new PawnPiece_White(),new PawnPiece_White(),new PawnPiece_White(),new PawnPiece_White(),
        new PawnPiece_White(),new PawnPiece_White(),new PawnPiece_White(),new PawnPiece_White()],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [new PawnPiece_Black(),new PawnPiece_Black(),new PawnPiece_Black(),new PawnPiece_Black(),
        new PawnPiece_Black(),new PawnPiece_Black(),new PawnPiece_Black(),new PawnPiece_Black()],
        [new RookPiece_Black(),new KnightPiece_Black(),new BishopPiece_Black(),new KingPiece_Black(),
        new QueenPiece_Black(),new BishopPiece_Black(),new KnightPiece_Black(),new RookPiece_Black()],
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
            data-number="${chessBoard[i][j].data_number ?? 0}" 
            data-color="${chessBoard[i][j].data_color ?? 0}"
            class="cell">
            ${chessBoard[i][j].data_number == undefined ? `` : `&#${chessBoard[i][j].data_number};` }
            </div>
            </div>
            `
        }
        boardContent += `</div>`;
    }

    board.innerHTML = boardContent;

});
