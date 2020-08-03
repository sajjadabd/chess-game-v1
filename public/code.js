$(document).ready( function () {

    console.log(myColor);

    let put = new Audio('./audio/put.mp3');
    put.volume = 0.5;
    let recieve = new Audio('./audio/recieve.mp3');
    recieve.volume = 0.5;

    let yourTurn ;

    if( myColor == 'b' ) {
        opponentColor = 'w';
        yourTurn = false;
    } else if( myColor == 'w' ) {
        opponentColor = 'b';
        yourTurn = true;
    }

    
	
    let socket = io();
    
    socket.emit('new-user' , {
        room : room,
        username : username,
        gameNumber : room,
        color : myColor
    });

    //socket.emit('new-user', { room : room } );


	class PawnPiece_Black {
        constructor() {
			this.first_move = true;
			this.data_number = 9823;
            this.data_color = 'b';
            this.data_name = 'pawn';
		}
	}
	
	class KingPiece_Black {
        constructor() {
            this.first_move = true;
			this.data_number = 9818;
            this.data_color = 'b';
            this.data_name = 'king';
		}
	}
	
	class QueenPiece_Black {
        constructor() {
            this.first_move = true;
			this.data_number = 9819;
            this.data_color = 'b';
            this.data_name = 'queen';
		}
	}
	
	
	class RookPiece_Black {
        constructor() {
            this.first_move = true;
			this.data_number = 9820;
            this.data_color = 'b';
            this.data_name = 'rook';
		}
	}
	
	
	class BishopPiece_Black {
        constructor() {
            this.first_move = true;
			this.data_number = 9821;
            this.data_color = 'b';
            this.data_name = 'bishop';
		}
	}
	
	class KnightPiece_Black {
        constructor() {
            this.first_move = true;
			this.data_number = 9822;
            this.data_color = 'b';
            this.data_name = 'knight';
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
            this.data_name = 'pawn';
		}
	}
	
	class KingPiece_White {
        constructor() {
            this.first_move = true;
			this.data_number = 9812;
            this.data_color = 'w';
            this.data_name = 'king';
		}
	}
	
	class QueenPiece_White {
        constructor() {
            this.first_move = true;
			this.data_number = 9813;
            this.data_color = 'w';
            this.data_name = 'queen';
		}
	}
	
	
	class RookPiece_White {
        constructor() {
            this.first_move = true;
			this.data_number = 9814;
            this.data_color = 'w';
            this.data_name = 'rook';
		}
	}
	
	
	class BishopPiece_White {
        constructor() {
            this.first_move = true;
			this.data_number = 9815;
            this.data_color = 'w';
            this.data_name = 'bishop';
		}
	}
	
	class KnightPiece_White {
        constructor() {
            this.first_move = true;
			this.data_number = 9816;
            this.data_color = 'w';
            this.data_name = 'knight';
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

        if( myColor == 'b' ) {
            pawn.movementTop.map( (value) => {
                //console.log(`#p_/e|b/_${y-value.j}_${x-value.i}`);
                let selected = $(`#p_${y-value.j}_${x-value.i}`);
                ///console.log(selected); 
                if( !isItFirstMove && Math.abs(value.j) >= 2 ) {
                    //console.log('1 happen');
                } else if( value.i != 0 ) {
                    let data_number = selected.children().attr('data-number');
                    let data_color = selected.children().attr('data-color');
                    if( data_number != '0' && data_color != myColor ) {
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
        } else if ( myColor == 'w' ) {
            pawn.movementDown.map( (value) => {
                //console.log(`#p_/e|b/_${y-value.j}_${x-value.i}`);
                let selected = $(`#p_${y-value.j}_${x-value.i}`);
                ///console.log(selected); 
                if( !isItFirstMove && Math.abs(value.j) >= 2 ) {
                    //console.log('1 happen');
                } else if( value.i != 0 ) {
                    let data_number = selected.children().attr('data-number');
                    let data_color = selected.children().attr('data-color');
                    if( data_number != '0' && data_color != myColor ) {
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
        
    }


    let handleKingMovements = (y,x) => {
        king.movements.map( (value) => {
            let selected = $(`#p_${y-value.j}_${x-value.i}`);
            //let c = selected.children().attr('data-number');
            let data_color = selected.children().attr('data-color');
            if( data_color != myColor ) {
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
            if( data_color != myColor ) {
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
            if ( data_color == myColor ) {
                break;
            } else if( data_color == opponentColor ) {
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
            if ( data_color == myColor ) {
                break;
            } else if( data_color == opponentColor ) {
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
            if ( data_color == myColor ) {
                break;
            } else if( data_color == opponentColor ) {
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
            if ( data_color == myColor ) {
                break;
            } else if( data_color == opponentColor ) {
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
            if ( data_color == myColor ) {
                break;
            } else if( data_color == opponentColor ) {
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
            if ( data_color == myColor ) {
                break;
            } else if( data_color == opponentColor ) {
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
            if ( data_color == myColor ) {
                break;
            } else if( data_color == opponentColor ) {
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
            if ( data_color == myColor ) {
                break;
            } else if( data_color == opponentColor ) {
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


    let showMovements = (data_name,id) => {
        let split = id.split("_");
        //console.log(split);
        //console.log(data_number);
		
        let y = parseInt(split[1]);
        let x = parseInt(split[2]);

        GlobalY = y;
        GlobalX = x;
		
        //let num = parseInt(data_number);
		
        if( data_name == 'pawn' ) { //Pawn
            handlePawnMovements(y,x);
        } else if ( data_name == 'king' ) { // King
            handleKingMovements(y,x);
        } else if ( data_name == 'knight' ) { // Knight
            handleKnightsMovements(y,x);
        } else if ( data_name == 'rook' ) { // Rook
            handleRookMovements(y,x);
        } else if ( data_name == 'bishop' ) { // Bishops
            handleBishopsMovements(y,x);
        } else if ( data_name == 'queen' ) { // Queen
            handleQueenMovements(y,x);
        }
    }


    let board = document.getElementById('board');
    
    
    let replace = false ;
    let first ;
    let second ;
    let temp ;

    let firstClickToMove = (item) => {
        if(yourTurn == false) {
            return;
        }
        //console.log(item);
        let data_color = item.children().attr('data-color');
        let data_number = item.children().attr('data-number');
		
        if( data_number != '0' && data_color == myColor ) {
            replace = !replace;
            first = item;
            //console.log(first);
            item.children().addClass('active');
            showMovements(
                first.children().attr('data-name'),
                first.attr('id')
            );
        }
    }


    let backToNormal = () => {
        $(`div.cell`).removeClass('active highlight');
        first = second = null;
        replace = !replace;
    }


    let replaceHouses = (y2,x2,y1,x1) => {

        let first = $(`#p_${y2}_${x2}`);
        let second = $(`#p_${y1}_${x1}`);

        let temp = first.html();
        first.children().text('');
        first.children().attr('data-color','0');
        first.children().attr('data-number','0');
        first.children().attr('data-name','0');

        second.html(temp); 
        second.children().addClass('active');
        setTimeout( () => {
            second.children().removeClass('active');
        } , 1000);
    };


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
                replaceHouses(GlobalY,GlobalX,y,x);
                put.play();
				
                socket.emit('messageToServer' , {
                    message : {
                        from : { GlobalY : GlobalY , GlobalX : GlobalX } ,
                        to : { y : y , x : x } ,
                    } ,
                    username : username ,
                    room : room ,
                });

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
            firstClickToMove($(this));
        } else {
            secondClickToMove($(this));
        }
    });
	
	let chessBoard = [];
	let start,end,incrementer;
	
	
	setTheBoardForTheUser = (data) => {
		console.log(data);
		
		chessBoard = data.board;
		
		if( myColor == 'b' ) {
			start = 0;
			end = 7;
			incrementer = 1;
		} else if( myColor == 'w' ) {
			start = 7;
			end = 0;
			incrementer = -1;
		}

		let boardContent = ``;

		for(let i=start; myColor == 'b' ? i<=end : i >= end ;i+=incrementer) {
			boardContent += `<div class="row">`
			for(let j=start; myColor == 'b' ? j<=end : j >= end ;j+=incrementer) {
				boardContent += `
				<div id="p_${i}_${j}" class="cellContainer">
				<div 
				data-name="${chessBoard[i][j].data_name ?? 0}"
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
	}
	
	
	socket.on( 'response-new-user' , (data) => {
		setTheBoardForTheUser(data);
	});
	
    
	
	//chessBoard
	
	//console.log(boardLoadFromServer);
	
	//console.log(chessBoard);
	/*
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
	*/
	/*
    let bottomPieces = [
        [],
        []
    ];
	*/
	
    

    




    socket.on('messageToClient' , (data) => {
        recieve.play();
        replaceHouses(data.message.from.GlobalY,data.message.from.GlobalX,
                data.message.to.y,data.message.to.x);
        yourTurn = true;
    });



    socket.on('status' , (data) => {

        console.log(data);
        let opponentHTML;
        roomUsers = data.username;

        if ( data.status == 'connected' ) {
            roomUsers = roomUsers.filter((value,index) => {
                return value.username != username;
            });
    
            console.log(roomUsers);
    
            
            opponentHTML = `
            ${roomUsers[0].username} <i class="fa fa-check" aria-hidden="true"></i>
            `;
        } else {
            opponentHTML = `
            waiting for opponent <i class="fa fa-spinner" aria-hidden="true"></i>
            `;
        }

        $('#opponent').html(opponentHTML);
		
		
		
        
    });

    checkForOpponent = () => {
        if ( opponent == undefined ) {
            $('#opponent').html(`
            waiting for opponent
            <i class="fa fa-spinner" aria-hidden="true"></i>
            `);
        } else {
            $('#opponent').html(`
            ${opponent}
            <i class="fa fa-check" aria-hidden="true"></i>
            `);
        }
    }

    checkForOpponent();
    

});
