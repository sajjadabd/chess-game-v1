$(document).ready(function() {

	let inputbox = document.querySelectorAll('div.inputbox');
	let input = document.querySelectorAll('input.numberOne');
	let myform = document.getElementById('mainForm');
	let placeholder = document.querySelectorAll('div.placeholder');

	let createGame = document.getElementById('createGame');
	let joinGame = document.getElementById('joinGame');


	let fetchServer = (url,type,data) => {
		$.ajax({
			url : url,
			type : type ,
			data : data ,
			success : function (response) {
				//return response;
				if(response.success == true ) {
					window.location.href = `/${response.gameNumber}`;
				}
			}
		});
	}


	joinGame.addEventListener('click' , () => {
		
		let data = {};
		
	
		$('form').find('input[name]').each( function (index , value) {
			let that = $(this);
			let name = that.attr('name');
			let val = that.val();

			data[name] = val;
		});

		console.log(data);
		let url = `/joinGame`;
		let type = 'post';

		fetchServer(url,type,data);

		
	});

	createGame.addEventListener('click' , ()  => {
		
		let data = {};
	
		$('form').find('input[name=username]').each( function (index , value) {
			let that = $(this);
			let name = that.attr('name');
			let val = that.val();

			data[name] = val;
		});

		console.log(data);
		let url = `/createGame`;
		let type = 'post';

		fetchServer(url,type,data);

		
	});



	
	
	myform.addEventListener( 'submit' , (e) => {
		e.preventDefault();
	});


	
	
	for(let i=0;i<inputbox.length;i++) {
		inputbox[i].addEventListener('click' , () => {
			input[i].focus();
			placeholder[i].classList.add("littleholder");
		});
	}
	
	for(let i=0;i<input.length;i++) {
		input[i].addEventListener( "blur" , () => {
			if( input[i].value == '' ) {
				placeholder[i].classList.remove("littleholder");
			}   
		});
	
		input[i].addEventListener( "keyup" , () => {
			//console.log(email.value);
			if( input[i].value == '' ) {
				placeholder[i].classList.remove("littleholder");
			} else {
				placeholder[i].classList.add("littleholder");
			}
		});
	}
	

});

