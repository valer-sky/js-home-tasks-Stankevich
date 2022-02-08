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
console.log(resultName);
 


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
title: 'Cool image'
};

// var a = Object.values(image);
// console.log(a);
// function multiplyNumeric() 
for (var key in image) {
     if (typeof image[key] == "number") {
       var f = image[key] * 2;
        console.log(f);
    }
}

    // var b = 2;
    // var s = image[key];
    // console.log(s);
    // if (s === typeof "number") {
//         var d = s * b;
//         return d;
//     } else {

//     }
// }
 
 
// function multiplyNumeric(image) {
//   if(a === typeof "number") {
//     image = image[values] * b;
//   } else {

//   }
// }
// var after = multiplyNumeric(image);
// console.log(after);

