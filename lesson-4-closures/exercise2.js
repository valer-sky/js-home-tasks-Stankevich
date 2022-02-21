// Задание 2
// У объекта есть свойство className, которое хранит список css класов – слов, разделенных
// пробелами:
// var obj = {
// className: 'open menu'
// };
// Напишите функцию придуматьХорошееИмя(obj, cls), которая удаляет класс cls, если он есть:
// вашаФункция(obj, 'open'); // obj.className='menu'
// вашаФункция(obj, 'blabla'); // без изменений
// P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование
// класса в строке:
// obj = {
// className: 'my menu menu'
// };
// removeClass(obj, 'menu');
// console.log( obj.className ); // 'my'
// Лишних пробелов после функции образовываться не должно.
"use strict";
var object = {
    className: 'open menu'
};
function removeClass(obj, cls) {
    var arrClasses = object.className.split(' ');  //Разбиваем className на массив классов
    for(var  i= 0; i < arrClasses.length; i++) {    // проходимся по нему циклом  
        if(arrClasses[i] == cls) {
            arrClasses.splice(i, 1);      //Ищем в массиве нужный нам класс. Если находим его, то удаляем(splice)
            i--; //уменьшаем i, чтобы следующая итерация цикла заново проверила элемент с номером i.
            return arrClasses.join(' '); // Возвращаем заново объединенный массив в строку
        }
    }
}
console.log(removeClass(object, 'menu'));
console.log(object.className);

var object = {
    className: 'my menu menu'
};
console.log(removeClass(object, 'menu'));
console.log(removeClass(object, 'blabla'));
console.log(object);
