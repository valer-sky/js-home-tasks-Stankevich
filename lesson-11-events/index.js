"use strict";

var wrapper = document.getElementById("wrapper"),  // внутри чего перетаскивается картинка
    dragImage = document.querySelectorAll("img"), //какая картинка сейчас перетаскивается
    dragShiftX,
    dragShiftY;

dragImage.forEach(function (element) {
    element.addEventListener("mouseover", mouseOver, false);
    element.addEventListener("mouseout", mouseOut, false);
    element.addEventListener("mousedown", dragStart, false);
});
// EO - объект события
function dragStart (EO) {
  EO = EO || window.event;
  PreventDefault(EO);
  dragImage = EO.target;

// Картинка, перетаскивание которой началось, должна оказываться выше (ближе к глазам), чем остальные.  
  wrapper.appendChild(dragImage);
  dragImage.style.border = "3px solid red";
  dragImage.style.position = "absolute";

  var mouseX = EO.pageX,  //Определяем положение курсора мыши относительно начала страницы
      mouseY = EO.pageY,
      imageX = dragImage.offsetLeft, //Определяем текущее фактическое положение картинки относительно начала страницы.
      imageY = dragImage.offsetTop;

  dragShiftX = mouseX - imageX; //Запоминаем в глобальных переменных разницу между положением курсора мыши и положением картинки, 
  dragShiftY = mouseY - imageY; //т.к. эта разница должна оставаться постоянной в течение всего сеанса перетаскивания. 

  window.onmousemove = dragMove;
  window.onmouseup = dragStop;

}

function dragStop () {  //Сеанс перетаскивания окончен. Тут  очистка всего и вся 
  window.onmousemove = null;
  window.onmouseup = null;
  dragImage.style.border = "none";
}

function mouseOver(EO) {
  EO = EO || window.event;
  PreventDefault(EO);
  EO.target.style.border = "1px dashed red";
}

function mouseOut(EO) {
  EO = EO || window.event;
  PreventDefault(EO);
  EO.target.style.border = "none";
}

function dragMove (EO) {
  EO = EO || window.event;
  PreventDefault(EO);
    var mouseX = EO.pageX, //Определяем положение курсора мыши относительно начала страницы
        mouseY = EO.pageY,
        imageX = mouseX - dragShiftX,  //Вычисляем требуемое положение картинки
        imageY = mouseY - dragShiftY;

  dragImage.style.left = imageX + "px";  //Перемещаем картинку в вычисленные координаты
  dragImage.style.top = imageY + "px";
}
// отмена обработки события по умолчанию
function PreventDefault(EO) {
  if ( EO.preventDefault )
      EO.preventDefault(); 
  else
      EO.returnValue = false;
}