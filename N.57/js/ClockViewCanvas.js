function ClockViewCanvas() {
    var myModel = null; // с какой моделью работаем
    this.GMT = null;
    var myField = null; // внутри какого элемента DOM наша вёрстка
    var hourArrow = null;
    var minutesArrow = null;
    var secondsArrow = null;
    var clockRadius = 200; // Радиус циферблата
    this.start=function(model,field,GMT) {
        myModel=model;
        myField=field;
        this.GMT=GMT;
        myModel.setClock();
        // hourArrow = myField.getElementsByClassName('hourArrow')[0];
        // minutesArrow = myField.getElementsByClassName('minutesArrow')[0];
        // secondsArrow = myField.getElementsByClassName('secondsArrow')[0];
    };

    this.setBodyClock = function() {
        let cvs = document.createElement('canvas');
        cvs.setAttribute('class', 'canvas');
        cvs.setAttribute('width', clockRadius*2);
        cvs.setAttribute('height', clockRadius*2);
        myField.appendChild(cvs);
        this.update();
    };

    this.update = function() {
        this.time = myModel.getTime(this.GMT);
        this.currHours = this.time.hours>12?this.time.hours-12:this.time.hours;
        // hourArrow.style.transform = 'rotate(' + ((this.currHours+(this.time.minutes/60))*360/12) + 'deg)';
        // minutesArrow.style.transform = 'rotate(' + (this.time.minutes*360/60) + 'deg)';
        // secondsArrow.style.transform = 'rotate(' + ((this.time.milliseconds+(this.time.seconds*1000)+(this.time.minutes*60000))*360/60/1000) + 'deg)'
        let cvs = myField.getElementsByClassName('canvas')[0];
        let context = cvs.getContext('2d');
        context.beginPath();
        context.arc(clockRadius, clockRadius, clockRadius, Math.PI*2, false);
        context.fillStyle='#FCCA66';
        context.fill();

        let delta = Math.PI * 2 / 12;
        let angle = 0-delta*2;
        for(let i=0; i<12; i++) {
            let radiusHour = clockRadius/4/2; // Радиус зеленого круга с цифрой
            let hourPos = clockRadius*0.8; 
            let x = hourPos * Math.cos(angle) + clockRadius;
            let y = hourPos * Math.sin(angle) + clockRadius;
            context.beginPath();
            context.fillStyle='#8DBB76';
            context.arc(x, y, radiusHour, Math.PI*2, false);
            context.fill();
            angle += delta;

            context.font = 'normal bold 30px Arial';
            context.fillStyle = 'black';
            context.textAlign = 'center';
            context.textBaseline='middle';
            context.fillText(i+1, x, y);
        }
        let secondAngle = 6*this.time.seconds;
        let minuteAngle =6*(this.time.minutes+(1/60)*this.time.seconds);
        let hourAngle = 30*(this.currHours+(1/60)*this.time.minutes);
        let hourLength = clockRadius/2.3;
        let minuteLength = clockRadius/1.7;
        let secondLength = clockRadius/1.4;

        

        context.beginPath();
        context.fillStyle='black';
        context.lineWidth = clockRadius/25;
        context.lineCap='round';
        context.moveTo(clockRadius - hourLength*0.1*Math.cos(Math.PI/2 - hourAngle*(Math.PI/180)), 
        clockRadius + hourLength*0.1*Math.sin(Math.PI/2 - hourAngle*(Math.PI/180)));
        context.lineTo(clockRadius + hourLength*Math.cos(Math.PI/2 - hourAngle*(Math.PI/180)), 
        clockRadius - hourLength*Math.sin(Math.PI/2 - hourAngle*(Math.PI/180)));
        context.stroke();

        
        context.beginPath();
        context.fillStyle='black';
        context.lineWidth = clockRadius/35;
        context.lineCap='round';
        context.moveTo(clockRadius - minuteLength*0.1*Math.cos(Math.PI/2 - minuteAngle*(Math.PI/180)), 
        clockRadius + minuteLength*0.1*Math.sin(Math.PI/2 - minuteAngle*(Math.PI/180)));
        context.lineTo(clockRadius + minuteLength*Math.cos(Math.PI/2 - minuteAngle*(Math.PI/180)), 
        clockRadius - minuteLength*Math.sin(Math.PI/2 - minuteAngle*(Math.PI/180)));
        context.stroke();
        
        context.beginPath();
        context.fillStyle='black';
        context.lineWidth = clockRadius/50;
        context.lineCap='round';
        context.moveTo(clockRadius - secondLength*0.1*Math.cos(Math.PI/2 - secondAngle*(Math.PI/180)), 
        clockRadius + secondLength*0.1*Math.sin(Math.PI/2 - secondAngle*(Math.PI/180)));
        context.lineTo(clockRadius + secondLength*Math.cos(Math.PI/2 - secondAngle*(Math.PI/180)), 
        clockRadius - secondLength*Math.sin(Math.PI/2 - secondAngle*(Math.PI/180)));
        context.stroke();
        };
}