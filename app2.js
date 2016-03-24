//Array of all Stores
var StoreArray = [];

//Beaverton Object - now made with Constructor

var Beaverton = new Object();
Beaverton.AnchorName = 'BeavertonAnchor';
Beaverton.timeSlots = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'];
Beaverton.minMaxPizza = [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[15,35],[15,35],[15,35],[12,31],[12,31],[12,31],[5,20],[5,20],[5,20]];
Beaverton.minMaxDeliveries = [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[3,8],[3,8],[3,8],[5,12],[5,12],[5,12],[6,11],[6,11],[6,11]];
Beaverton.TotalByHour = [];

StoreArray.push(Beaverton);

//Hillsboro Object - now made with Constructor

var Hillsboro = new Object();
Hillsboro.AnchorName = 'HillsboroAnchor';
Hillsboro.timeSlots = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'];
Hillsboro.minMaxPizza = [[1,3],[1,3],[1,3],[5,9],[5,9],[5,9],[2,13],[2,13],[2,13],[18,32],[18,32],[18,32],[1,3],[1,3],[1,3],[8,20],[8,20],[8,20]];
Hillsboro.minMaxDeliveries = [[1,7],[1,7],[1,7],[2,8],[2,8],[2,8],[1,6],[1,6],[1,6],[3,9],[3,9],[3,9],[5,12],[5,12],[5,12],[6,16],[6,16],[6,16]];
Hillsboro.TotalByHour = [];

StoreArray.push(Hillsboro);

//Downtown Object - now made with Constructor

var Downtown = new Object ();
Downtown.AnchorName = 'DowntownAnchor';
Downtown.timeSlots = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'];
Downtown.minMaxPizza = [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[10,26],[10,26],[10,26],[8,22],[8,22],[8,22],[0,2],[0,2],[0,2]];
Downtown.minMaxDeliveries = [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[4,6],[4,6],[4,6],[7,15],[7,15],[7,15],[2,8],[2,8],[2,8]];
Downtown.TotalByHour = [];

StoreArray.push(Downtown);

//North East Object - now made with Constructor

var NorthEast = new Object ();
NorthEast.AnchorName = 'NorthEastAnchor';
NorthEast.timeSlots = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'];
NorthEast.minMaxPizza = [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[5,15],[5,15],[5,15],[25,39],[25,39],[25,39],[22,36],[22,36],[22,36],[5,21],[5,21],[5,21]];
NorthEast.minMaxDeliveries = [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[13,18],[13,18],[13,18],[5,22],[5,22],[5,22],[16,31],[16,31],[16,31]];
NorthEast.TotalByHour = [];

StoreArray.push(NorthEast);

//Clackamas Object - now made with Constructor

var Clackamas = new Object ();
Clackamas.AnchorName = 'ClackamasAnchor';
Clackamas.timeSlots = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'];
Clackamas.minMaxPizza = [[2,7],[2,7],[2,7],[3,8],[3,8],[3,8],[1,5],[1,5],[1,5],[5,13],[5,13],[5,13],[22,41],[22,41],[22,41],[15,20],[15,20],[15,20]];
Clackamas.minMaxDeliveries = [[3,5],[3,5],[3,5],[3,9],[3,9],[3,9],[1,4],[1,4],[1,4],[2,4],[2,4],[2,4],[15,42],[15,42],[15,42],[6,21],[6,21],[6,21]];
Clackamas.TotalByHour = [];

StoreArray.push(Clackamas);

//PDX Airport Object - now made with Constructor

var PDXAirport = new Object ();
PDXAirport.AnchorName = 'PDXAirportAnchor';
PDXAirport.timeSlots = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'];
PDXAirport.minMaxPizza = [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[6,9],[6,9],[6,9],[4,8],[4,8],[4,8],[2,4],[2,4],[2,4]];
PDXAirport.minMaxDeliveries = [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[5,18],[5,18],[5,18],[2,5],[2,5],[2,5],[3,11],[3,11],[3,11]];
PDXAirport.TotalByHour = [];

StoreArray.push(PDXAirport);

//Counting Pizzas

