
function drawImage() {
    const tableWidth =700;
    const tableHeight =450;
    var player1 = 0;
    var player2 = 0;
    let cvs = document.getElementById('CVA');
    let context = cvs.getContext('2d');
    var racketLeft = {
        posY : tableHeight/2 - tableHeight/4/2,
        posX : 0,
        speedY : 0,

        update : function() {
            context.fillStyle = '#09AA57';
            context.fillRect(this.posX, this.posY, tableWidth/60, tableHeight/4);
        }
    };
    var racketRight = {
        posY : tableHeight/2 - tableHeight/4/2,
        posX : tableWidth-tableWidth/60,
        speedY : 0,

        update : function() {
            context.fillStyle = '#191497';
            context.fillRect(this.posX, this.posY, tableWidth/60, tableHeight/4);
        }
    };
    let speedX1 = [4,-4];
    let speedY1 = [2,3,4,-2,-3,-4,];
    var ballH={
        posX : tableWidth/2,
        posY : tableHeight/2,
        speedX : speedX1[Math.floor(Math.random()*speedX1.length)],
        speedY : speedY1[Math.floor(Math.random()*speedY1.length)],
        width : tableWidth/20,
        height: tableWidth/20,

        update : function() {
            context.fillStyle = 'red';
            context.beginPath();
            context.arc(this.posX, this.posY, tableWidth/20/2, Math.PI*2, false);
            context.fill();
        }
    };
    context.fillStyle='#F0EE7E';
    context.strokeStyle='black';
    context.strokeRect(0, 0, cvs.width, cvs.height);
    context.fillRect(1, 1, cvs.width-2, cvs.height-2);

    racketLeft.update();
    racketRight.update();

    document.addEventListener('keydown', keydown, false);
    document.addEventListener('keyup', keyup, false);
    function keydown(EO) {
        EO=EO||window.event;
        EO.preventDefault();
        if(EO.code == 'ShiftLeft') {
            racketLeft.speedY = -5;
        }
        if(EO.code == 'ControlLeft') {
            racketLeft.speedY = 5;
        }
        if(EO.code == 'ArrowUp') {
            racketRight.speedY = -5;
        }
        if(EO.code == 'ArrowDown') {
            racketRight.speedY = 5;
        }
       
    }
    function keyup(EO) {
        EO=EO||window.event;
        EO.preventDefault();
        if(EO.code == 'ShiftLeft') {
            racketLeft.speedY = 0;
        }
        if(EO.code == 'ControlLeft') {
            racketLeft.speedY = 0;
        }
        if(EO.code == 'ArrowUp') {
            racketRight.speedY = 0;
        }
        if(EO.code == 'ArrowDown') {
            racketRight.speedY = 0;
        }
    }
    let start = document.getElementById('start');
    start.addEventListener('click', tick, false);
    function tick() {
        context.fillStyle='#F0EE7E';
        context.fillRect(1, 1, cvs.width-2, cvs.height-2);
        racketLeft.posY += racketLeft.speedY;
        racketRight.posY += racketRight.speedY;
        if(racketLeft.posY<0) {
            racketLeft.posY = 0;
        }
        if(racketLeft.posY>tableHeight-tableHeight/4) {
            racketLeft.posY = tableHeight-tableHeight/4;
        }
        if(racketRight.posY<0) {
            racketRight.posY = 0;
        }
        if(racketRight.posY>tableHeight-tableHeight/4) {
            racketRight.posY = tableHeight-tableHeight/4;
        }

        ballH.posX+=ballH.speedX;
        ballH.posY+=ballH.speedY;

        if(ballH.posX+ballH.width/2>tableWidth-tableWidth/60 && ballH.posY>racketRight.posY && ballH.posY<racketRight.posY+tableHeight/4) {
            ballH.speedX = -ballH.speedX;
            ballH.posX = tableWidth-tableWidth/60-ballH.width/2;
        }
        if(ballH.posX-ballH.width/2<tableWidth/60 && ballH.posY>racketLeft.posY && ballH.posY<racketLeft.posY+tableHeight/4) {
            ballH.speedX = -ballH.speedX;
            ballH.posX = tableWidth/60+ballH.width/2;
        }
        if (ballH.posX+ballH.width/2>tableWidth) {
            ballH.speedX = speedX1[Math.floor(Math.random()*speedX1.length)];
            ballH.speedY = speedY1[Math.floor(Math.random()*speedY1.length)];
            ballH.posX = tableWidth - ballH.width/2;
            player1++;
            score.textContent = player1+':'+player2;
            context.fillStyle='#F0EE7E';
            context.fillRect(1, 1, cvs.width-2, cvs.height-2);
            racketLeft.update();
            racketRight.update();
            ballH.update();
            ballH.posX = tableWidth/2 - tableWidth/20/2;
            ballH.posY = tableHeight/2 - tableWidth/20/2;
            return;
        }
        if (ballH.posX<ballH.width/2) {
            ballH.speedX = speedX1[Math.floor(Math.random()*speedX1.length)];
            ballH.speedY = speedY1[Math.floor(Math.random()*speedY1.length)];
            ballH.posX = ballH.width/2;
            player2++;
            score.textContent = player1+':'+player2;
            context.fillStyle='#F0EE7E';
            context.fillRect(1, 1, cvs.width-2, cvs.height-2);
            racketLeft.update();
            racketRight.update();
            ballH.update();
            ballH.posX = tableWidth/2 - tableWidth/20/2;
            ballH.posY = tableHeight/2 - tableWidth/20/2;
            return;
        }
        if (ballH.posY+ballH.height/2>tableHeight) {
            ballH.speedY=-ballH.speedY;
            ballH.posY=tableHeight-ballH.height/2;
        }
        if (ballH.posY<ballH.width/2) {
            ballH.speedY=-ballH.speedY;
            ballH.posY=ballH.width/2;
        }

        racketLeft.update();
        racketRight.update();
        ballH.update();
        requestAnimationFrame(tick);

        
    }
    
}
drawImage();