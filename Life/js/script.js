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
    var x=1;
    var y=30;
    const parentDiv = document.querySelector('div');
    for(let i=0; i<900; i++) {
        if(x>30) {
            x=1;
            y--;   
        }
        let cell = document.createElement('div');
        cell.setAttribute('posX', x);
        cell.setAttribute('posY', y);
        cell.classList.add('false');
        parentDiv.appendChild(cell);
        x++;
        }
    }
    console.log();

setGrid();
// console.log(arr1);
function reset() {
    document.location.reload(true);
}

function startRandom() {
    var countAliveCell = randomDiap(1,900);
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