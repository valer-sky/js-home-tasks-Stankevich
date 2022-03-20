// Задание 2 (Проверка на палиндром) использовать chaining

// Палиндром - это строка которая читается с обоих сторон одинаково. Например: Анна, оно,
// А роза упала на лапу Азора.
// Необходимо написать функцию isPal(string) которая возвращает true
// или false в зависимости от того является ли строка палиндромом или нет.
// console.log(isPal('Anna')); // true
// console.log(isPal('А роза упала на лапу Азора')); //true
// console.log(isPal('Вася')); //false
// console.log(isPal('12321')); //true
// console.log(isPal('123212')); //false

"use strict";

function isPal(string) {
    var  str = string.trim().toLowerCase();
    var palindrome = str.split('').reverse().join('');
    if (str === palindrome) {
        console.log('true');
        } else {
        console.log(false);
    }
}
console.log(isPal('Anna'));
console.log(isPal('А роза упала на лапу Азора'));
console.log(isPal('Вася'));
console.log(isPal('12321'));
console.log(isPal('123212'));
