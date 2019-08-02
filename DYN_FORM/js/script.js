'use strict';
function setForm(tag, arr) {
    var form = document.createElement(tag);
    form.setAttribute('action', "http://fe.it-academy.by/TestForm.php");
    form.setAttribute('method', "post");
    document.body.appendChild(form);
    
    function setFormElements(arr) {
      for(var i=0; i<arr.length; i++) {
          var tagName = document.createElement('label');
          tagName.style.display = 'inline-block';
          tagName.style.width = '150px';
          tagName.setAttribute('for', arr[i].name);
          tagName.textContent = arr[i].label;
          form.appendChild(tagName);
          var input = document.createElement('input');
          input.setAttribute('name', arr[i].name);
          input.setAttribute('id', arr[i].name);
          switch (arr[i].kind) {
            case 'longtext':
                input.setAttribute('type', 'text');
                input.setAttribute('size', '50px');
                form.appendChild(input);
                break;
            case 'shorttext':
                input.setAttribute('type', 'text');
                input.setAttribute('size', '20px');
                form.appendChild(input);
                break;
            case 'submit':
                input.setAttribute('type', arr[i].kind);
                input.setAttribute('value', arr[i].label);
                form.removeChild(tagName);
                form.appendChild(input);
                break;
            case 'number':
                input.setAttribute('type', 'number');
                input.style.width = '70px';
                form.appendChild(input);
                break;
            case 'check':
                input.setAttribute('type', 'checkbox');
                form.appendChild(input);
                break;
            case "memo":
                var br = document.createElement('br');
                form.appendChild(br);
                var textarea = document.createElement('textarea');
                textarea.setAttribute('name', arr[i].name);
                textarea.setAttribute('cols', '100');
                textarea.setAttribute('rows', '5');
                form.appendChild(textarea);
                break;
            case 'combo':
                var select = document.createElement('select');
                select.setAttribute('name', arr[i].name);
                select.setAttribute('id', arr[i].name);
                for(var j=0; j<arr[i].variants.length; j++) {
                  var option = document.createElement('option');
                  option.textContent = arr[i].variants[j].text;
                  option.setAttribute('value', arr[i].variants[j].value);
                  select.appendChild(option);
                }
                form.appendChild(select);
                break;
            case 'radio':
                for(var k=0; k<arr[i].variants.length; k++) {
                  
                  
                  var radio = document.createElement('input');
                  radio.setAttribute('type', 'radio');
                  radio.setAttribute('name', arr[i].name);
                  radio.setAttribute('value', arr[i].variants[k].value);
                  radio.setAttribute('id', arr[i].variants[k].value);
                  form.appendChild(radio);
                  
                  var label =document.createElement('label');
                  label.textContent = arr[i].variants[k].text;
                  label.setAttribute('for', arr[i].variants[k].value);
                  form.appendChild(label);
                }
                break;
        }

          
          
          br = document.createElement('br');
          form.appendChild(br);
      }
    }
    setFormElements(arr);
}

var formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {label:'Опубликовать:',kind:'submit'},
];

var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {label:'Зарегистрироваться:',kind:'submit'},
];

setForm('form', formDef1);
setForm('form', formDef2);