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
        dragImg.style.cursor = 'move';
        document.body.appendChild(this);
        clickX=Math.round(EO.pageX-imgPos.left);
        clickY=Math.round(EO.pageY-imgPos.top);
    }
    function mousemove(EO) {
        EO=EO||window.event;
        EO.preventDefault();
        if(dragImg) {
            // dragImg.style.cursor = 'move';
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
        if(dragImg == img) {
            dragImg.style.cursor = 'default';
            dragImg = null;
        }
    }
    
}
function mousedown(EO) {
    EO=EO||window.event;
    EO.preventDefault();
    let main = document.getElementsByClassName('main');
    let img = document.querySelector('img');
    let imgPos = getElementPos(this);
    dragImg  = this;
    dragImg.style.cursor = 'move';
    main[0].style.cursor = 'move';
    img.style.cursor = 'move';
    clickX=Math.round(EO.pageX-imgPos.left);
    clickY=Math.round(EO.pageY-imgPos.top);
}
function mouseup(EO) {
    EO=EO||window.event;
    EO.preventDefault();
    let main = document.getElementsByClassName('main');
    let img = document.querySelector('img');
    if(dragImg) {
        main[0].style.cursor = 'default';
        dragImg.style.cursor = 'default';
        img.style.cursor = 'default';
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
    for(let i=0; i<8; i++) {
        let resizeElem = document.createElement('div');
        resizeElem.classList.add('resize'+i);
        resizeElem.classList.add('resize');
        resizeElem.style.width = '10px';
        resizeElem.style.height = '10px';
        resizeElem.style.zIndex = '10';
        resizeElem.style.border = '1px solid black';
        resizeElem.style.position = 'absolute';
        div.appendChild(resizeElem);
    }
}
function setResizeElemPos() {
    let img = document.querySelector('img');
    let imgPos = getElementPos(img);
    let imgOfW = img.offsetWidth;
    let imgOfH = img.offsetHeight;
    let resize = document.getElementsByClassName('resize');
    resize[0].style.left = imgPos.left - 5 + 'px';
    resize[0].style.top = imgPos.top - 5 + 'px';
    resize[1].style.left = imgPos.left + imgOfW/2 - 5 + 'px';
    resize[1].style.top = imgPos.top - 5 + 'px';
    resize[2].style.left = imgPos.left + imgOfW - 5 + 'px';
    resize[2].style.top = imgPos.top - 5 + 'px';
    resize[3].style.left = imgPos.left + imgOfW - 5 + 'px';
    resize[3].style.top = imgPos.top + imgOfH/2 - 5 + 'px';
    resize[4].style.left = imgPos.left + imgOfW - 5 + 'px';
    resize[4].style.top = imgPos.top + imgOfH - 5 + 'px';
    resize[5].style.left = imgPos.left + imgOfW/2 - 5 + 'px';
    resize[5].style.top = imgPos.top + imgOfH - 5 + 'px';
    resize[6].style.left = imgPos.left - 5 + 'px';
    resize[6].style.top = imgPos.top + imgOfH - 5 + 'px';
    resize[7].style.left = imgPos.left - 5 + 'px';
    resize[7].style.top = imgPos.top + imgOfH/2 - 5 + 'px'; 
}
setResizeElem();
setResizeElemPos();
var dragImg;
var clickX;
var clickY;
let resizeItems = document.getElementsByClassName('resize');
for(let i=0; i<8; i++) {
    resizeItems[i].addEventListener('mousedown', mousedown, false);
}
document.addEventListener('mousemove', resize, false);
document.addEventListener('mouseup', mouseup, false);

function resize(EO) {
    EO=EO||window.event;
    EO.preventDefault();
    let img = document.querySelector('img');
    let imgOfH = img.offsetHeight;
    let imgOfW = img.offsetWidth;
    if(dragImg) {
        
        dragImg.style.cursor = 'move';
    }
    if(dragImg && dragImg.classList.contains('resize1')) {
        let imgPos1 = getElementPos(img);
        let clickX1=EO.pageX-imgPos1.left;
        let clickY1=EO.pageY-imgPos1.top;
        img.style.top = clickY1+imgPos1.top-clickY+'px';
        img.style.width = imgOfW+'px';
        img.style.height = imgOfH-clickY1+clickY+'px';
        setResizeElemPos();
    }
    if(dragImg && dragImg.classList.contains('resize5')) {
        let imgPos1 = getElementPos(dragImg);
        let clickX1=EO.pageX-imgPos1.left;
        let clickY1=EO.pageY-imgPos1.top;
        img.style.width = imgOfW+'px';
        img.style.height = imgOfH+clickY1-clickY+'px';
        setResizeElemPos();
    }
    if(dragImg && dragImg.classList.contains('resize7')) {
        let imgPos1 = getElementPos(img);
        let clickX1=EO.pageX-imgPos1.left;
        let clickY1=EO.pageY-imgPos1.top;
        img.style.left = clickX1+imgPos1.left-clickX+'px';
        img.style.height = imgOfH+'px';
        img.style.width = imgOfW-clickX1+clickX+'px';
        setResizeElemPos();
    }
    if(dragImg && dragImg.classList.contains('resize3')) {
        let imgPos1 = getElementPos(dragImg);
        let clickX1=EO.pageX-imgPos1.left;
        let clickY1=EO.pageY-imgPos1.top;
        img.style.height = imgOfH+'px';
        img.style.width = imgOfW+clickX1-clickX+'px';
        setResizeElemPos();
    }
    if(dragImg && dragImg.classList.contains('resize4')) {
        let imgPos1 = getElementPos(dragImg);
        let clickX1=EO.pageX-imgPos1.left;
        let clickY1=EO.pageY-imgPos1.top;
        if(clickX1>clickY1) {
            console.log(clickX1);
            console.log(clickX);
            img.style.width = imgOfW+clickX1-clickX+'px';
            img.style.height = imgOfH+clickX1-clickX+'px';
        }
        if(clickX1<clickY1) {
            img.style.height = imgOfH+clickY1-clickY+'px';
            img.style.width = imgOfW+clickY1-clickY+'px';
        }
        
        setResizeElemPos();
    }
    if(dragImg && dragImg.classList.contains('resize0')) {
        let imgPos1 = getElementPos(img);
        let clickX1=EO.pageX-imgPos1.left;
        let clickY1=EO.pageY-imgPos1.top;
        if(clickX1>clickY1) {
            img.style.width = imgOfW-clickX1+clickX+'px';
            img.style.height = imgOfH-clickX1+clickX+'px';
            img.style.top = clickX1+imgPos1.top-clickX+'px';
            img.style.left = clickX1+imgPos1.left-clickX+'px';
        }
        if(clickX1<clickY1) {
            img.style.height = imgOfH-clickY1+clickY+'px';
            img.style.width = imgOfW-clickY1+clickY+'px';
            img.style.top = clickY1+imgPos1.top-clickY+'px';
            img.style.left = clickY1+imgPos1.left-clickY+'px';
        }
        
        setResizeElemPos();
    }

}
    
