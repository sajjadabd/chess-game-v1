const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const port = process.env.PORT || 8080;

const pieces = require('./pieces');

const app = express();

//app.use(morgan('combined'));

app.set('view engine', 'ejs');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended : true }));


const server = app.listen( port , () => {
    console.log(`listening at port ${port}`);
});


const io = require('socket.io')(server);


let users = [];
let games = [];


printGames = () => {
    console.log('========================');
    games.map( (value, index) => {
        console.log(`gameNumber : ${value.gameNumber}`);
        value.users.map( (v,i) => {
            console.log(v);
        });
		console.log(`board :`);
		//console.log(value.board);
    });
    console.log('========================');
}

printUsers = () => {
    console.log('========================');
    users.map( (value,index) => {
        console.log(value);
    });
    console.log('========================');
}

returnGameIndex = (gameNumber) => {
    let result = games.findIndex( (value,index) => {
        return gameNumber == value.gameNumber;
    });

    return result;
}

thereIsSuchGame = (game) => {
    let result = games.findIndex( (value,index) => {
        return game == value.gameNumber;
    });

    return result >= 0 ? true : false;
}


thereIsSuchUser = (user) => {
    let result = users.findIndex( (value,index) => {
        return user == value.username;
    });

    return result >= 0 ? true : false;
}

returnUserIndex = (user) => {
    let result = users.findIndex( (value,index) => {
        return user == value.username;
    });
    
    return result;
}



isUserinGame = (username , gameNumber) => {
    let result = games.findIndex( (value,index) => {
        return value.gameNumber == gameNumber;
    });
    let index;
    if ( result >= 0 ) {
        index = games[result].users.findIndex( (value,index) => {
            return value.username == username;
        });
    }

    return (index >= 0 && result >= 0) ? true : false;
}


returnRoomUsers = (gameNumber) => {
    let result = games.findIndex( (value,index) => {
        return value.gameNumber == gameNumber;
    });

    return games[result].users;
}


app.get('/' , (req,res) => {
    return res.render('login');
});


app.post('/createGame' , (req,res) => {

    if(req.body.username == '') {
        return res.json({ success : false });
    }/* else if ( thereIsSuchUser(req.body.username) ) {
        return res.json({ success : false });
    }*/

    
    
    let newGame ;
	do {
        newGame = Math.floor(Math.random(0,1) * 1000 + 1000);
    } while(thereIsSuchGame(newGame));

    req.session.user = {
        username : req.body.username,
        color : 'b',
        gameNumber : newGame,
    };
    
    games.push( { 
        gameNumber : newGame , 
        users : [ {
            username : req.body.username ,
            color : 'b'
        }] , 
		board : [
			[new pieces.RookPiece_White(),new pieces.KnightPiece_White(),new pieces.BishopPiece_White(),new pieces.KingPiece_White(),
			new pieces.QueenPiece_White(),new pieces.BishopPiece_White(),new pieces.KnightPiece_White(),new pieces.RookPiece_White()],
			[new pieces.PawnPiece_White(),new pieces.PawnPiece_White(),new pieces.PawnPiece_White(),new pieces.PawnPiece_White(),
			new pieces.PawnPiece_White(),new pieces.PawnPiece_White(),new pieces.PawnPiece_White(),new pieces.PawnPiece_White()],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[new pieces.PawnPiece_Black(),new pieces.PawnPiece_Black(),new pieces.PawnPiece_Black(),new pieces.PawnPiece_Black(),
			new pieces.PawnPiece_Black(),new pieces.PawnPiece_Black(),new pieces.PawnPiece_Black(),new pieces.PawnPiece_Black()],
			[new pieces.RookPiece_Black(),new pieces.KnightPiece_Black(),new pieces.BishopPiece_Black(),new pieces.KingPiece_Black(),
			new pieces.QueenPiece_Black(),new pieces.BishopPiece_Black(),new pieces.KnightPiece_Black(),new pieces.RookPiece_Black()],
		]
    });
    
	return res.json({ gameNumber : newGame , success : true });
});




app.post('/joinGame' , (req , res) => {

    if(req.body.username == '') {
        return res.json({ username : 'empty' , success : false });
    } 
    /* else if ( isUserinGame(req.body.username,req.body.gameNumber) ) {
        return res.json({ userAlreadyExistsInGame : true , success : false });
    }*/

    let result = games.findIndex( (value,index) => {
        return value.gameNumber == req.body.gameNumber;
    });


    if(result < 0) {
        return res.json({ noSuchGame : true , success : false });
    } else if ( games[result].users.length < 2 ) { // in joinGame it shoud be less than
        
        let getColor =  games[result].users.findIndex( (value,index) => {
            return value.color == 'b';
        });

        console.log(`color index : ${getColor}`);

        if ( getColor < 0 ) {
            req.session.user = {
                username : req.body.username,
                color : 'b'
            };
    
            games[result].users.push({
                username : req.body.username ,
                color : 'b'
            });
        } else {
            req.session.user = {
                username : req.body.username,
                color : 'w'
            };
    
            games[result].users.push({
                username : req.body.username ,
                color : 'w'
            });
        }
        //if( !req.session.user ) {
        

        //console.log(games);
        return res.json({ gameNumber : req.body.gameNumber , success : true });
        //} else {
        //    return res.json({ success : false });
        //}
    }  
    // return res.json({ forbidden : true , success : false });
});


