'use strict';

let admin;

let ourPlanet = "Earth";

// alert(admin);
// alert(ourPlanet);

// let name = prompt("What is official name of 'Javascript'?", "");

// let message = name == "ECMAScript" ? "That's right" : "Wrong";

// alert(message);

let whoIs = prompt("Who's there?","");

if (whoIs == "Admin") {
	let pswd = prompt("Password?","")
	if (pswd == "TheMaster"){
	alert("Welcome!");
} else if (pswd == null){
	alert("Canceled");
} else {
	alert("Wrong Password");
}
} else if (whoIs == null){
	alert("Canceled");
} else {
	alert("I don't know you");
}

