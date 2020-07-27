

import $ from 'jquery';


// $(document).ready(function () {
// 	$("#mole").click(function () {
// 		alert('Img hotooo clicked');
// 	});
// });





// var quack = new Audio("./assets/quack.mp3")

var score = 0;
var size = 300;

setInterval(startWhack, 1000)

$(document).ready(function () {
	$("#mole").click(function (event) {
		event.preventDefault();
		score = score + 1;
		size = size - 10;
		$(".Whack__score-board--value").text(score);
		$(".mole-img").css({ width: size })

	});



	$('#Whack__restart').click(function (event) {
		event.preventDefault();
		score = 0;
		size=300;
		$(".Whack__score-board--value").text(score);
		$(".mole-img").css({ width: size })
	}
	);

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

	$("#mole").css({ top: randY, left: randX, position: 'absolute' })



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

