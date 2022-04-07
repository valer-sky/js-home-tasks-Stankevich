"use strict";

var radius = 120, // радиус (растояние)
	radiusForDigitalWatch = 70, // радиус (растояние) для электронных часов
    distanceOfDigits = 30, // расстояние(в градусах) между цифрами на часах
	angleValue = 0, // угол
    clock = document.getElementById('clock'), 
    clockCenterX = clock.offsetLeft + clock.offsetWidth / 2, // узнаем центр DIV(обвёртки) по X
	clockCenterY = clock.offsetTop + clock.offsetHeight / 2, // узнаем центр DIV(обвёртки) по Y
	time = new Date(), //текущее время
    clockChildElemForDigitalWatch = document.createElement("div"), // создаем DIV(для электронных часов)
	arrowHours = document.createElement("div"), // для часовых, минутных, секундных стрелок
	arrowMinutes = document.createElement("div"), 
	arrowSeconds = document.createElement("div"), 
	hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes()), //определяем по времени где должны быть стрелки часов
	minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds()), 
	secondsDeg = 6 * time.getSeconds() - 6, 
	hourDigits = 12; //цифры для часов 

for (var i = 1; i <= hourDigits; i++) {
	var clockChildElem = document.createElement("div"),// для номеров часов
		angle,
		clockChildElemCenterX,
		clockChildElemCenterY;

	angleValue += distanceOfDigits;
	angle = angleValue / 180 * Math.PI;

	clockChildElem = clock.appendChild(clockChildElem);//созданный DIV(для номеров часов) делаем дочерным элементом clock(обвёртка)
	clockChildElem.classList.add('childElem');//устанавливаем готовый CSS класс для дочерных элементов
    clockChildElem.innerHTML = i;//значением каждого дочерного элемента будет равен i

	clockChildElemCenterX = clockCenterX + radius * Math.sin(angle); // узнаем центр дочерного элемента по X и Y
	clockChildElemCenterY = clockCenterY - radius * Math.cos(angle); 

	clockChildElem.style.left = Math.round(clockChildElemCenterX - clockChildElem.offsetWidth/2) + "px";
	clockChildElem.style.top = Math.round(clockChildElemCenterY - clockChildElem.offsetHeight/2) + "px";
}
// вставляем созданные элементы в конец дочерных элементов clock(обвёртки)
clockChildElemForDigitalWatch = clock.appendChild(clockChildElemForDigitalWatch); //созданный DIV(для электронных часов) делаем дочерным элементом clock(обвёртка)
arrowHours = clock.appendChild(arrowHours);//созданный DIV(для стрелки часов) делаем дочерным элементом clock(обвёртка)
arrowMinutes = clock.appendChild(arrowMinutes);//созданный DIV(для стрелки минут) делаем дочерным элементом clock(обвёртка)
arrowSeconds = clock.appendChild(arrowSeconds),//созданный DIV(для стрелки секунд) делаем дочерным элементом clock(обвёртка)

// устанавливаем класс для электронных часов и к каждой стрелке
clockChildElemForDigitalWatch.classList.add("childElemForDigitalWatch"); //устанавливаем готовый CSS класс для DIV(для электронных часов)
arrowHours.classList.add("arrowHours");//устанавливаем готовый CSS класс для DIV(для стрелки часов)
arrowMinutes.classList.add("arrowMinutes");//устанавливаем готовый CSS класс для DIV(для стрелки минут)
arrowSeconds.classList.add("arrowSeconds");//устанавливаем готовый CSS класс для DIV(для стрелки секунд)

// позиционирование цифровых часов
clockChildElemForDigitalWatch.style.left = clockCenterX - clockChildElemForDigitalWatch.offsetWidth/2 + "px";
clockChildElemForDigitalWatch.style.top = clockCenterY - radiusForDigitalWatch + "px";
//  местоположение часовой стрелки
arrowHours.style.top = clockCenterY - arrowHours.offsetHeight+10 + "px";
arrowHours.style.left = clockCenterX - arrowHours.offsetWidth/2 + "px";
//  место положениеминутной стрелки
arrowMinutes.style.top = clockCenterY - arrowMinutes.offsetHeight+10 + "px";
arrowMinutes.style.left = clockCenterX - arrowMinutes.offsetWidth/2 + "px";
// местоположение секундной стрелки
arrowSeconds.style.top = clockCenterY - arrowSeconds.offsetHeight+10 + "px";
arrowSeconds.style.left = clockCenterX - arrowSeconds.offsetWidth/2 + "px";

arrowHours.style.transformOrigin = "center 50px";
arrowMinutes.style.transformOrigin = "center 110px";
arrowSeconds.style.transformOrigin = "center 135px";

function tickTimer() {
	// электронные часы
	var time = new Date(); //текущее время
	clockChildElemForDigitalWatch.innerHTML = time.toLocaleTimeString();
	// секундные стрелки
	secondsDeg += 6; 
	arrowSeconds.style.transform = "rotate(" + secondsDeg + "deg)";
	// минутныеные стрелки
	minutesDeg += 6 * (1/60); 
	arrowMinutes.style.transform = "rotate(" + minutesDeg + "deg)";
	// часовые стрелки
	hoursDeg += 6 * (1/360); 
	arrowHours.style.transform = "rotate(" + hoursDeg + "deg)";
	}

window.onload = tickTimer(); // вызываем функцию  на момент загрузки страницы
window.setInterval (tickTimer, 1000); // устанавливаем setInterval на 1 секунду и выполняем код каждую секунду чтоб стрелки часов, минут и секунд обновляли положени каждую секунду