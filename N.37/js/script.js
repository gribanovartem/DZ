const clockRadius = 250; // Радиус циферблата
function setClockBody() {
    let SVGElem=document.getElementById("clock");
    SVGElem.style.display = 'block';
    SVGElem.style.margin = '0 auto';
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

    let textClock = document.createElementNS("http://www.w3.org/2000/svg",'text');
    textClock.classList.add('textClock');
    textClock.setAttribute("y", clockRadius/2);
    textClock.setAttribute("x", clockRadius);
    textClock.setAttribute('text-anchor', 'middle');
    textClock.style.fontSize = clockRadius/8 +'px';
    textClock.style.fontWeight = 'bold';
    SVGElem.appendChild(textClock);

    let hourArrow = document.createElementNS("http://www.w3.org/2000/svg",'line');
    hourArrow.setAttribute('id', 'hourArrow');
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
    minutesArrow.setAttribute('id', 'minutesArrow');
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
    secondsArrow.setAttribute('id', 'secondsArrow');
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
}
setClockBody();

setTime();

function setTime() {
    let justNow = new Date();
    let hours = justNow.getHours();
    let minutes = justNow.getMinutes();
    let seconds = justNow.getSeconds();
    let milliseconds = justNow.getMilliseconds();
    let timeNow = str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
    let textClock = document.getElementsByClassName('textClock');
    textClock[0].textContent = timeNow;
    let hourArrow = document.getElementById('hourArrow');
    let currHours = hours>12?hours-12:hours;
    hourArrow.style.transform = 'rotate(' + ((currHours+(minutes/60))*360/12) + 'deg)';
    let minutesArrow = document.getElementById('minutesArrow');
    minutesArrow.style.transform = 'rotate(' + (minutes*360/60) + 'deg)';
    let secondsArrow = document.getElementById('secondsArrow');
    secondsArrow.style.transform = 'rotate(' + (((seconds*1000)+(minutes*60000))*360/60/1000) + 'deg)';
    setTimeout(setTime, 1010-milliseconds);
}
function formatDateTime() {
    var hours=this.getHours();
    var minutes=this.getMinutes();
    var seconds=this.getSeconds();
    return str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
}
function str0l(val,len) {
    var strVal=val.toString();
    while ( strVal.length < len )
        strVal='0'+strVal;
    return strVal;
}