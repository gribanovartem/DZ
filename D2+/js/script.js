function move() {
    let img = document.querySelector('img');
    document.addEventListener('mousemove', mousemove, false);
    img.addEventListener('mousedown', mousedown, false);
    img.addEventListener('mouseup', mouseup, false);
    var dragImg;
    var clickX;
    var clickY;
    function mousedown(EO) {
        EO=EO||window.event;
        EO.preventDefault();
        let imgPos = getElementPos(this);
        dragImg  = this;
        document.body.appendChild(this);
        clickX=Math.round(EO.pageX-imgPos.left);
        clickY=Math.round(EO.pageY-imgPos.top);
    }
    function mousemove(EO) {
        EO=EO||window.event;
        EO.preventDefault();
        if(dragImg) {
            dragImg.style.cursor = 'move';
            let imgPos1 = getElementPos(dragImg);
            let resize = document.getElementsByClassName('resize');
            var clickX1=EO.pageX-imgPos1.left;
            var clickY1=EO.pageY-imgPos1.top;
            dragImg.style.top = clickY1+imgPos1.top-clickY+'px';
            dragImg.style.left = clickX1+imgPos1.left-clickX+'px';
            for(let i=0; i<resize.length; i++) {
                let resizePos = getElementPos(resize[i]);
                resize[i].style.top = clickY1+resizePos.top-clickY+'px';
                resize[i].style.left = clickX1+resizePos.left-clickX+'px';
            }
        }
    }
    
    function mouseup(EO) {
        EO=EO||window.event;
        EO.preventDefault();
        dragImg.style.cursor = 'default';
        dragImg = null;
        
    }
    
}
function getElementPos(elem) {
    var bbox=elem.getBoundingClientRect();
    return {
        left: bbox.left+window.pageXOffset,
        top: bbox.top+window.pageYOffset
    };
}
move();
function setResizeElem() {
    let div = document.querySelector('div');
    let img = document.querySelector('img');
    let imgPos = getElementPos(img);
    for(let i=0; i<8; i++) {
        let resizeElem = document.createElement('div');
        resizeElem.classList.add('resize');
        resizeElem.style.width = '10px';
        resizeElem.style.height = '10px';
        resizeElem.style.zIndex = '10';
        resizeElem.style.border = '1px solid black';
        resizeElem.style.position = 'absolute';
        div.appendChild(resizeElem);
    }
    let imgOfW = img.offsetWidth;
    let imgOfH = img.offsetHeight;
    let resize = document.getElementsByClassName('resize');
    resize[0].style.left = imgPos.left + 'px';
    resize[0].style.top = imgPos.top + 'px';
    resize[1].style.left = imgPos.left + imgOfW/2 - 5 + 'px';
    resize[1].style.top = imgPos.top + 'px';
    resize[2].style.left = imgPos.left + imgOfW - 10 + 'px';
    resize[2].style.top = imgPos.top + 'px';
    resize[3].style.left = imgPos.left + imgOfW - 10 + 'px';
    resize[3].style.top = imgPos.top + imgOfH/2 - 5 + 'px';
    resize[4].style.left = imgPos.left + imgOfW - 10 + 'px';
    resize[4].style.top = imgPos.top + imgOfH - 15 + 'px';
    resize[5].style.left = imgPos.left + imgOfW/2 - 5 + 'px';
    resize[5].style.top = imgPos.top + imgOfH - 15 + 'px';
    resize[6].style.left = imgPos.left + 'px';
    resize[6].style.top = imgPos.top + imgOfH - 15 + 'px';
    resize[7].style.left = imgPos.left + 'px';
    resize[7].style.top = imgPos.top + imgOfH/2 - 5 + 'px'; 
}
setResizeElem();
var dragImg;
var clickX;
var clickY;
let resizeItems = document.getElementsByClassName('resize');
for(let i=0; i<8; i++) {
    resizeItems[i].addEventListener('mousedown', mousedown, false);
    resizeItems[i].addEventListener('mouseup', mouseup, false);
}
resizeItems[1].addEventListener('mousemove', resize1, false);
resizeItems[5].addEventListener('mousemove', resize5, false);

function resize1(EO) {
    EO=EO||window.event;
    EO.preventDefault();
    if(dragImg) {
        let img = document.querySelector('img');
        dragImg.style.cursor = 'move';
        let imgPos1 = getElementPos(dragImg);
        var clickX1=EO.pageX-imgPos1.left;
        var clickY1=EO.pageY-imgPos1.top;
        dragImg.style.top = clickY1+imgPos1.top-clickY+'px';
        // dragImg.style.left = clickX1+imgPos1.left-clickX+'px';
        img.style.top = clickY1+imgPos1.top-clickY+'px';
        let imgOfW = img.offsetWidth;
        img.style.width = imgOfW+'px';
        img.style.height = img.offsetHeight-clickY1+clickY+'px';
        
    }
}
function resize5(EO) {
    EO=EO||window.event;
    EO.preventDefault();
    if(dragImg) {
        let img = document.querySelector('img');
        dragImg.style.cursor = 'move';
        let imgPos1 = getElementPos(dragImg);
        var clickX1=EO.pageX-imgPos1.left;
        var clickY1=EO.pageY-imgPos1.top;
        dragImg.style.top = clickY1+imgPos1.top-clickY+'px';
        dragImg.style.left = clickX1+imgPos1.left-clickX+'px';
        let imgOfW = img.offsetWidth;
        img.style.width = imgOfW+'px';
        img.style.height = img.offsetHeight+clickY1-clickY+'px';
        
    }
}
    
function mousedown(EO) {
    EO=EO||window.event;
    EO.preventDefault();
    let imgPos = getElementPos(this);
    dragImg  = this;
    dragImg.style.cursor = 'move';
    clickX=Math.round(EO.pageX-imgPos.left);
    clickY=Math.round(EO.pageY-imgPos.top);
}
function mouseup(EO) {
    EO=EO||window.event;
    EO.preventDefault();
    dragImg.style.cursor = 'default';
    dragImg = null;
    
}