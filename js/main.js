	/* Name: Isaah Finney		
     Date: March 6, 2014
     Assignment: Goal1: Assignment: The Duel - Part I
	 */
	 
	 // self-executing function
	 (function(){
	 
		console.log("Fight!!!");
		
		//player name
		var playerOneName = "Spiderman";
		var playerTwoName = "Batman";
		
		//player damage
		var player1Damage = 20;
		var player2Damage = 20;
		
		//player health
		var playerOneHealth = 100;
		var playerTwoHealth = 100;
		
		var round = 0;
		
		function fight(){
			console.log('in the fight function');
			
			alert(playerOneName +":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);
			
			for (var i=0; i < 10; i++){
				
				//random formual is -Math.floor(Math.random()*(max - min);
				
				var minDamage1 = player1Damage * .5;
				var minDamage2 = player2Damage * .5;
				var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage); 
				var f2 = Math.floor(Math.random()*(player2Damage-minDamage1)+minDamage);
				
				//console.log(f1);
				//console.log(f2);
				
				//inflict damage
				playerOneHealth-=f1;
				playerTwoHealth-=f2;
				
				console.log(alert(playerOneName +":"+playerOneHealth+""+playerTwoName+":"+playerTwoHealth));
				
				var results = winnerCheck();
				console.log(results);
				
				if(results === "no winner"){
					round++;
					alert(playerOneName +":"+playerOneHealth+" *ROUND "+round+"OVER*"playerTwoName+":"+playerTwoHealth);
				}else{
						alert(results);
						break;
				}
				winnerCheck();
				//console.log(playerOneHealth);
				//console.log(playerTwoHealth);
				
				
			};
			
		};
		
		function winnerCheck(){
			console.log("in winnerCheck FN");
			var results="no winner";
			
			if(playerOneHealth<1 && playerTwoHealth<1{
				result = "You both Die";
			}else if(playerOneHealth<1){
				result =playerTwoName+"WINS!!!"
			}else if(playerTwoHealth<1){
				result =playerOneName+"WINS!!!"
			
			};
			
			return result;
		};
		/****** The Program gets started below *****/
		console.log('program starts');
		fight();
		
	 })();