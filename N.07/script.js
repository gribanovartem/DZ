
var userString = prompt('Введите строку для подсчета гласных букв');
function  vowelsCount() {
    var vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я', 'А', 'О', 'И', 'Е', 'Ё', 'Э', 'Ы', 'У', 'Ю', 'Я'];
    var count = 0;
    for(var i=0; i<userString.length; i++) {
        if(vowels.indexOf(userString[i])!=-1) {
            count++;
        }
    }
    return count;
}
console.log(vowelsCount());