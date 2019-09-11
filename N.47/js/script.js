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
    racketLeft.setAttribute("id","racketRight");
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

    
}
setTennis();