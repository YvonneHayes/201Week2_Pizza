//Beaverton Object

var Beaverton = {
  timeSlots: ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'],
  minMaxPizza: [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[15,35],[15,35],[15,35],[12,31],[12,31],[12,31],[5,20],[5,20],[5,20]],
  pizzaSales: ['BPizzaSales8','BPizzaSales9','BPizzaSales10','BPizzaSales11','BPizzaSales12','BPizzaSales13','BPizzaSales14','BPizzaSales15','BPizzaSales16','BPizzaSales17','BPizzaSales18','BPizzaSales19','BPizzaSales20','BPizzaSales21','BPizzaSales22','BPizzaSales23','BPizzaSales24','BPizzaSales1'],
  minMaxDeliveries: [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[3,8],[3,8],[3,8],[5,12],[5,12],[5,12],[6,11],[6,11],[6,11]],
  numberOfDeliveries: ['BDeliveries8','BDeliveries9','BDeliveries10','BDeliveries11','BDeliveries12','BDeliveries13','BDeliveries14','BDeliveries15','BDeliveries16','BDeliveries17','BDeliveries18','BDeliveries19','BDeliveries20','BDeliveries21','BDeliveries22','BDeliveries23','BDeliveries24','BDeliveries1'],
  recDriverNumber: ['BDrivers8','BDrivers9','BDrivers10','BDrivers11','BDrivers12','BDrivers13', 'BDrivers14','BDrivers14','BDrivers15','BDrivers16','BDrivers17','BDrivers18','BDrivers19','BDrivers20','BDrivers21','BDrivers22','BDrivers23','BDrivers24','BDrivers1']
}


// //Hillsboro Object
//
// var Hillsboro = {
//   minMaxPizza: [[1,3],[1,3],[1,3],[5,9],[5,9],[5,9],[2,13],[2,13],[2,13],[18,32],[18,32],[18,32],[1,3],[1,3],[1,3],[8,20],[8,20],[8,20]],
//   pizzaSales: ['HPizzaSales8','HPizzaSales9','HPizzaSales10','HPizzaSales11','HPizzaSales12','HPizzaSales13','HPizzaSales14','HPizzaSales15','HPizzaSales16','HPizzaSales17','HPizzaSales18','HPizzaSales19','HPizzaSales20','HPizzaSales21','HPizzaSales22','HPizzaSales23','HPizzaSales24','HPizzaSales1'],
//   minMaxDeliveries: [[1,7],[1,7],[1,7],[2,8],[2,8],[2,8],[1,6],[1,6],[1,6],[3,9],[3,9],[3,9],[5,12],[5,12],[5,12],[6,16],[6,16],[6,16]],
//   numberOfDeliveries: ['HDeliveries8','HDeliveries9','HDeliveries10','HDeliveries11','HDeliveries12','HDeliveries13','HDeliveries14','HDeliveries15','HDeliveries16','HDeliveries17','HDeliveries18','HDeliveries19','HDeliveries20','HDeliveries21','HDeliveries22','HDeliveries23','HDeliveries24','HDeliveries1'],
//   recDriverNumber: ['HDrivers8','HDrivers9','HDrivers10','HDrivers11','HDrivers12','HDrivers13', 'HDrivers14','HDrivers14','HDrivers15','HDrivers16','HDrivers17','HDrivers18','HDrivers19','HDrivers20','HDrivers21','HDrivers22','HDrivers23','HDrivers24','HDrivers1']
// }
//
// printDatainTable(Hillsboro);

//Random Number Generator

function randomNumber(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

//Generate Table Function

function generate_table() {
  // get the reference for the body
  var body = document.getElementById("BeavertonAnchor");

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



  tblBody.appendChild(headerRow);


  // creating all cells
  for (var i = 0; i < 18; i++) {
    // creates a table row
    var row = document.createElement("tr");

    // for (var j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode(Beaverton.timeSlots[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
      var cell2 = document.createElement("td");
      var cellText2 = document.createTextNode(randomNumber(Beaverton.minMaxPizza[i][0], Beaverton.minMaxPizza[i][1]));
      cell2.appendChild(cellText2);
      row.appendChild(cell2);
      var cell3 = document.createElement("td");
      var randomDelivery = randomNumber(Beaverton.minMaxDeliveries[i][0], Beaverton.minMaxDeliveries[i][1]);
      var cellText3 = document.createTextNode(randomDelivery);
      cell3.appendChild(cellText3);
      row.appendChild(cell3);
      var cell4 = document.createElement("td");
      var cellText4 = document.createTextNode(Math.ceil(randomDelivery/3));
      cell4.appendChild(cellText4);
      row.appendChild(cell4);

    //}

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


generate_table();




//Beaverton Function to fill Table

// function printDatainTable (obj) {
//   for (i=0; i <obj.pizzaSales.length; i++){
//     var tempID = document.getElementById(obj.pizzaSales[i]);
//     tempRandom = randomNumber(obj.minMaxPizza[i][0], obj.minMaxPizza[i][1]);
//     tempID.textContent = tempRandom;
//     var tempID2 = document.getElementById(obj.numberOfDeliveries[i]);
//       if (tempRandom > obj.minMaxDeliveries[i][1]){
//         var tempdeliver = randomNumber(obj.minMaxDeliveries[i][0], obj.minMaxDeliveries[i][1]);
//         tempID2.textContent = tempdeliver;
//       } else {
//         var tempdeliver = randomNumber(obj.minMaxDeliveries[i][0],tempRandom);
//         tempID2.textContent = tempdeliver;
//       }
//
//     var tempID3 = document.getElementById(obj.recDriverNumber[i]);
//     var tempRandom3 = Math.ceil(tempdeliver/3);
//     tempID3.textContent = tempRandom3;
//   }
// }
//
// printDatainTable(Beaverton);
//
//
// //Hillsboro Object
//
// var Hillsboro = {
//   minMaxPizza: [[1,3],[1,3],[1,3],[5,9],[5,9],[5,9],[2,13],[2,13],[2,13],[18,32],[18,32],[18,32],[1,3],[1,3],[1,3],[8,20],[8,20],[8,20]],
//   pizzaSales: ['HPizzaSales8','HPizzaSales9','HPizzaSales10','HPizzaSales11','HPizzaSales12','HPizzaSales13','HPizzaSales14','HPizzaSales15','HPizzaSales16','HPizzaSales17','HPizzaSales18','HPizzaSales19','HPizzaSales20','HPizzaSales21','HPizzaSales22','HPizzaSales23','HPizzaSales24','HPizzaSales1'],
//   minMaxDeliveries: [[1,7],[1,7],[1,7],[2,8],[2,8],[2,8],[1,6],[1,6],[1,6],[3,9],[3,9],[3,9],[5,12],[5,12],[5,12],[6,16],[6,16],[6,16]],
//   numberOfDeliveries: ['HDeliveries8','HDeliveries9','HDeliveries10','HDeliveries11','HDeliveries12','HDeliveries13','HDeliveries14','HDeliveries15','HDeliveries16','HDeliveries17','HDeliveries18','HDeliveries19','HDeliveries20','HDeliveries21','HDeliveries22','HDeliveries23','HDeliveries24','HDeliveries1'],
//   recDriverNumber: ['HDrivers8','HDrivers9','HDrivers10','HDrivers11','HDrivers12','HDrivers13', 'HDrivers14','HDrivers14','HDrivers15','HDrivers16','HDrivers17','HDrivers18','HDrivers19','HDrivers20','HDrivers21','HDrivers22','HDrivers23','HDrivers24','HDrivers1']
// }
//
// printDatainTable(Hillsboro);
