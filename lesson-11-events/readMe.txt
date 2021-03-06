Домашнее задание E
Реализовать на JavaScript перетаскивание мышью по веб-странице нескольких любых
(но не мелких) изображений. Обрабатывать как минимум события mousedown, mousemove, mouseup.
Изображения должны «таскаться» мышью за любую точку (т.е. и при «взятии» и при «отпускании» изображение смещаться не должно, оно должно смещаться только при смещении мыши при удержанной левой кнопке, и ровно настолько, насколько смещена мышь).
Код не должен зависеть от количества картинок (т.е. код должен сам найти все картинки, находящиеся в указанном div-контейнере).
Картинка, перетаскивание которой началось, должна оказываться выше (ближе к глазам), чем остальные.
Когда начинается перетаскивание какой-либо картинки, остальные картинки не должны сдвигаться.
На время перетаскивания менять форму курсора на подходящую.

Итак, имеем картинки, у них position: absolute.

Имеем глобальные переменные:
var DragImage=null; // какая картинка сейчас перетаскивается
var DragShiftX;
var DragShiftY;

основной код:
Для картинок устанавливаем обработчик события mousedown - функцию Drag_Start.
Остальные обработчики не устанавливаем, они пока не нужны, бережём ресурсы.

Функция Drag_Start:
1. Определяем, какая картинка щёлкнута, и запоминаем в глобальной переменной - 
   DragImage=EO.target;
2. Определяем положение курсора мыши относительно начала страницы: 
   var MouseX=EO.pageX; var MouseY=EO.pageY;
3. Определяем текущее фактическое положение картинки относительно начала 
   страницы: var ImageX=DragImage.offsetLeft; var ImageY=DragImage.offsetTop;
4. Запоминаем в глобальных переменных разницу между положением курсора мыши и 
   положением картинки, т.к. эта разница должна оставаться постоянной в течение 
   всего сеанса перетаскивания - DragShiftX=MouseX-ImageX; 
   DragShiftY=MouseY-ImageY;
5. Устанавливаем для window (не для картинки! иначе ненадёжно - картинка может 
   отрываться от мыши при резких движениях) обработчики событий: по событию 
   mousemove - функцию Drag_Move, по событию mouseup - функцию Drag_Stop.

Функция Drag_Stop:
Сеанс перетаскивания окончен.
Снимаем для window обработчики событий mousemove и mouseup.

Функция Drag_Move:
1. Определяем положение курсора мыши относительно начала страницы: 
   var MouseX=EO.pageX; var MouseY=EO.pageY;
2. Вычисляем требуемое положение картинки: var ImageX=MouseX-DragShiftX; 
   var ImageY=MouseY-DragShiftY;
3. Перемещаем картинку в вычисленные координаты: 
   DragImage.style.left=ImageX+"px"; DragImage.style.top=ImageY+"px";

Для обработки ситуаций, когда мышь уходит за пределы окна, не отпуская картинку, 
можно также на window повесить обработчик события mouseout и по нему тоже
заканчивать перетаскивание, т.е. вызывать Drag_Stop (и в DragStop снимать 
обработчик mouseout).

Всё. Каждый пункт реализуется буквально в 1-2 строки кода.