function Clock() {
    this.getTime = function(GMT) {
        this.GMT = GMT;
        this.view = null;
        this.timer = null;
        this.justNow = new Date();
        this.hours = this.justNow.getHours() + this.GMT;
        this.hours = this.hours>12?this.hours-12:this.hours;
        this.minutes = this.justNow.getMinutes();
        this.seconds = this.justNow.getSeconds();
        this.milliseconds = this.justNow.getMilliseconds();
    };

    this.start=function(view) {
        myView=view;
        this.timer = setTimeout(this.updateView, 1010-this.milliseconds);
    };

    this.updateView=function() {
        if ( myView )
            myView.update();
    };

    // this.start = function() {
    //     this.timer = setTimeout(this.updateView, 1010-milliseconds);
    // };
    this.stop = function() {
        this.timer = null;
    };
}