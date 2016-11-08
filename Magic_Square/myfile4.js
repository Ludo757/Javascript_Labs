
var magic = [[],[],[]];

var sumRow = [];
var sumCol = [];

var sumDiag1;
var sumDiag2;


function magicSquare() {
	askInputs();
    doTheMath();
}

function checkIt() {
	if (
	(sumRow[0] === sumRow[1]) &&
	(sumRow[1] === sumRow[2]) &&
	(sumCol[0] === sumCol[1]) &&
	(sumCol[1] === sumCol[2]) &&
	(sumDiag1 === sumDiag2) &&
	(sumDiag1 === sumRow[1])
	) {
		document.getElementById("result").innerHTML = "Congratulations, you have a magic square!";
	}
	else {
		document.getElementById("result").innerHTML = "Sorry, you don't have a magic square. Try again!";
	}
}

function askInputs() {
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			var temp = prompt("Enter a number (integer) for Cell " + i + j);
			magic[i][j] = parseInt(temp);
			document.getElementById("cell" + i + j).innerHTML = magic[i][j];
		}
	}
}

function doTheMath(){
    // sum all rows and puts results in an array
	for (var i = 0; i < 3; i++) {
		var temp = magic[i][0] + magic[i][1] + magic[i][2];
		sumRow.unshift(temp);
	}
	
	// sum all columns and puts results in an array
	for (var i = 0; i < 3; i++) {
		var temp = (magic[0][i] + magic[1][i] + magic[2][i]);
		sumCol.unshift(temp);
	}
	
	// sum for diagonals
	sumDiag1 = magic[0][0] + magic[1][1] + magic[2][2];
	sumDiag2 = magic[2][0] + magic[1][1] + magic[0][2];
}
