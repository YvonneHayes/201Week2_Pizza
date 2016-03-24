//Calling Function to generate all the tables

generate_table(Beaverton);
generate_table(Hillsboro);
generate_table(Downtown);
generate_table(NorthEast);
generate_table(Clackamas);
generate_table(PDXAirport);

// Printing Hourly Pizza Sales across stores

var printItNow = document.getElementById("perHour");
printItNow.textContent =  "The Number of Pizzas sold at a specific Time is " + Hourly(StoreArray,1)+ "!";

//Number of Pizzas per Store

var printItNow2 = document.getElementById("perStore");
printItNow2.textContent = pizzaPerStore(Beaverton);

//Total Pizza Sales printed to page

var printItPlease = document.getElementById("putItHere");
printItPlease.textContent = "Total Number of Pizzas sold this week is " + PizzaCounterWeekly + "!";
