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

"use strict";
var image = {
    width: 100,
    height: 400,
    title: 'Cool image',
    };

function multiplyNumeric() {
    for (var key in image) { // перебераем ключи объекта image
         if (typeof image[key] === "number") {  // проверяем  что значение ключей числовое
            image[key] = image[key] * 2; // ключи у которых значение числовое умнажаем на 2
            return image[key];  // возвращаем результат 
        }
    }
}   
multiplyNumeric();