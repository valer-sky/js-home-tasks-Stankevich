"use strict";
// Задание 1
/*Напишите код который выведет сотрудника который выполнил больше всех задач.
Например:
var tasksCompleted = {
'Anna': 29,
'Serg': 35,
'Elena': 1,
'Anton': 99
};*/

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

var result = 0;

for (let key in tasksCompleted) {
    if (result < tasksCompleted[key]) { // перебираем свойства ключей 
    result = tasksCompleted[key]; // найбольшее свойство записываем в переменную
    var resultName = key; // присвайваем  полученый ключ  в пепременную
    }
}
// не обязательное условие домашнего задания( больше для практики )
var values = Object.values(tasksCompleted); // получаем массив значений объекта tasksCompleted и присвайваем их переменной
var resultValues = Math.max(...values); // при помощи метода Math.max() записываем в переменную максимальное число значений объекта tasksCompleted

console.log(resultName + ' ' + 'выполнил больше всех задач -' + ' ' + resultValues);
 


// Задание 2  (Изменение численных свойств)
/* Напишите функцию multiplyNumeric которая принимает на вход объект и возвращает
объект в котором все числовые значения у свойств умножены на 2. */


// multiplyNumeric(image);
// after
// image = {
// width: 200,
// height: 800,
// title: 'Cool image'
// };


var image = {
width: 100,
height: 400,
title: 'Cool image',
};

var obj; // переменная для хранения результата 
function multiplyNumeric() {
for (var key in image) { // перебераем ключи объекта image
     if (typeof image[key] === "number") {  // проверяем  что значение ключей числовое
        image[key] = image[key] * 2; // ключи у которых значение числовое умнажаем на 2
        obj = image[key];  // результат присвайваем переменной
        console.log(obj);
        }
    }
}   multiplyNumeric(obj);


    




  


    

