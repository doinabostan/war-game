window.onload=function(){

var cards_pl1=[]
var cards_pl2=[]

//console.log(cards)

//console.log(typeof cardspl1)

document.querySelector(".btn-new").addEventListener("click", displayCards)
document.querySelector(".btn-roll").addEventListener("click", playCards)


function displayCards(){
 var cards=["01_c", "01_in", "01_ir", "01_t", "02_c", "02_in", "02_ir", "02_t", "03_c", "03_in", "03_ir", "03_t", "04_c", "04_in", "04_ir", "04_t", "05_c", "05_in", "05_ir", "05_t", "06_c", "06_in", "06_ir", "06_t", "07_c", "07_in", "07_ir", "07_t", "08_c", "08_in", "08_ir", "08_t", "09_c", "09_in", "09_ir", "09_t", "10_c", "10_in", "10_ir", "10_t", "11_c", "11_in", "11_ir", "11_t"]

var cards_copy=cards
	//shuffle cards
shuffleArray(cards)

//console.log(cards);
//impart cartile

var half_length = cards.length / 2; 
cards_pl1 = cards_copy.splice(0,half_length);    
cards_pl2 = cards_copy
//afisez prima carte
firstCard(0)
//afisez nr de carti din cele doua teancuri
cardsLeft(cards_pl1.length, cards_pl2.length)



// console.log(typeof cards_pl1)

// console.log("cardspl1_initial = "+cards_pl1);
// console.log("cardspl2_initial = "+cards_pl2);
}




function playCards(){

	var split1 = cards_pl1[0].split("_");
	var split2 = cards_pl2[0].split("_");
	var card1=Number(split1[0]);
	var card2=Number(split2[0]);

	// console.log(card1);
	// console.log(card2);

	if(card1 > card2){
		inegalitate1()
		firstCard(0)	
//	cardsLeft()
// displayCards()
wars=0
	}

	else if(card2 > card1){
	inegalitate2()	
	firstCard(0)	
//	cardsLeft()
// displayCards()

	}
	else{

		war()
		

	}

}




function firstCard(index){
	if(cards_pl1.length>0 && cards_pl1[index] !=undefined){
	document.querySelector("#score-0" ).innerHTML='<img src="img/'+cards_pl1[index]+'.png">';
}else{
	document.querySelector("#name-1").innerHTML="Player 2 Wins"
	document.querySelector("#score-0" ).innerHTML='<img src="img/back.png">';

}


if(cards_pl2.length>0 && cards_pl2[index] !=undefined){
	document.querySelector("#score-1" ).innerHTML='<img src="img/'+ cards_pl2[index]+'.png"> ';

}else{
	document.querySelector("#name-0").innerHTML="Player 1 wins"
	document.querySelector("#score-1" ).innerHTML='<img src="img/back.png">';

}


}



 function shuffleArray(array) {
            for (var x = array.length - 1; x > 0; x--) {
                var holder = Math.floor(Math.random() * (x + 1));
                var itemValue = array[x];
                array[x] = array[holder];
                array[holder] = itemValue;
            }
            return array;
        }		


function inegalitate1(){
		cards_pl1.push(cards_pl1.shift()); 
		cards_pl1.push(cards_pl2[0]);
		cards_pl2.shift()
		// console.log("cardspl1 = "+cards_pl1);
		// console.log("cardspl2 = "+cards_pl2);
		document.getElementById("war").value=""
		document.querySelector('#war').classList.remove("red")

		cardsLeft(cards_pl1.length, cards_pl2.length)


}


function inegalitate2(){
		cards_pl2.push(cards_pl2.shift()); 
		cards_pl2.push(cards_pl1[0]);
		cards_pl1.shift();
		// console.log("cardspl1 = "+cards_pl1);
		// console.log("cardspl2 = "+cards_pl2);
		document.getElementById("war").value="";
		document.querySelector('#war').classList.remove("red")

	cardsLeft(cards_pl1.length, cards_pl2.length)

}

function war(){
	var wars=Number(document.getElementById("war").value);
		//console.log("war is="+ wars)

		if(isNaN(wars) || wars=="" || wars==0){
				document.querySelector('#war').classList.add("red")
				document.querySelector('#eroare').innerHTML="Insert a number"
			}else if (wars>=cards_pl1.length){
				document.querySelector('#war').classList.add("red")
				document.querySelector('#eroare').innerHTML="Player 1 has no enough cards"
			}else if (wars>=cards_pl2.length){
				document.querySelector('#war').classList.add("red")
				document.querySelector('#eroare').innerHTML="Player 2 has no enough cards"
			}
		else{
			document.querySelector('#eroare').innerHTML=""
			firstCard(wars)
		//	var card11=cards_pl1[wars-1]
			var split11=cards_pl1[wars].split("_");
			var card11=Number(split11[0]);
			var split22=cards_pl2[wars].split("_");
			var card22=Number(split22[0]);
			// console.log("card11="+card11)
			// console.log("card22="+card22)
	
			if(card11>card22){
				var z1 = cards_pl1.splice(0, wars);	
				var z2 = cards_pl2.splice(0, wars);	
				// console.log('z1 = '+z1)
				// console.log('z2 = '+z2)
				for(var x=0; x<z1.length; x++){
					cards_pl1.push(z1[x])
					cards_pl1.push(z2[x])
					// console.log("z1[x] "+z1[x])
					// console.log("z2[x] "+z1[x])
				}
				
				firstCard(0)
				cardsLeft(cards_pl1.length, cards_pl2.length);
				
			// console.log("cardspl1 = "+cards_pl1);
			// console.log("cardspl2 = "+cards_pl2);	
			document.getElementById("war").value="";
			document.querySelector('#war').classList.remove("red")
			
			}else if(card11<card22){
				var z1 = cards_pl1.splice(0, wars);	
				var z2 = cards_pl2.splice(0, wars);		
			// console.log('z1 = '+z1)
			// console.log('z2 = '+z2)
				for(var x=0; x<z1.length; x++){
					cards_pl2.push(z1[x])
					cards_pl2.push(z2[x])
					// console.log("z1[x] "+z1[x])
					// console.log("z2[x] "+z1[x])
				}
				firstCard(0)
				cardsLeft(cards_pl1.length, cards_pl2.length);
			// console.log("cardspl1 = "+cards_pl1);
			// console.log("cardspl2 = "+cards_pl2);	
			document.getElementById("war").value="";
			document.querySelector('#war').classList.remove("red")
			}
			else{
			
				var z1 = cards_pl1.splice(0, wars);	
				var z2 = cards_pl2.splice(0, wars);		
				for(var x=0; x<z1.length; x++){
					cards_pl1.push(z1[x])
					cards_pl2.push(z2[x])
					// console.log("z1[x] "+z1[x])
					// console.log("z2[x] "+z1[x])
				}
					firstCard(0)
				// console.log('double war');
				// console.log("war is="+ wars);
				// console.log("card11="+card11);
				// console.log("card22="+card22);
				// console.log("cardspl1 = "+cards_pl1);
				// console.log("cardspl2 = "+cards_pl2);	

			document.getElementById("war").value="";
			document.querySelector('#war').classList.remove("red")

			war()
			cardsLeft(cards_pl1.length, cards_pl2.length);


			}

		}

}




function cardsLeft(number1, number2){
	document.querySelector("#current-0" ).innerHTML=number1;
	document.querySelector("#current-1" ).innerHTML=number2;	
}





}

//hide the popup witn the instructions

function hide() {

    document.querySelector(".popup").style.display = 'none'
}