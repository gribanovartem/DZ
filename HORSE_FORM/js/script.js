
function horseMove(startX, startY) {
                        // найдем все элементы 'td',которые соответствуют клеткам шахматной доски, вырежем ненужные, добавим в массив
    function getChessArr() {
        var tdArr = document.querySelectorAll('td');
        var tdArr1 =[];
        for(let i=0; i<tdArr.length; i++) {
            if(i>10 && i<89 && i%10!==0 && (i+1)%10!==0) {
                tdArr1.push(tdArr[i]);
            }
        }
                        // добавим каждому элементу в атрибуты позицию по 'x' и 'y'
        var x=1;
        var y=8;
        for(let i=0; i<tdArr1.length; i++) {
            if(x>8) {
                x=1;
                y--;   
            }
            tdArr1[i].setAttribute('posX', x);
            tdArr1[i].setAttribute('posY', y);
            x++;
        }
        return tdArr1;
    }
    var tdArr = getChessArr();
    var step=1;
                        // поставим коня в стартовую позицию
    function startHorse() {
        var startPos;
                        //найдём позицию, которую передали в атрибутх horseMove(startX, startY)
        for(let i=0; i<tdArr.length; i++) {
            var posX = tdArr[i].getAttribute('posX');
            var posY = tdArr[i].getAttribute('posY');
            if(posX==startX && posY==startY) {
                startPos = tdArr[i];
                break;
            }
        }
                        //запишем в эту позицию цифру и дадим класс 'notAvailable'
        startPos.textContent = step;
        startPos.classList.add('notAvailable');
        return startPos;
    }
    var startPos = startHorse();
    
    function nextStep(pos) {
                        // Узнаем предыдущую позицию по 'x' и 'y'.
        var posX = pos.getAttribute('posX');
        var posY = pos.getAttribute('posY');
                        // это массив с позициями, на которые может походить конь
        var possibleSteps = [document.querySelector('[posX="' + (+posX+1)+'"][posY="' + (+posY+2)+'"]'),
                            document.querySelector('[posX="' + (+posX+2)+'"][posY="' + (+posY+1)+'"]'),
                            document.querySelector('[posX="' + (+posX+2)+'"][posY="' + (+posY-1)+'"]'),
                            document.querySelector('[posX="' + (+posX+1)+'"][posY="' + (+posY-2)+'"]'),
                            document.querySelector('[posX="' + (+posX-1)+'"][posY="' + (+posY-2)+'"]'),
                            document.querySelector('[posX="' + (+posX-2)+'"][posY="' + (+posY-1)+'"]'),
                            document.querySelector('[posX="' + (+posX-2)+'"][posY="' + (+posY+1)+'"]'),
                            document.querySelector('[posX="' + (+posX-1)+'"][posY="' + (+posY+2)+'"]')
        ];
        
                        // перебираем массив, если позиция вне шахматной доски или на ней побывал уже конь, вырезаем эту позицию
        for(let i=possibleSteps.length-1; i>=0; i--) {
            if(possibleSteps[i]===null || possibleSteps[i].classList.contains('notAvailable')) {
                possibleSteps.splice(i,1);
            }

        }
        
                        //функция getArrPossibleSteps возвращает массив чисел. Число - количество возможных ходов для следующего хода
        function getArrPossibleSteps(possibleSteps) {
            var stepsArr =[];
            for(let i=0; i<possibleSteps.length; i++) {
                var posX = possibleSteps[i].getAttribute('posX');
                var posY = possibleSteps[i].getAttribute('posY');
                var possibleSteps1 = [document.querySelector('[posX="' + (+posX+1)+'"][posY="' + (+posY+2)+'"]'),
                                    document.querySelector('[posX="' + (+posX+2)+'"][posY="' + (+posY+1)+'"]'),
                                    document.querySelector('[posX="' + (+posX+2)+'"][posY="' + (+posY-1)+'"]'),
                                    document.querySelector('[posX="' + (+posX+1)+'"][posY="' + (+posY-2)+'"]'),
                                    document.querySelector('[posX="' + (+posX-1)+'"][posY="' + (+posY-2)+'"]'),
                                    document.querySelector('[posX="' + (+posX-2)+'"][posY="' + (+posY-1)+'"]'),
                                    document.querySelector('[posX="' + (+posX-2)+'"][posY="' + (+posY+1)+'"]'),
                                    document.querySelector('[posX="' + (+posX-1)+'"][posY="' + (+posY+2)+'"]')
                ];
                for(let i=possibleSteps1.length-1; i>=0; i--) {
                    if(possibleSteps1[i]===null || possibleSteps1[i].classList.contains('notAvailable')) {
                        possibleSteps1.splice(i,1);
                    }
                }
                stepsArr.push(possibleSteps1.length);
                   
            }
            return stepsArr;
        }
        var stepsArr = getArrPossibleSteps(possibleSteps);
        
                        // Ищем минимальное число, под эти индексом и будет след. позиция. (следующая позиция будет та, в котрой наименьшее кол-во след ходов)
        var minV = stepsArr[0];
        var index = 0;
        for(let i=1; i<stepsArr.length; i++) {
            if(stepsArr[i]<minV) {
                minV = stepsArr[i];
                index = i;
            }
        }
        var nextPos = possibleSteps[index];
                        //Увеличиваем шаг, записываем в клетку число, добавляем класс notAvailable.
        step = step+1;
        nextPos.textContent = step;
        nextPos.classList.add('notAvailable');
                        //Рекурсивно вызываем функцию nextStep(NextPos), если шаг становится равен 64 - выходим из функции
            if(step===64) {
                return;
            }
        
            setTimeout(nextStep, 200, nextPos);
        
    }
    
    nextStep(startPos);
   
}
function reset() {
    document.location.reload(true);
}

