function ClockViewDOM() {
    var myModel = null; // с какой моделью работаем
    this.GMT = null;
    var myField = null; // внутри какого элемента DOM наша вёрстка
    var hourArrow = null;
    var minutesArrow = null;
    var secondsArrow = null;
    this.clockRadius = 200; // Радиус циферблата
    this.start=function(model,field,GMT) {
        myModel=model;
        myField=field;
        
        this.GMT=GMT;
        myModel.setClock();
        hourArrow = myField.getElementsByClassName('hourArrow')[0];
        minutesArrow = myField.getElementsByClassName('minutesArrow')[0];
        secondsArrow = myField.getElementsByClassName('secondsArrow')[0];
    };

    this.setBodyClock = function() {
        this.clockFace = document.createElement('div'); // Сам циферблат
        this.clockFace.style.backgroundColor = '#FCCA66';
        this.clockFace.style.width = (this.clockRadius*2)+'px';
        this.clockFace.style.height = (this.clockRadius*2)+'px';
        this.clockFace.style.borderRadius = '50%';
        
        this.center = document.createElement('div'); // Точка в центре циферблата
        this.center.style.position = 'absolute';
        this.center.style.top = this.clockRadius+'px';
        this.center.style.left = this.clockRadius+'px';
        myField.appendChild(this.clockFace);
        this.clockFace.appendChild(this.center);

        this.delta = Math.PI * 2 / 12;
        this.angle = 0-this.delta*2;
        for(let i=0; i<12; i++) {
            this.hour = document.createElement('span');
            this.hour.style.position = 'absolute';
            this.radiusHour = this.clockRadius/4/2; // Радиус зеленого круга с цифрой
            this.hourPos = this.clockRadius*0.8; 
            this.hour.style.top = this.hourPos * Math.sin(this.angle)-this.radiusHour + 'px';
            this.hour.style.left = this.hourPos * Math.cos(this.angle)-this.radiusHour + 'px';
            this.hour.style.width = (this.clockRadius/4)+'px';
            this.hour.style.height = (this.clockRadius/4)+'px';
            this.hour.style.backgroundColor = '#8DBB76';
            this.hour.style.borderRadius = '50%';
            this.hour.innerHTML = i+1;
            this.hour.style.fontSize = this.clockRadius/8 + 'px';
            this.hour.style.fontWeight = 'bold';
            this.hour.style.textAlign = 'center';
            this.hour.style.lineHeight = (this.clockRadius/4)+'px';
            this.angle += this.delta;
            this.center.appendChild(this.hour);
        }

        this.hourArrow = document.createElement('span'); // Часовая стрелка
        this.hourArrow.setAttribute('class','hourArrow');
        this.hourArrow.style.position = 'absolute';
        this.hourArrow.style.top = -this.clockRadius/2*0.9 + 'px';
        this.hourArrow.style.left = -this.clockRadius/25/2 + 'px';
        this.hourArrow.style.width = this.clockRadius/25 + 'px';
        this.hourArrow.style.height = this.clockRadius/2 + 'px';
        this.hourArrow.style.borderRadius = '1em';
        this.hourArrow.style.backgroundColor = '#000';
        this.hourArrow.style.transformOrigin = '50% 90%';
        this.center.appendChild(this.hourArrow);

        this.minutesArrow = document.createElement('span'); // Минутная стрелка
        this.minutesArrow.setAttribute('class','minutesArrow');
        this.minutesArrow.style.position = 'absolute';
        this.minutesArrow.style.top = -this.clockRadius/1.5*0.9 + 'px';
        this.minutesArrow.style.left = -this.clockRadius/35/2 + 'px';
        this.minutesArrow.style.width = this.clockRadius/35 + 'px';
        this.minutesArrow.style.height = this.clockRadius/1.5 + 'px';
        this.minutesArrow.style.borderRadius = '1em';
        this.minutesArrow.style.backgroundColor = '#000';
        this.minutesArrow.style.transformOrigin = '50% 90%';
        this.center.appendChild(this.minutesArrow);

        this.secondsArrow =document.createElement('span'); // Секундная стрелка
        this.secondsArrow.setAttribute('class','secondsArrow');
        this.secondsArrow.style.position = 'absolute';
        this.secondsArrow.style.top = -this.clockRadius/1.2*0.9 + 'px';
        this.secondsArrow.style.left = -this.clockRadius/50/2 + 'px';
        this.secondsArrow.style.width = this.clockRadius/50 + 'px';
        this.secondsArrow.style.height = this.clockRadius/1.2 + 'px';
        this.secondsArrow.style.borderRadius = '1em';
        this.secondsArrow.style.backgroundColor = '#000';
        this.secondsArrow.style.transformOrigin = '50% 90%';
        this.center.appendChild(this.secondsArrow);

    };
    this.update = function() {
        this.time = myModel.getTime(this.GMT);
        this.currHours = this.time.hours>12?this.time.hours-12:this.time.hours;
        hourArrow.style.transform = 'rotate(' + ((this.currHours+(this.time.minutes/60))*360/12) + 'deg)';
        minutesArrow.style.transform = 'rotate(' + (this.time.minutes*360/60) + 'deg)';
        secondsArrow.style.transform = 'rotate(' + ((this.time.milliseconds+(this.time.seconds*1000)+(this.time.minutes*60000))*360/60/1000) + 'deg)';
    };

}