// В цикле от 0 до 900 создаётся сетка дивов 30х30,
//  каждому из них в атрибуты записывается позиция по "х" и "у" и класс "false"
function setGrid() {
    var x=1;
    var y=30;
    const parentDiv = document.querySelector('div');
    for(let i=0; i<900; i++) {
        if(x>30) {
            x=1;
            y--;   
        }
        var cell = document.createElement('div');
        cell.setAttribute('posX', x);
        cell.setAttribute('posY', y);
        cell.classList.add('false');
        parentDiv.appendChild(cell);
        x++;
        
        }
    }
    console.log();

setGrid();
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
// циклом перебираем все клетки,
//  внутри ещё один цикл по 8 соседям,
//   затем в зависимости от кол-ва живых соседей в новый массив(newArr) пушим true либо false.
//    Потом циклом пробегаем по всем клеткам и сравниваем их класс  с "iтым" элементом массива(newArr),
//     если разные, меняем класс клетки.
function nextGeneration() {
    const allCells = document.querySelectorAll('div>div');
    let newArr = [];
    for(let i=0; i<allCells.length; i++) {
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
        for(let j=0; j<allneighbour.length; j++) {
            if(allneighbour[j]!==null && allneighbour[j].classList.contains('true')) {
                count++;
            }
        }
        if(allCells[i].classList.contains('false') && count===3) {
            newArr.push('true');
        }
         else if((allCells[i].classList.contains('true') && count<2)||(allCells[i].classList.contains('true') && count>3)) {
            newArr.push('false');
        }
        else {
            newArr.push(allCells[i].className);
        }
        
       
    }
    let count1 = 0;
    for(let i=0; i<allCells.length; i++) {
        if(allCells[i].className !== newArr[i]) {
            count1++;
        }
        if(allCells[i].classList.contains('true')) {
            allCells[i].classList.remove('true');
            allCells[i].classList.add(newArr[i]);
        }
        if(allCells[i].classList.contains('false')) {
            allCells[i].classList.remove('false');
            allCells[i].classList.add(newArr[i]);
        }
    }
    if(count1==0) {
        clearInterval();
    }
    return count1;
}

// Эта функция меняет состояние клетки по клику
function clickCell(cell) {
    const allCells = document.querySelectorAll('div>div');
    for(let i=0; i<allCells.length; i++) {
        allCells[i].addEventListener("click", ()=> {
            if(allCells[i].classList.contains('true')) {
                allCells[i].classList.remove('true');
                allCells[i].classList.add('false');
            }
            if(allCells[i].classList.contains('false')) {
                allCells[i].classList.remove('false');
                allCells[i].classList.add('true');
            }
        });
        
    }
}
clickCell();

function startGame() {
   setInterval(nextGeneration, 100);
}
// Глайдер
function setGlider() {
    document.querySelector('[posX="3"][posY="28"]').classList.remove('false');
    document.querySelector('[posX="3"][posY="28"]').classList.add('true');
    document.querySelector('[posX="2"][posY="28"]').classList.remove('false');
    document.querySelector('[posX="2"][posY="28"]').classList.add('true');
    document.querySelector('[posX="1"][posY="28"]').classList.remove('false');
    document.querySelector('[posX="1"][posY="28"]').classList.add('true');
    document.querySelector('[posX="3"][posY="29"]').classList.remove('false');
    document.querySelector('[posX="3"][posY="29"]').classList.add('true');
    document.querySelector('[posX="2"][posY="30"]').classList.remove('false');
    document.querySelector('[posX="2"][posY="30"]').classList.add('true');
}

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

