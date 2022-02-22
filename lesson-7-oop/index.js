// 1. Build a function constructor called Question to describe a question. A question should include:
// a) question itself
// b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
// c) correct answer (I would use a number for this)

// 2. Create a couple of questions using the constructor

// 3. Store them all inside an array

// 4. Select one random question and log it on the console, together with the possible answers (each answer should have a number) (Hint: write a method for the Question objects for this task).

// 5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

// 6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this).

// 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmer’s code (Hint: we learned a special technique to do exactly that).

"use strict";

function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}
var quest1 = new Question('The largest country in Africa?', ['Algeria', 'Sudan', 'Libya'], 0);
var quest2 = new Question('Which US state has the largest population?', ['Florida', 'Texas', 'California', 'Alaska'], 2);                                       
var quest3 = new Question('Where is the Karakum Desert located?',['Armenia', 'Turkmenistan', 'Armenia', 'Tajikistan'], 1);
var questions = [quest1, quest2, quest3];

Question.prototype.yourQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    } 
}

Question.prototype.checkAnswer = function(answ) {
    if (answ === this.correct) {
        console.log('Correct answer! Next');
    } else {
        console.log('Wrong answer! Try again...');
    }
}

var next = Math.floor(Math.random() * questions.length);

questions[next].yourQuestion();

var answer = +prompt('Please select the correct answer from the options.');
    
questions[next].checkAnswer(answer);


    



        
   


