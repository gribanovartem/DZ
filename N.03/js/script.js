/*var userLastName = prompt('Ваша фамилия');
    userLastName = nameControl(userLastName, 'вашу фамилию');
var userName = prompt('Ваше имя');
    userName = nameControl(userName, 'ваше имя');
var middleName = prompt('Ваше отчество');
    middleName = nameControl(middleName, 'ваше отчество');
var age = +prompt('Сколько вам лет');
    ageControl();
var sex = confirm('Ваш пол мужской? Если женский нажмите отмена');
var gender = sex ? 'мужской' : 'женский';
                                            // Проверка на пенсионный возраст
var pension = (sex && age>=63) ? 'да' :
              (sex && age<63) ? 'нет' :
              (!sex && age>=58) ? 'да' : 'нет';
                                            // Проверка возраста на корректность вводимых данных (корректный возраст от 1 до 100)
function ageControl() {
    if(age<=100 && age>=1) {
        return age;
    }
    age = +prompt('Вы неверно ввели возраст! Введите возраст от 1 до 100');
    return ageControl();
}
                                            // Проверка ФИО на корректность вводимых данных (нельзя оставить пустую строку или вписать одни числа)
function nameControl(name, text) {
    if(!name || !isNaN(name)) {
       name = prompt('Вы ввели некорректные данные! Введите ' + text);
    return nameControl(name, text);
    }
    return name;
}

                                             // Рассчитываем в каком году сколько дней
var birthday = 2019-age;        
var dayInAge = 0;
for(var i=birthday; i<=2019; i++) {
    if(i%4===0) {
    dayInAge += 366;
    } else {
    dayInAge += 365;
    }
}

alert(`ваше ФИО: ${userLastName} ${userName} ${middleName}
ваш возраст в годах: ${age}
ваш возраст в днях: ${dayInAge}
через 5 лет вам будет: ${age+5}
ваш пол: ${gender}
вы на пенсии: ${pension}`);*/