"use strict";

// Задание 1

var question = prompt("Введите строку", ''); // переменная для ввода строки

function countVowels(question) {   // Создаем функцию для показа количества гласных
	question = question.toLowerCase();  //переводим в нижний регистр введенную информацию

	var vowels = "ауоыиэяюёе"; // строка с гласными для перебора с введенными данными
	var	count = 0; // переменная для записи введенных гласных

	for (var i = 0; i < question.length; i++) { // цикл для перебора букв введенной информации

		if (vowels.indexOf(question[i]) !== -1) {  // условие перебора 
			count++;
		}			
	}
return count;  // Возвращаем результат колличества глассных
}
var a = countVowels(question); // присваивание переменной значения функции
alert('Колличество гласных в слове:' + ' ' + a);

// Задание 2

let firstName = prompt('Ваше имя?', '');
while (firstName === null || firstName === '' || firstName === typeof('number')){
   firstName = prompt('Введите правильное значение');
}

let anoterName = prompt('Ваше отчество?', '');
while (anoterName === null || anoterName === '' || anoterName === typeof('number')){
    anoterName = prompt('Введите правильное значение');
}

let secondName = prompt('Ваша фамилия?', '');
while (secondName === null || secondName === '' || secondName === typeof('number')){
    secondName = prompt('Введите правильное значение');
}

let age = +prompt('Ваш возраст в годах', '');
while ((isNaN(age)) === true || !age || age >= 100 || age <= 0) {
    age = parseFloat(prompt("Пишите првильный возраст в годах", ''));

}
let userSex = confirm('Ваш пол мужской?');
let oldYear = confirm('Вы на пенсии?');

let anketa = {};
let fio = `Ваше ФИО : ${firstName} ${secondName} ${anoterName}`;
let ageYears = `Ваш возвраст в годах: ${age}`;
let year = 365;
let ageDays = year * age;
let fiveYearsLater = age + 5;


let sex;
 if (userSex === true) {
 sex = 'мужской';
 } else {
      sex = 'женский';
 }

let pension = (oldYear === true) ? 'да' : 'нет';

anketa = fio + ' ' +'\n' +
 ageYears + ' ' + '\n' +
 'Ваш возраст в днях:' + ' ' + ageDays + '\n' +
'Через 5 лет вам будет: ' + ' ' + fiveYearsLater + ' ' + '\n' +
  'Ваш пол:' + ' ' + sex + ' ' + '\n' +
  'Вы на пенсии? : ' + ' ' + pension;

alert(anketa);




// для приветствия на экране
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Добрый вечер!';
} else if (hourNow > 12) {
    greeting = 'Добрый день!';
} else if (hourNow > 0) {
    greeting = 'Доброе утро!';
} else {
    greeting = 'Приветствуем!';
}

document.write('<h3>' + greeting + '</h3>');
