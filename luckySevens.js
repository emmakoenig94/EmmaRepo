/*
Name: Emma Koenig
Date Created: 10/22/18
Most recent revision: 10/23/18
*/


function play() {
	var startBet = Number(document.forms["luckySevens"]["strtBet"].value);
	if (startBet <= 0) {
		alert("Starting bet must be more than $0.");
		document.forms["luckySevens"]["strtBet"].value = "";
		document.forms["luckySevens"]["strtBet"].focus();
		return false;
	 //Makes user put in starting bet >0
	}
	
	//Defining Variables
	var gameMoney = startBet; 
	var moneyArray = [gameMoney];  //put gameMoney in array so it can be tracked
	var counterAll = 0;     //counts every roll, starts at 0

//starting loop	
if (startBet > 0){
	
	do{ 
		counterAll++;  
		var die1=Math.floor((Math.random() * 6) + 1);
		var die2=Math.floor((Math.random() * 6) + 1);
		var diceSum = (die1 + die2);
		
	if (diceSum == 7) {			//wins +4 if dice add to 7
		gameMoney = gameMoney + 4;
		moneyArray[moneyArray.length]= gameMoney; //adds money to array
	
	}else{
		gameMoney = gameMoney - 1;     //loses -1 if dice don't add to 7
		moneyArray[moneyArray.length]= gameMoney;  //adds money to array
	} 
	
	}while (gameMoney>0);   //only loop while there is money
	
	
	
	//Finding rolls at maximum
	var maxMoney = Math.max(...moneyArray); //find maximum in array
	var counterMax = moneyArray.indexOf(maxMoney);  //match index, counterMax counts rolls to maximum
	
	
	
	//table 
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Play Again"; //play again button
   document.getElementById("initialBet").innerText =("$" + startBet.toFixed(2));
   document.getElementById("totalRolls").innerText = counterAll;
   document.getElementById("amountWon").innerText = ("$" + maxMoney.toFixed(2));
   document.getElementById("rollsAtMax").innerText = counterMax; 
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
	
	
	
	
	} //closes if starting bet > 0 condition
}  //closes play function 