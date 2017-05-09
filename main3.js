var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamands",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}

];

var cardsInPlay = [];

var checkForMatch = function() {

	if (cardsInPlay.length >= 2) { //add a check to make sure the user select 2 cards.
		if (cardsInPlay[0] === cardsInPlay[1]) {
      		console.log("You found a match!");
      		alert("You found a match!");
  		} else {
      		console.log("Sorry, two cards are Not matched. try again.");
      		alert("Sorry, two cards are Not matched. Try again.");
  		}
	} else {
 		alert("You must select two cards. Select one more.");
 		console.log("You must select two cards. Select one more.");
 	}

} //end function checkFormatch

var flipCard = function(cardId) {

    alert("User flipped " + cards[cardId].rank); //want to show in pop up window as well
	console.log("User flipped " + cards[cardId].rank);

	cardsInPlay.push(cards[cardId].rank);

    alert("cardsInPlay array now contains " + cardsInPlay); //Just to check
    
    alert(cards[cardId].cardImage);
    console.log(cards[cardId].cardImage);

    alert(cards[cardId].suit);
    console.log(cards[cardId].suit);

   	
   	checkForMatch();

}; //end of function flipCard.

flipCard(0);
flipCard(2);
