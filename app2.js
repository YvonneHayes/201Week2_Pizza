//Beaverton Object

var Beaverton = {
  AnchorName: 'BeavertonAnchor',
  timeSlots: ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'],
  minMaxPizza: [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[15,35],[15,35],[15,35],[12,31],[12,31],[12,31],[5,20],[5,20],[5,20]],
  minMaxDeliveries: [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[3,8],[3,8],[3,8],[5,12],[5,12],[5,12],[6,11],[6,11],[6,11]]
}


//Hillsboro Object

var Hillsboro = {
  AnchorName: 'HillsboroAnchor',
  timeSlots: ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'],
  minMaxPizza: [[1,3],[1,3],[1,3],[5,9],[5,9],[5,9],[2,13],[2,13],[2,13],[18,32],[18,32],[18,32],[1,3],[1,3],[1,3],[8,20],[8,20],[8,20]],
  minMaxDeliveries: [[1,7],[1,7],[1,7],[2,8],[2,8],[2,8],[1,6],[1,6],[1,6],[3,9],[3,9],[3,9],[5,12],[5,12],[5,12],[6,16],[6,16],[6,16]]
}

//Downtown Object

var Downtown = {
  AnchorName: 'DowntownAnchor',
  timeSlots: ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'],
  minMaxPizza: [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[10,26],[10,26],[10,26],[8,22],[8,22],[8,22],[0,2],[0,2],[0,2]],
  minMaxDeliveries: [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[4,6],[4,6],[4,6],[7,15],[7,15],[7,15],[2,8],[2,8],[2,8]]
}

//North East Object

var NorthEast = {
  AnchorName: 'NorthEastAnchor',
  timeSlots: ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'],
  minMaxPizza: [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[5,15],[5,15],[5,15],[25,39],[25,39],[25,39],[22,36],[22,36],[22,36],[5,21],[5,21],[5,21]],
  minMaxDeliveries: [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[13,18],[13,18],[13,18],[5,22],[5,22],[5,22],[16,31],[16,31],[16,31]]
}

//Clackamas Object

var Clackamas = {
  AnchorName: 'ClackamasAnchor',
  timeSlots: ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'],
  minMaxPizza: [[2,7],[2,7],[2,7],[3,8],[3,8],[3,8],[1,5],[1,5],[1,5],[5,13],[5,13],[5,13],[22,41],[22,41],[22,41],[15,20],[15,20],[15,20]],
  minMaxDeliveries: [[3,5],[3,5],[3,5],[3,9],[3,9],[3,9],[1,4],[1,4],[1,4],[2,4],[2,4],[2,4],[15,42],[15,42],[15,42],[6,21],[6,21],[6,21]]
}

//PDX Airport Object

var PDXAirport = {
  AnchorName: 'PDXAirportAnchor',
  timeSlots: ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'],
  minMaxPizza: [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[6,9],[6,9],[6,9],[4,8],[4,8],[4,8],[2,4],[2,4],[2,4]],
  minMaxDeliveries: [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[5,18],[5,18],[5,18],[2,5],[2,5],[2,5],[3,11],[3,11],[3,11]]
}

//Counting Pizzas

var PizzaCounterWeekly = 0;

//Random Number Generator

function randomNumber(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

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
      var pizzaCountWeekly = randomNumber(obj.minMaxPizza[i][0], obj.minMaxPizza[i][1]);
      var cellText2 = document.createTextNode(pizzaCountWeekly);
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


//Total Number of Pizzas sold

console.log(PizzaCounterWeekly);
