"use strict";

const paddleHeight = 150;
    const paddleWidth = 10;
    const speedOfPaddle = 0;
    const positionYpaddle1 = 129.5;
    const positionXpaddle1 = 0;
    const positionYpaddle2 = 129.5;
    const positionXpaddle2 = 585;

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

    //создаем панель с кнопкой и счетом
    var section = document.getElementById('section');
    var scorePanel = document.createElement('div');
    scorePanel.id = 'scorePanelId';
    scorePanel.style.cssText = 'width:600px;height:100px;margin:0;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;';
    section.appendChild(scorePanel);

    //создаем кнопку
    var buttonStart = document.createElement('button');
    buttonStart.id = 'btnStart';
    buttonStart.textContent = "Старт!";
    buttonStart.style.cssText = 'cursor: pointer;';
    scorePanel.appendChild(buttonStart);

    //создаем счет
    var scoreTable = document.createElement('div');
    scoreTable.innerHTML = '<span id="score1">0</span><span>:</span><span id="score2">0</span>';
    scoreTable.id = 'table';
    scoreTable.style.cssText = 'margin-left:210px; font-weight:700;';
    scorePanel.appendChild(scoreTable);

    //создаем корт
    var court = document.createElement('div');
    court.id = 'courtId';
    court.style.cssText = 'width: 600px;height:400px; margin:0; position:relative; border: solid rgb(95, 92, 92) 1px;  background-color: #f0ee7e;';
    section.appendChild(court);

    //создаем мяч
    var ballElem = document.createElement('div');
    ballElem.id = 'ball';
    ballElem.style.cssText = 'width:30px; height:30px; border-radius:50%; top:195px; left:295px; position:absolute; background-color:#f02137;';
    court.appendChild(ballElem);

    //создаем рокетку1
    var paddle1 = document.createElement('div');
    paddle1.id = 'paddle1';
    paddle1.style.cssText = 'width:15px; height:150px; top:129.5px; left:0px; position:absolute; background-color:#09aa57;';
    court.appendChild(paddle1);

    //создаем рокетку2
    var paddle2 = document.createElement('div');
    paddle2.id = 'paddle2';
    paddle2.style.cssText = 'width:15px; height:150px; top:129.5px; right:0px; position:absolute; background-color:#191497;';
    court.appendChild(paddle2);

    startGame();

    function startGame() {
        stopGame();
        gameInterval = setInterval(showGame, 1000 / 50);
    };

    function stopGame() {
        clearInterval(gameInterval);
    };

    //конструктор рокетки
    function Paddle(x, y) {
        this.x = x;
        this.y = y;
        this.width = paddleWidth;
        this.height = paddleHeight;
        this.score = score;
        this.speed = speedOfPaddle;
    };

    var paddle1 = new Paddle(positionXpaddle1, positionYpaddle1);
    var paddle2 = new Paddle(positionXpaddle2, positionYpaddle2);


    //конструктор мяча
    function Ball() {
        this.x = ballPosX;
        this.y = ballPosY;
        this.speedX = ballSpeedX;
        this.speedY = ballSpeedY;
        this.width = ballWidth;
        this.height = ballHeight;
    }
    var ball = new Ball();

    //запуск мяча в разном направлении
    document.getElementById('btnStart').addEventListener('click', function() {
        startGame();
        startBall();
    })

    function startBall() {
        ball.y = ballPosY;
        ball.x = ballPosX;
        if (Math.random() < 0.5) {
            var side = 1;
        } else {
            var side = -1;
        };

        ball.speedY = Math.random() * 2 + 3; //при старте мяча устанавливвем рандомную скорость по y
        ball.speedX = side * (Math.random() * 2 + 3); //при старте мяча устанавливвем рандомную скорость по x с меняющимся напрвлением влево либо право
    };

    //при нажатии на кнопки-происходят события - смещаются рокетки
    document.addEventListener('keydown', function(event) {
        if (event.keyCode == 16 || event.which == 16) { // shift key
            paddle1.speed = -10;
        };
        if (event.keyCode == 17 || event.which == 17) { // ctrl Key
            paddle1.speed = 10;
        };
        if (event.keyCode == 38 || event.which == 38) { // up arrow
            paddle2.speed = -10;
        };
        if (event.keyCode == 40 || event.which == 40) { // down arrow
            paddle2.speed = 10;
        };
    }, false);

    //отпустили кнопку-событие перемещение останавливается
    document.addEventListener('keyup', function(event) {
        if (event.keyCode == 16 || event.which == 16) {
            paddle1.speed = 0;
        };
        if (event.keyCode == 17 || event.which == 17) {
            paddle1.speed = 0;
        };
        if (event.keyCode == 38 || event.which == 38) {
            paddle2.speed = 0;
        };
        if (event.keyCode == 40 || event.which == 40) {
            paddle2.speed = 0;
        };
    }, false);


    function showGame() {
        paddle1.y += paddle1.speed; //нажатие кнопок-сработка события-изменение скорости рокеток-устанавливаем новое положение рокетки равное текщему положениею плюс изменение по скорости
        paddle2.y += paddle2.speed;

        ball.y += ball.speedY; //при старте мяча-меняется скорость по X и Y- тем самым меняются позиции мяча по X и Y
        ball.x += ball.speedX;

        //если позиция ракеток по y меньше 10-устанавливаем позицию по y  равную 0
        if (paddle1.y < 10) {
            paddle1.y = 0;
        };

        if (paddle2.y < 10) {
            paddle2.y = 0;
        };

        //если позиция рокетки по Y  большее или равно растоянию= высота корта минус высота ракетки- устанавливаем позицию по y  равную 400 минус высота рокетки
        if (paddle1.y >= courtHeight - paddle1.height) {
            paddle1.y = courtHeight - paddle1.height;
        };

        if (paddle2.y >= courtHeight - paddle2.height) {
            paddle2.y = courtHeight - paddle2.height;
        };

        //если позиция мяча по Y  меньше или равно 0(верхний край) либо больше или равно растоянию=высота поля минус высота мяча(нижний край)
        if (ball.y <= 0 || ball.y >= courtHeight - ball.height - offset) {
            ball.speedY = -ball.speedY; //меняем скорость  мяча на противоположное число
        };

        //от левого края до ширина ракетки1
        if (ball.x <= paddle1.width + offset) {
            if (ball.y > paddle1.y && ball.y < paddle1.y + paddle1.height) { //мяч находится в рамках высоты рокетки
                ball.speedX = -ball.speedX; //меняем скорость на противоположное число-отби 1вает мяч ракетка
            } else {
                ball.x = 0;
                paddle2.score++; //меняется счет
                stopGame();
            };
        };

        //если больше или равно расcтояния = правый край минус ширина рокетки и минус ширина мяча
        if (ball.x >= courtWidth - ball.width - paddle2.width - offset) {
            if (ball.y > paddle2.y && ball.y < paddle2.y + paddle2.height) { //мяч находится в рамках высоты рокетки
                ball.speedX = -ball.speedX;
            } else {
                ball.x = courtWidth - ballWidth - offset;
                paddle1.score++;
                stopGame();
            };
        };

        document.getElementById("paddle1").style.top = (paddle1.y) + "px";
        document.getElementById("paddle2").style.top = (paddle2.y) + "px";

        document.getElementById("ball").style.top = (ball.y) + "px";
        document.getElementById("ball").style.left = (ball.x) + "px";

        document.getElementById('score1').innerHTML = paddle1.score.toString();
        document.getElementById('score2').innerHTML = paddle2.score.toString();
    };