//Random Number Generator

function randomNumber(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var potDeliveries = [[0,4],[0,4],[1,4]];
var numberOfThings = [[0,4],[0,7],[2,15]];
var pizzaNumber = ['PNS8','PNS9','PNS10'];
var deliveryNumber = ['DN8','DN9','DN10'];
var recDriverNumber = ['RD8','RD9','RD10'];

function printPizzaSold (minMax,soldPizza,delivery,drivers) {
  for (i=0; i <soldPizza.length; i++){
    var tempID = document.getElementById(soldPizza[i]);
    var tempRandom = randomNumber(minMax[i][0], minMax[i][1]);
    tempID.textContent = tempRandom;

    var tempID2 = document.getElementById(deliveryNumber[i]);
      if (tempRandom > delivery[i][1]){
        var tempdeliver = randomNumber(delivery[i][0], delivery[i][1]);
        tempID2.textContent = tempdeliver;
      } else {
        var tempdeliver = randomNumber(delivery[i][0],tempRandom);
        tempID2.textContent = tempdeliver;
      }

    var tempID3 = document.getElementById(drivers[i]);
    var tempRandom3 = Math.ceil(tempdeliver/3);
    tempID3.textContent = tempRandom3;
  }
}

printPizzaSold(numberOfThings,pizzaNumber,potDeliveries, recDriverNumber);



// Beaverton 8am

// var printBPN8 = document.getElementById('BPN8');
// var BPN8am = randomNumber(0,4)
// printBPN8.textContent = BPN8am;

// var printBDN8 = document.getElementById('BDN8');
// var BDN8am = Math.ceil(BPN8am/2);
// printBDN8.textContent = BDN8am;
//
// var printBRD8 = document.getElementById('BRD8');
// var BRD8am = Math.ceil(BDN8am/3);
// printBRD8.textContent = BRD8am;

//Beaverton 9am

// var printBPN9 = document.getElementById('BPN9');
// var BPN9am = randomNumber(0,4)
// printBPN9.textContent = BPN9am;

// var printBDN9 = document.getElementById('BDN9');
// var BDN9am = Math.ceil(BPN9am/2);
// printBDN9.textContent = BDN9am;
//
// var printBRD9 = document.getElementById('BRD9');
// var BRD9am = Math.ceil(BDN9am/3);
// printBRD9.textContent = BRD9am;

// //Beaverton 10am
//
// var printBPN10 = document.getElementById('BPN10');
// var BPN10am = randomNumber(0,4)
// printBPN10.textContent = BPN10am;
//
// var printBDN10 = document.getElementById('BDN10');
// var BDN10am = Math.ceil(BPN10am/2);
// printBDN10.textContent = BDN10am;
//
// var printBRD10 = document.getElementById('BRD10');
// var BRD10am = Math.ceil(BDN10am/3);
// printBRD10.textContent = BRD10am;
//
// //Beaverton 11am
//
// var printBPN11 = document.getElementById('BPN11');
// var BPN11am = randomNumber(0,7)
// printBPN11.textContent = BPN11am;
//
// var printBDN11 = document.getElementById('BDN11');
// var BDN11am = Math.ceil(BPN11am/2);
// printBDN11.textContent = BDN11am;
//
// var printBRD11 = document.getElementById('BRD11');
// var BRD11am = Math.ceil(BDN11am/3);
// printBRD11.textContent = BRD11am;

//Beaverton 12pm
// var Blabla = [[0,4],[0,7]];
