function queen(i) {
    var size = 8;               // Размер доски
    var queens = Array(size);   // Создаём пучтой массив длинной 8
    var nSolutions = 0;         // колл-во решений
    var queenObj = {};          // это будет объект, в котором ключ - номер решения, значение - массив расстановки ферзей

    function Solve(n) {
        if(n===undefined) {         // n - кол-во ферзей на доске
            n = 0;
        }                      
        
        if(n === size) {                // если ферзей на доске 8                
            nSolutions++;               // есть решение
            queenObj[nSolutions] = queens.slice(); // записываем решение в queenObj 
        }
        
        else { 
            for(var r=0; r < size; r++) {                               // перебираем строки
                for(var c=0; c < n; c++) {                              // перебираем ферзей
                    if(queens[c] === r  || Math.abs(queens[c]-r) === n-c) {    // проверяем если на одной строке или диагонали,  
                        break;                                                 //  то выходим из цикла
                    } 
                }
                if(c === n) { 
                    queens[n] = r;      // ставим ферзя
                    Solve(n+1);         // рекурсия с новым кол-вом ферзей
                }
            }
        }
        return queenObj;
    }
    
    Solve();
    if(i===undefined || i==='') {
        return nSolutions;
    } else return  queenObj[i];
    
}  

function show() {                                       // функция, которая расставляет ферзей по введенному номеру решения
    var allImg = document.querySelectorAll('img');     
    for(var j=0; j<allImg.length; j++) {
        var node = document.getElementById("queen");        // этот блок кода удаляет предыдущую расстановку фкрзей
            if (node.parentNode) {
            node.parentNode.removeChild(node);
            }
    }
    
    var ranking = queen(document.getElementById('inputNum').value);
    for(var i=0; i<ranking.length; i++) {
        var str = document.querySelectorAll('tr')[ranking[i]+1];
        var pos = str.querySelectorAll('td')[i+1];                      // этот блок кода расставляет ферзей
        var pic = document.createElement("img");
        pic.src = "img/queen.png";
        pic.id = "queen";
        pos.appendChild(pic);
    }
    document.getElementById('inputNum').value = '';
}

function showSolutions() {    
    var pos = document.getElementById('solutions');
    var sol = document.createElement("span");
    sol.textContent = queen();
    sol.style.color = "red";
    sol.style.fontSize = '50px';
    sol.style.position = 'absolute';
    sol.style.top = '56px';
    sol.style.left = '185px';
    pos.appendChild(sol);
}


