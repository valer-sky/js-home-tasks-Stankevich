"use strict";
// Задание 2
// Напишите функцию interviewQuestion, которая вызывается как:
// interviewQuestion('teacher')('John')

// и возвращает строку, с вопросом для интервью, для указанной
// профессии.
// Обработать нужно следующие профессии:
// 1) “designer” -> John can you please explain what UX design is?
// 2) “teacher” -> What subject do you teach John?
// 3) “other” -> Hello John, what do you do?

function interviewQuestion(profession) {
    return function(name) {
        if(profession === 'designer') {
            console.log('John can you please explain what UX design is?');
        } else if (profession === 'teacher') {
            console.log('What subject do you teach John?');
        } else {
            console.log('Hello John, what do you do? ');
        }
        return name;
    }
}
console.log(interviewQuestion('teacher')('John'));