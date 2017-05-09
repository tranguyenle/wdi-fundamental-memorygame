//Trang Le, Memory Game.

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

var totalScores = 0; //variable stores the number of times winning.

var checkForMatch = function() {

		if (cardsInPlay[0] === cardsInPlay[1]) {
      		alert("You found a match!");
      		
      		totalScores += 1; 			//Keep tracks by adding 1 to each time the player wins.
      		alert("You have won " + totalScores + " times.");

  		} else {
      		alert("Sorry, two cards are Not matched. Try again.");
  		}

 }; //end function checkFormatch

var flipCard = function() {

	var cardId = this.getAttribute('data-id');


	cardsInPlay.push(cards[cardId].rank);

	document.getElementsByTagName('img')[cardId].setAttribute('src', cards[cardId].cardImage);


	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

	}; //end of function flipCard.



	var createBoard = function() {

		for (var i = 0; i < cards.length; i++) {

			var cardElement = document.createElement('img');
			cardElement.setAttribute('src', 'images/back.png');
			document.querySelector('div').appendChild(cardElement);

			cardElement.setAttribute('data-id', i);
			cardElement.addEventListener('click', flipCard);
		

			document.getElementById('game-board').appendChild(cardElement); //not sure why needed???

		}
	} // ending the createBoard function.

	createBoard();
			
			//Bonus
			//Reset the Game, turning all the cards back and empty the cardsInPlay array.
			document.getElementById("resetButton").addEventListener("click", function() {
				for (var i = 0; i < 4; i++) {
					document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
				}

				cardsInPlay = []; //Reset/empty the cardsInPlay array to start a new game.
			});









