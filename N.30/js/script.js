
let allImg = document.getElementsByTagName('img');
for(let i=0; i<allImg.length; i++) {
    allImg[i].style.position = 'absolute';
    allImg[i].addEventListener('mousedown', mousedown, false);
    allImg[i].addEventListener('mousemove', mousemove, false);
    allImg[i].addEventListener('mouseup', mouseup, false);
}
function mousedown(EO) {
    console.log(EO.currentTarget);
    let imgPos = getElementPos(EO.currentTarget);
    dragObject  = this;

    var clickX=Math.round(EO.pageX-imgPos.left);
    var clickY=Math.round(EO.pageY-imgPos.top);
    console.log(clickX);
    console.log(clickY);
}
function mousemove(EO) {
    let imgPos = getElementPos(EO.currentTarget);
    var clickX=Math.round(EO.pageX-imgPos.left);
    var clickY=Math.round(EO.pageY-imgPos.top);
}
function mouseup(EO) {
    console.log(EO.currentTarget);
    let imgPos = getElementPos(EO.currentTarget);
    var clickX=Math.round(EO.pageX-imgPos.left);
    var clickY=Math.round(EO.pageY-imgPos.top);
    console.log(clickX);
    console.log(clickY);
}
function getElementPos(elem) {
    var bbox=elem.getBoundingClientRect();
    return {
        left: bbox.left+window.pageXOffset,
        top: bbox.top+window.pageYOffset
    };
}