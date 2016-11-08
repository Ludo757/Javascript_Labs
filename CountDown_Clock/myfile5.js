
// Lab due date: Tue Sep 27 23:59:59

var dLeft;
var hLeft;
var mLeft;
var sLeft;
var msLeft;


function countDown() {
    setInterval(doTheMath, 1000);
}


function doTheMath() {
    var now = new Date();
	var dueDate = new Date("September 27, 2016 23:59:59");
	
	var msNow = now.getTime();
	var msDueDate = dueDate.getTime();
	
	msLeft = msDueDate - msNow;
	
	sLeft = Math.round((msLeft / 1000) % 60);
	document.getElementById("seconds").innerHTML = sLeft;
	
	mLeft = Math.floor((msLeft / (1000 * 60)) % 60);
	document.getElementById("minutes").innerHTML = mLeft;
	
	hLeft = Math.floor((msLeft / (1000 * 60 * 60)) % 60);
	document.getElementById("hours").innerHTML = hLeft;
	
	dLeft = Math.floor((msLeft / (1000 * 60 * 60 * 24)) % 60);
	document.getElementById("days").innerHTML = dLeft;
}
