function setTennis() {
    const tableWidth =700;
    const tableHeight =450;
    var player1 = 0;
    var player2 = 0;
    let SVGElem=document.getElementById("table");

    let table=document.createElementNS("http://www.w3.org/2000/svg",'rect');
    table.setAttribute("fill","#F0EE7E");
    table.setAttribute("x","0");
    table.setAttribute("y","0");
    table.setAttribute("width",tableWidth);
    table.setAttribute("height",tableHeight);
    table.setAttribute("stroke","black");
    SVGElem.appendChild(table);

    let racketLeft = document.createElementNS("http://www.w3.org/2000/svg",'rect');
    racketLeft.setAttribute("id","racketLeft");
    racketLeft.setAttribute("fill","#09AA57");
    racketLeft.setAttribute("x","0");
    racketLeft.setAttribute("y",tableHeight/2-tableHeight/4/2);
    racketLeft.setAttribute("width",tableWidth/60);
    racketLeft.setAttribute("height",tableHeight/4);
    SVGElem.appendChild(racketLeft);

    let racketRight = document.createElementNS("http://www.w3.org/2000/svg",'rect');
    racketRight.setAttribute("id","racketRight");
    racketRight.setAttribute("fill","#191497");
    racketRight.setAttribute("x",tableWidth-tableWidth/60);
    racketRight.setAttribute("y",tableHeight/2-tableHeight/4/2);
    racketRight.setAttribute("width",tableWidth/60);
    racketRight.setAttribute("height",tableHeight/4);
    SVGElem.appendChild(racketRight);

    let ball = document.createElementNS("http://www.w3.org/2000/svg",'circle');
    ball.setAttribute("id","ball");
    ball.setAttribute("fill","red");
    ball.setAttribute("r",tableWidth/40);
    ball.setAttribute("cx",tableWidth/2);
    ball.setAttribute("cy",tableHeight/2);
    SVGElem.appendChild(ball);

    var racketLeft1 = {
        posY : tableHeight/2 - tableHeight/4/2,
        speedY : 0,

        update : function() {
            let racketLeft=document.getElementById('racketLeft');
            racketLeft.setAttribute("y", this.posY);
        }
    };
    var racketRight1 = {
        posY : tableHeight/2 - tableHeight/4/2,
        speedY : 0,

        update : function() {
            let racketRight=document.getElementById('racketRight');
            racketRight.setAttribute("y", this.posY);
        }
    };

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
        posX : tableWidth/2,
        posY : tableHeight/2,
        speedX : speedX1[Math.floor(Math.random()*speedX1.length)],
        speedY : speedY1[Math.floor(Math.random()*speedY1.length)],
        width : tableWidth/20,
        height: tableWidth/20,
    
        update : function() {
            var ballElem=document.getElementById('ball');
            ballElem.setAttribute("cx", this.posX);
            ballElem.setAttribute("cy", this.posY);
        }
    };
    let score = document.getElementById('score');
    function tick() {
        ballH.update();
        ballH.posX+=ballH.speedX;
        ballH.posY+=ballH.speedY;

        if(ballH.posX+ballH.width/2>tableWidth-tableWidth/60 && ballH.posY>racketRight1.posY && ballH.posY<racketRight1.posY+tableHeight/4) {
            ballH.speedX = -ballH.speedX;
            ballH.posX = tableWidth-tableWidth/60-ballH.width/2;
        }
        if(ballH.posX-ballH.width/2<tableWidth/60 && ballH.posY>racketLeft1.posY && ballH.posY<racketLeft1.posY+tableHeight/4) {
            ballH.speedX = -ballH.speedX;
            ballH.posX = tableWidth/60+ballH.width/2;
        }
        if (ballH.posX+ballH.width/2>tableWidth) {
            ballH.speedX = speedX1[Math.floor(Math.random()*speedX1.length)];
            ballH.speedY = speedY1[Math.floor(Math.random()*speedY1.length)];
            ballH.posX = tableWidth/2 - tableWidth/20/2;
            ballH.posY = tableHeight/2 - tableWidth/20/2;
            player1++;
            score.textContent = player1+':'+player2;
            return;
        }
        if (ballH.posX<ballH.width/2) {
            ballH.speedX = speedX1[Math.floor(Math.random()*speedX1.length)];
            ballH.speedY = speedY1[Math.floor(Math.random()*speedY1.length)];
            ballH.posX = tableWidth/2 - tableWidth/20/2;
            ballH.posY = tableHeight/2 - tableWidth/20/2;
            player2++;
            score.textContent = player1+':'+player2;
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
    

    
}
setTennis();