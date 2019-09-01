"use strict";
function setClock() {
    const clockRadius = 250;

    let justNow = new Date();
    let hours = justNow.getHours();
    hours = hours>12?hours-12:hours;
    let minutes = justNow.getMinutes();
    let seconds = justNow.getSeconds();
    let milliseconds = justNow.getMilliseconds();
    let timeNow = str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);

    let cvs = document.getElementById('CVA');
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
    let secondAngle = 6*seconds;
    let minuteAngle =6*(minutes+(1/60)*seconds);
    let hourAngle = 30*(hours+(1/60)*minutes);
    let hourLength = clockRadius/2.3;
    let minuteLength = clockRadius/1.7;
    let secondLength = clockRadius/1.4;
    

    context.font = 'normal bold 30px Arial';
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.textBaseline='middle';
    context.fillText(timeNow, clockRadius, clockRadius/2);

    

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
    
    
    setTimeout(setClock, 1010-milliseconds);
}
setClock();


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