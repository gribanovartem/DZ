function Clock() {
    var myView = null;
    this.timer = null;
    this.GMT = null;
    this.getTime = function(GMT) {
        this.GMT = GMT;
        this.justNow = new Date();
        this.hours = this.justNow.getHours() + this.GMT;
        this.minutes = this.justNow.getMinutes();
        this.seconds = this.justNow.getSeconds();
        this.milliseconds = this.justNow.getMilliseconds();
        return {
            GMT:this.GMT,
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds,
            milliseconds: this.milliseconds
        };
    };

    this.start=function(view) {
        myView=view;
        this.timer = setInterval( ()=> { this.updateView(); }, 100);
    };
    this.setClock = function() {
        if ( myView ) {
            myView.setBodyClock();
        }
    };
    this.updateView=function() {
        if ( myView )
        myView.update();
    };
    this.startClock=function() {
        this.timer = setInterval( ()=> { this.updateView(); }, 100);
    };
    this.stopClock = function() {
        clearInterval(this.timer);
    };
}