var PizzaCounterWeekly = 0;

//Random Number Generator

function randomNumber(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var MainPageAnchor = document.getElementById("MainPage");
var SalesDataPageAnchor = document.getElementById("SalesDataPage"); //keeping html files seperate

if (SalesDataPageAnchor) {

//Generate Table Function

function generate_table(obj) {
  // get the reference for the body
  var body = document.getElementById(obj.AnchorName);

  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");

  var headerRow = document.createElement("tr"); //making the Headers
  var headerA = document.createElement("th");
  var headerText = document.createTextNode("Time");
  headerA.appendChild(headerText);
  headerRow.appendChild(headerA);
  var headerB = document.createElement("th");
  var headerTextB = document.createTextNode("Pizzas Sold");
  headerB.appendChild(headerTextB);
  headerRow.appendChild(headerB);
  var headerC = document.createElement("th");
  var headerTextC = document.createTextNode("Number of Delieveries");
  headerC.appendChild(headerTextC);
  headerRow.appendChild(headerC);
  var headerD = document.createElement("th");
  var headerTextD = document.createTextNode("Recommended Number of Drivers");
  headerD.appendChild(headerTextD);
  headerRow.appendChild(headerD);
  tblBody.appendChild(headerRow); //Done making Headers

  // creating all cells
  for (var i = 0; i < 18; i++) {
    // creates a table row
    var row = document.createElement("tr");

//Filling the slots
      var cell = document.createElement("td");
      var cellText = document.createTextNode(obj.timeSlots[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
      var cell2 = document.createElement("td");
      pizzaCountWeekly = randomNumber(obj.minMaxPizza[i][0], obj.minMaxPizza[i][1]);
      var cellText2 = document.createTextNode(pizzaCountWeekly);
      obj.TotalByHour.push(pizzaCountWeekly);
      PizzaCounterWeekly += pizzaCountWeekly;
      cell2.appendChild(cellText2);
      row.appendChild(cell2);
      var cell3 = document.createElement("td");
      var randomDelivery = randomNumber(obj.minMaxDeliveries[i][0], obj.minMaxDeliveries[i][1]);
      var cellText3 = document.createTextNode(randomDelivery);
      cell3.appendChild(cellText3);
      row.appendChild(cell3);
      var cell4 = document.createElement("td");
      var cellText4 = document.createTextNode(Math.ceil(randomDelivery/3));
      cell4.appendChild(cellText4);
      row.appendChild(cell4);

    // add the row to the end of the table body

    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}


//Calling Function to generate all the tables

generate_table(Beaverton);
generate_table(Hillsboro);
generate_table(Downtown);
generate_table(NorthEast);
generate_table(Clackamas);
generate_table(PDXAirport);

//Pizza Sales per Hour across all Stores


// function Hourly figures out the total amount of Pizzas at a specific hour across all stores

function Hourly (arr, hour){
  var CounterHour = 0;
  for (i = 0; i < arr.length; i++) {
    var HourValue = arr[i].TotalByHour[hour];
    CounterHour = CounterHour + HourValue;
  }
  return CounterHour;
}

//Hourly(StoreArray,1);

var printItNow = document.getElementById("perHour");
printItNow.textContent =  "The Number of Pizzas sold at a specific Time is " + Hourly(StoreArray,1)+ "!";


//Number of Pizzas per Store

function pizzaPerStore (obj){
  counterStore = 0;
  for (i = 0; i < 18; i++) {
    var StoreValue = obj.TotalByHour;
    counterStore = counterStore + StoreValue[i];
  }
  return counterStore;
}
 

  // for (i = 0; i < 18; i++) {
  //   var Bla = Beaverton.TotalByHour;
  // }

//console.log(Bla);

var printItNow2 = document.getElementById("perStore");
printItNow2.textContent = pizzaPerStore(Beaverton);


//Total Pizza Sales printed to page

var printItPlease = document.getElementById("putItHere");
printItPlease.textContent = "Total Number of Pizzas sold this week is " + PizzaCounterWeekly + "!";


 } else if (MainPageAnchor) {



}
