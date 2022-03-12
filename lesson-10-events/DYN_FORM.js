// Создать проект DYN_FORM, отобразить на странице форму по образцу.
// Вёрстки (HTML-тегов) на странице быть не должно, кроме тега form.
// Вся информация о полях формы (типы полей, подписи к полям и т.д.) должна быть закодирована в виде одного массива; формат элементов массива разработать самостоятельно.
// Написать функцию, которая будет получать такой массив и имя формы и динамически (методами DOM) создавать поля в форме.
// В качестве скрипта, обрабатывающего данные формы (атрибут action тега form), можно установить http://fe.it-academy.by/TestForm.php

"use strict";
var Test=[
    {label:"Название сайта: ",type:"text",name:"title",placeholder:"Название сайта",required:"true",class:"form-control"},
    {label:"URL сайта: ",type:"text",name:"site",placeholder:"URL сайта",required:"true",class:"form-control"},
    {label:"Посетителей в сутки: ",type:"text",name:"persons",placeholder:"Посетителей в сутки",required:"true",class:"form-control"},
    {label:"E-mail для связи: ",type:"email",name:"title",placeholder:"E-mail для связи",required:"true",class:"form-control"},
    {label:"Рубрика каталога: ",type:"select",name:"name",options:[{value:"1",text:"здоровье"},{value:"2",text:"уют"}, {value:"3",text:"бытовая техника"}],class:"form-control"},
    {label:"Размещение: ",type:"radio",name:"public",options:[{value:"1",text:"бесплатное "},{value:"2",text:"платное"},{value:"3",text:"VIP"}],class:"form-control"},
    {label:"Разрешить отзывы ",type:"checkbox",name:"comments",checked:"true",class:"form-control"},
    {label:"Описание сайта: ",type:"textarea",name:"article",class:"form-control"},
    {value:"Опубликовать",type:"submit"}
];

function form_create(arr,form){
    if(arr) {
        arr.forEach(input_create);
    }
    function input_create(element) {
        if(element.type == "email" || element.type == "text") {
            var newTagElement = document.createElement('p');
            var newLabelElement = document.createElement('label');
            var newInputElement = document.createElement('input');
            var newTextElement = document.createTextNode(element.label);
            newInputElement.type = element.type;
            newInputElement.name = element.name;
            newInputElement.placeholder = element.placeholder;

            if(element.required){
                newInputElement.required = true;
            }
                newInputElement.classList.add(element.class);
                newLabelElement.appendChild(newTextElement);
                newLabelElement.appendChild(newInputElement);
                newTagElement.appendChild(newLabelElement);
                form.appendChild(newTagElement);
            }
            if(element.type == "submit"){
                var newTagElement = document.createElement('p');
                var newInputElement = document.createElement('input');
                newInputElement.type = element.type;
                newInputElement.value = element.value;

                newInputElement.classList.add("btn","btn-primary");
                newTagElement.appendChild(newInputElement);
                form.appendChild(newTagElement);
            }
            if(element.type=="select"){

                var newTagElement = document.createElement('p');
                var newLabelElement = document.createElement('label');
                var newTextElement = document.createTextNode(element.label);
                var newSelectElement = document.createElement('select');
                newSelectElement.name = element.name;
                newSelectElement.classList.add(element.class);
                newLabelElement.appendChild(newTextElement);

                for(var i = 0;i < element.options.length; i++){
                    var newOptionElement = document.createElement('option');
                    newOptionElement.value = element.options[i].value;
                    var newTextElement = document.createTextNode(element.options[i].text);
                    newOptionElement.appendChild(newTextElement);
                    newSelectElement.appendChild(newOptionElement);
                }
                newLabelElement.appendChild(newSelectElement);
                newTagElement.appendChild(newLabelElement);
                form.appendChild(newTagElement);
            }
            if(element.type == "radio"){
                var newTagElement = document.createElement('p');
                var newLabelElement = document.createElement('label');
                var newTextElement = document.createTextNode(element.label);
                newLabelElement.appendChild(newTextElement);
                newTagElement.appendChild(newLabelElement);

                for( var i = 0; i<element.options.length; i++){

                    var newRadioElement = document.createElement('input');
                    newRadioElement.value = element.options[i].value;
                    newRadioElement.type = "radio";
                    newRadioElement.name = element.name;
                    var newLabelRElement = document.createElement('label');
                    var newTextElement = document.createTextNode(element.options[i].text);
                    newLabelRElement.appendChild(newRadioElement);
                    newLabelRElement.appendChild(newTextElement);
                    newTagElement.appendChild(newLabelRElement);
                }
                form.appendChild(newTagElement);
            }
            if(element.type == "checkbox"){
                var newTagElement = document.createElement('p');
                var newLabelElement = document.createElement('label');
                var newTextElement = document.createTextNode(element.label);
                newLabelElement.appendChild(newTextElement);
                var newCheckElement = document.createElement('input');
                newCheckElement.type = "checkbox";
                newCheckElement.name = element.name;
                (element.checked) ? newCheckElement.checked = "true" : newCheckElement.checked = "false";
                newLabelElement.appendChild(newCheckElement);
                newTagElement.appendChild(newLabelElement);
                form.appendChild(newTagElement);
            }
            if(element.type =="textarea"){
                var newTagElement = document.createElement('p');
                var newLabelElement = document.createElement('label');
                var newTextElement = document.createTextNode(element.label);
                newLabelElement.appendChild(newTextElement);
                var newTextareaElement = document.createElement('textarea');
                newTextareaElement.name = element.name;
                newTextareaElement.classList.add(element.class);
                newLabelElement.appendChild(newTextareaElement);
                newTagElement.appendChild(newLabelElement);
                form.appendChild(newTagElement);
            }
    }
}
form_create(Test,form1);