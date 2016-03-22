//Random Number Generator

function randomNumber(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}



// Store Objects
var Beaverton = {


}
 // Time  | Min Pizza/hr  | Max Pizza/hr | Min Delivery/hr | Max Delivery/hr  |

var printIt = document.getElementById('test');
printIt.textContent = "hi";

var printBPN8 = document.getElementById('BPN8');
var BPN8am = randomNumber(0,4)
printBPN8.textContent = BPN8am;


var printBDN8 = document.getElementById('BDN8');
var BDN8am = Math.ceil(BPN8am/2);
printBDN8.textContent = BDN8am;

// var printBDN8 = document.getElementById('BDN8');
// printBDN8.textContent = randomNumber(1,4) <=
