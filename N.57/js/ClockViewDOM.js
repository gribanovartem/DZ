function ClockViewDOM() {
    this.myModel = null; // с какой моделью работаем
    this.myField = null; // внутри какого элемента DOM наша вёрстка
    this.clockRadius = 200; // Радиус циферблата
    this.start=function(model,field) {
        myModel=model;
        this.myField=field;
    };

    this.update = function() {
        this.clockFace = document.createElement('div'); // Сам циферблат
        this.clockFace.style.backgroundColor = '#FCCA66';
        this.clockFace.style.width = (this.clockRadius*2)+'px';
        this.clockFace.style.height = (this.clockRadius*2)+'px';
        this.clockFace.style.borderRadius = '50%';
        // this.clockFace.style.position = 'absolute';
        // this.clockFace.style.top = '10%';
        // this.clockFace.style.left = '50%';
        // this.clockFace.style.marginLeft = -this.clockRadius + 'px';
        this.myField.appendChild(this.clockFace);
    };
}