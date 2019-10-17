function ClockControllerButtons() {
    var myModel = null; // с какой моделью работаем
    var myField = null; // внутри какого элемента DOM наша вёрстка
    this.start=function(model,field) {
        myModel=model;
        myField=field;
        var startButton = myField.getElementsByClassName('start')[0];
        var stopButton = myField.getElementsByClassName('stop')[0];
        startButton.addEventListener('click',this.startClock);
        stopButton.addEventListener('click',this.stopClock);
    };
    this.startClock = function() {
        myModel.startClock();
    };
    this.stopClock = function() {
        myModel.stopClock();
    };
}