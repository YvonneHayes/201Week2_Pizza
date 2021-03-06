//Array of all Stores
var StoreArray = [];

//Store Creator Function
function Stores (AnchorName, timeSlots, minMaxPizza, minMaxDeliveries, TotalByHour) {
  this.AnchorName = AnchorName;
  this.timeSlots = timeSlots;
  this.minMaxPizza = minMaxPizza;
  this.minMaxDeliveries = minMaxDeliveries;
  this.TotalByHour = TotalByHour;
}

//Beaverton Object and StoreArray
var Beaverton = new Stores ('BeavertonAnchor',['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'],[[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[15,35],[15,35],[15,35],[12,31],[12,31],[12,31],[5,20],[5,20],[5,20]],[[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[3,8],[3,8],[3,8],[5,12],[5,12],[5,12],[6,11],[6,11],[6,11]],[]);
StoreArray.push(Beaverton);

//Hillsboro Object and StoreArray
var Hillsboro = new Stores ('HillsboroAnchor',['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'],[[1,3],[1,3],[1,3],[5,9],[5,9],[5,9],[2,13],[2,13],[2,13],[18,32],[18,32],[18,32],[1,3],[1,3],[1,3],[8,20],[8,20],[8,20]],[[1,7],[1,7],[1,7],[2,8],[2,8],[2,8],[1,6],[1,6],[1,6],[3,9],[3,9],[3,9],[5,12],[5,12],[5,12],[6,16],[6,16],[6,16]],[]);
StoreArray.push(Hillsboro);

//Downtown Object and StoreArray
var Downtown = new Stores ('DowntownAnchor',['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'],[[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[10,26],[10,26],[10,26],[8,22],[8,22],[8,22],[0,2],[0,2],[0,2]],[[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[4,6],[4,6],[4,6],[7,15],[7,15],[7,15],[2,8],[2,8],[2,8]],[]);
StoreArray.push(Downtown);

//NorthEast Object and StoreArray
var NorthEast = new Stores ('NorthEastAnchor',['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'],[[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[5,15],[5,15],[5,15],[25,39],[25,39],[25,39],[22,36],[22,36],[22,36],[5,21],[5,21],[5,21]],[[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[13,18],[13,18],[13,18],[5,22],[5,22],[5,22],[16,31],[16,31],[16,31]],[]);
StoreArray.push(NorthEast);

//Clackamas Object and StoreArray
var Clackamas = new Stores ('ClackamasAnchor',['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'],[[2,7],[2,7],[2,7],[3,8],[3,8],[3,8],[1,5],[1,5],[1,5],[5,13],[5,13],[5,13],[22,41],[22,41],[22,41],[15,20],[15,20],[15,20]],[[3,5],[3,5],[3,5],[3,9],[3,9],[3,9],[1,4],[1,4],[1,4],[2,4],[2,4],[2,4],[15,42],[15,42],[15,42],[6,21],[6,21],[6,21]],[]);
StoreArray.push(Clackamas);

//PDXAirport Object and StoreArray
var PDXAirport = new Stores ('PDXAirportAnchor',['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am'],[[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[6,9],[6,9],[6,9],[4,8],[4,8],[4,8],[2,4],[2,4],[2,4]],[[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[5,18],[5,18],[5,18],[2,5],[2,5],[2,5],[3,11],[3,11],[3,11]],[]);
StoreArray.push(PDXAirport);

//Counting Pizzas
var PizzaCounterWeekly = 0;
