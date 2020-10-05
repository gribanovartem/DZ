"use strict";

function randomDiap(n,m) {
        return Math.floor(Math.random()*(m-n+1))+n;
}
function mood(colorsCount) {
    var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
    let colorsObj = {};
    console.log( 'цветов: ' + colorsCount );
        do {
            var n=randomDiap(1,7);
            if(!(colors[n] in colorsObj)) {
                colorsObj[colors[n]] = true; 
                var colorName=colors[n];
                console.log( colorName );
            }
        } while (Object.keys(colorsObj).length<3);

}

mood(3);
