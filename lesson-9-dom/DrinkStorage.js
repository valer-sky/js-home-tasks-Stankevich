var drinkStorage = new tHashStorage();

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
	console.log(drinkStorage);
	// document.getElementById('#drinkInfoP').innerHTML = coctails;
}