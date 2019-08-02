var userString = prompt('Введите строку для подсчета гласных букв'); //fgggg
function  vowelsCount1(str) {
    var vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
    str = str.toLowerCase();
    var arr = str.split('');
    var count = 0;
        arr.forEach(v => (vowels.indexOf(v)!=-1) ? count++ : count);
    return count;
}

function  vowelsCount2(str) {
    var vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
    str = str.toLowerCase();
    var arr = str.split('');
      return  arr.filter(v => vowels.indexOf(v)!=-1).length;
}

function  vowelsCount3(str) {
    var vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
    str = str.toLowerCase();
    var arr = str.split('');
      return  arr.reduce((r, v, i, a) => (vowels.indexOf(v)!=-1) ? r+1 : r, 0);
}

console.log(vowelsCount1(userString));
console.log(vowelsCount2(userString));
console.log(vowelsCount3(userString));