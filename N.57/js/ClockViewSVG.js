function ClockViewSVG() {
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
        hourArrow = myField.getElementsByClassName('hourArrow')[0];
        minutesArrow = myField.getElementsByClassName('minutesArrow')[0];
        secondsArrow = myField.getElementsByClassName('secondsArrow')[0];
    };
    this.setBodyClock = function() {
        let SVGElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        SVGElem.setAttribute("width", clockRadius*2);
        SVGElem.setAttribute("height", clockRadius*2);
        myField.appendChild(SVGElem);
        let circle=document.createElementNS("http://www.w3.org/2000/svg",'ellipse');
        circle.setAttribute("fill","#FCCA66");
        circle.setAttribute("rx",clockRadius);
        circle.setAttribute("ry",clockRadius);
        circle.setAttribute("cx",clockRadius);
        circle.setAttribute("cy",clockRadius);
        SVGElem.appendChild(circle);

        let delta = Math.PI * 2 / 12;
        let angle = 0-delta*2;
        for(let i=0; i<12; i++) {
            let hour = document.createElementNS("http://www.w3.org/2000/svg",'ellipse');
            let hourPos = clockRadius*0.8; 
            hour.setAttribute("cy", hourPos * Math.sin(angle)+clockRadius);
            hour.setAttribute("cx", hourPos * Math.cos(angle)+clockRadius);
            hour.setAttribute("rx",clockRadius/8);
            hour.setAttribute("ry",clockRadius/8);
            hour.setAttribute("fill","#8DBB76");

            let text = document.createElementNS("http://www.w3.org/2000/svg",'text');
            text.setAttribute("y", hourPos * Math.sin(angle)+clockRadius);
            text.setAttribute("x", hourPos * Math.cos(angle)+clockRadius);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'central');
            text.textContent = i+1;
            text.style.fontSize = clockRadius/8 +'px';
            text.style.fontWeight = 'bold';
            angle += delta;
            SVGElem.appendChild(hour);
            SVGElem.appendChild(text);
        }

        let hourArrow = document.createElementNS("http://www.w3.org/2000/svg",'line');
        hourArrow.setAttribute('class', 'hourArrow');
        hourArrow.setAttribute('x1', clockRadius);
        hourArrow.setAttribute('y1', clockRadius+clockRadius/2*0.1);
        hourArrow.setAttribute('x2', clockRadius);
        hourArrow.setAttribute('y2', clockRadius/2+clockRadius/2*0.1);
        hourArrow.setAttribute('stroke', 'black');
        hourArrow.setAttribute('stroke-width', clockRadius/25);
        hourArrow.setAttribute('stroke-linecap', 'round');
        hourArrow.style.transformBox = 'fill-box';
        hourArrow.style.transformOrigin = '50% 90%';
        SVGElem.appendChild(hourArrow);

        let minutesArrow = document.createElementNS("http://www.w3.org/2000/svg",'line');
        minutesArrow.setAttribute('class', 'minutesArrow');
        minutesArrow.setAttribute('x1', clockRadius);
        minutesArrow.setAttribute('y1', clockRadius+clockRadius/1.5*0.1);
        minutesArrow.setAttribute('x2', clockRadius);
        minutesArrow.setAttribute('y2', clockRadius-clockRadius/1.5+clockRadius/1.5*0.1);
        minutesArrow.setAttribute('stroke', 'black');
        minutesArrow.setAttribute('stroke-width', clockRadius/35);
        minutesArrow.setAttribute('stroke-linecap', 'round');
        minutesArrow.style.transformBox = 'fill-box';
        minutesArrow.style.transformOrigin = '50% 90%';
        SVGElem.appendChild(minutesArrow);

        let secondsArrow = document.createElementNS("http://www.w3.org/2000/svg",'line');
        secondsArrow.setAttribute('class', 'secondsArrow');
        secondsArrow.setAttribute('x1', clockRadius);
        secondsArrow.setAttribute('y1', clockRadius+clockRadius/1.2*0.1);
        secondsArrow.setAttribute('x2', clockRadius);
        secondsArrow.setAttribute('y2', clockRadius-clockRadius/1.2+clockRadius/1.2*0.1);
        secondsArrow.setAttribute('stroke', 'black');
        secondsArrow.setAttribute('stroke-width', clockRadius/50);
        secondsArrow.setAttribute('stroke-linecap', 'round');
        secondsArrow.style.transformBox = 'fill-box';
        secondsArrow.style.transformOrigin = '50% 90%';
        SVGElem.appendChild(secondsArrow);
    };
    this.update = function() {
        this.time = myModel.getTime(this.GMT);
        this.currHours = this.time.hours>12?this.time.hours-12:this.time.hours;
        hourArrow.style.transform = 'rotate(' + ((this.currHours+(this.time.minutes/60))*360/12) + 'deg)';
        minutesArrow.style.transform = 'rotate(' + (this.time.minutes*360/60) + 'deg)';
        secondsArrow.style.transform = 'rotate(' + ((this.time.milliseconds+(this.time.seconds*1000)+(this.time.minutes*60000))*360/60/1000) + 'deg)';
    };
}