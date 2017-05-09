var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {

	if (cardsInPlay.length >= 2) { //add a check to make sure the user select 2 cards.
		if (cardsInPlay[0] === cardsInPlay[1]) {
      		console.log("You found a match!");
      		alert("You found a match!");
  		} else {
      		console.log("Sorry, try again.");
      		alert("Sorry, try again.");
  		}
	} else {
 		alert("You must select two cards.");
 		console.log("You must select two cards.");
 	}

} //end function checkFormatch

var flipCard = function(cardId) {

  alert("User flipped " + cards[cardId]);
	console.log("User flipped " + cards[cardId]);

	cardsInPlay.push(cards[cardId]);

    alert("cardsInPlay array now contains " + cardsInPlay); //Just to check

   	checkForMatch();

}; //end of function 

flipCard(0);
flipCard(2);
//flipCard(cards[0]); a different way and change flipCard funciton
//flipCard(cards[1]);
