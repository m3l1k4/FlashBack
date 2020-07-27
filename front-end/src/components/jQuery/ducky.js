

import $ from 'jquery';


// $(document).ready(function () {
// 	$("#mole").click(function () {
// 		alert('Img hotooo clicked');
// 	});
// });





// var quack = new Audio("./assets/quack.mp3")

var score = 0;

setInterval(startWhack, 995)

$(document).ready(function () {
	$("#mole").click(function (event) {
		event.preventDefault();
		score = score + 1;
		$(".score").text(score);
	
	});
});


function startWhack() {

	let xCordf = getRandomX(20, 700);
	let xCord = float2int(xCordf);
	let yCordf = getRandomY(10, 500);
	let yCord = float2int(yCordf);
	let diditWork = whackedMole(xCord, yCord);


	return

}


function whackedMole(x, y) {
	let xString = '';
	let yString = '';

	let randX = xString.concat(x, 'px');
	let randY = yString.concat(y, 'px');
	// document.getElementById("mole").style.top = randY;
	$("#mole").css({top: randY, left: randX, position:'absolute'})
	// $('#mole').style.top (randY);
	// document.getElementById("mole").style.left = randX;

	return "potato";
}

function getRandomX(min, max) {
	return Math.random() * (max - min) + min;
}

function getRandomY(min, max) {
	return Math.random() * (max - min) + min;
}

function float2int(value) {

	return (value | 0);
}

