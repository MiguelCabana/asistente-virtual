'use strict'


window.addEventListener('load', ()=>{


	// VARIABLES


	var comenzarButton = document.querySelector('.comenzar-consultas-button > button');


	var containerInformation = document.querySelector('.container-information');


	var containerClose = document.querySelector('.close > i');

	var containerMini = document.querySelector('.mini > i');


	var listFirst = document.querySelectorAll('li > span');



	var pdfImg = document.querySelector('.pdf-img')

	var back = document.querySelector('.back');


	var listContentText = document.querySelector('.list-content-text');


	var botList = document.querySelectorAll('.bot > p');

	var containerOnlyBot = document.querySelector('.bot')

	var iconHome = document.querySelector('.iconHome');


	var contentLogoBot = document.querySelector('.content-logoBot');


	var containerReturn = document.querySelector('.container-return');

	var loco = document.querySelector('.loco')


	const ulAdd = document.querySelector('.ul-add');

	var ulAddLi = document.querySelector('ul-add > ul');


	var contentAswer = document.querySelector('.content-aswer-bot');

	var containerButtonStart = document.querySelector('.container-button-start');


	var mediumLogo = document.querySelector('.medium-logo');


	var buttonMore = document.querySelector('.button-start-more');


	var containerRequest = document.querySelector('.container-request');


	var containerAswer = document.querySelector('.container-aswer-bot');


	var buttonTwo = document.querySelector('#sendTwo');

	var containerError = document.querySelector('.container-error')


	var textQuadUser = document.querySelector('.text-quad-user');


	var textError = document.querySelector('.textError')

	var user = document.querySelector('.user');

	
	var ingrese = document.querySelector('.ingrese');

	var textA = document.querySelector('#textA')

	var globalQuestion = document.querySelector('.global-question')


	var containerBot = document.querySelector('.container-bot');


	var alternativeB = document.querySelector('#alternativeB');
	var alternativeA = document.querySelector('#alternativeA');
	var alternativeC = document.querySelector('#alternativeC');
	var alternativeD = document.querySelector('#alternativeD');
	var alternativeE = document.querySelector('#alternativeE');

	var alternativeF = document.querySelector('#alternativeF');
	var alternativeG = document.querySelector('#alternativeG');

	var containerGlobal = document.querySelector('.container-global')

	var globalIcon = document.querySelector('.global-icon')

	var allcircle = document.querySelector('#allCircle');



	var myAudio = document.getElementById('myAudio');

	var audioTwo  = document.getElementById('audioTwo')



	function playAudioTwo(){



		audioTwo.play();



	}



	function playAudio(){



		myAudio.play();



	};





	containerMini.addEventListener('click', ()=>{


		containerBot.style.opacity = 0;


		containerGlobal.style.display = "block";



	});





	containerClose.addEventListener('click', ()=>{


		containerBot.style.opacity = 0;


		containerGlobal.style.display = "block";




	});









	var stopCircle;


	var showBot;


	var containerShowTextBot;




	function showTextBot() {



	containerShowTextBot =	setTimeout(() => {
		

			allcircle.style.opacity = 0;



			textA.style.opacity = 1;







			playAudio()

		}, 500);
			


	}
	globalQuestion.addEventListener('click', ()=>{



		containerBot.style.opacity = 1;
		containerGlobal.style.display = "none"







	});



	globalIcon.addEventListener('click', ()=>{



		containerBot.style.opacity = 1;
		containerGlobal.style.display = "none"







	});





	






	




	














	






	//BOT LIST










	// SCROLLDOWN 
	



	sendTwo.addEventListener('click', function(){



		
			


 			contentAswer.scrollTop = contentAswer.scrollHeight;
		});




	function returnBacker(){



		back.addEventListener('click', ()=>{



			send.style.display = "block";

			sendTwo.style.display = "none"


			containerAswer.style.display = "none";

			containerInformation.style.display = "block";



			containerReturn.style.display = "none";

	



			textA.style.opacity = 0;


			allcircle.style.opacity = 1;

			removeChild();


			

		})


	};














	buttonMore.addEventListener('click', ()=>{


		containerInformation.style.display = "block";
		containerRequest.style.display = "none";

	





	});





	// ALGORITM HTML

	comenzarButton.addEventListener('click', ()=>{



		comenzarButton.style.display = "none";

		containerInformation.style.display = "block";

		contentLogoBot.style.display = "none";


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





	// FUNCTION SCROLL 















	// FUNCTION CREATE TEXT





	function createText (){



		var today = new Date();

		var now = today.toLocaleTimeString();




		user.style.opacity = 1;






		const textInput = letter.value;

		const li = document.createElement('li');

		const p = document.createElement('p');


		const icon = document.createElement('h3');

		icon.textContent = now + " " + "✓✓"



		const iconP = document.createElement('p');


		p.textContent = textInput;



		li.appendChild(p)
	
		li.appendChild(icon)


		ulAdd.appendChild(li)


		// ulAdd.removeChild(li)




	
		letter.value  = "";





	}







	// DUPLICATE









	var removeOption;



	// function removeChild





	 function removeChild(){



	removeOption = user.removeChild(ulAdd);


		

	 }

	function addChildText (){




		


		user.appendChild(ulAdd)


	}








	
	





















	

	buttonTwo.addEventListener('click', ()=>{








			playAudioTwo()	


			createText();

			addChildText()





		

		removeRespuesta()








	});

	




















	



	send.addEventListener('click', ()=>{




		
		containerReturn.style.display = "block";


		returnBacker()




		



	switch (letter.value.toLowerCase()) {

		case 'a':




			pdfImg.style.display = "none";




			showTextBot()





			containerError.style.display = "none";


			

			buttonTwo.style.display = "block";
			send.style.display = "none";	

		
			containerAswer.style.display = "block";

			containerInformation.style.display = "none";




			alternativeA.style.display = "block";

			alternativeB.style.display = "none";
			alternativeC.style.display = "none";
			alternativeD.style.display = "none";
			alternativeE.style.display = "none";




			alternativeE.style.display = "none";
			alternativeF.style.display = "none";




			alternativeG.style.display = "none"


		




			





			break;


		case 'b':

		

			pdfImg.style.display = "none";


			showTextBot()





			alternativeA.style.display = "none";



			containerError.style.display = "none";

			buttonTwo.style.display = "block";
			send.style.display = "none";	

		
			containerAswer.style.display = "block";


			containerInformation.style.display = "none";


			alternativeB.style.display = "block";



			alternativeC.style.display = "none";
			alternativeD.style.display = "none";
			alternativeE.style.display = "none";

			

			alternativeE.style.display = "none";
			alternativeF.style.display = "none";




			alternativeG.style.display = "none"








			break;



		case 'c':


			pdfImg.style.display = "none";


			showTextBot()
			containerError.style.display = "none";

			buttonTwo.style.display = "block";
			send.style.display = "none";	

		
			containerAswer.style.display = "block";





			containerInformation.style.display = "none";



			alternativeC.style.display = "block";

			alternativeA.style.display = "none";
			alternativeB.style.display = "none";
			alternativeD.style.display = "none";
			alternativeE.style.display = "none";

			alternativeE.style.display = "none";
			alternativeF.style.display = "none";


			alternativeG.style.display = "none"










			break;




		case 'd':


			pdfImg.style.display = "none";

			showTextBot()

			containerError.style.display = "none";

			buttonTwo.style.display = "block";
			send.style.display = "none";	

		
			containerAswer.style.display = "block";





			containerInformation.style.display = "none";

			
			alternativeD.style.display = "block";


			alternativeA.style.display = "none";
			alternativeB.style.display = "none";
			alternativeC.style.display = "none";
			alternativeE.style.display = "none";


			alternativeE.style.display = "none";
			alternativeF.style.display = "none";


			alternativeG.style.display = "none"








			break;



	
	case 'e':


			pdfImg.style.display = "none";

			showTextBot()

			containerError.style.display = "none";

			buttonTwo.style.display = "block";
			send.style.display = "none";	

		
			containerAswer.style.display = "block";





			containerInformation.style.display = "none";

			
			alternativeD.style.display = "none";


			alternativeA.style.display = "none";
			alternativeB.style.display = "none";
			alternativeC.style.display = "none";


			alternativeE.style.display = "block";
			alternativeF.style.display = "none";


			alternativeG.style.display = "none"








			break;


	case 'f':





			var pdfTime = setTimeout(()=>{


				pdfImg.style.display = "block";

				pdfImg.style.opacity = 1;





			},500);





			showTextBot()

			containerError.style.display = "none";

			buttonTwo.style.display = "block";
			send.style.display = "none";	

		
			containerAswer.style.display = "block";





			containerInformation.style.display = "none";

			
			alternativeD.style.display = "none";


			alternativeA.style.display = "none";
			alternativeB.style.display = "none";
			alternativeC.style.display = "none";
			alternativeE.style.display = "none";
			alternativeF.style.display = "block";
			alternativeG.style.display = "none"
			






			break;




	case 'g':


			pdfImg.style.display = "none";

			showTextBot()

			containerError.style.display = "none";

			buttonTwo.style.display = "block";
			send.style.display = "none";	

		
			containerAswer.style.display = "block";





			containerInformation.style.display = "none";

			
			alternativeD.style.display = "none";


			alternativeA.style.display = "none";
			alternativeB.style.display = "none";
			alternativeC.style.display = "none";
			alternativeE.style.display = "none";
			alternativeF.style.display = "none";
			alternativeG.style.display = "block";

			








			break;










		default:








			

			containerError.style.display = "block"

			containerReturn.style.display = "none";




			break;
	}








		letter.value  = "";






	});




	// SWITCH



















	var containerRemoveRespuestas;

	function removeRespuesta(){

		containerRemoveRespuestas = setTimeout(() => {
	



			setInterval(() => {
			

				if(letter.value == 'horarios'){


				
					console.log("SET INTERVAL TRUE HORARIOS");


					const p = document.createElement('p');

					const li = document.createElement('li');


					p.textContent = "horarios";


					li.appendChild(p);


					contentAswer.appendChild(li)







				}


			}, 1000);



			alert("SETTIMEOUT TRUE")




	
	}, 1200);



	}







});
