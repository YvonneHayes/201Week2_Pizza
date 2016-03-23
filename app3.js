//Random Number Generator

function randomNumber(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

//Beaverton Object

var Beaverton = {
  minMaxPizza: [[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[15,35],[15,35],[15,35],[12,31],[12,31],[12,31],[5,20],[5,20],[5,20]],
  pizzaSales: ['BPizzaSales8','BPizzaSales9','BPizzaSales10','BPizzaSales11','BPizzaSales12','BPizzaSales13','BPizzaSales14','BPizzaSales15','BPizzaSales16','BPizzaSales17','BPizzaSales18','BPizzaSales19','BPizzaSales20','BPizzaSales21','BPizzaSales22','BPizzaSales23','BPizzaSales24','BPizzaSales1'],
  minMaxDeliveries: [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[3,8],[3,8],[3,8],[5,12],[5,12],[5,12],[6,11],[6,11],[6,11]],
  numberOfDeliveries: ['BDeliveries8','BDeliveries9','BDeliveries10','BDeliveries11','BDeliveries12','BDeliveries13','BDeliveries14','BDeliveries15','BDeliveries16','BDeliveries17','BDeliveries18','BDeliveries19','BDeliveries20','BDeliveries21','BDeliveries22','BDeliveries23','BDeliveries24','BDeliveries1'],
  recDriverNumber: ['BDrivers8','BDrivers9','BDrivers10','BDrivers11','BDrivers12','BDrivers13', 'BDrivers14','BDrivers14','BDrivers15','BDrivers16','BDrivers17','BDrivers18','BDrivers19','BDrivers20','BDrivers21','BDrivers22','BDrivers23','BDrivers24','BDrivers1']
}

//Beaverton Function to fill Table

function printDatainTable (obj) {
  for (i=0; i <obj.pizzaSales.length; i++){
    var tempID = document.getElementById(obj.pizzaSales[i]);
    var tempRandom = randomNumber(obj.minMaxPizza[i][0], obj.minMaxPizza[i][1]);
    tempID.textContent = tempRandom;

    var tempID2 = document.getElementById(obj.numberOfDeliveries[i]);
      if (tempRandom > obj.minMaxDeliveries[i][1]){
        var tempdeliver = randomNumber(obj.minMaxDeliveries[i][0], obj.minMaxDeliveries[i][1]);
        tempID2.textContent = tempdeliver;
      } else {
        var tempdeliver = randomNumber(obj.minMaxDeliveries[i][0],tempRandom);
        tempID2.textContent = tempdeliver;
      }

    var tempID3 = document.getElementById(obj.recDriverNumber[i]);
    var tempRandom3 = Math.ceil(tempdeliver/3);
    tempID3.textContent = tempRandom3;
  }
}

printDatainTable(Beaverton);

//Hillsboro Object
