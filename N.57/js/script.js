var clock1 = new Clock();
var view1 = new ClockViewDOM();
var containerElem1 = document.getElementById('DomNewYork');
clock1.start(view1);
view1.start(clock1, containerElem1);