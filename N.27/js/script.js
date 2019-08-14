// "use strict";
var form = document.getElementById('userForm');
form.addEventListener('submit', validateInfoForm, false);
function validateInfoForm(EO) {
    EO=EO||window.event;
    var form = document.getElementById('userForm');
    
    if(!validateDescription()) {
        description.focus();
        EO.preventDefault();
    }
    if(!validateComments()) {
        comments.focus();
        EO.preventDefault();
    }
    if(!validatePublic()) {
        let public1 = document.getElementById('public1');
        public1.scrollIntoView();
        EO.preventDefault();
    }
    if(!validateCatalog()) {
        catalogSection.focus();
        EO.preventDefault();
    }
    if(!validateEmail()) {
        email.focus();
        EO.preventDefault();
    }
    if(!validateVisiters()) {
        visiters.focus();
        EO.preventDefault();
    }
    if(!validateDate()) {
        date.focus();
        EO.preventDefault();
    }
    if(!validateUrl()) {
        url.focus();
        EO.preventDefault();
    }
    if(!validateSiteName()) {
        siteName.focus();
        EO.preventDefault();
    }
    if(!validateDeveloper()) {
        developer.focus();
        EO.preventDefault();
    }
}
let developer = document.getElementById('developer');
let siteName = document.getElementById('siteName');
let url = document.getElementById('URL');
let date = document.getElementById('date');
let visiters = document.getElementById('numOfVisiters');
let email = document.getElementById('email');
let publicRadio = document.querySelectorAll('input[type="radio"]');
let radio = document.getElementById('radio');
let comments = document.getElementById('comments');
let catalogSection = document.getElementById('catalogSection');
let catalogSectionOption = document.querySelectorAll('option');
let description = document.getElementById('description');
developer.addEventListener('blur', validateDeveloper, false);
developer.addEventListener('focus', removeError, false);
siteName.addEventListener('blur', validateSiteName, false);
siteName.addEventListener('focus', removeError, false);
url.addEventListener('blur', validateUrl, false);
url.addEventListener('focus', removeError, false);
date.addEventListener('blur', validateDate, false);
date.addEventListener('focus', removeError, false);
visiters.addEventListener('blur', validateVisiters, false);
visiters.addEventListener('focus', removeError, false);
email.addEventListener('blur', validateEmail, false);
email.addEventListener('focus', removeError, false);
radio.addEventListener('click', removeError, false);
comments.addEventListener('click', removeError, false);
catalogSection.addEventListener('change', removeError, false);
catalogSection.addEventListener('change', validateCatalog, false);
description.addEventListener('blur', validateDescription, false);
description.addEventListener('focus', removeError, false);
function validateDeveloper() {
    if(developer.value.length<3 ||developer.value.length>30) {
        developer.classList.add('invalid');
        let elem = developer.nextSibling;
        elem.innerHTML = 'Пожалуйста, введите корректные данные.';
        return false;
    }
    return true;
}
function validateSiteName() {
    if(!siteName.value.includes('.') || siteName.value.length<4 || siteName.value.length>15) {
        siteName.classList.add('invalid');
        let elem = siteName.nextSibling;
        elem.innerHTML = 'Пожалуйста, введите правильный адрес сайта.';
        return false;
    }
    return true;
}
function validateUrl() {
    let filter =  /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/;
    if(!filter.test(url.value)) {
        url.classList.add('invalid');
        let elem = url.nextSibling;
        elem.innerHTML = 'Пожалуйста, введите правильный URL.';
        return false;
    }
    return true;
}
function validateDate() {
    let filter = /^\d{2}[.\/-]\d{2}[.\/-]\d{4}$/;
    if(!filter.test(date.value)) {
        date.classList.add('invalid');
        let elem = date.nextSibling;
        elem.innerHTML = 'Пожалуйста, введите корректную дату формата "dd-mm-yyyy".';
        return false;
    }
    return true;
}
function validateVisiters() {
    if(isNaN(Number(visiters.value)) || Number(visiters.value)<0 || visiters.value=='') {
        visiters.classList.add('invalid');
        let elem = visiters.nextSibling;
        elem.innerHTML = 'Пожалуйста, введите корректную цифру.';
        return false;
    }
    return true;
}
function validateEmail() {
    let filter = /\S+@\S+\.\S+/;
    if(!filter.test(email.value)) {
        email.classList.add('invalid');
        let elem = email.nextSibling;
        elem.innerHTML = 'Пожалуйста, введите корректный email.';
        return false;
    }
    return true;
}
function validatePublic() {
    for(let i=0; i<publicRadio.length; i++) {
        if(publicRadio[i].checked) {
            return true;
        }
    }
    radio.classList.add('invalid');
    let elem = radio.nextSibling;
    elem.innerHTML = 'Пожалуйста, выберете размещение.';
    return false;
}
function validateComments() {
    if(!comments.checked) {
        comments.classList.add('invalid');
        let elem = comments.nextSibling;
        elem.innerHTML = 'Пожалуйста, разрешите отзывы.';
        return false;
    }
    return true;
}
function validateCatalog() {
    if(catalogSection.options[catalogSection.selectedIndex].value==4) {
        catalogSection.classList.add('invalid');
        let elem = catalogSection.nextSibling;
        elem.innerHTML = 'Пожалуйста, не надо жарить котиков.';
        return false;
    }
    return true;
}
function validateDescription() {
    if(description.value.length<20) {
        description.classList.add('invalid');
        let elem = description.nextSibling;
        elem.innerHTML = 'Пожалуйста, заполните поле "Описание сайта:"!';
        return false;
    }
    return true;
}
function removeError() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        let elem = this.nextSibling;
        elem.innerHTML = "";
    }
}

