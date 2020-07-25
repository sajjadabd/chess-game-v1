const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const port = process.env.PORT || 8080;

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


const server = app.listen(port , () => {
    console.log(`listening at port ${port}`);
});


const io = require('socket.io')(server);


let users = [];
let games = [];

thereIsSuchGame = (game) => {
    let result = games.findIndex( (value,index) => {
        return game == value.gameNumber;
    })
    console.log(result);
    if( result >= 0 ) {
        return true;
    } else {
        return false;
    }
}


app.get('/' , (req,res) => {
    return res.render('login');
});


app.post('/createGame' , (req,res) => {
    console.log(req.body);
    //res.json({ username : req.body.username });

    if(req.body.username == '') {
        return res.json({ success : false });
    }

    
    req.session.user = {
        username : req.body.username,
        color : 'b'
    };
    
    
    let newGame ;
	do {
        newGame = Math.floor(Math.random(0,1) * 1000 + 1000);
    } while(thereIsSuchGame(newGame));
    
    games.push( { 
        gameNumber : newGame , 
        users : [ {
            username : req.body.username ,
            color : 'b'
        }] 
    });
    
    console.log(games);
	return res.json({ gameNumber : newGame , success : true });
});




app.post('/joinGame' , (req , res) => {

    let result = games.findIndex( (value,index) => {
        return value.gameNumber == req.body.gameNumber;
    });


    if(result < 0) {
        return res.json({ success : false });
    } else if ( games[result].users.length < 2 ) { // in joinGame it shoud be less than
        
        if( !req.session.user ) {
            req.session.user = {
                username : req.body.username,
                color : 'w'
            };

            games[result].users.push({
                username : req.body.username ,
                color : 'w',
            });
    
            console.log(games);
            return res.json({ gameNumber : req.body.gameNumber , success : true });
        } else {
            return res.json({ success : false });
        }
    } else {
        return res.json({ success : false });
    }
});


app.get('/:gameNumber' , (req,res) => {

    if(req.params.gameNumber == 'socket.io.js.map') {
        return;
    } else {
        
    }

    if (!req.session.user) {
        return res.redirect('/');
    }

    let result = games.findIndex( (value,index) => {
        return value.gameNumber == req.params.gameNumber;
    });

    //console.log(result);

    if(result < 0) {
        return res.redirect('/');
    } else { 
        return res.render('game', { 
            gameNumber : req.params.gameNumber , 
            user : req.session.user 
        });
    }

    
});



io.on('connection' , (socket) => {

    console.log(`user connected with id : ${socket.id}`);
    
    socket.on('new-user' , (data) => {
        socket.join(data.room);
        //console.log(data);
        users.push( { 
            id : socket.id , 
            username : data.username , 
            gameNumber : data.gameNumber 
        });
		console.log(users);
        //socket.to(data.room).emit('numberOfUsers' , { numberOfUsers : games.length } );
        socket.to(data.room).emit( 
		'status' , 
		{ 
			status : 'connected' , 
			id : socket.id , 
			username : data.username 
		});
    })

    
    

    socket.on('messageToServer' , (data) => {
        //console.log(data);
        socket.to(data.room).broadcast.emit(
           'messageToClient' , { 
           message : data.message ,
           id : socket.id ,
           username : data.username 
        });
    });



    socket.on('disconnect' , () => {
        
        // let result = users.findIndex( (value,index) => {
        //     return value.id == socket.id;
        // });

        // let username = users[result].username;

        // socket.to(data.room).emit( 'numberOfUsers' , { numberOfUsers : users.length });
        // socket.to(data.room).emit( 
		// 'status' , 
		// { 
		// 	status : 'disconnected' , 
		// 	id : socket.id , 
		// 	username : data.username 
		// });
    });
	

    socket.on('searchUsers' , (data) => {
        //console.log(value);
        let result = users.filter( (value) => {
            return value.username == data.searchInput;
        });

        socket.emit('searchResults' , result );
    });
    
});

