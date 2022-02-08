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

var values = Object.values(tasksCompleted); // Используя данный метод, мы получаем доступ только к значениям объекта и передаем результат в переменную
var result = Math.max(...values); // Метод Math.max() возвращает наибольшее из нуля или более чисел. Записываем все в переменную.
console.log(result);


