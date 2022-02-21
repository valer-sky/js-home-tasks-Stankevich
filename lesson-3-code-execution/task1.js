// Задание 1
/*Напишите код который выведет сотрудника который выполнил больше всех задач.
Например:
var tasksCompleted = {
'Anna': 29,
'Serg': 35,
'Elena': 1,
'Anton': 99
};*/
"use strict";
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

var result = 0;
var resultName;
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