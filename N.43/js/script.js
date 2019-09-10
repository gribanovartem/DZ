function setTennis() {
    const tableWidth =700;
    const tableHeight =450;
    var player1 = 0;
    var player2 = 0;
    const tableMargin = 62.75;
    let table = document.createElement('div');
    table.classList.add('table');
    table.style.width = tableWidth + 'px';
    table.style.height = tableHeight + 'px';
    document.body.appendChild(table);

    let racketLeft = document.createElement('div');
    racketLeft.setAttribute('id', 'racketLeft');
    racketLeft.style.width = tableWidth/60 + 'px';
    racketLeft.style.height = tableHeight/4 + 'px';
    racketLeft.style.position = 'absolute';
    racketLeft.style.top = tableHeight/2 - tableHeight/4/2 + 'px';
    table.appendChild(racketLeft);

    var racketLeft1 = {
        posY : tableHeight/2 - tableHeight/4/2,
        speedY : 0,

        update : function() {
            let racketLeft=document.getElementById('racketLeft');
            racketLeft.style.left=this.posX+"px";
            racketLeft.style.top=this.posY+"px";
        }
    };
    var racketRight1 = {
        posY : tableHeight/2 - tableHeight/4/2,
        speedY : 0,

        update : function() {
            let racketRight=document.getElementById('racketRight');
            racketRight.style.left=this.posX+"px";
            racketRight.style.top=this.posY+"px";
        }
    };

    let racketRight = document.createElement('div');
    racketRight.setAttribute('id', 'racketRight');
    racketRight.style.width = tableWidth/60 + 'px';
    racketRight.style.height = tableHeight/4 + 'px';
    racketRight.style.position = 'absolute';
    racketRight.style.top = tableHeight/2 - tableHeight/4/2 + 'px';
    racketRight.style.left = tableWidth - tableWidth/60+1 + 'px';
    table.appendChild(racketRight);

    let ball = document.createElement('div');
    ball.setAttribute('id', 'ball');
    ball.style.width = tableWidth/20 + 'px';
    ball.style.height = tableWidth/20 + 'px';
    ball.style.position = 'absolute';
    ball.style.top = tableHeight/2 - tableWidth/20/2 + 'px';
    ball.style.left = tableWidth/2 - tableWidth/20/2 + 'px';
    table.appendChild(ball);

    document.addEventListener('keydown', keydown, false);
    document.addEventListener('keyup', keyup, false);
    function keydown(EO) {
        EO=EO||window.event;
        EO.preventDefault();
        if(EO.code == 'ShiftLeft') {
            racketLeft1.speedY = -5;
        }
        if(EO.code == 'ControlLeft') {
            racketLeft1.speedY = 5;
        }
        if(EO.code == 'ArrowUp') {
            racketRight1.speedY = -5;
        }
        if(EO.code == 'ArrowDown') {
            racketRight1.speedY = 5;
        }
       
    }
    function keyup(EO) {
        EO=EO||window.event;
        EO.preventDefault();
        if(EO.code == 'ShiftLeft') {
            racketLeft1.speedY = 0;
        }
        if(EO.code == 'ControlLeft') {
            racketLeft1.speedY = 0;
        }
        if(EO.code == 'ArrowUp') {
            racketRight1.speedY = 0;
        }
        if(EO.code == 'ArrowDown') {
            racketRight1.speedY = 0;
        }
    }
    let start = document.getElementById('start');
    start.addEventListener('click', tick, false);
    let speedX1 = [4,-4];
    let speedY1 = [2,3,4,-2,-3,-4,];
    
    var ballH={
        posX : tableWidth/2 - tableWidth/20/2,
        posY : tableHeight/2 - tableWidth/20/2,
        speedX : speedX1[Math.floor(Math.random()*speedX1.length)],
        speedY : speedY1[Math.floor(Math.random()*speedY1.length)],
        width : tableWidth/20,
        height: tableWidth/20,
    
        update : function() {
            var ballElem=document.getElementById('ball');
            ballElem.style.left=this.posX+"px";
            ballElem.style.top=this.posY+"px";
        }
    };
    let score = document.getElementById('score');
    function tick() {
        ballH.update();
        let leftPos = getElementPos(racketLeft);
        let rightPos = getElementPos(racketRight);
        ballH.posX+=ballH.speedX;
        ballH.posY+=ballH.speedY;
        if(ballH.posX+ballH.width>tableWidth-tableWidth/60 && ballH.posY+ballH.height/2>rightPos.top && ballH.posY+ballH.height<rightPos.top+tableHeight/4+ballH.height/2) {
            ballH.speedX = -ballH.speedX;
            ballH.posX = tableWidth-tableWidth/60-ballH.width;
        }
        if(ballH.posX<tableWidth/60 && ballH.posY+ballH.height/2>leftPos.top && ballH.posY+ballH.height<leftPos.top+tableHeight/4+ballH.height/2) {
            ballH.speedX = -ballH.speedX;
            ballH.posX = tableWidth/60;
        }
        if (ballH.posX+ballH.width>tableWidth) {
            ballH.speedX = speedX1[Math.floor(Math.random()*speedX1.length)];
            ballH.speedY = speedY1[Math.floor(Math.random()*speedY1.length)];
            ballH.posX = tableWidth/2 - tableWidth/20/2;
            ballH.posY = tableHeight/2 - tableWidth/20/2;
            player1++;
            score.textContent = player1+':'+player2;
            return;
        }
        if (ballH.posX<0) {
            ballH.speedX = speedX1[Math.floor(Math.random()*speedX1.length)];
            ballH.speedY = speedY1[Math.floor(Math.random()*speedY1.length)];
            ballH.posX = tableWidth/2 - tableWidth/20/2;
            ballH.posY = tableHeight/2 - tableWidth/20/2;
            player2++;
            score.textContent = player1+':'+player2;
            return;
        }
        if (ballH.posY+ballH.height>tableHeight) {
            ballH.speedY=-ballH.speedY;
            ballH.posY=tableHeight-ballH.height;
        }
        if (ballH.posY<0) {
            ballH.speedY=-ballH.speedY;
            ballH.posY=0;
        }
        racketLeft1.posY += racketLeft1.speedY;
        racketRight1.posY += racketRight1.speedY;
        if(racketLeft1.posY<0) {
            racketLeft1.posY = 0;
        }
        if(racketLeft1.posY>tableHeight-tableHeight/4) {
            racketLeft1.posY = tableHeight-tableHeight/4;
        }
        if(racketRight1.posY<0) {
            racketRight1.posY = 0;
        }
        if(racketRight1.posY>tableHeight-tableHeight/4) {
            racketRight1.posY = tableHeight-tableHeight/4;
        }
        
        racketLeft1.update();
        racketRight1.update();
        ballH.update();
        requestAnimationFrame(tick);
    }
    function getElementPos(elem) {
        let box = elem.getBoundingClientRect();
      
        return {
          top: box.top-tableMargin,
          left: box.left-tableMargin
        };
    }
}
setTennis();
  
