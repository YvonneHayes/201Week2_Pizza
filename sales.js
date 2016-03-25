//Calling Function to generate all the individual Store tables
generate_table(Beaverton);
generate_table(Hillsboro);
generate_table(Downtown);
generate_table(NorthEast);
generate_table(Clackamas);
generate_table(PDXAirport);

//Total Pizza Sales printed to page
var printItPlease = document.getElementById("totalPizzas");
printItPlease.textContent = "Across all stores we sold " + PizzaCounterWeekly + " Pizzas this week!";

//Calling Function to generate the Pizzas sold per hour table
generateInfoTable();

//Number of Pizzas in Beaverton
var printItNow2 = document.getElementById("BStore");
printItNow2.textContent = "Beaverton Store - sold " +pizzaPerStore(Beaverton)+ " Pizzas this week.";

//Number of Pizzas in Hillsboro
var printItNow2 = document.getElementById("HStore");
printItNow2.textContent = "Hillsboro Store - sold " +pizzaPerStore(Hillsboro)+ " Pizzas this week.";

//Number of Pizzas in Beaverton
var printItNow2 = document.getElementById("DStore");
printItNow2.textContent = "Downtown Store - sold " +pizzaPerStore(Downtown)+ " Pizzas this week.";

//Number of Pizzas in Beaverton
var printItNow2 = document.getElementById("NEStore");
printItNow2.textContent = "North East Store - sold " +pizzaPerStore(NorthEast)+ " Pizzas this week.";

//Number of Pizzas in Beaverton
var printItNow2 = document.getElementById("CStore");
printItNow2.textContent = "Clackamas Store - sold " +pizzaPerStore(Clackamas)+ " Pizzas this week.";

//Number of Pizzas in Beaverton
var printItNow2 = document.getElementById("PDXStore");
printItNow2.textContent = "PDX Airport Store - sold " +pizzaPerStore(PDXAirport)+ " Pizzas this week.";
