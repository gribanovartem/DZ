function matrix(rows, cols, defaultValue){
    var arr = [];
    for(var i=0; i<rows; i++){
        arr.push([]);
        arr[i].push(new Array(cols));
        for(var j=0; j< cols; j++){
          arr[i][j] = defaultValue;
        }
    }
    return arr;
}
function setGrid() {
    var arr1 = matrix(30, 30, false);
    const parentDiv = document.querySelector('div');
    for(let i=0; i<arr1.length; i++) {
        for(let j=0; j<arr1[i].length; j++) {
            let cell = document.createElement('div');
            cell.setAttribute('posX', j);
            cell.setAttribute('posY', i);
            cell.classList.add(arr1[i][j]);
            parentDiv.appendChild(cell);
        }
    }
}
setGrid();
// console.log(arr1);
function reset() {
    document.location.reload(true);
}

function startRandom() {
    var countAliveCell = randomDiap(1,30);
    for(let i=0; i<countAliveCell; i++) {
        let positionX = randomDiap(1,30);
        let positionY = randomDiap(1,30);
        let element = document.querySelector('div[posX="' + (+positionX)+'"][posY="' + (+positionY)+'"]');
        element.classList.remove('false');
        element.classList.add('true');
        
    }
}
function nextGeneration() {
    const allCells = document.getElementsByClassName('cell');
    
    for(let i=1; i<=allCells.length; i++) {
        let posX = allCells[i].getAttribute('posX');
        let posY = allCells[i].getAttribute('posY');
        let count = 0;
        let allneighbour = [document.querySelector('[posX="' + (+posX-1)+'"][posY="' + (+posY+1)+'"]'),
                        document.querySelector('[posX="' + (+posX)+'"][posY="' + (+posY+1)+'"]'),
                        document.querySelector('[posX="' + (+posX+1)+'"][posY="' + (+posY+1)+'"]'),
                        document.querySelector('[posX="' + (+posX-1)+'"][posY="' + (+posY)+'"]'),
                        document.querySelector('[posX="' + (+posX+1)+'"][posY="' + (+posY)+'"]'),
                        document.querySelector('[posX="' + (+posX-1)+'"][posY="' + (+posY-1)+'"]'),
                        document.querySelector('[posX="' + (+posX)+'"][posY="' + (+posY-1)+'"]'),
                        document.querySelector('[posX="' + (+posX+1)+'"][posY="' + (+posY-1)+'"]')
        ];
        for(let j=0; j<allneighbour.length; i++) {
            if(allneighbour[j].classList.contains('true')) {
                count++;
            }
        }
        
        
    }
    console.log();

}
nextGeneration();

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

// function aaa() {
//     console.log(document.querySelectorAll('div[posx="1", posy="2"]'));
// }
// aaa();