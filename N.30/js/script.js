
function dragNdrop() {
    let allImg = document.getElementsByTagName('img');
    var dragImg;
    document.addEventListener('mousemove', mousemove, false);
    let posArr = [];
    for(let j=0; j<allImg.length; j++) {
        let imgPosition = getElementPos(allImg[j]);
        posArr.push(imgPosition);
    }

    for(let i=0; i<allImg.length; i++) {
        allImg[i].style.position = 'absolute';
        allImg[i].style.top = posArr[i].top+'px';
        allImg[i].style.left = posArr[i].left+'px';
        allImg[i].addEventListener('mousedown', mousedown, false);
        allImg[i].addEventListener('mouseup', mouseup, false);
    }
    var clickX;
    var clickY;
    var index = 0;
    function mousedown(EO) {
        EO=EO||window.event;
        EO.preventDefault();
        let imgPos = getElementPos(this);
        dragImg  = this;
        document.body.appendChild(this);
        clickX=Math.round(EO.pageX-imgPos.left);
        clickY=Math.round(EO.pageY-imgPos.top);
        index++;
        dragImg.style.zIndex = index;
    }
    function mousemove(EO) {
        EO=EO||window.event;
        EO.preventDefault();
        if(dragImg) {
            dragImg.style.cursor = 'move';
            let imgPos1 = getElementPos(dragImg);
            var clickX1=EO.pageX-imgPos1.left;
            var clickY1=EO.pageY-imgPos1.top;
            dragImg.style.top = clickY1+imgPos1.top-clickY+'px';
            dragImg.style.left = clickX1+imgPos1.left-clickX+'px';
        }
    }
    
    function mouseup(EO) {
        EO=EO||window.event;
        EO.preventDefault();
        dragImg.style.cursor = 'default';
        dragImg = null;
        
    }
    function getElementPos(elem) {
        var bbox=elem.getBoundingClientRect();
        return {
            left: bbox.left+window.pageXOffset,
            top: bbox.top+window.pageYOffset
        };
    }
}
dragNdrop();