

import $ from 'jquery';
var quack = new Audio("./assets/quack.mp3")

// $(document).ready(function () {
// 	$("#mole").click(function () {
// 		alert('Img hotooo clicked');
// 	});
// });





// var quack = new Audio("./assets/quack.mp3")

var score = 0;
var size = 100;
let intrv=1000;
var restart=0;
setInterval(startWhack, intrv)
whackedMole(100,100);

// setInterval(startWhack, intrv)

$(document).ready(function () {
	$("#mole").click(function (event) {
		event.preventDefault();
		score = score + 1;
		size = size - 2;
		restart=0;
		$(".Whack__score-board--value").text(score);
		$(".mole-img").css({ width: size })
		quack.play();
	});



	$('#Whack__restart').click(function (event) {
		event.preventDefault();
		score = 0;
		size=100;
		restart=1;
		$(".Whack__score-board--value").text(score);
		$(".mole-img").css({ width: size })
		
	
	}
	);

});



function startWhack() {


	if (restart==1){
		whackedMole(100, 100);
	}

	else{
		let xCordf = getRandomX(20, 400);
		let xCord = float2int(xCordf);
		let yCordf = getRandomY(20, 400);
		let yCord = float2int(yCordf);
		whackedMole(xCord, yCord);
	
	}

	

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

