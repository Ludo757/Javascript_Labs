var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var newCards = [];
var newCards2D = [];
var counter = 0;
var winningCounter = 0;
var pairArray = [];

function gameTime() { 
    
    shuffleCards(cards);
    changeTo2D(newCards);
    displayCoverImage(newCards2D);
    assignEventListener();
    cellClicked();   
}

// ****** SHUFFLE CARDS ******

/* 
This function shuffles the cards as randomly as possible.
I took some "inspiration" from one of the Fisher-Yates shuffle algorithm. 
More about this algorithm at https://bost.ocks.org/mike/shuffle/
*/

function shuffleCards(anyArray) {
    var i = anyArray.length;
    while (i) {
        var x = Math.floor(Math.random() * i--);
        newCards.push(anyArray.splice(x, 1)[0]);
    }
    return newCards;
}

// Once we have a random order of the cards, we store them in a 2D array
// and we will access this array to play.
function changeTo2D(anyArray) {
    while(anyArray.length) {
        newCards2D.push(anyArray.splice(0,6));
    }
    return newCards2D;
}

// This function displays a cover image on each <td> element,
// So it looks like it is hidding the card underneath it, although it is not,
// as the card will be displayed only when the <td> element is clicked on.
function displayCoverImage(anyArray) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 6; j++) {
            document.getElementById("cell" + i + j).innerHTML = "<img src='images/13.png'>";
        }
    }
}

// Assigns an Event Listener to each <td> element
function assignEventListener() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 6; j++) {
            var id = "cell" + i + j;
            document.getElementById(id).addEventListener("click", cellClicked);
        }
    }
}

// Finds out which <td> element was clicked and passes the id to the next function  
function cellClicked() {
    var cellId = this.id;
    if (cellId !== undefined) {
        playTime(cellId);
    }
}

// ****** MAIN GAME FUNCTION ******

/*
The logic here is based on a counter, thus the switch statement I used.
I store the cards that are clicked and the <td> element ids in a temp array.
Then when we have a pair, I use an if/else statement to verify matching conditions.
After each turn, the counter and the temp array are reset.
Also, I use a setTimeout() method to hide the cards after 1 second if no match, along
with another switch case (when 3 clicks). Lastly, I kept a default case, just in case
something goes wrong.
*/

function playTime(anyId) {
    
    counter++;

    switch(counter) {
        
        case 1:
            
            var x = anyId;
            var i = parseInt(x.charAt(4));
            var j = parseInt(x.charAt(5));
            
            document.getElementById("cell" + i + j).innerHTML = "<img src='images/" + newCards2D[i][j] + ".jpeg'>";
            document.getElementById("cell" + i + j).removeEventListener("click", cellClicked);
            
            pairArray[counter - 1] = newCards2D[i][j];
            pairArray[counter + 1] = anyId;

            break;    
        
        case 2:
            
            var x = anyId;
            var i = parseInt(x.charAt(4));
            var j = parseInt(x.charAt(5));
            
            document.getElementById("cell" + i + j).innerHTML = "<img src='images/" + newCards2D[i][j] + ".jpeg'>";
            document.getElementById("cell" + i + j).removeEventListener("click", cellClicked);
            
            pairArray[counter - 1] = newCards2D[i][j];
            pairArray[counter + 1] = anyId;
            
            if (pairArray[0] === pairArray[1]) {
                
                document.getElementById(pairArray[2]).style.backgroundColor = "cyan";
                document.getElementById(pairArray[3]).style.backgroundColor = "cyan";
                
                counter = 0;
                pairArray = [];
                winningCounter++;
                
                if (winningCounter === 12) {
                    alert("Congratulations!");
                }
                
                break;
            }
            
            else {
                
                function hideCards() {
                document.getElementById(pairArray[2]).innerHTML = "<img src='images/13.png'>";
                document.getElementById(pairArray[3]).innerHTML = "<img src='images/13.png'>";
                
                document.getElementById(pairArray[2]).addEventListener("click", cellClicked);
                document.getElementById(pairArray[3]).addEventListener("click", cellClicked);
                    
                pairArray = [];
                counter = 0;
                }
                
                setTimeout(hideCards, 1000);
                
                break;
            }     
            
        case 3:
            
            document.getElementById(pairArray[2]).innerHTML = "<img src='images/13.png'>";
            document.getElementById(pairArray[3]).innerHTML = "<img src='images/13.png'>";
            
            document.getElementById(pairArray[2]).addEventListener("click", cellClicked);
            document.getElementById(pairArray[3]).addEventListener("click", cellClicked);
            
            counter = 0;
            pairArray = [];
            break;
            
        default:
            alert("Oops... Something went wrong. Please refresh the page.");
    }
}




