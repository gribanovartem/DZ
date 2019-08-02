var userLastName = nameControl('Ваша фамилия?', 'вашу фамилию');
var userName = nameControl('Ваше имя', 'ваше имя');
var middleName = nameControl('Ваше отчество', 'ваше отчество');
function nameControl(text1, text2) {
    var name = prompt(text1);
    while(!name || !isNaN(name)) {
        name = prompt('Вы ввели некорректные данные! Введите ' + text2);
    }
    return name;
}