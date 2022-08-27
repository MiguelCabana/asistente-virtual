'use strict'


window.addEventListener('load', ()=>{


	// VARIABLES


	var comenzarButton = document.querySelector('.comenzar-consultas-button > button');


	var containerInformation = document.querySelector('.container-information');



	var contentLogoBot = document.querySelector('.content-logoBot');


	var containerReturn = document.querySelector('.container-return');

	var loco = document.querySelector('.loco')


	const ulAdd = document.querySelector('.ul-add');

	var contentAswer = document.querySelector('.content-aswer-bot');

	var containerButtonStart = document.querySelector('.container-button-start');


	var mediumLogo = document.querySelector('.medium-logo');


	var buttonMore = document.querySelector('.button-start-more');


	var containerRequest = document.querySelector('.container-request');


	var containerAswer = document.querySelector('.container-aswer-bot');


	var buttonTwo = document.querySelector('#sendTwo');



	var textQuadUser = document.querySelector('.text-quad-user');



	var user = document.querySelector('.user');

	var ingrese = document.querySelector('.ingrese');






















	buttonMore.addEventListener('click', ()=>{


		containerInformation.style.display = "block";
		containerRequest.style.display = "none";

	





	});



	// ALGORITM HTML

	comenzarButton.addEventListener('click', ()=>{



		comenzarButton.style.display = "none";

		containerInformation.style.display = "block";

		contentLogoBot.style.display = "none";

		containerReturn.style.display = "block";
		containerButtonStart.style.display = "block";

		mediumLogo.style.display = "block";


	});



	//ALGORIT GET DATE INPUT


	let letter = document.getElementById('letter');

	var send = document.getElementById('send');












	//APPEND TEXT IN THE CLASS TEXT-QUAD-USER
	



//CONFI ENTER

/*

	document.addEventListener('keyup', (e)=>{


		if(e.key == 'Enter'){





			textQuadUser.innerHTML = letter.value;



		}


	})

 
*/





 

// CONFI ENTER





	// FUNCTION CREATE TEXT





	function createText (){



		var today = new Date();

		var now = today.toLocaleTimeString();




		user.style.opacity = 1;


		const textInput = letter.value + " " + now;

		const li = document.createElement('li');

		const p = document.createElement('p');




		const iconP = document.createElement('p');


		p.textContent = textInput;



		li.appendChild(p)
		


		ulAdd.appendChild(li)






	
		letter.value  = "";





	}







	

	buttonTwo.addEventListener('click', ()=>{




			createText();





	});

	








	



	send.addEventListener('click', ()=>{








		



	switch (letter.value) {

		case 'a':



			

			buttonTwo.style.display = "block";
			send.style.display = "none";	

		
			containerAswer.style.display = "block";

			containerInformation.style.display = "none";


			




			

			console.log("HAS SELECIONADO LA LETRA 'A' ");



			break;


		case 'b':

		

			containerAswer.style.display = "block";

			containerInformation.style.display = "block";



			console.log("HAS SELECIONADO LA LETRA 'b' ");

			break;



		case 'c':


			console.log("HAS SELECIONADO LA LETRA 'c' ");

			break;




		default:






			break;
	}








		letter.value  = "";






	});




	// SWITCH













































});
