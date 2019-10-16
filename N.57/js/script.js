var clock1 = new Clock();
var view1 = new ClockViewDOM();
var containerElem1 = document.getElementById('DomNewYork');
clock1.start(view1);
view1.start(clock1, containerElem1, -7);


var clock2 = new Clock();
var view2 = new ClockViewDOM();
var containerElem2 = document.getElementById('DomLondon');
clock2.start(view2);
view2.start(clock2, containerElem2, -2);
