// var form = document.getElementById('userForm');
// // form.addEventListener('submit', validateInfoForm, false);
// var developer = document.getElementById('developer');
// developer.addEventListener('onblur', validateDeveloper, false);


"use strict";
var form = document.getElementById('userForm');
form.addEventListener('submit', validateInfoForm, false);
var allInput = document.getElementsByTagName('input');

function validateInfoForm(EO) {
    EO=EO||window.event;
    var form = document.getElementById('userForm');
    var developer = document.getElementById('developer');
        
    if(!developer.onblur()) {
        alert('Введите пожалуйста в поле "Разработчики" корректные данные');
        developer.focus(); // фокусируем элемент и прокручиваем к нему
        EO.preventDefault();
        return;
    }
    if(!siteName.onblur()) {
        alert('Введите пожалуйста в поле "Название сайта:" корректные данные');
        siteName.focus(); // фокусируем элемент и прокручиваем к нему
        EO.preventDefault();
        return;
    }
    if(!email.onblur()) {
        alert('Введите пожалуйста в поле "email:" корректные данные');
        email.focus(); // фокусируем элемент и прокручиваем к нему
        EO.preventDefault();
        return;
    }
}


developer.onblur = function() {
    if(!developer.value || developer.value.length<3 ||developer.value.length>30) {
        developer.classList.add('invalid');
        error1.innerHTML = 'Пожалуйста, введите корректные данные.';
        return false;
    }
    return true;
};
developer.onfocus = function() {
    if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    error1.innerHTML = "";
    }
};


siteName.onblur = function() {
    if(!siteName.value.includes('.')) {
        siteName.classList.add('invalid');
        error2.innerHTML = 'Пожалуйста, введите правильный адрес сайта.';
        return false;
    }
    return true;
};
siteName.onfocus = function() {
    if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    error2.innerHTML = "";
    }
};


email.onblur = function() {
    if(!email.value.includes('@')) {
        email.classList.add('invalid');
        error6.innerHTML = 'Пожалуйста, введите правильный email.';
        return false;
    }
    return true;
};
email.onfocus = function() {
    if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    error6.innerHTML = "";
    }
};