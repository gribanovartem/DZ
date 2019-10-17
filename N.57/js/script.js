var clock1 = new Clock();
var view1 = new ClockViewDOM();
var containerElem1 = document.getElementById('DomNewYork');
var controller1 = new ClockControllerButtons();
clock1.start(view1);
view1.start(clock1, containerElem1, -7);
controller1.start(clock1, containerElem1);

var clock2 = new Clock();
var view2 = new ClockViewDOM();
var containerElem2 = document.getElementById('DomLondon');
var controller2 = new ClockControllerButtons();
clock2.start(view2);
view2.start(clock2, containerElem2, -2);
controller2.start(clock2, containerElem2);

var clock3 = new Clock();
var view3 = new ClockViewSVG();
var containerElem3 = document.getElementById('SvgBerlin');
var controller3 = new ClockControllerButtons();
clock3.start(view3);
view3.start(clock3, containerElem3, -1);
controller3.start(clock3, containerElem3);

var clock4 = new Clock();
var view4 = new ClockViewSVG();
var containerElem4 = document.getElementById('SvgMinsk');
var controller4 = new ClockControllerButtons();
clock4.start(view4);
view4.start(clock4, containerElem4, 0);
controller4.start(clock4, containerElem4);
