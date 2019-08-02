var userLastName = nameControl('Ваша фамилия?', 'вашу фамилию');
var userName = nameControl('Ваше имя?', 'ваше имя');
var middleName = nameControl('Ваше отчество?', 'ваше отчество');

var userAge = ageControl();

var sex = confirm('Ваш пол мужской? Если женский нажмите отмена');
var gender = sex ? 'мужской' : 'женский';
                                            // Проверка на пенсионный возраст
var pension = (sex && userAge>=63) ? 'да' :
              (sex && userAge<63) ? 'нет' :
              (!sex && userAge>=58) ? 'да' : 'нет';
                                            // Проверка возраста на корректность вводимых данных (корректный возраст от 1 до 100)
function ageControl() { 
    var age = +prompt('Сколько вам лет');
    while(age>100 || age<1 || isNaN(age)) {
        age = +prompt('Вы неверно ввели возраст! Введите возраст от 1 до 100');
    }
    return age;
}
                                            // Проверка ФИО на корректность вводимых данных (нельзя оставить пустую строку или вписать одни числа)
function nameControl(text1, text2) {
    var name = prompt(text1);
    while (!name || !isNaN(name)) {
        name = prompt('Вы ввели некорректные данные! Введите ' + text2);
    }
    return name;
}

                                             // Рассчитываем в каком году сколько дней
var birthday = 2019-userAge;        
var dayInAge = 0;
for(var i=birthday; i<=2019; i++) {
    if(i%4===0) {
    dayInAge += 366;
    } else {
    dayInAge += 365;
    }
}

alert(`ваше ФИО: ${userLastName} ${userName} ${middleName}
ваш возраст в годах: ${userAge}
ваш возраст в днях: ${dayInAge}
через 5 лет вам будет: ${userAge+5}
ваш пол: ${gender}
вы на пенсии: ${pension}`);