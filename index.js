function realTimeClock(){



let today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

let h = today.getHours();

if (h < 10) {
	h = '0' + h;
}

let min = today.getMinutes();

if (min < 10) {
	min = '0' + min;
}

let sec = today.getSeconds();

if (sec < 10) {
	sec = '0' + sec;
}

document.getElementById("clock").innerHTML = day + "/" + month + "/" +
year + " | " + h + ":" + min + ":" + sec;

setTimeout("realTimeClock()", 1000);

}