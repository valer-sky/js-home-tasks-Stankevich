"use strict";

const racketHeight = 150;
const racketWidth = 10;
const speedOаracket = 0;
const positionYracket1 = 129.5;
const positionXracket1 = 0;
const positionYracket2 = 129.5;
const positionXracket2 = 585;

const ballWidth = 25;
const ballHeight = 25;

const ballPosX = 295;
const ballPosY = 195;
const ballSpeedY = 0;
const ballSpeedX = 0;

const courtWidth = 600;
const courtHeight = 400;
const score = 0;
const offset = 5;
let gameInterval = undefined;

//UI

//создаем панель с кнопкой и счетом
var section = document.getElementById('section');

//создаем кнопку
var buttonStart = document.createElement('button');
buttonStart.textContent ='старт!';
buttonStart.style.cssText = 'width: 100px;height: 30px; background-color: #d9d9d3;font-size: 18px;cursor: pointer;transform: translate(-250%, 180%);';
section.appendChild(buttonStart);

//создаем счет
var scoreTable = document.createElement('div');
scoreTable.innerHTML = '<span id="score1">0</span><span>:</span><span id="score2">0</span>';
scoreTable.style.cssText = 'font-weight:500px;';
section.append(scoreTable);

//создаем корт
var court = document.createElement('div');
court.style.cssText = 'width:600px; height:400px; margin:0; position: relative; border:solid #889683 2px; background-color: #f0ee7e;';
section.appendChild(court);

//создаем мяч
var ballElem = document.createElement('div');
ballElem.id = 'ball';
ballElem.style.cssText = 'width: 30px; height: 30px; background-color: #f02137; border-radius: 50%; position:absolute; top:180px; left:285px;';
court.appendChild(ballElem);
 
//создаем рокетку1
var racket1 = document.createElement('div');
racket1.id = 'racket1';
racket1.style.cssText = 'width:15px; height:150px; background-color:#09aa57; left:0px; position:absolute;';
court.appendChild(racket1);
//создаем рокетку2
var racket2 = document.createElement('div');
racket2.id = 'racket2';
racket2.style.cssText = 'width:15px; height:150px; background-color:#191497; right:0px; position:absolute;';
court.appendChild(racket2);

//конструктор рокетки
function Paddle(x, y) {
    this.x = x;
    this.y = y;
    this.width = racketWidth;
    this.height = racketHeight;
    this.score = score;
    this.speed = speedOаracket;
}
racket1 = new Paddle(positionXracket1, positionYracket1);
racket2 = new Paddle(positionXracket2, positionYracket2);

//конструктор мяча
function Ball () {
    this.x = ballPosX;
    this.y = ballPosY;
    this.speedX = ballSpeedX;
    this.speedy = ballSpeedY;
    this.width = ballWidth;
    this.height = ballHeight;
}
var ball = new Ball();

// Logic

startGame();

function startGame() {
    stopGame();
    gameInterval = setInterval(showGame, 1000/ 50);
};

function stopGame() {
    clearInterval(gameInterval);
};

//запуск мяча в разном направлении
buttonStart.addEventListener('click', function() {
    startGame();
    startBall();
});

function startBall() {
    ball.x = ballPosX;
    ball.y = ballPosY;
    if(Math.random() < 0.5) {
        var side = 1;
    } else {
        var side = -1;
    };

    ball.speedX = side * (Math.random() * 2 + 3); //при старте мяча устанавливвем рандомную скорость по x с меняющимся напрвлением влево либо право
    ball.speedY = Math.random() * 2 + 3; //при старте мяча устанавливвем рандомную скорость по y
};

//при нажатии на кнопки-происходят события - смещаются рокетки
document.addEventListener('keydown', (event) => { 
    if(event.keyCode == 16 || event.which == 16) {  // shift key
        racket1.speed = -10;
    };
    if(event.keyCode == 17 || event.which == 17) {  // ctrl Key
        racket1.speed = 10;
    };
    if (event.keyCode == 38 || event.which == 38) { // up arrow
        racket2.speed = -10;
    };
    if (event.keyCode == 40 || event.which == 40) { // down arrow
        racket2.speed = 10;
    };
}, false);

//отпустили кнопку-событие перемещение останавливается
document.addEventListener('keyup', function(event) {
    if (event.keyCode == 16 || event.which == 16) {
        racket1.speed = 0;
    };
    if (event.keyCode == 17 || event.which == 17) {
        racket1.speed = 0;
    };
    if (event.keyCode == 38 || event.which == 38) {
        racket2.speed = 0;
    };
    if (event.keyCode == 40 || event.which == 40) {
        racket2.speed = 0;
    };
}, false);

// **************************************************************************************************

// function showGame() {
//     racket1.y += racket1.speed; //нажатие кнопок-сработка события-изменение скорости рокеток-устанавливаем новое положение рокетки равное текщему положениею плюс изменение по скорости
//     racket2.y += racket2.speed;

//     ball.y += ball.speedY; //при старте мяча-меняется скорость по X и Y- тем самым меняются позиции мяча по X и Y
//     ball.x += ball.speedX;

//     //если позиция ракеток по y меньше 10-устанавливаем позицию по y  равную 0
//     if (racket1.y < 10) {
//         racket1.y = 0;
//     };

//     if (racket2.y < 10) {
//         racket2.y = 0;
//     };

//     //если позиция рокетки по Y  большее или равно растоянию= высота корта минус высота ракетки- устанавливаем позицию по y  равную 400 минус высота рокетки
//     if (racket1.y >= courtHeight - racket1.height) {
//         racket1.y = courtHeight - racket1.height;
//     };

//     if (racket2.y >= courtHeight - racket2.height) {
//         racket2.y = courtHeight - racket2.height;
//     };

//     //если позиция мяча по Y  меньше или равно 0(верхний край) либо больше или равно растоянию=высота поля минус высота мяча(нижний край)
//     if (ball.y <= 0 || ball.y >= courtHeight - ball.height - offset) {
//         ball.speedY = -ball.speedY; //меняем скорость  мяча на противоположное число
//     };

//     //от левого края до ширина ракетки1
//     if (ball.x <= racket1.width + offset) {
//         if (ball.y > racket1.y && ball.y < racket1.y + racket1.height) { //мяч находится в рамках высоты рокетки
//             ball.speedX = -ball.speedX; //меняем скорость на противоположное число-отби 1вает мяч ракетка
//         } else {
//             ball.x = 0;
//             racket2.score++; //меняется счет
//             stopGame();
//         };
//     };

//     //если больше или равно расcтояния = правый край минус ширина рокетки и минус ширина мяча
//     if (ball.x >= courtWidth - ball.width - racket2.width - offset) {
//         if (ball.y > racket2.y && ball.y < racket2.y + racket2.height) { //мяч находится в рамках высоты рокетки
//             ball.speedX = -ball.speedX;
//         } else {
//             ball.x = courtWidth - ballWidth - offset;
//             racket1.score++;
//             stopGame();
//         };
//     };

//     document.getElementById("racket1").style.top = (racket1.y) + "px";
//     document.getElementById("racket2").style.top = (racket2.y) + "px";

//     document.getElementById("ball").style.top = (ball.y) + "px";
//     document.getElementById("ball").style.left = (ball.x) + "px";

//     document.getElementById('score1').innerHTML = racket1.score.toString();
//     document.getElementById('score2').innerHTML = racket2.score.toString();
// };