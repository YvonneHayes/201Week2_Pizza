//Random Number Generator
function randomNumber(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

//Function to calculate total Pizzas per Store
function pizzaPerStore (obj){
  var counterStore = 0;
  for (i = 0; i < 18; i++) {
    var StoreValue = obj.TotalByHour;
    counterStore += StoreValue[i];
  }
  return counterStore;
}

//Function to calculate the total amount of pizzas sold per hour across all stores
function Hourly (arr, hour){
  var CounterHour = 0;
  for (i = 0; i < arr.length; i++) {
    var HourValue = arr[i].TotalByHour[hour];
    CounterHour = CounterHour + HourValue;
  }
  return CounterHour;
}

//Big, huge, gigantic Function to generate the individual Store tables and fill them with all the info
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
  tblBody.appendChild(headerRow); //done making Headers

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

//Second big, huge, gigantic Function to generate the Pizzas sold per Hour table and fill it with all the info

function generateInfoTable() {
  // get the reference for the body
  var body = document.getElementById("InfoTable");

  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");

  var headerRow = document.createElement("tr"); //making the Headers
  var headerE = document.createElement("th");
  var headerTextE = document.createTextNode("Time");
  headerE.appendChild(headerTextE);
  headerRow.appendChild(headerE);
  var headerF = document.createElement("th");
  var headerTextF = document.createTextNode("Number of Pizzas Sold");
  headerF.appendChild(headerTextF);
  headerRow.appendChild(headerF);
  tblBody.appendChild(headerRow); //done making Headers

  // creating all cells
  for (var i = 0; i < 18; i++) {
    // creates a table row
    var row = document.createElement("tr");

  //Filling the slots
      var cell = document.createElement("td");
      var cellText = document.createTextNode(Beaverton.timeSlots[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
      var cell = document.createElement("td");
      var cellText = document.createTextNode(Hourly(StoreArray,i));
      cell.appendChild(cellText);
      row.appendChild(cell);

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

// Function to create elements
function createElements(storeName, storeId, AnchorId) {
  var storesDiv = document.getElementById('Stores');

  var h2 = document.createElement('h2');
  var h2Text = document.createTextNode(storeName);
  h2.setAttribute('id', storeId);
  h2.appendChild(h2Text);
  storesDiv.appendChild(h2);

  var store = document.createElement('div');
  store.setAttribute('id', AnchorId);
  storesDiv.appendChild(store);
}

// Forms
var clickButton = document.getElementById('button');

// Adding event listener function
clickButton.addEventListener('click', function () {
  var userInput1 = document.getElementById('textBox1').value;
  var userInput2 = document.getElementById('textBox2').value;
  var userInput3 = document.getElementById('textBox3').value;
  var userInput4 = document.getElementById('textBox4').value;
  var userInput5a = document.getElementById('textBox5a').value;
  var userInput5b = document.getElementById('textBox5b').value;
  var userInput6a = document.getElementById('textBox6a').value;
  var userInput6b = document.getElementById('textBox6b').value;

  var timeSlots = userInput4.split(',');
  var userInput5aSplit = userInput5a.split(', ');
  var userInput5bSplit = userInput5b.split(', ');
  var minMaxPizza = [];

  for (var i = 0; i < userInput5aSplit.length; i++) {
    var userInput5Arr = [];
    userInput5Arr.push(userInput5aSplit[i]);
    userInput5Arr.push(userInput5bSplit[i]);
    minMaxPizza.push(userInput5Arr);
  }

  var userInput6aSplit = userInput6a.split(', ');
  var userInput6bSplit = userInput6b.split(', ');
  var minMaxDeliveries = [];

  for (var i = 0; i < userInput6aSplit.length; i++) {
    var userInput6Arr = [];
    userInput6Arr.push(userInput6aSplit[i]);
    userInput6Arr.push(userInput6bSplit[i]);
    minMaxDeliveries.push(userInput6Arr);
  }

  createElements(userInput1, userInput2, userInput3);

  console.log(timeSlots);
  var newStore = new Stores(userInput3, timeSlots, minMaxPizza, minMaxDeliveries, []);
  console.log(newStore);
  StoreArray.push(newStore);
  console.log(StoreArray);
  generate_table(newStore);

  var printItNow2 = document.getElementById(userInput2);
  printItNow2.textContent = userInput1 + " Store - sold " +pizzaPerStore(newStore)+ " Pizzas this week.";

  var infoTable = document.getElementById('InfoTable');
  infoTable.innerHTML = '';
  generateInfoTable();

  printItPlease.textContent = "Across all stores we sold " + PizzaCounterWeekly + " Pizzas this week!";
});
