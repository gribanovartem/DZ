const clockRadius = 250; // Радиус циферблата

function setClockBody() {
    let clockFace = document.createElement('div'); // Сам циферблат
    clockFace.style.backgroundColor = '#FCCA66';
    clockFace.style.width = (clockRadius*2)+'px';
    clockFace.style.height = (clockRadius*2)+'px';
    clockFace.style.borderRadius = '50%';
    clockFace.style.position = 'absolute';
    clockFace.style.top = '10%';
    clockFace.style.left = '50%';
    clockFace.style.marginLeft = -clockRadius + 'px';
    
    let timeNow = document.createElement('span'); // Цифровое время 
    timeNow.style.position = 'absolute';
    timeNow.style.textAlign = 'center';
    timeNow.style.fontWeight = 'bold';
    timeNow.style.fontSize = clockRadius/8 + 'px';
    timeNow.style.width = clockRadius/2 + 'px';
    timeNow.style.top = '25%';
    timeNow.style.left = '50%';
    timeNow.style.marginLeft = -clockRadius/4 + 'px';
    clockFace.appendChild(timeNow);
    
    let center = document.createElement('div'); // Точка в центре циферблата
    center.style.position = 'absolute';
    center.style.top = clockRadius+'px';
    center.style.left = clockRadius+'px';
    clockFace.appendChild(center);

    let delta = Math.PI * 2 / 12;
    let angle = 0-delta*2;
    for(let i=0; i<12; i++) {
        let hour = document.createElement('span');
        hour.style.position = 'absolute';
        let radiusHour = clockRadius/4/2; // Радиус зеленого круга с цифрой
        let hourPos = clockRadius*0.8; 
        hour.style.top = hourPos * Math.sin(angle)-radiusHour + 'px';
        hour.style.left = hourPos * Math.cos(angle)-radiusHour + 'px';
        hour.style.width = (clockRadius/4)+'px';
        hour.style.height = (clockRadius/4)+'px';
        hour.style.backgroundColor = '#8DBB76';
        hour.style.borderRadius = '50%';
        hour.innerHTML = i+1;
        hour.style.fontSize = clockRadius/8 + 'px';
        hour.style.fontWeight = 'bold';
        hour.style.textAlign = 'center';
        hour.style.lineHeight = (clockRadius/4)+'px';
        angle += delta;
        center.appendChild(hour);
    }

    let hourArrow = document.createElement('span'); // Часовая стрелка
    hourArrow.setAttribute('id','hourArrow');
    hourArrow.style.position = 'absolute';
    hourArrow.style.top = -clockRadius/2*0.9 + 'px';
    hourArrow.style.left = -clockRadius/25/2 + 'px';
    hourArrow.style.width = clockRadius/25 + 'px';
    hourArrow.style.height = clockRadius/2 + 'px';
    hourArrow.style.borderRadius = '1em';
    hourArrow.style.backgroundColor = '#000';
    hourArrow.style.transformOrigin = '50% 90%';
    center.appendChild(hourArrow);

    let minutesArrow = document.createElement('span'); // Минутная стрелка
    minutesArrow.setAttribute('id','minutesArrow');
    minutesArrow.style.position = 'absolute';
    minutesArrow.style.top = -clockRadius/1.5*0.9 + 'px';
    minutesArrow.style.left = -clockRadius/35/2 + 'px';
    minutesArrow.style.width = clockRadius/35 + 'px';
    minutesArrow.style.height = clockRadius/1.5 + 'px';
    minutesArrow.style.borderRadius = '1em';
    minutesArrow.style.backgroundColor = '#000';
    minutesArrow.style.transformOrigin = '50% 90%';
    center.appendChild(minutesArrow);

    let secondsArrow =document.createElement('span'); // Секундная стрелка
    secondsArrow.setAttribute('id','secondsArrow');
    secondsArrow.style.position = 'absolute';
    secondsArrow.style.top = -clockRadius/1.2*0.9 + 'px';
    secondsArrow.style.left = -clockRadius/50/2 + 'px';
    secondsArrow.style.width = clockRadius/50 + 'px';
    secondsArrow.style.height = clockRadius/1.2 + 'px';
    secondsArrow.style.borderRadius = '1em';
    secondsArrow.style.backgroundColor = '#000';
    secondsArrow.style.transformOrigin = '50% 90%';
    center.appendChild(secondsArrow);

    document.body.appendChild(clockFace);
}
setClockBody();
setTime();
setInterval(setTime,1000);

function setTime() {
    let justNow = new Date();
    let hours = justNow.getHours();
    let minutes = justNow.getMinutes();
    let seconds = justNow.getSeconds();
    let milliseconds = justNow.getMilliseconds();
    let timeNow = str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
    let clockSpan = document.querySelector('span');
    clockSpan.innerHTML = timeNow;
    let hourArrow = document.getElementById('hourArrow');
    let currHours = hours>12?hours-12:hours;
    hourArrow.style.transform = 'rotate(' + ((currHours+(minutes/60))*360/12) + 'deg)';
    let minutesArrow = document.getElementById('minutesArrow');
    minutesArrow.style.transform = 'rotate(' + (minutes*360/60) + 'deg)';
    let secondsArrow = document.getElementById('secondsArrow');
    secondsArrow.style.transform = 'rotate(' + ((milliseconds+(seconds*1000)+(minutes*60000))*360/60/1000) + 'deg)';
    secondsArrow.style.transition = 'all 1s linear';
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