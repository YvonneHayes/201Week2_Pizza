//Random Number Generator

function randomNumber(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Figuring out how to get correct random numbers

var printBPN8 = document.getElementById('BPN8');
var BPN8am = randomNumber(0,4)
printBPN8.textContent = BPN8am;


var printBDN8 = document.getElementById('BDN8');
var BDN8am = Math.ceil(BPN8am/2);
printBDN8.textContent = BDN8am;

var printBRD8 = document.getElementById('BRD8');
var BRD8am = Math.ceil(BDN8am/3);
printBRD8.textContent = BRD8am;
