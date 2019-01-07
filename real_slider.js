let number = Math.floor(Math.random()*5)+1;

let timerOne = 0;
let timerTwo = 0;

function setSlide(slideNumber) {
	
	clearTimeout(timerOne);
	clearTimeout(timerTwo);

	number = slideNumber - 1;

	hideHide();
	setTimeout("changeSlide()",500);
}

function hideHide() {

	$("#slider").fadeOut(500);	
}

function changeSlide() {
	
	number++;
	if (number>5) number=1;

	let file = "<img src=\"duda" + number + ".jpg\" />";

	document.getElementById("slider").innerHTML = file;
	$("#slider").fadeIn(500);
	
	timerOne = setTimeout("changeSlide()", 5000);
	timerTwo = setTimeout("hideHide()", 4500);
}