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
