const clockRadius = 250; // Радиус циферблата
function setClockBody() {
    let clockFace = document.createElement('div');
    clockFace.style.backgroundColor = '#FCCA66';
    clockFace.style.width = (clockRadius*2)+'px';
    clockFace.style.height = (clockRadius*2)+'px';
    clockFace.style.borderRadius = '50%';
    clockFace.style.position = 'absolute';
    clockFace.style.top = '10%';
    clockFace.style.left = '50%';
    clockFace.style.marginLeft = -clockRadius + 'px';
    let timeNow = document.createElement('span');
    timeNow.style.position = 'absolute';
    timeNow.style.textAlign = 'center';
    timeNow.style.fontWeight = 'bold';
    timeNow.style.fontSize = clockRadius/8 + 'px';
    timeNow.style.width = clockRadius/2 + 'px';
    timeNow.style.top = '25%';
    timeNow.style.left = '50%';
    timeNow.style.marginLeft = -clockRadius/4 + 'px';
    clockFace.appendChild(timeNow);
    let center = document.createElement('div');
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

    document.body.appendChild(clockFace);
}
setClockBody();
setInterval(setTime,100);
function setTime() {
    let justNow = new Date();
    let hours = justNow.getHours();
    let minutes = justNow.getMinutes();
    let seconds = justNow.getSeconds();
    let timeNow = str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
    let clockSpan = document.querySelector('span');
    clockSpan.innerHTML = timeNow;
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