app.get('/:gameNumber' , (req,res) => {

    // if(req.params.gameNumber == 'socket.io.js.map') {
    //     return;
    // } else {
        
    // }

    if (!req.session.user) {
        return res.redirect('/');
    } else {
        // let result = isUserinGame(req.session.user.username,req.params.gameNumber);

        // if( result == false ) {
        //     return res.redirect('/');
        // } 
    }

    let result = games.findIndex( (value,index) => {
        return value.gameNumber == req.params.gameNumber;
    });
	

    let opponent ;
    //console.log(`session user : ${req.session.user.username}`);
    if( games[result] != undefined ) {
        if ( games[result].users != undefined ) {
            opponent = games[result].users.filter((value,index) => {
                return value.username != req.session.user.username;
            });
            console.log('opponent : ');
            console.log(opponent);

            opponent = opponent[0];
        }
    }
    


    if(result < 0) {
        return res.redirect('/');
    } else { 
        return res.render('game', { 
            gameNumber : req.params.gameNumber, 
            user : req.session.user,
            opponent : opponent,
			board : games[result].board,
        });
    }

});

changeGamesBasedOnUserLength = (gameIndex,whichUser) => {

    games[gameIndex].users = games[gameIndex].users.filter( (value,index) => {
        return value.username != whichUser.username;
    });
    /*
    if( games[gameIndex].users.length == 0 ) {
        games = games.filter( (value , index) => {
            return gameIndex != index;
        });
    }
    */
}



io.on('connection' , (socket) => {

    console.log(`user connected with id : ${socket.id}`);
    
    socket.on('new-user' , (data) => {
        socket.join(data.room);

        let userIndex = returnUserIndex(data.username);

        if(userIndex >= 0) {
            users[userIndex].id = socket.id;
        } else {
            users.push({ 
                id : socket.id, 
                username : data.username, 
                gameNumber : data.gameNumber 
            });
            
            let gameIndex = returnGameIndex(data.gameNumber);

            if ( !isUserinGame(data.username , data.gameNumber) ) {
                games[gameIndex].users.push({ 
                    username : data.username ,
                    color : data.color
                });
            } 
            
        }

        printGames();
        printUsers();

        let roomUsers = returnRoomUsers(data.room);
		
		let gameIndex = returnGameIndex(data.room);
        
		socket.to(data.room).broadcast.emit('status', 
		{ 
			status : 'connected', 
			id : socket.id, 
			username : roomUsers, //data.username 
			
		});
		
		
		
		
		socket.emit('response-new-user' , {
			board : games[gameIndex].board,
		})
    })

    
    

    socket.on('messageToServer' , (data) => {
		
		let GlobalY = data.message.from.GlobalY;
		let GlobalX = data.message.from.GlobalX;
		let y = data.message.to.y;
		let x = data.message.to.x;
		//data.room == gameNumber
		
		let gameIndex = returnGameIndex(data.room);
		/*
		set the first move to false
		*/
		games[gameIndex].board[GlobalY][GlobalX].first_move = false;
		/*
		swap chess pieces in 2D array
		*/
		//console.log(chessBoard[y][x]);
		//console.log(chessBoard[GlobalY][GlobalX]);
		games[gameIndex].board[y][x] = games[gameIndex].board[GlobalY][GlobalX];
		games[gameIndex].board[GlobalY][GlobalX] = 0;
		

        socket.to(data.room).broadcast.emit(
           'messageToClient' , { 
           message : data.message ,
           id : socket.id ,
           username : data.username 
        });

    });



    socket.on('disconnect' , () => {

        //let roomUsers = returnRoomUsers(data.room);

        whichUser = users.find((value,index) => {
            return value.id == socket.id;
        });
        
        if(whichUser != undefined ) {
            socket.to(whichUser.gameNumber).broadcast.emit('status', 
            { 
                status : 'disconnected', 
                id : socket.id
                //username : roomUsers //data.username 
            });
        }

        if(whichUser != undefined ) {
            let gameIndex = games.findIndex((value,index) => {
                return value.gameNumber == whichUser.gameNumber;
            });
            changeGamesBasedOnUserLength(gameIndex,whichUser);
        }

        users = users.filter( (value,index) => {
            return value.id != socket.id;
        });
        
        

        printGames();
        printUsers();
        /*
        whichUser = users.find( (value,index) => {
            return value.id == socket.id;
        });

        let gameIndex = games.findIndex((value,index) => {
            return value.gameNumber == whichUser.gameNumber;
        });

        changeGamesBasedOnUserLength(gameIndex,whichUser);

        printGames();
        printUsers();
        */

    });
	

    socket.on('searchUsers' , (data) => {
        let result = users.filter( (value) => {
            return value.username == data.searchInput;
        });

        socket.emit('searchResults' , result );
    });
    
});

