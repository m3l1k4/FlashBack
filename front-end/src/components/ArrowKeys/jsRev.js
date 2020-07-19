//algorithm from https://github.com/derekahn/jsRevolution
// changes have been made to the original code to fit react framework
import $ from 'jquery';
// 'notes' to store Arrows  
var notes = [];

var score =0;



function Arrow(direction) {

	// CSS spacings for the arrows //
	var xPos = null;

	switch(direction) {

		case "left" : xPos = "110px";
		break;

		case "up" : xPos = "180px";
		break;

		case "down" : xPos = "245px";
		break;

		case "right" : xPos = "315px";
		break;

	}

	this.direction = direction;
	this.image = $("<img src='../assets/arrows/" + direction + ".gif' width='66px' height='66px'/>");


	this.image.css({

		position: "absolute",
		bottom: "100px",
		left: xPos

	});
	this.score = score;

	 
	$('.stage').append(this.image);
	$('.board').text(this.score);
	
}// ends CLASS Arrow

// To enable animating the arrows
Arrow.prototype.step = function() {

	// Controls the speed of the arrows
	this.image.css("top", "-=4px");

};

// Deletes arrows when they get to bottom of page
Arrow.prototype.destroy = function() {

	// removes the image of the DOM
	this.image.remove();

	// Removes the note/arrow from memory/array
	notes.splice(0,1);

};

// Explodes arrow when hit
Arrow.prototype.explode = function() {

	this.image.remove();


};



// For random arrows
var randNum = 0;

// Frame increasing
var frame = 0;

// Determines the speed of notes
var arrowSpawnRate = 40;


// Random generator for arrows
function randomGen() {

	// Randomizes between 1 and 4
	randNum = Math.floor(Math.random() * 4) + 1;

	if (randNum === 1) {

		notes.push(new Arrow("left"));

	}
	if (randNum === 2) {

		notes.push(new Arrow("right"));

	}
	if (randNum === 3) {

		notes.push(new Arrow("up"));
	

		
	}
	if (randNum === 4) {

		notes.push(new Arrow("down"));

	}

}// ends randomGen()


// Render function //
function render() {

	if (frame++ % arrowSpawnRate === 0) {

		randomGen();

	}

	// // Animate arrows showering down //
	// for (var i = 0; i < notes.length ; i++) {
	for (var i = notes.length - 1; i >= 0; i--) {
		  notes[i].step();

		// Check for cleanup
		if (notes[i].image.position().top < 20) {

			notes[i].destroy();

		}

	}

}// ends render()



// jQuery to animate arrows //
$(document).ready(function () {

	// shim layer with setTimeout fallback
	window.requestAnimationFrame = (function() {

		return window.requestAnimationFrame ||

		window.webkitRequestAnimationFrame ||

		window.mozRequestAnimationFrame ||

		function(callback) {

			window.setTimeout(callback, 40 / 75);

		};

	})();

	/*	place the rAF *before* the render() 
		to assure as close to 60fps with the 
		setTimeout fallback.					*/

	// Infinte loop for game play
	(function animloop() {

		requestAnimationFrame(animloop);

		render();

	})();// ends (function animloop() )


});// ends $(doc).ready



// Listening for when the key is pressed
$(document).keydown( function(event) {
	
	for (var i = 0; i < notes.length; i++) {
	
			console.log(notes[i].image.position().top);

		if (event.keyCode == 37 && notes[i].direction == "left") {

			if (notes[i].image.position().top > 1 && notes[i].image.position().top < 120) {

				console.log("LEFT! "+notes[i].explode());
				score ++; 
				console.log(score)

			}

		}
		if (event.keyCode == 38 && notes[i].direction == "up") {

			if (notes[i].image.position().top > 1 && notes[i].image.position().top < 120) {
				
				console.log("UP! "+notes[i].explode());
				
				score ++; 
				console.log(score)

				alert("gotit")
				
			}

		}
		if (event.keyCode == 40 && notes[i].direction == "down") {

			event.preventDefault();
			if (notes[i].image.position().top > 3 && notes[i].image.position().top < 120) {
				
				console.log("DOWN! "+notes[i].explode());
				score ++; 
				console.log(score)
			}


			

		}
		if (event.keyCode == 39 && notes[i].direction == "right") {

			if (notes[i].image.position().top > 3 && notes[i].image.position().top < 120) {
				
				console.log("RIGHT! "+notes[i].explode());
				score ++; 
				console.log(score)
			}

		
		}

	}// ends loop

});// ends $(doc).keyup




