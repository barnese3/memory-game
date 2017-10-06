let memory = [],
	guess = [],
	card,
	card1,
	card2,
	winCount = 0,
	modal = document.getElementById("modal"),
	airplanes = document.querySelector(".airplanes"),
	play = document.querySelector(".play");

function modalOpen() {
	modal.style.display = "block";
}

function modalClose() {
	modal.style.display = "none";
}

memory.push(document.querySelectorAll(".backCard img"));

let cards = document.querySelectorAll(".card");
  for ( let i  = 0; i < cards.length; i++ ) {
    card = cards[i];
    clickListener( card );
}

function clickListener(card) {
    card.addEventListener("click", function() {
      let c = card.classList;
      if (c.contains("flipped")) {
      	c.remove("flipped");
      } else {
      	c.add("flipped");
      	guess.push(card);
 		match();      	
      }
    });
}

function match () {
	if (guess[0].childNodes[3].childNodes[0].src == guess[1].childNodes[3].childNodes[0].src) {
      		document.querySelector("h2").innerHTML = "MATCH";
      	    guess = [];
      	    winCount++;
      	    winner();
      	    	if (winCount != 16) {
      	    		setTimeout(modalOpen, 250);
      	    		setTimeout(modalClose, 1000);
      	    	}
    } else {
    	document.querySelector("h2").innerHTML = "NO MATCH";
    		setTimeout(noMatch, 700);
    		setTimeout(modalOpen, 250);
      	    setTimeout(modalClose, 1000);
    }	
}

function noMatch () {
	guess[0].classList.remove("flipped");
    guess[1].classList.remove("flipped");
    guess = [];
}

function winner () {
	if (winCount == 16) {
		document.querySelector("h2").innerHTML = "";
		airplanes.style.opacity = "0.3";
		modal.style.opacity = "1";
		modal.style.backgroundImage = "url('images/winner.jpg')";
		modal.style.backgroundRepeat = "no-repeat";
		modal.style.backgroundSize = "100% 100%";
		modal.style.width = "700px";
		modal.style.borderRadius = "12px";
		modal.style.top = "0%";
		modal.style.left = "0%";
		modal.animate([
			  { transform: 'translateY(400%)' }, 
  			  { transform: 'translateX(115%)' }
			], { 
			  duration: 2500,
			  iterations: Infinity
			});
		setTimeout(modalOpen, 250);
	}
}

document.querySelector("button").addEventListener("click", function() {	
	document.body.style.backgroundImage = "url('')";
	airplanes.style.transition = "1.5s ease-in";
	airplanes.style.height = "100%";
	airplanes.style.width = "100%";
	play.style.display = "none";
})