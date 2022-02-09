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

// Задание 3
/*Напишите код, который:
* Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
* Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт
«Отмена».
* При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
* Выводит сумму всех значений массива когда ввод прекращен. */

// var arrNum = [];
// var num = +prompt('Введите любое число', '0');
// var sum;
// do {
//   num = +prompt('Введите любое число', '0');
//     if (!isFinite(num) || num === null || num == '') break;
//     { 
//         arrNum.unshift(+num);
//         var r = arrNum.reduce(function(sum, current) {
//             return sum + current;
//         });
//     } alert(r);

    
// } 


function showSumm () {
var arrNum = [];
var num; 
var sum = 0;
  do {
      num = +prompt('Введите число?','');
    //   if (!isFinite(num))
    if (!typeof(num) === "number" || num === null || num == '') 
      {break;
      }
      arrNum .unshift(+num);
    //   arrNum .push(+num);

      }
  while (true) 
  for (let i of arrNum ) { 
    sum = sum + i; }
console.log(sum);
alert('Cумма всех значений массива = ' + sum);
}
showSumm();








    
   
    
      
      
    
    
   





    




  


    

