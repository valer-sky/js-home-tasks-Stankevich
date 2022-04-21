var drinkStorage = new TLocalStorage('lsDrink');

var drinkName = document.getElementById('drinkName');

drinkName.onclick = function() {
	var nameDr;
	var coctails = {};
	nameDr = prompt("напишите название напитка");
	coctails.nameDr = nameDr;
	coctails.alcohol = confirm(nameDr + " - алкогольный напиток или нет?\nok - алкогольный\nотмена - без алкогольный");
	coctails.recipe = prompt("напишите рецепт напитка - " + nameDr);
	console.log(coctails);
	drinkStorage.addValue(nameDr, coctails);
	drinkStorage.store();
	console.log(drinkStorage);
};

var drinkInfo = document.getElementById("drinkInfo");

drinkInfo.onclick = function() {
	var drinkInf = prompt("Напишите название напитка");
	var drinkInfoP = document.getElementById("drinkInfoP");

	var answer = drinkStorage.getValue(drinkInf);
		if (drinkStorage.getValue(drinkInf) !== undefined) {
			drinkInfoP.innerHTML = "напиток: " + drinkInf + 
								   "<br>" + "алкогольный: " + (answer.alcohol === true ? "да" : "нет") + 
								   "<br>" + "Рецепт: " + (answer.recipe ? answer.recipe : "к сожалению РЕЦЕПТА НЕТ");
		} else {
			drinkInfoP.innerHTML = "В хранилище такой напиток ОТСУТСТВУЕТ!";
	}
};

var drinkInfoDel = document.getElementById("drinkInfoDel");

drinkInfoDel.onclick = function() {
	var drinkInfoDel = prompt("Напишите название напитка");
	var drinkInfoP = document.getElementById("drinkInfoP");
		if (drinkStorage.deleteValue(drinkInfoDel) === true) {
			drinkInfoP.innerHTML = "информация о напитке УДАЛЕНО!";
		} else {
			drinkInfoP.innerHTML = "В хранилище такой напиток отсутствует";
	}
};

var drinkList = document.getElementById("drinkList");

drinkList.onclick = function() {
	var drinkInfoP = document.getElementById("drinkInfoP");
		drinkInfoP.innerHTML = drinkStorage.getKeys();
}; 